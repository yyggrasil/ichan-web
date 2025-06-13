
import { useState } from 'react';

const useValidator = (initialModel, errorModel, validationRules) => {

    const [model, setModel] = useState(initialModel);
    const [error, setError] = useState(errorModel);

    const handleChangeField = (e) => {
        const { name, value } = e.target;

        console.log(name+'    '+value); 
        setModel((prev) => ({
            ...prev, [name]: value
        }));
    }

    const handleBlurField = (e) => {
        const { name } = e.target;
        let erros = validBlurInput(name);
        setError(erros);
    }

    const hasErrors = (erros) => {
        return Object.values(erros).some(value => value === true);
    }


    const validateAll = () => {
        let erros = {};
        Object.keys(validationRules).forEach((field) => {
            const validationFunction = validationRules[field];
            const value = model[field];
            const mensagens = validationFunction(value, model);
            erros[`${field}Mensagem`] = mensagens;
            const hasErros = Array.isArray(mensagens) &&
                mensagens.some(msg => typeof msg === 'string' && msg.trim().length > 0);

            erros[field] = hasErros; // true ou false
            console.log(erros);
        })
        return erros;
    }

    const validBlurInput = (field) => {
        let erros = { ...error }
        const validationFunction = validationRules[field];
        if (validationFunction) {
            const value = model[field];
            erros[`${field}Mensagem`] = validationFunction(value, model);
            erros[field] = !!(erros[`${field}Mensagem`] && erros[`${field}Mensagem`].length > 0);
        }

        return erros;
    };

    const formValid = () => {
        const erros = validateAll();
        setError(erros);
        return !hasErrors(erros);
    }


    return {
        model,
        setModel,
        error,
        setError,
        handleChangeField,
        handleBlurField,
        formValid,
    }

}

export default useValidator;