import { useState } from "react"
import useAuthContext from "../hooks/useAuthContext"
import useSignIn from "../hooks/useSignIn"


export default function LoginScreen() {
    //BASIC STATE IMPORT
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Use Auth Context Hook
    const authState= useAuthContext();
    console.log(authState)

    //useSignUp CustomHook
    const {signIn, error, isPending, setError} = useSignIn();

    //Handle SignIn Button With Email and Password
    function handleSignIn(){
        if(!email) return setError("Please provide a valid email")
        if(password.length < 6) return setError("Please Choose atleast 6 digit password")
        signIn(email, password)
    }

    return( 
        <div className=" flex justify-center align-middle m-12">
            <div className=" shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full sm:w-3/5 lg:w-2/5" style={{backgroundColor:"rgb(217,220,199)"}}>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" >
                        Username
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type="text" 
                    placeholder="Username"/>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" >
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password" 
                        placeholder="******************"/>
                    {error && <p className="text-red text-xs italic">{error}</p>}
                </div>
                <div className="flex items-center justify-center">
                {!isPending &&<button 
                    className=" hover:bg-slate-700 w-full text-white font-bold py-2 px-4 rounded border-1 border-slate-900 bg-slate-800 align-middle" 
                    onClick={handleSignIn}
                    >
                    Sign In
                </button>}
                {isPending &&<button 
                    className=" hover:bg-gray-600 w-full text-white font-bold py-2 px-4 rounded border-1 border-slate-900 bg-green-600 align-middle" 
                    onClick={handleSignIn}
                    disabled
                    >
                    Loading
                </button>}
                </div>
            </div>
        </div>
    )
}