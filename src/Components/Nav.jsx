import { useState } from 'react';
import Logo from '../assets/LerumoLogo.png';
import { Link } from 'react-router-dom'

const Nav = () => {
    const [nav, setNav] = useState(false);

    const handleNavToggle = () => {
        setNav(!nav);
    };

    return (
        <div className='w-full border-b border-b-gray-200 relative'>
            <div className='w-[90%] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={Logo} alt="Logo" className='h-20 w-20' />
                    </div>

                    <div className='hidden md:flex'>
                        <ul className='flex flex-row gap-6 font-extralight justify-between items-center'>
                            <Link to={'/'} className='hover:underline transition-transform transform duration-300'>Home</Link>
                            <Link to={'/about'} className='hover:underline transition-transform transform duration-300'>About</Link>
                            <Link to={'/service'} className='hover:underline transition-transform transform duration-300'>Services</Link>
                            <Link to={'/contact'} className='hover:underline transition-transform transform duration-300'>Contact</Link>
                        </ul>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={handleNavToggle} className='focus:outline-none'>
                            <svg
                                className="w-10 h-10 text-red-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className={`${nav ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white z-10 shadow-lg md:hidden`}>
                    <ul className='flex flex-col gap-4 font-extralight justify-between items-center py-4'>
                        <Link to={'/'} className='hover:underline transition-transform transform duration-300'>Home</Link>
                        <Link to={'/about'} className='hover:underline transition-transform transform duration-300'>About</Link>
                        <Link to={'/service'} className='hover:underline transition-transform transform duration-300'>Services</Link>
                        <Link to={'/contact'} className='hover:underline transition-transform transform duration-300'>Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;
