import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComentarioFormStore() {
    const navigate = useNavigate();

    const [comentario, setComentario] = useState({
        id: null,
        usuario_id: null,
        post_id: null,
        curtidas: 0,
        texto: ''
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/comentario/store`, comentario)
            .then(() => {
                setComentario({});
                console.log('comentario incluído com sucesso');
                navigate('/comentario/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/comentario/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Comentario</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <p>Id do usuario</p>
                        <input
                            type="number"
                            value={comentario.usuario_id}
                            placeholder="id do usuario*"
                            onChange={
                                e => setComentario({
                                    ...comentario, usuario_id: e.target.value
                                })
                            }
                        />
                        <p>id do Post</p>
                        <input
                            type="number"
                            value={comentario.post_id}
                            placeholder="id do post*"
                            onChange={
                                e => setComentario({
                                    ...comentario, post_id: e.target.value
                                })
                            }
                        />
                        <p>numero de curtidas</p>
                        <input
                            type='number'
                            value={comentario.curtidas}
                            placeholder="numero de curtidas"
                            onChange={
                                e => setComentario({
                                    ...comentario, curtidas: e.target.value
                                })
                            }
                        />
                        <p>texto do comentario</p>
                        <input
                            type='text'
                            value={comentario.texto}
                            placeholder="texto"
                            onChange={
                                e => setComentario({
                                    ...comentario, texto: e.target.value
                                })
                            }
                        />
                        <button
                            className="btn btn-edit">
                            Salvar
                        </button>
                        <Link
                            type='button'
                            className='btn btn-cancel'
                            to='/comentario/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>


            </div>
        </Fragment>
    )
}

export default ComentarioFormStore