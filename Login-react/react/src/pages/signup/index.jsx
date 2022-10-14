import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/Auth/AuthContext'
import './style.css'

export default function Signup() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {
        if(name && email && password){
            const isRegisted = await auth.register(name, email, password)
            if(isRegisted){
                navigate('/login')
            } else {
                navigate('/')
            }
        }
    }

    return (
        <div className="register-block">
            <h2>Cadastro</h2>
            <div className="signup">
                <div className="form">
                    <input type="text" placeholder="Nome"
                        
                        onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="E-mail"
                        
                        onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha"
                        
                        onChange={e => setPassword(e.target.value)}/>
                    <button
                        onClick={handleRegister}>Cadastre-se</button>
                </div>
            </div>
        </div>
    )
}
