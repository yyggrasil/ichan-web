import { createContext, useContext, useState } from "react";


const ContextProvider = ({children}) => {
    
    const [user, setUser] = useState({});
    const [token, setToken] = useState(sessionStorage.getItem('TOKEN'));

    const _setToken = (token) => {
        setToken(token);
        if (token){
            sessionStorage.setItem('TOKEN', token);
        }
        else{
            sessionStorage.removeItem('TOKEN');
        }
    }
    
    const _setUser = (user) => {
        console.log(user);
        setUser(user);
        sessionStorage.setItem('USER', user.nome);
    }
    
    return (
        <LoginContext.Provider value = {{
            _setToken, _setUser, user, token
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;
export const LoginContext = createContext(null);

export const useLogin = () => {
    const contexto = useContext(LoginContext);

    return contexto;
}