import { useState, Fragment, useEffect } from 'react'
import axiosClient from '../../axiosClient'
import { Link, useNavigate, useParams } from 'react-router-dom';

function CategoriaFormUpdate() {

  const navigate = useNavigate();
  const [categoria, setCategoria] = useState({
          id: null,
          nome: '',
          descricao: ''
      });
  const { id } = useParams();
  
  if (id){
    useEffect(() => {
      axiosClient.get(`/categoria/show/${id}`)
        .then(({data}) => {
          setCategoria(data.data);
        }).catch((error) => {
          console.log(error);
        })
    }, [categoria.id]);
  }

    const OnSubmit = (e) => {
      e.preventDefault();
      axiosClient.put(`/categoria/update/${id}`, categoria)
        .then((data) => {
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
        </div>

        <form onSubmit={(e)=>OnSubmit(e)}>

          <input 
            defaultValue={categoria.nome} 
            placeholder='Nome da categoria'
            onChange={
              e => setCategoria({ ...categoria, nome: e.target.value })
            } />

          <input 
            defaultValue={categoria.descricao} 
            placeholder='Descrição'
            onChange={
              e => setCategoria({ ...categoria, descricao: e.target.value })
            } />

          <button 
            className='btn btn-edit'>
              Salvar
          </button>
          <Link 
            type='button'
            className='btn btn-cancel'
            to='/user/index'>
              Cancelar
          </Link>
        </form>
      </div>
    </Fragment>
  )
}

export default CategoriaFormUpdate