import React, {createContext, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
export const AuthContext = createContext();

const axiosInstance = axios.create({
    baseURL: 'https://biblioteca-backend-cinta-negra.herokuapp.com'
});

const AuthContextProvider = (props) =>{
    const [isAuth, setAuth] = useState(false);
    const history = useHistory();

    const getToken = () =>{
      return  localStorage.getItem('token')
    }
    
    useEffect(()=>{if (getToken()) setAuth(true)})

    const setToken = (token) =>{
        localStorage.setItem('token', token);
        setAuth(true);
        history.push("/students");
    
    }

    const removeTokenAndLogout = () =>{
        localStorage.removeItem('token');
        setAuth(false);
        history.push("/login")

    }

    
    if (getToken()){
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
    }


    return( 
        <AuthContext.Provider value = {{
            isAuth,getToken, setToken, removeTokenAndLogout, axiosInstance
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider