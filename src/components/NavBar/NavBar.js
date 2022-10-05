import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'home', path: '/home' },
        { id: 2, name: 'products', path: '/products' },
        { id: 3, name: 'order', path: '/order' },
        { id: 4, name: 'contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`bg-purple-200 md:flex w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`} >
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav >
    );
};

export default NavBar;