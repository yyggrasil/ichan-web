import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostFormUpdate() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState({
        id: null,
        titulo: '',
        curtidas: 0,
        texto: '',
        usuario_id: '',
        comunidade_id: '',
      });
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/post/show/${id}`)
        .then(({data}) => {
          setPosts(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [posts.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/post/update/${id}`, posts)
        .then((data) => {
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
          {posts.id && <h1>Edição de Posts: {posts.titulo}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
            type="text"
            value={posts.titulo}
            placeholder="titulo*"
            onChange={
                e => setPosts({
                    ...posts, titulo: e.target.value
                })
            }
          />
          <input
              type="number"
              value={posts.usuario_id}
              placeholder="id de Usuário*"
              onChange={
                  e => setPosts({
                      ...posts, usuario_id: e.target.value
                  })
              }
          />
          <input
              type='number'
              value={posts.comunidade_id}
              placeholder="id da Comunidade*"
              onChange={
                  e => setPosts({
                      ...posts, comunidade_id: e.target.value
                  })
              }
          />
          <input
              value={posts.texto}
              placeholder="texto do post*"
              onChange={
                  e => setPosts({
                      ...posts, texto: e.target.value
                  })
              }
          />
          <input
              type="number"
              value={posts.curtidas}
              placeholder="numero de curtidas"
              onChange={
                  e => setPosts({
                      ...posts, curtidas: e.target.value
                  })
              }
          />

          <button 
            className='btn btn-edit'>
              Salvar
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

export default PostFormUpdate