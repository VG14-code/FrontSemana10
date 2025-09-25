import React from 'react'
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
    const usuario = localStorage.getItem('usuario'); // revisa si esta logueado
    if (!usuario) {
        return <Navigate to="/login" />; // si no esta logueado, redirige a login
    }
    return children; // si esta logueado, renderiza el componente hijo
}
