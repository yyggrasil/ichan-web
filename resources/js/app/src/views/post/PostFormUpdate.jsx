import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostFormUpdate() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
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
      axiosClient.get(`/user/show/${id}`)
        .then(({data}) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [user.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/user/update/${id}`, user)
        .then((data) => {
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
          {user.id && <h1>Exclusão de usuário: {user.name}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input 
            defaultValue={user.name} 
            placeholder='Nome do Usuário'
            onChange={
              e => setUser({ ...user, name: e.target.value })
            } />

          <input 
            defaultValue={user.email} 
            placeholder='E-mail de Usuário'
            onChange={
              e => setUser({ ...user, email: e.target.value })
            } />

          <input
            defaultValue={user.username} 
            placeholder='Username'
            onChange={
              e => setUser({ ...user, username: e.target.value })
            } />

          <input
            type='date'
            defaultValue={user.birth_date} 
            placeholder='Data de Nascimento'
            onChange={
              e => setUser({ ...user, birth_date: e.target.value })
            } />
          <input
            defaultValue={user.bios} 
            placeholder='Bios'
            onChange={
              e => setUser({ ...user, bios: e.target.value })
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

export default PostFormUpdate