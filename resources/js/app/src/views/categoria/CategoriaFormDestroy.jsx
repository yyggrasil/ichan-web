import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaFormDestroy() {

  const navigate = useNavigate();
  const [categoria, setCategoria] = useState({
    id: null,
    nome: '',
    descricao: ''
  })
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/categoria/show/${id}`)
        .then(({data}) => {
          setCategoria(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/categoria/destroy/${id}`)
        .then(() => {
          setCategoria({});
          navigate('/categoria/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/categoria/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {categoria.id && <h1>Exclusão da categoria: {categoria.nome}  </h1>}
          {categoria.id && <h2>Descrição: {categoria.descricao}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/categoria/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default CategoriaFormDestroy