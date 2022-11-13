import React, { useContext, useState } from "react";
import { AuthContext } from '../../context/Auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'
import Bottom from '../../comp/Bottom';

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
        <>
        <div className="login-block">
            <h2>LOGIN</h2>
            <div className="login">
                <div className="form">
                    <input type="text" placeholder="EMAIL"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="SENHA"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    <button type="submit"
                        onClick={handleLogin}>CONFIRMAR</button>
                </div>
            </div>
            <Link to={'/register'}>CRIE SUA CONTA</Link>
        </div>
        <Bottom />
        </>
    )
}