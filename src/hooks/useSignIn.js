import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from '@firebase/auth'
import {useState} from 'react'
import {projectAuth} from '../firebase/config'
import useAuthContext from './useAuthContext'

const useSignIn = () =>{
    const [error, setError] = useState(null)
    const [isPending , setIsPending] = useState(false)

    const {dispatch}= useAuthContext();


    const signIn = async (email, password, displayName) =>{
        setError(null);
        setIsPending(true)

        try {
            // await setPersistence(projectAuth, browserSessionPersistence)
            
            const res = await signInWithEmailAndPassword(projectAuth, email, password);
            if(!res){
                throw new Error("Can' sign In due t some issue")
            }
            const user = res.user
            console.log(user)
            dispatch({type: "LOGIN", payload: user})
            setIsPending(false);
            setError(null)
            
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setIsPending(false)
            
        }
    }
    return {signIn, error, isPending, setError}
}

export default useSignIn;