import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function FollowFormList() {

  const [follow, setFollow] = React.useState([]);
  //const {page, pageSize} = userParams();

  const getUsers = () => {
    axiosClient.get(`/follow/index?pageSize=10`)
              .then(({data}) => {
                setFollow(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Seguidores</h1>
          <Link to="/follow/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>id usuario</th>
              <th>id comunidade</th>
              <th>É Moderador</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              follow.length > 0 ? (
                follow.map((follow, index) => (
                  <tr key={index}>

                    <td>{follow.id}</td>

                    <td>{follow.usuario_id}</td>

                    <td>{follow.comunidade_id}</td>

                    <td>{follow.isModerator ? 'sim': 'não'}</td>

                    <td className='center actions'>
                      <Link to={`/follow/update/${follow.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/follow/destroy/${follow.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/follow/show/${follow.id}`} className='btn-show'>Show</Link>
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
          <button type="button"></button>
        </table>
      </div>
    </div>
  )
}

export default FollowFormList