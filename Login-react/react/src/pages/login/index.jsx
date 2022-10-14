import React, { useContext, useState } from "react";
import { AuthContext } from '../../context/Auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

export default function Login(){
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.login(email, password)
            if(isLogged){
                navigate('/private')
            } else{
                navigate('/')
            }
        }
    }

    return (
        <div className="login-block">
            <h2>Login</h2>
            <div className="form">
                <input type="text" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <button type="submit"
                    onClick={handleLogin}>Confirmar</button>
            </div>
            <Link to={'/register'}>Crie sua conta</Link>
        </div>
    )
}