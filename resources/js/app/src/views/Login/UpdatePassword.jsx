import { useState } from "react";
import { Link } from "react-router-dom";


export default function UpdatePassword(){

    const [message, setMessage] = useState(null);

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form>
                    <h1 className="title">Alterar Senha</h1>
                    {
                        message &&
                        <div className='alert'>
                            <p>{message}</p>
                        </div>
                    }
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar Senha"/>
                    <button className='btn btn-block'>Salvar</button>
                    <p className='message'>Acesso ao sistema <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
}