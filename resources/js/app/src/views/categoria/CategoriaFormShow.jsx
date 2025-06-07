import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { useNavigate, useParams } from 'react-router-dom';

function CategoriaFormShow() {

  const navigate = useNavigate();
  const [categoria, setCategoria] = useState([]);

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      axiosClient.get(`/categoria/show/${id}`)
        .then(({ data }) => {
          setCategoria(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    navigate('/categoria/index');
  }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {categoria.id && <h1>Consulta de categoria: {categoria.nome}</h1>}

          <br />
          <div className='info'>
            {categoria.id && <h2>Descrição: {categoria.descricao}</h2>}
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

export default CategoriaFormShow