import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function ComentarioFormShow() {

  const navigate = useNavigate();
  const [comentario, setComentario] = useState([]);

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      axiosClient.get(`/comentario/show/${id}`)
        .then(({ data }) => {
          setComentario(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    navigate('/comentario/index');
  }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {comentario.id && <h1>Consulta de Comentario: {comentario.id}</h1>}

          <br />
          <div className='info'>
            {comentario.id && <h2>usuario: {comentario.usuario_id}  </h2>}
            {comentario.id && <h2>post: {comentario.post_id}  </h2>}
            {comentario.id && <h2>curtidas: {comentario.curtidas}  </h2>}
            {comentario.id && <h2>Comentario: {comentario.texto}  </h2>}
          </div>

          <button
            className='btn'
            onClick={(e) => OnSubmit(e)}>
            Voltar
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default ComentarioFormShow