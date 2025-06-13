import useValidator from "../hook/useValidator";
import { ERROR_USER, USER } from "../types/User";

const NUMBER = '0123456789';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
const LOWERCASE = 'abcedefghijklmnopqrstuvxwyz';
const SPECIALCHARACTER  = "!'^%#()=?@";
const PASSWORD_LENGTH = 8;

const userValidationRules  =  {
    name:(name)=>{
        let mensagens = [];
        if (!name || name.trim().length === 0 ) {
           mensagens.push('Obrigatório informar o nome do usuário');
        }
        return mensagens;
    },

    email:(email)=>{
        let mensagens = [];
        if (!email || email.trim().length === 0 ) {
           mensagens.push('Obrigatório informar um e-mail');
        }
        else {
        // Expressão regular simples para validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            mensagens.push('E-mail inválido');
        }
    }
        return mensagens;
    },

    password:(password)=>{
        let mensagens = [];

        if (!password || password.trim().length === 0 ) {
            mensagens.push('Obrigatório informar a senha');
        }

        if ( password.length < PASSWORD_LENGTH ){
            mensagens.push('A senha deve conter oito caracteres ')
        }

        const hasNumber = [...password].some((char) => NUMBER.includes(char));

        if (!hasNumber){
        mensagens.push('A senha deve conter pelo menos um número');
        }

        /* const hasLowerCase = [...password].some((char) => LOWERCASE.includes(char));

        if (!hasLowerCase){
            mensagens.push('A senha deve conter pelo menos um caracter minúsculo');
        }

        const hasUpperCase = [...password].some((char) => UPPERCASE.includes(char));

        if (!hasUpperCase){
            mensagens.push('A senha deve conter pelo menos um caracter maíuscula');
        } */

        return mensagens;
    },
}


export const useValidarDadosUser = () => {
    return useValidator(USER, ERROR_USER, userValidationRules);
}