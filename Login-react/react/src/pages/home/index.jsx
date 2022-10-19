import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Home(){
    return (
        <div className="home">
            <h1>Bem vindo</h1>
            <div className="link-block">
                <Link to={'/login'} className="link">Login</Link>
                <Link to={'/register'} className="link register">Registre-se</Link>
            </div>
        </div>
    )
}
