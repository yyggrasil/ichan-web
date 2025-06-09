import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComunidadeFormUpdate() {

    const navigate = useNavigate();
    const [comunidade, setComunidade] = useState({
        id: null,
        nome: '',
        descricao: ''
    })
    const { id } = useParams();

    if (id) {
        useEffect(() => {
            axiosClient.get(`/comunidade/show/${id}`)
                .then(({ data }) => {
                    setComunidade(data.data);
                }).catch((error) => {
                    console.log(error);
                })
        }, [id]);
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/comunidade/update/${id}`, comunidade)
            .then((data) => {
                setComunidade(data.data);
                navigate('/comunidade/index');
            }).catch((error) => {
                console.log(error);
            })
    }
    const OnCancel = () => {
        navigate('/comunidade/index');
    }

    return (
        <Fragment>
            <div className='display'>
                <div className='card animated fadeInDown'>
                    {comunidade.id && <h1>Edição da Comunidade: {comunidade.nome}  </h1>}
                </div>

                <form onSubmit={(e) => OnSubmit(e)}>
                    <input
                        defaultValue={comunidade.nome}
                        placeholder='Nome da Comunidade'
                        onChange={
                            e => setComunidade({ ...comunidade, nome: e.target.value })
                        } />
                    <input
                        defaultValue={comunidade.descricao}
                        placeholder='Descrição da Comunidade'
                        onChange={
                            e => setComunidade({ ...comunidade, descricao: e.target.value })
                        } />
                    <button
                        className='btn btn-edit'>
                        Salvar
                    </button>
                    <Link
                        type='button'
                        className='btn btn-cancel'
                        to='/comunidade/index'>
                        Cancelar
                    </Link>
                </form>
            </div>
        </Fragment>
    )
}

export default ComunidadeFormUpdate