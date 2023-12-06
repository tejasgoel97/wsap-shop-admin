import { getAuth, signOut } from "@firebase/auth"
import { useState } from "react"
import { projectAuth } from "../firebase/config"
import useAuthContext from "./useAuthContext"



const useLogout = () =>{
    const [error, setError] = useState(null)
    const [isPending , setIsPending] = useState(false)
    const {dispatch}= useAuthContext();
    

    function Logout(){
        setError(null);
        setIsPending(true)

        signOut(projectAuth).then((user) => {
            // Sign-out successful.
            // setIsPending(false);
            // setError(null)
            console.log("signOut", user)
            dispatch({type:"LOGOUT"})
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
            // setError(error.message);
            // setIsPending(false);
        });
    }
    return {Logout}
}

export default useLogout