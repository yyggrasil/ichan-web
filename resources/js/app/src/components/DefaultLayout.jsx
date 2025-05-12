import React from 'react'
import { Link } from 'react-router-dom'

export default function DefaultLayout({children})
{

    return (
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/user/index"> Usuário </Link>
            <Link to="/editora/index"> Editora </Link>
            <Link to="/autor/index"> Autor </Link>
            <Link to="/livro/index"> Livro </Link>
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