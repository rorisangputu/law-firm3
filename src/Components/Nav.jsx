import { useState } from 'react';
import Logo from '../assets/LerumoLogo.png';

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
                        <img src={Logo} alt="Logo" className='h-12 w-12' />
                    </div>

                    <div className='hidden md:flex'>
                        <ul className='flex flex-row gap-6 font-extralight justify-between items-center'>
                            <li className='hover:underline transition-transform transform duration-300'>Home</li>
                            <li className='hover:underline transition-transform transform duration-300'>About</li>
                            <li className='hover:underline transition-transform transform duration-300'>Services</li>
                            <li className='hover:underline transition-transform transform duration-300'>Contact</li>
                        </ul>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={handleNavToggle} className='focus:outline-none'>
                            <svg
                                className="w-6 h-6 text-red-800"
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
                        <li className='hover:underline transition-transform transform duration-300'>Home</li>
                        <li className='hover:underline transition-transform transform duration-300'>About</li>
                        <li className='hover:underline transition-transform transform duration-300'>Services</li>
                        <li className='hover:underline transition-transform transform duration-300'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;
