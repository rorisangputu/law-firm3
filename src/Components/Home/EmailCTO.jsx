import React from 'react'

const EmailCTO = () => {
    return (
        <div className='w-full bg-[#830000]'>
            <div className='w-[90%] mx-auto'>
                <div className='text-white font-extralight py-16 flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <p>Have Any Questions?</p>
                        <h1 className='text-2xl'>Let Us Reach You</h1>
                    </div>
                    <div className='bg-white py-2 lg:py-3 flex justify-around '>
                        <input type="email" name="" id="" placeholder='Email' className='ml-2 w-full' />
                        <button className='px-10 py-3 mr-1 bg-[#830000]'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailCTO