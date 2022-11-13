import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/Auth/AuthContext'
import './style.css'
import Bottom from '../../comp/Bottom';

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
            <h2>CADASTRO</h2>
            <div className="signup">
                <div className="form">
                    <input type="text" placeholder="NOME"

                        onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="EMAIL"

                        onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="SENHA"

                        onChange={e => setPassword(e.target.value)}/>
                    <button
                        onClick={handleRegister}>CADASTRE-SE</button>
                </div>
            </div>
            <Bottom />
        </div>
    )
}
