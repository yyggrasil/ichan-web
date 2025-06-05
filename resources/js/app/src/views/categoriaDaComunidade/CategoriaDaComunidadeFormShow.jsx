import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function CategoriaDaComunidadeFormShow() {

  const navigate = useNavigate();
  const [categoriadacomunidade, setUser] = useState([]);

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      axiosClient.get(`/categoriadacomunidade/show/${id}`)
        .then(({ data }) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    navigate('/categoriadacomunidade/index');
  }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {categoriadacomunidade.id && <h1>Consulta do relacionamento: {categoriadacomunidade.id}</h1>}

          <br />
          <div className='info'>
            {categoriadacomunidade.id && <h2>id da categoria: {categoriadacomunidade.categoria_id}</h2>}
            {categoriadacomunidade.id && <h2>id da comunidade: {categoriadacomunidade.comunidade_id}</h2>}
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

export default CategoriaDaComunidadeFormShow