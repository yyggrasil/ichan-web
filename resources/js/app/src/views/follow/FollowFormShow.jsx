import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function FollowFormShow() {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      axiosClient.get(`/user/show/${id}`)
        .then(({ data }) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    navigate('/user/index');
  }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {user.id && <h1>Consulta do usuário: {user.username}</h1>}

          <br />
          <div className='info'>
            {user.id && <h2>Id do usuário: {user.id}</h2>}
            {user.id && <h2>Nome Completo: {user.name}</h2>}
            {user.id && <h2>Nome de Usuário: {user.username}</h2>}
            {user.id && <h2>Email: {user.email}</h2>}
            {user.id && <h2>Data de Nascimento: {user.birth_date}</h2>}

            {user.id && <h2>Bios: {user.bios}</h2>}
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