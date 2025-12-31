import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, PhoneCall, Mail, MapPin } from 'lucide-react';
import { NavLink } from "react-router-dom"
import { Navbarlink } from '../../data/NavbarLink';
import Buttons from '../ui/Buttons';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            {/* Navbar itself */}
            <div className={`relative flex justify-between h-30 items-center h-20 w-full md:px-8 px-4 border-b md:border-0 border-gray-500 z-20 ${open ? 'bg-gray-500' : ''}`}>

                {/* Logo */}
                <NavLink to='/' className="cursor-pointer md:w-[10%]">
                    <img src="./logo.png" alt="" className='w-25' />
                </NavLink>

                {/* Humburger for the mobile */}
                {open ? (<CloseMenu setOpen={setOpen} />) : (<OpenMenu setOpen={setOpen} />)}

                {/* Desktop Menu Navbar */}
                <div className='w-[80%] hidden relative md:flex justify-center flex-col items-center gap-2 h-full px-5'>
                    {/* contact */}
                    <Contacts />

                    {/* line */}
                    <div className='w-full h-[.5px] bg-gray-400'></div>

                    {/* Navbar Links */}
                    <Navlink />
                </div>
            </div>

            {/* Mobile Menu behind navbar */}
            <div
                className={`absolute md:hidden flex justify-center items-center flex-col gap-5 top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-gray-500 z-10 transition-all duration-500 ease-in-out text-black
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} `} >
                <MobileNavlink setOpen={setOpen} />
            </div>
        </div>
    );
}

// NavLink for the desktop
function Navlink() {
    return (
        <div className='flex justify-between items-center w-full gap-6'>
            <ul className="flex justify-center items-center gap-6 font-sans text-lg md:flex-row md:h-[full]  ">
                {Navbarlink.map((links, idx) => {
                    return <li key={idx}>
                        <NavLink to={links.to} className="group relative text-black transition duration-300 hover:text-red-500">
                            {links.title}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </li>
                })}
            </ul>

            <Buttons label={'APPLY NOW'} to={'/contact'}></Buttons>

        </div>
    );
}

// Navlink for Mobile
function MobileNavlink({ setOpen }) {
    return (
        <ul className="flex flex-col justify-center items-center gap-6 font-sans text-md md:flex-row md:h-[full]  ">
            {Navbarlink.map((links, idx) => {
                return <li key={idx}>
                    <NavLink to={links.to} onClick={() => setOpen(prev => !prev)} className="group relative text-white transition duration-300">
                        {links.title}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
            })}

        </ul>
    );
}

function OpenMenu({ setOpen }) {
    return (
        <div className="p-2 cursor-pointer md:hidden text-white" onClick={() => setOpen(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
            </svg>
        </div>
    );
}

function CloseMenu({ setOpen }) {
    return (
        <div className="p-2 cursor-pointer md:hidden text-white" onClick={() => setOpen(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    );
}


// Navbar Contact information

function Contacts() {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-center items-center gap-1'>
                <PhoneCall size={18} />
                <p>9846847988</p>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <Mail size={18} />
                <p> manifest@gmail.com</p>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <MapPin size={18} />
                <p>( Opposite to Start Mall) Putalisadak, Kathmandu</p>
            </div>
        </div>
    )
}