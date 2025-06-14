import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useLogin } from '../context/ContextProvider';

export default function DefaultLayout({children})
{
    // Verificar se o Usuário está logado
    const {token, _setUser, _setToken, user} = useLogin();
    const navigate = useNavigate();
    
    if (!token){
        return <Navigate to="/login"/>
    }

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/login', user.email)
            .then(()=>{
                _setUser({});
                _setToken(null);
                navigate('/login');
            })
            .catch((error)=>{
                console.log(error);
            }
        )
    }

    return (
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/user/index"> User </Link>
            <Link to="/comunidade/index"> Comunidade </Link>
            <Link to="/categoria/index"> Categoria </Link>
            <Link to="/post/index"> Post </Link>
            <Link to="/comentario/index"> Comentario </Link>
            <Link to="/categoriadacomunidade/index"> categoria da comunidade </Link>
            <Link to="/follow/index"> seguidores </Link>
        </aside>
        <div className='content'>
            <header>
                <div>
                    IChan
                </div>
                <div>
                    {/* Espaço em Branco = &nbsp; */}
                    {user.nome} &nbsp; &nbsp;
                    <a onClick={onLogout} className='btn-logout' href="#"> Logout </a>
                </div>
            </header>
            <main>
                { children }
            </main>
        </div>
    </div>
    )
}