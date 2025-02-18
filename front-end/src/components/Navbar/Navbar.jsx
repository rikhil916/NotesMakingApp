import React from 'react';
import { Link } from 'react-router-dom';
export  default function  Navbar() {
    return (
        <div className="flex flex-row bg-purple-200 p-2 justify-around w-[100vw] px-4">
            <Link to={"/"} className="flex flex-row w-1/2">
                <div className="cursor-pointer">NavBar</div>
            </Link>
            <div className="flex flex-row w=1/2 justify-between space-x-5">
            <Link to={"/allnotes"}>
                <div className="cursor-pointer">All notes</div>
            </Link>
            <Link to={"/add"}>
                <div className='cursor-pointer'>Add note</div>
            </Link>
            <Link to={'/login'}>
                <div className="cursor-pointer">Login</div>
            </Link>
            <Link to={'/signup'}>
                <div className="cursor-pointer">SignUp</div>
            </Link>
            </div>
        </div>
    );
}