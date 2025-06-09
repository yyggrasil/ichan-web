import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostFormDestroy() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/post/show/${id}`)
        .then(({data}) => {
          setPosts(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/post/destroy/${id}`)
        .then(() => {
          setPosts({});
          navigate('/post/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/post/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {posts.id && <h1>Exclusão do Post: {posts.titulo}  </h1>}
          {posts.id && <h2>numero de curtidas: {posts.curtidas}  </h2>}
          {posts.id && <h2>id do usuario: {posts.usuario_id}  </h2>}
          {posts.id && <h2>id da comunidade: {posts.comunidade_id}  </h2>}
          {posts.id && <h2>Texto do post: {posts.texto}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/post/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default PostFormDestroy