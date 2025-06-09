import React, { Fragment, useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ComunidadeFormStore()
{
    const navigate = useNavigate();

    const [comunidade, setComunidade] = useState({
        id:null,
        nome:'',
        descricao:'',
    });

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/comunidade/store`, comunidade)
            .then(() =>{
                setComunidade({});
                console.log('comunidade incluída com sucesso');
                navigate('/comunidade/index')
            }).catch((error)=>{
                console.log(error);
            })
        //console.log(e);
        //console.log("Passando pela função onSubmit")
    }

    const onCancel = (e) => {
        //e.preventDefault();
        navigate('/comunidade/index');
        //console.log(e);
        //console.log("Passando pela função onSubmit")
    }


    
    return(
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Comunidade</h1>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <input
                            type="text"
                            value={comunidade.nome}
                            placeholder="Nome da Comunidade"
                            onChange={
                                e => setComunidade({
                                    ...comunidade, nome:e.target.value
                                })
                            } />
                        <input
                            value={comunidade.descricao}
                            placeholder="Descrição"
                            onChange={
                                e => setComunidade({
                                    ...comunidade, descricao:e.target.value
                                })
                            } />
                        <button className="btn btn-edit">Salvar</button>
                        <Link
                            type='button' 
                            className='btn btn-cancel'
                            to='/comunidade/index'>
                                Cancelar
                        </Link>
                    </form>
                </div>

                
            </div>
        </Fragment>
    )
}

export default ComunidadeFormStore