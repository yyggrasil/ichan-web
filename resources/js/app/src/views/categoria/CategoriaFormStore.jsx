import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaFormStore() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        id: null,
        name: '',
        username: '',
        birth_date: new Date().toISOString().split('T')[0],
        email: '',
        password: '',
        bios: '',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/categoria/store`, categoria)
            .then(() => {
                setCategoria({});
                console.log('Categoria incluído com sucesso');
                navigate('/categoria/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/user/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de categoria</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={categoria.name}
                            placeholder="Nome Completo"
                            onChange={
                                e => setCategoria({
                                    ...categoria, name: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={categoria.username}
                            placeholder="Nome de Usuário*"
                            onChange={
                                e => setCategoria({
                                    ...categoria, username: e.target.value
                                })
                            }
                        />
                        <input
                            type='date'
                            value={categoria.birth_date}
                            placeholder="Data de Nascimento"
                            onChange={
                                e => setCategoria({
                                    ...categoria, birth_date: e.target.value
                                })
                            }
                        />
                        <input
                            value={categoria.email}
                            placeholder="Email"
                            onChange={
                                e => setCategoria({
                                    ...categoria, email: e.target.value
                                })
                            }
                        />
                        <input
                            type="password"
                            value={categoria.password}
                            placeholder="Senha"
                            onChange={
                                e => setCategoria({
                                    ...categoria, password: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={categoria.bios}
                            placeholder="Bios"
                            onChange={
                                e => setCategoria({
                                    ...categoria, bios: e.target.value
                                })
                            }
                        />
                        <br />
                        <br />
                        <button
                            className="btn btn-edit">
                            Salvar
                        </button>
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

export default CategoriaFormStore