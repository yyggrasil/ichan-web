import React, { Fragment } from 'react'
import MensagemErro from '../mensagens/MensagemErro';

const Input = ({
  id,
  type,
  value,
  placeholder,
  handleChangeField,
  handleBlurField,
  error,
  mensagem,
}) => {

  const getInputClass = (error) => {
    if (error) {
      return "form-control is-invalid";
    } else if (error === false) {
      return "form-control is-valid";
    }
    return "form-control";
  }

  return (
    <Fragment>
      <input
        id={id}
        type={type}
        value={value || ''}
        name={id}
        placeholder={placeholder}
        className={getInputClass(error)}
        onChange={handleChangeField}
        onBlur={handleBlurField}
      />
      {
        <MensagemErro
          error={error}
          mensagem={mensagem}
        />
      }
    </Fragment>
  )
}

export default Input