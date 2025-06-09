import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function FollowFormStore() {
    const navigate = useNavigate();

    const [follow, setFollow] = useState({
        id: null,
        usuario_id: '',
        comunidade_id: '',
        isModerator: 0,
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/follow/store`, follow)
            .then(() => {
                setFollow({});
                console.log('Seguidor incluído com sucesso');
                navigate('/follow/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/follow/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Seguidor</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="number"
                            value={follow.usuario_id}
                            placeholder="id usuario"
                            onChange={
                                e => setFollow({
                                    ...follow, usuario_id: e.target.value
                                })
                            }
                        />
                        <input
                            type="number"
                            value={follow.comunidade_id}
                            placeholder="Id da Comunidade"
                            onChange={
                                e => setFollow({
                                    ...follow, comunidade_id: e.target.value
                                })
                            }
                        />

                        <input
                            type="number"
                            min={0}
                            max={1}
                            value={follow.isModerator}
                            id="isModerator"
                            name="isModerator"
                            placeholder='É Moderador?'
                            onChange={e =>
                                setFollow({
                                    ...follow,
                                    isModerator: Number(e.target.value)
                                })
                            }
                        />
                        <br />
                        <button
                            className="btn btn-edit">
                            Salvar
                        </button>
                        <Link
                            type='button'
                            className='btn btn-cancel'
                            to='/follow/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default FollowFormStore