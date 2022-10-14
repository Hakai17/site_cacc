import React, { useContext } from 'react'
import Login from '../../pages/login'
import { AuthContext } from './AuthContext'

export function RequireAuth({ children }){
    const auth = useContext(AuthContext)

    if(!auth.user){
        return <Login />
    }

    return children
}