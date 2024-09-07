import React from 'react'

const Numbers = () => {
    return (
        <div className='w-full'>
            <div className='w-full grid md:grid-cols-3 font-light'>
                <div className='py-12 border flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-[#830000] text-2xl lg:text-3xl'>20</h1>
                    <p className='md:text-lg lg:text-xl'>Years of Experience</p>
                </div>
                <div className='py-12 border flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-[#830000] text-2xl lg:text-3xl'>2000</h1>
                    <p className='md:text-lg lg:text-xl'>Happy Clients</p>
                </div>
                <div className='py-12 border flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-[#830000] text-2xl lg:text-3xl'>Hundreds</h1>
                    <p className='md:text-lg lg:text-xl'>of Successful Cases</p>
                </div>
            </div>
        </div>
    )
}

export default Numbers