import React from 'react'
import { Link } from 'react-router-dom'

export default function DefaultLayout({children})
{

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
                    Nome do Usuário logado &nbsp; &nbsp;
                    <a className='btn-logout'> Logout </a>
                </div>
            </header>
            <main>
                { children }
            </main>
        </div>
    </div>
    )
}