const Hero = () => {
    return (
        <div className="w-full h-[130vh] md:h-[90vh] flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div className="w-[90%] lg:w-[80%] mx-auto mt-7 flex flex-col justify-evenly lg:justify-between h-[85vh] md:h-screen">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-2xl  md:text-5xl">Strategic <span className="text-red-800">Legal Solutions</span> for Today&apos;s Challenges</h1>
                        <p className="text-gray-600 text-sm my-5 md:text-xl">
                            Our strategic legal expertise offers innovative solutions to navigate today&apos;s
                            intricate legal landscape. Count on us to address complex issues with
                            forward-thinking strategies and ensuring your success.
                        </p>
                        <button className="p-5 bg-red-800 text-white w-[40%] font-extralight">
                            See Services
                        </button>
                    </div>
                    <div className="bg-red-900 p-4">
                        <div className="w-full flex flex-row gap-4 justify-evenly text-white">
                            <div className=" flex flex-col gap-2 ">
                                <h1 className="text-xl font-light md:text-3xl">20</h1>
                                <p className="font-light text-gray-100">Years of Experience</p>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <h1 className="text-xl font-light md:text-3xl">200</h1>
                                <p className="font-light text-gray-100">Satisfied Clients</p>
                            </div>
                            <div className=" flex flex-col gap-2 ">
                                <h1 className="text-xl font-light md:text-3xl">100+</h1>
                                <p className="font-light text-gray-100">of Successful Cases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-[45vh] md:h-[90vh]">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/2935910/pexels-photo-2935910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Legal Solutions"
                />
            </div>
        </div>
    )
}

export default Hero;
