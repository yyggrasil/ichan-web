import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function CategoriaDaComunidadeFormList() {

  const [categoriaDaComunidades, setCategoriaDaComunidade] = React.useState([]);
  //const {page, pageSize} = userParams();

  const getCategoriaDaComunidade = () => {
    axiosClient.get(`/categoriadacomunidade/index`)
              .then(({data}) => {
                setCategoriaDaComunidade(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getCategoriaDaComunidade();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Usuários</h1>
          <Link to="/categoriadacomunidade/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>categoria_id</th>
              <th>comunidade_id</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              categoriaDaComunidades.length > 0 ? (
                categoriaDaComunidades.map((categoriaDaComunidade, index) => (
                  <tr key={index}>

                    <td>{categoriaDaComunidade.id}</td>

                    <td>{categoriaDaComunidade.categoria_id}</td>

                    <td>{categoriaDaComunidade.comunidade_id}</td>

                    <td className='center actions'>
                      <Link to={`/categoriadacomunidade/update/${categoriaDaComunidade.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/categoriadacomunidade/destroy/${categoriaDaComunidade.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/categoriadacomunidade/show/${categoriaDaComunidade.id}`} className='btn-show'>Show</Link>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td>Nenhum Registro encontrado</td>
                </tr>
              )
            }

            <button type="button"></button>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoriaDaComunidadeFormList