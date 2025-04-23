import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComunidadeFormUpdate() {

    const navigate = useNavigate();
    const [comunidade, setComunidade] = useState({
        id: null,
        name: '',
        description: ''
    })
    const { id } = useParams();

    if (id) {
        useEffect(() => {
            axiosClient.get(`/user/show/${id}`)
                .then(({ data }) => {
                    setComunidade(data.data);
                }).catch((error) => {
                    console.log(error);
                })
        }, [id]);
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/user/update/${id}`)
            .then((data) => {
                setComunidade(data.data);
                navigate('/user/index');
            }).catch((error) => {
                console.log(error);
            })
    }
    const OnCancel = () => {
        navigate('/user/index');
    }

    return (
        <Fragment>
            <div className='display'>
                <div className='card animated fadeInDown'>
                    {comunidade.id && <h1>Exclusão de usuário: {comunidade.name}  </h1>}
                </div>

                <form onSubmit={(e) => OnSubmit(e)}>
                    <input
                        defaultValue={comunidade.name}
                        placeholder='Nome do Usuário'
                        onChange={
                            e => setComunidade({ ...comunidade, name: e.target.value })
                        } />
                    <input
                        defaultValue={comunidade.email}
                        placeholder='E-mail de Usuário'
                        onChange={
                            e => setComunidade({ ...comunidade, email: e.target.value })
                        } />
                    <button
                        className='btn btn-edit'>
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
        </Fragment>
    )
}

export default ComunidadeFormUpdate