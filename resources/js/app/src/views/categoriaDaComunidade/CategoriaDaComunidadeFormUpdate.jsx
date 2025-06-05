import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaDaComunidadeFormUpdate() {

  const navigate = useNavigate();
  const [categoriadacomunidade, setcategoriadacomunidade] = useState({
          id: null,
          categoria_id: '',
          comunidade_id: '',
      });
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/categoriadacomunidade/show/${id}`)
        .then(({data}) => {
          setcategoriadacomunidade(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [categoriadacomunidade.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/categoriadacomunidade/update/${id}`, categoriadacomunidade)
        .then((data) => {
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
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input 
            defaultValue={categoriadacomunidade.categoria_id} 
            placeholder='Nome do Usuário'
            onChange={
              e => setcategoriadacomunidade({ ...categoriadacomunidade, categoria_id: e.target.value })
            } />

          <input 
            defaultValue={categoriadacomunidade.comunidade_id} 
            placeholder='E-mail de Usuário'
            onChange={
              e => setcategoriadacomunidade({ ...categoriadacomunidade, comunidade_id: e.target.value })
            } />

          <button 
            className='btn btn-edit'>
              Salvar
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

export default CategoriaDaComunidadeFormUpdate