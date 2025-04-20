import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function UserFormShow() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/user/show/${id}`)
        .then(({data}) => {
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
          {user.id && <h1>Consulta de usuário: {user.name}</h1>}
        </div>

        <form>
          <input defaultValue={user.name} placeholder='Nome do Usuário' readOnly={true}/>
          <input defaultValue={user.email} placeholder='E-mail de Usuário' readOnly={true}/>
          <button 
            className='btn'
            onClick={(e)=>OnSubmit(e)}>
              Cancelar</button>
        </form>
      </div>
    </Fragment>
  )
}

export default UserFormShow