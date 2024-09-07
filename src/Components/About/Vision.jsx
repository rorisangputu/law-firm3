import React from 'react'

const Vision = () => {
    return (
        <div className="w-full border-b">
            <div className="flex flex-col lg:gap-5 items-center lg:flex-row font-extralight lg:h-[60vh]">
                {/* Image */}
                <div className="h-[60vh] lg:w-1/2 lg:h-full">
                    <img className="object-cover h-full w-full" src="https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                {/* Text */}
                <div className="w-[90%] mx-auto lg:w-1/2 flex justify-center items-center">
                    <div className="lg:w-[80%] lg:h-full my-16 flex flex-col gap-7 lg:gap-5">
                        <p className="text-xl text-[#830000]">Vision</p>
                        <h1 className="text-3xl">
                            Shaping a Sustainable Future: Our Vision for Positive Global Impact
                        </h1>
                        <p className="text-[#858585] text-lg">
                            Our vision is filled with a strong belief in shaping the future.
                            We strive to create sustainable changes that positively impact individuals
                            and societies. Guided by the values of honesty, innovation, and responsibility,
                            our aim is to become an influential partner in driving global transformation.
                            Embracing the technology and knowledge era, we forge ahead with creative and
                            pioneering initiatives. Our focus lies in projects that support social justice
                            and preserve environmental sustainability, working hand in hand to make a positive
                            impact worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision