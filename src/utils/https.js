import {useContext, createContext} from 'react';
import axios frmo 'axios',
import {AuthContext} from '../context/AuthContext'

const {getToken}= useCOntext(AuthContext);
const token = getToken()

const instance = axios.create({
    baseURl: ''
})
