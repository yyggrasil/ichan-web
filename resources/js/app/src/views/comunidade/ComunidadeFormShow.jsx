import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function ComunidadeFormShow() {

  const navigate = useNavigate();
  const [comunidade, setComunidade] = useState({
    id: null,
    name: '',
    description: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/comunidade/show/${id}`)
        .then(({data}) => {
          setComunidade(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      navigate('/comunidade/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {comunidade.id && <h1>Consulta de Comunidades: {comunidade.nome}</h1>}
        </div>

        <form>
          <input defaultValue={comunidade.nome} placeholder='Nome da comunidade' readOnly={true}/>
          <input defaultValue={comunidade.descricao} placeholder='Descricao da comunidade' readOnly={true}/>
          <button 
            className='btn'
            onClick={(e)=>OnSubmit(e)}>
              Cancelar</button>
        </form>
      </div>
    </Fragment>
  )
}

export default ComunidadeFormShow