import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComentarioFormUpdate() {

  const navigate = useNavigate();
  const [comentario, setComentario] = useState({
          id: null,
          texto: '',
          curtidas: null,
          usuario_id: null,
          post_id: null,
      });
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/comentario/show/${id}`)
        .then(({data}) => {
          setComentario(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [comentario.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/comentario/update/${id}`, comentario)
        .then((data) => {
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
          {comentario.id && <h1>Alteração do Comentario: {comentario.id}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input 
            defaultValue={comentario.usuario_id} 
            placeholder='id do Usuário'
            onChange={
              e => setComentario({ ...comentario, usuario_id: e.target.value })
            } />

          <input 
            defaultValue={comentario.post_id} 
            placeholder='id do post pai'
            onChange={
              e => setComentario({ ...comentario, post_id: e.target.value })
            } />

          <input
            defaultValue={comentario.curtidas} 
            placeholder='numero de curtidas'
            onChange={
              e => setComentario({ ...comentario, curtidas: e.target.value })
            } />

          <input
            defaultValue={comentario.texto} 
            placeholder='texto do comentario'
            onChange={
              e => setComentario({ ...comentario, texto: e.target.value })
            } />

          <button 
            className='btn btn-edit'>
              Salvar
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

export default ComentarioFormUpdate