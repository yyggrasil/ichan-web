import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaDaComunidadeFormDestroy() {

  const navigate = useNavigate();
  const [categoriadacomunidade, setUser] = useState([])
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/categoriadacomunidade/show/${id}`)
        .then(({data}) => {
          setUser(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.delete(`/categoriadacomunidade/destroy/${id}`)
        .then(() => {
          setUser({});
          navigate('/categoriadacomunidade/index');
        }).catch((error) => {
          console.log(error);
        })
    }
    const OnCancel = () => {
      navigate('/categoriadacomunidade/index');
    }

  return (
    <Fragment>
      <div className='display'>
        <div className='card animated fadeInDown'>
          {categoriadacomunidade.id && <h1>Exclusão do relacionamento: {categoriadacomunidade.id}  </h1>}
          {categoriadacomunidade.id && <h2>id da categoria: {categoriadacomunidade.categoria_id}  </h2>}
          {categoriadacomunidade.id && <h2>id da comunidade: {categoriadacomunidade.comunidade_id}  </h2>}
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>
          <button 
            className='btn btn-delete'>
              Excluir
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/categoriadacomunidade/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default CategoriaDaComunidadeFormDestroy