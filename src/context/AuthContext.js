import { getAuth, onAuthStateChanged } from '@firebase/auth';
import {createContext, useEffect, useReducer} from 'react'
import { projectAuth } from '../firebase/config';

const AuthContext = createContext()

const authReducer = (state, action)=>{
    switch (action.type) {
        // case "LOGIN":
        //     console.log(action.payload)
        //     return {...state, user: action.payload}; 
        case "LOGOUT":
            console.log(action.payload)
            return {user: null, authDone: false} 
        case "AUTH_IS_READY":
            console.log("In dispatch")
            console.log(action.payload)
            if(action.payload !==null){
                return {...state, user: action.payload, authDone: true}
            }
            return {...state, user: action.payload, authDone: false}
        default:
            return state;
    }
}

const AuthContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(authReducer,{ user:null})
    console.log("APP AUTH", state.user)
    useEffect(()=>{
        
        const unsub= onAuthStateChanged(projectAuth, user=>{
            console.log("uservvvvvv", user)
            dispatch({type:"AUTH_IS_READY", payload: user})
        })
        return unsub
    }, [])
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext}