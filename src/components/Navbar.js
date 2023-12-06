import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ADD PRODUCT", link: "/addnewproduct" },
        { name: "CATEGORY", link: "/category" },
        { name: "ORDERS", link: "/orders" },
        { name: "CONTACT", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);

    const location = useLocation();

    const pathName = location.pathname;
    console.log(pathName)

    return (
        <div className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-theme-100'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Designer
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}>dcdc</ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={link.link} className={`${link.link === pathName ? "border-b-2 text-gray-400":"text-gray-800"}  hover:text-gray-400 duration-500`}>{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Navbar