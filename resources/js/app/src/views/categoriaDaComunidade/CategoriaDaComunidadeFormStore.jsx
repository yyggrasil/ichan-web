import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaDaComunidadeFormStore() {
    const navigate = useNavigate();

    const [categoriadacomunidade, setUser] = useState({
        id: null,
        categoria_id: '',
        comunidade_id: '',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/categoriadacomunidade/store`, categoriadacomunidade)
            .then(() => {
                setUser({});
                console.log('Relacionamento criado com sucesso');
                navigate('/categoriadacomunidade/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/categoriadacomunidade/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de relacionamento de categoria com comunidade</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={categoriadacomunidade.categoria_id}
                            placeholder="id da categoria*"
                            onChange={
                                e => setUser({
                                    ...categoriadacomunidade, categoria_id: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={categoriadacomunidade.comunidade_id}
                            placeholder="id da comunidade*"
                            onChange={
                                e => setUser({
                                    ...categoriadacomunidade, comunidade_id: e.target.value
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
                            to='/categoriadacomunidade/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>


            </div>
        </Fragment>
    )
}

export default CategoriaDaComunidadeFormStore