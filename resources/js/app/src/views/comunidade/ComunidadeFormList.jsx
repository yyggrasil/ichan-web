import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function ComunidadeFormList() {

    const [follow, setfollow] = React.useState([]);

    const getComunidades = () => {
        axiosClient.get('/comunidade/index')
            .then(({ data }) => {
                setfollow(data.data);
            }
            ).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getComunidades();
    }, []);


    return (
        <div className='display'>
            <div className='card animated fadeInDown'>

                <div style={{
                    display: 'flex',
                    justifyContent: 'justify-content',
                    alignItems: 'center',
                }}>

                    <h1>Lista de Comunidades</h1>
                    <Link to="/comunidade/store" className='btn-add'>Store</Link>
                </div>
                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th className='center actions' colSpan={3}>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            follow.length > 0 ? (
                                follow.map((comunidade, index) => (
                                    <tr key={index}>

                                        <td>{comunidade.id}</td>

                                        <td>{comunidade.nome}</td>

                                        <td>{comunidade.descricao}</td>

                                        <td className='center actions'>
                                            <Link to={`/comunidade/update/${comunidade.id}`} className='btn-edit'>Update</Link>
                                        </td>

                                        <td className='center actions'>
                                            <Link to={`/comunidade/destroy/${comunidade.id}`} className='btn-delete'>Destroy</Link>
                                        </td>

                                        <td className='center actions'>
                                            <Link to={`/comunidade/show/${comunidade.id}`} className='btn-show'>Show</Link>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td>Nenhum Registro encontrado</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ComunidadeFormList