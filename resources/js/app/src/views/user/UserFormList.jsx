import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function UserFormList() {

  const [users, setUsers] = React.useState([]);

  const getUsers = () => {
    axiosClient.get('/user/index')
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

          <h1>Lista de Usuários</h1>
          <Link to="/user/store" className='btn-add'>Store</Link>
        </div>
        <table>
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Username</th>
              <th>Email</th>
              <th>Data de Nascimento</th>
              <th>Bios</th>
              <th className='center actions' colSpan={3}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index}>

                    <td>{user.id}</td>

                    <td>{user.name}</td>

                    <td>{user.username}</td>

                    <td>{user.email}</td>

                    <td>{user.birth_date}</td>

                    <td>{user.bios}</td>

                    <td className='center actions'>
                      <Link to={`/user/update/${user.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/user/destroy/${user.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/user/show/${user.id}`} className='btn-show'>Show</Link>
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

export default UserFormList