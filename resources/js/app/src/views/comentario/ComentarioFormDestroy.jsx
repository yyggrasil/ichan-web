import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComentarioFormDestroy() {

  const navigate = useNavigate();
  const [comentario, setComentario] = useState([]);
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/comentario/show/${id}`)
        .then(({data}) => {
          setComentario(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/comentario/destroy/${id}`)
        .then(() => {
          setComentario({});
          navigate('/comentario/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/comentario/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {comentario.id && <h1>Exclusão do comentario: {comentario.id}  </h1>}
          {comentario.id && <h2>usuario: {comentario.usuario_id}  </h2>}
          {comentario.id && <h2>post: {comentario.post_id}  </h2>}
          {comentario.id && <h2>curtidas: {comentario.curtidas}  </h2>}
          {comentario.id && <h2>Texto: {comentario.texto}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/comentario/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default ComentarioFormDestroy