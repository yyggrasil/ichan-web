import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ComunidadeFormDestroy = () => {

    const navigate = useNavigate();
    const [comunidade, setComunidade] = useState({
        id: null,
        name: '',
        description: ''
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
        axiosClient.delete(`/comunidade/destroy/${id}`)
            .then(() => {
                setComunidade({});
                navigate('/comunidade/index');
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <div className='display'>
                <div className='card animated fadeInDown'>
                    {comunidade.id && <h1>Exclusão de Comunidade: {comunidade.name}  </h1>}
                </div>

                <form onSubmit={(e) => OnSubmit(e)}>
                    <input defaultValue={comunidade.name} placeholder='Nome do Comunidade' readOnly={true} />
                    <input defaultValue={comunidade.description} placeholder='Descricão da comunidade' readOnly={true} />
                    <button
                        className='btn btn-delete'>
                        Excluir
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
    );
}

export default ComunidadeFormDestroy;