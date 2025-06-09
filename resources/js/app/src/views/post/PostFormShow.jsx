import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function PostFormShow() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      axiosClient.get(`/post/show/${id}`)
        .then(({ data }) => {
          setPosts(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    navigate('/post/index');
  }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {posts.id && <h1>Consulta de Post: {posts.titulo}</h1>}

          <br />
          <div className='info'>
            {posts.id && <h2>numero de curtidas: {posts.curtidas}  </h2>}
            {posts.id && <h2>id do usuario: {posts.usuario_id}  </h2>}
            {posts.id && <h2>id da comunidade: {posts.comunidade_id}  </h2>}
            {posts.id && <h2>Texto do post: {posts.texto}  </h2>}
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

export default PostFormShow