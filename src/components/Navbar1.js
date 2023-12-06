import { Link, useLocation } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () =>{

  const {authDone, user}= useAuthContext();
  const {Logout} = useLogout();

  const location = useLocation();
  const pathName = location.pathname;
  let pathClassName = "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium";
  let notPathClassName = "text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"

    return (
        <nav style={{backgroundColor:"rgb(217,220,199)"}}>
            <div className="mx-2 py-2">
                <div className="flex justify-between ">
                    <div className="flex-1 flex  space-x-4 items-center justify-start">
                        <img className="h-10 w-auto"  src={require("../logo Stretch Horizontal.png")}/>
                        <Link to="/" className={pathName == "/" ? pathClassName: notPathClassName} aria-current="page">Products</Link>

                        <Link to="/orders" className={pathName == "/orders" ? pathClassName: notPathClassName}>Orders</Link>

                        <Link to="/addnewproduct" className={pathName == "/addnewproduct" ? pathClassName: notPathClassName}>Add Product</Link>
                    </div>
                    <div className=" flex-1 items-center">
                        <div className="flex justify-end px-5">
                        {!authDone ? 
                            <Link to="/login" className =" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Login</Link>
                            :
                            <div className ="btn text-white block px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer" aria-current="page" onClick={()=> Logout()}>Logout</div>
                        }                    
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar