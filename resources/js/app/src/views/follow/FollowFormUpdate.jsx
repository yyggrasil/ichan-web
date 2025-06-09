import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function FollowFormUpdate() {

  const navigate = useNavigate();
  const [follow, setFollow] = useState({
          id: null,
          usuario_id: '',
          comunidade_id: '',
          isModerator: 0
      });
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/follow/show/${id}`)
        .then(({data}) => {
          setFollow(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [follow.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/follow/update/${id}`, follow)
        .then((data) => {
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
          {follow.id && <h1>Edição De seguidor: {follow.id}  </h1>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input
            type="number"
            value={follow.usuario_id}
            placeholder="id usuario"
            onChange={
                e => setFollow({
                    ...follow, usuario_id: e.target.value
                })
            }
          />
          <input
              type="number"
              value={follow.comunidade_id}
              placeholder="Id da Comunidade"
              onChange={
                  e => setFollow({
                      ...follow, comunidade_id: e.target.value
                  })
              }
          />

          <input
              type="number"
              min={0}
              max={1}
              value={follow.isModerator}
              id="isModerator"
              name="isModerator"
              placeholder='É Moderador?'
              onChange={e =>
                  setFollow({
                      ...follow,
                      isModerator: Number(e.target.value)
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
            to='/follow/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default FollowFormUpdate