import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostFormStore() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState({
        id: null,
        titulo: '',
        curtidas: 0,
        texto: '',
        usuario_id: '',
        comunidade_id: '',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/post/store`, posts)
            .then(() => {
                setPosts({});
                console.log('Usuário incluído com sucesso');
                navigate('/post/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/post/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Post</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={posts.titulo}
                            placeholder="titulo*"
                            onChange={
                                e => setPosts({
                                    ...posts, titulo: e.target.value
                                })
                            }
                        />
                        <input
                            type="number"
                            value={posts.usuario_id}
                            placeholder="id de Usuário*"
                            onChange={
                                e => setPosts({
                                    ...posts, usuario_id: e.target.value
                                })
                            }
                        />
                        <input
                            type='number'
                            value={posts.comunidade_id}
                            placeholder="id da Comunidade*"
                            onChange={
                                e => setPosts({
                                    ...posts, comunidade_id: e.target.value
                                })
                            }
                        />
                        <input
                            value={posts.texto}
                            placeholder="texto do post*"
                            onChange={
                                e => setPosts({
                                    ...posts, texto: e.target.value
                                })
                            }
                        />
                        <input
                            type="number"
                            value={posts.curtidas}
                            placeholder="numero de curtidas"
                            onChange={
                                e => setPosts({
                                    ...posts, curtidas: e.target.value
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
                            to='/post/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>


            </div>
        </Fragment>
    )
}

export default PostFormStore