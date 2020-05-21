import React, {createContext, useState} from 'react';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [isAuth, setAuth] = useState(false);
    const history = useHistory();

    
    const setToken = (token) =>{
        localStorage.setItem('token', token);
        setAuth(true);
        history.push("/students");
    
    }

    const removeToken = (token) =>{
        localStorage.removeItem('token');
        setAuth(false);

    }

    const getToken = () =>{
        localStorage.getItem('token')
    }

    return( 
        <AuthContext.Provider value = {{
            isAuth,getToken, setToken, removeToken
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider