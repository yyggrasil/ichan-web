import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaFormStore() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        nome: '',
        descricao: ''
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post('/categoria/store', categoria)
            .then(() => {
                setCategoria({});
                console.log('Categoria incluído com sucesso');
                navigate('/categoria/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    const onCancel = (e) => {
        navigate('/categoria/index');
    }



    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de categoria</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <input
                            type="text"
                            value={categoria.nome}
                            placeholder="Nome da Categoria*"
                            onChange={
                                e => setCategoria({
                                    ...categoria, nome: e.target.value
                                })
                            }
                        />
                        <input
                            type="text"
                            value={categoria.descricao}
                            placeholder="Descrição da Categoria*"
                            onChange={
                                e => setCategoria({
                                    ...categoria, descricao: e.target.value
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
                            to='/categoria/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>


            </div>
        </Fragment>
    )
}

export default CategoriaFormStore