import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function PostFormList() {

  const [posts, setPosts] = React.useState([]);
  //const {page, pageSize} = userParams();

  const getUsers = () => {
    axiosClient.get(`/post/index?pageSize=10`)
              .then(({data}) => {
                setPosts(data.data);
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

          <h1>Lista de Posts</h1>
          <Link to="/post/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>titulo</th>
              <th>texto</th>
              <th>curtidas</th>
              <th>id de usuario</th>
              <th>id de comunidade</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              posts.length > 0 ? (
                posts.map((post, index) => (
                  <tr key={index}>

                    <td>{post.id}</td>

                    <td>{post.titulo}</td>

                    <td>{post.texto}</td>

                    <td>{post.curtidas}</td>

                    <td>{post.usuario_id}</td>

                    <td>{post.comunidade_id}</td>

                    <td className='center actions'>
                      <Link to={`/post/update/${post.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/post/destroy/${post.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/post/show/${post.id}`} className='btn-show'>Show</Link>
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

export default PostFormList