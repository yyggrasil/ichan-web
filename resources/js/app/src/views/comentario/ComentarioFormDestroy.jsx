import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComentarioFormDestroy() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: null,
    name: '',
    username: '',
    email: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/user/show/${id}`)
        .then(({data}) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/user/destroy/${id}`)
        .then(() => {
          setUser({});
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
          {user.id && <h1>Exclusão do usuário: {user.username}  </h1>}
          {user.id && <h2>Nome de Usuário: {user.name}  </h2>}
          {user.id && <h2>Email: {user.email}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
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

export default ComentarioFormDestroy