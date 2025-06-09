import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function FollowFormShow() {

  const navigate = useNavigate();
  const [follow, setFollow] = useState([]);

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      axiosClient.get(`/follow/show/${id}`)
        .then(({ data }) => {
          setFollow(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    navigate('/follow/index');
  }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {follow.id && <h1>Consulta da seguida: {follow.id}</h1>}

          <br />
          <div className='info'>
            {follow.id && <h2>id usuario: {follow.usuario_id}</h2>}
            {follow.id && <h2>id comunidade: {follow.comunidade_id}</h2>}
            {follow.id && <h2>É Moderador: {follow.isModerator ? "sim" : "não"}</h2>}
          </div>

          <button
            className='btn'
            onClick={(e) => OnSubmit(e)}>
            Voltar
          </button>
        </div>

        {/*
        }
        <form>
          <input defaultValue={user.name} placeholder='Nome do Usuário' readOnly={true}/>
          <input defaultValue={user.email} placeholder='E-mail de Usuário' readOnly={true}/>
          <button 
            className='btn'
            onClick={(e)=>OnSubmit(e)}>
              Voltar</button>
        </form>*/
        }
      </div>
    </Fragment>
  )
}

export default FollowFormShow