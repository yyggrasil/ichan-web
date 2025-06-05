import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { data, Link } from 'react-router-dom';

function CategoriaFormList() {

  const [categorias, setCategoria] = React.useState([]);
  const {page, pageSize} = userParams();

  const getCategoria = () => {
    axiosClient.get(`/categoria/index?page{}`)
              .then(({data}) => {
                setCategoria(data.data);
              }
              ).catch((error) => {
                console.log(error);
              })
  }

  useEffect(() => {
    getCategoria();
  }, []);


  return (
    <div className='display'>
      <div className='card animated fadeInDown'>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
        }}>

          <h1>Lista de Categoria</h1>
          <Link to="/categoria/store" className='btn-add'>Store</Link>
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
              categorias.length > 0 ? (
                categorias.map((categoria, index) => (
                  <tr key={index}>

                    <td>{categoria.id}</td>

                    <td>{categoria.name}</td>

                    <td>{categoria.username}</td>

                    <td>{categoria.email}</td>

                    <td>{categoria.birth_date}</td>

                    <td>{categoria.bios}</td>

                    <td className='center actions'>
                      <Link to={`/categoria/update/${categoria.id}`} className='btn-edit'>Update</Link>
                    </td>

                    <td className='center actions'>
                      <Link to={`/categoria/destroy/${categoria.id}`} className='btn-delete'>Destroy</Link>
                    </td>
                  
                    <td className='center actions'>
                      <Link to={`/categoria/show/${categoria.id}`} className='btn-show'>Show</Link>
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

export default CategoriaFormList