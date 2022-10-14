import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const api = useApi()

    const login = async (email, password) => {
        const data = await api.login(email, password)
        if(data !== null) {
            setUser(data)
            return true
        }
        return false
    }

    const register = async (name, email, password) => {
        const data = await api.register(name, email, password)
        if(data !== null) {
            setUser(data)
            return true
        }
        return false
    }

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}