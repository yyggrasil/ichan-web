import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function ComentarioFormList() {

  const [users, setUsers] = React.useState([]);
  //const {page, pageSize} = userParams();

  const getUsers = () => {
    axiosClient.get(`/comentario/index`)
              .then(({data}) => {
                setUsers(data.data);
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

          <h1>Lista de Comentarios</h1>
          <Link to="/comentario/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Texto</th>
              <th>curtidas</th>
              <th>id post</th>
              <th>id usuario</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              users.length > 0 ? (
                users.map((comentario, index) => (
                  <tr key={index}>

                    <td>{comentario.id}</td>

                    <td>{comentario.texto}</td>

                    <td>{comentario.curtidas}</td>

                    <td>{comentario.post_id}</td>

                    <td>{comentario.usuario_id}</td>

                    <td className='center actions'>
                      <Link to={`/comentario/update/${comentario.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/comentario/destroy/${comentario.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/comentario/show/${comentario.id}`} className='btn-show'>Show</Link>
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

export default ComentarioFormList