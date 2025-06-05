import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaFormUpdate() {

  const navigate = useNavigate();
  const [categoria, setCategoria] = useState({
          id: null,
          name: '',
          username: '',
          birth_date: new Date().toISOString().split('T')[0],
          email: '',
          bios: '',
      });
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/categoria/show/${id}`)
        .then(({data}) => {
          setCategoria(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [categoria.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/categoria/update/${id}`, categoria)
        .then((data) => {
          navigate('/categoria/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/categoria/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {categoria.id && <h1>Exclusão de categoria: {categoria.name}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input 
            defaultValue={categoria.name} 
            placeholder='Nome da categoria'
            onChange={
              e => setCategoria({ ...categoria, name: e.target.value })
            } />

          <input 
            defaultValue={categoria.email} 
            placeholder='E-mail de Usuário'
            onChange={
              e => setCategoria({ ...categoria, email: e.target.value })
            } />

          <input
            defaultValue={categoria.username} 
            placeholder='Username'
            onChange={
              e => setCategoria({ ...categoria, username: e.target.value })
            } />

          <input
            type='date'
            defaultValue={categoria.birth_date} 
            placeholder='Data de Nascimento'
            onChange={
              e => setCategoria({ ...categoria, birth_date: e.target.value })
            } />
          <input
            defaultValue={categoria.bios} 
            placeholder='Bios'
            onChange={
              e => setCategoria({ ...categoria, bios: e.target.value })
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

export default CategoriaFormUpdate