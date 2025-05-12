import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axiosClient";


export default function Login(){

    const emailRef = createRef();
    const passwordRef = createRef();
    const [message, setMessage] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Passando pelo OnSubmit");

        const login = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        axiosClient.post('/login', login)
                   .then(({data})=>{
                        console.log(data);
                   })
                   .catch((erro)=>{
                        console.log(erro);
                   })

        setMessage("Login realizado com Sucesso" + login);
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title p-20">Acesso ao Sistema com sua conta</h1>
                    {
                        message &&
                        <div className='alert'>
                            <p>{message}</p>
                        </div>
                    }
                    <input type="text" placeholder="E-mail" ref={emailRef} className='p-20'/>
                    <input type="password" placeholder="Senha" ref={passwordRef} className='p-20'/>
                    <button type="submit" className='btn btn-block p-20'>Login</button>
                    <p className='message'>Não está registrado</p><Link to="/register">Criar nova conta</Link>
                </form>
            </div>
        </div>
    );
}