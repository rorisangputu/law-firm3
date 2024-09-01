import logo from '../assets/LerumoLogo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto pt-10 mb-7 flex flex-col'>
                <div className='w-full py-7 flex flex-col gap-9 font-extralight'>
                    <h1 className='text-2xl lg:text-4xl'>Committed. Skilled. Respected</h1>
                    <div className='flex flex-col gap-9 lg:flex-row lg:justify-between'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-gray-500'>Pages</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-gray-500'>Contact</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>+27 (11)-000-0000</li>
                                <li>info@lerumolaw.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t flex flex-col gap-9 justify-between'>
                    <div className='flex flex-col gap-1'>
                        <img src={logo} alt="Logo" className='h-24 w-24' />
                        <div className='font-extralight text-gray-500 text-sm lg:text-lg'>
                            <p>297 Westborough Drive</p>
                            <p>Clifton, Cape Town, 2095</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <FaFacebook className='h-5 w-5 lg:h-7 lg:w-7' />
                            <FaXTwitter className='h-5 w-5 lg:h-7 lg:w-7' />
                            <FaLinkedin className='h-5 w-5 lg:h-7 lg:w-7' />
                        </div>
                        <div className='font-extralight'>
                            <p className='text-sm text-gray-500 lg:text-lg'>Copyright. Lerumo Law Firm. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer