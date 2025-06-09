import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function FollowFormDestroy() {

  const navigate = useNavigate();
  const [follow, setFollow] = useState({
    id: null,
    usuario_id: '',
    comunidade_id: '',
    isModerator: 0
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/follow/show/${id}`)
        .then(({data}) => {
          setFollow(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/follow/destroy/${id}`)
        .then(() => {
          setFollow({});
          navigate('/follow/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/follow/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {follow.id && <h1>Exclusão da seguida: {follow.id}  </h1>}
          {follow.id && <h2>id de Usuário: {follow.usuario_id}  </h2>}
          {follow.id && <h2>id de comunidade: {follow.comunidade_id}  </h2>}
          {follow.id && <h2>É Moderador: {follow.isModerator ? "sim": "não"}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/follow/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default FollowFormDestroy