import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserFormStore()
{
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id:null,
        name:'',
        email:'',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/user/store`, user)
            .then(() =>{
                setUser({});
                console.log('Usuário incluído com sucesso');
                navigate('/user/index')
            }).catch((error)=>{
                console.log(error);
            })
        //console.log(e);
        //console.log("Passando pela função onSubmit")
    }

    const onCancel = (e) => {
        //e.preventDefault();
        navigate('/user/index');
        //console.log(e);
        //console.log("Passando pela função onSubmit")
    }


    
    return(
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Usuário</h1>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <input
                            type="text"
                            value={user.name}
                            placeholder="Nome Completo"
                            onChange={
                                e => setUser({
                                    ...user, name:e.target.value
                                })
                            } 
                        />
                        <input
                            type="text"
                            value={user.username}
                            placeholder="Nome de Usuário*"
                            onChange={
                                e => setUser({
                                    ...user, username:e.target.value
                                })
                            }
                        />
                        <input
                            type='text'
                            value={user.birth_date}
                            placeholder="Data de Nascimento"
                            onChange={
                                e => setUser({
                                    ...user, birth_date:e.target.value
                                })
                            }
                        />
                        <input
                            value={user.email}
                            placeholder="Email"
                            onChange={
                                e => setUser({
                                    ...user, email:e.target.value
                                })
                            } 
                        />
                        <input
                            type="password"
                            value={user.password}
                            placeholder="Senha"
                            onChange={
                                e => setUser({
                                    ...user, password:e.target.value
                                })
                            } 
                        />
                        <input 
                            type="text"
                            value={user.bios}
                            placeholder="Bios"
                            onChange={
                                e => setUser({
                                    ...user, password:e.target.value
                                })
                            }
                        />
                        <br />
                        <br />
                        <button className="btn btn-edit">Salvar</button>
                        <Link
                            type='button' 
                            className='btn btn-cancel'
                            to='/user/index'>
                                Cancelar
                        </Link>
                    </form>
                </div>

                
            </div>
        </Fragment>
    )
}

export default UserFormStore