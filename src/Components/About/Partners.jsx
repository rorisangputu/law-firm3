import React from 'react'

const Partners = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col py-10 font-light'>
                    <div className='flex flex-col py-10 gap-3'>
                        <p className='text-[#830000]'>Your Partners in Legal Advocacy</p>
                        <h1 className='text-2xl'>Our Team of Legal Experts</h1>
                    </div>
                    <div className='grid mg:grid-cols-2 lg:grid-cols-3 gap-7 pb-10'>
                        <div className='border'>
                            <img className='h-[45vh] object-left w-full object-cover' src="https://images.pexels.com/photos/5915239/pexels-photo-5915239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className='p-7 flex flex-col gap-3'>
                                <h1 className='text-2xl'>Katherine Musungayi</h1>
                                <p className='text-[#830000]'>Commercial Lawyer</p>
                                <p>katherinem@crnlaw.com</p>
                            </div>
                        </div>
                        <div className='border'>
                            <img className='h-[45vh] object-top w-full object-cover' src="https://images.pexels.com/photos/3460134/pexels-photo-3460134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            <div className='p-7 flex flex-col gap-3'>
                                <h1 className='text-2xl'>Michael Jeffreys</h1>
                                <p className='text-[#830000]'>Criminal Lawyer</p>
                                <p>mikejeff@crnlaw.com</p>
                            </div>
                        </div>
                        <div className='border'>
                            <img className='h-[45vh] object-left object-cover' src="https://images.pexels.com/photos/7648307/pexels-photo-7648307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className='p-7 flex flex-col gap-3'>
                                <h1 className='text-2xl'>Ceren Kurt</h1>
                                <p className='text-[#830000]'>Family Lawyer</p>
                                <p>ceren@crnlaw.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners