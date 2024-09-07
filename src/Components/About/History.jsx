

const History = () => {
    return (
        <div className="w-full border-t">
            <div className="flex flex-col lg:gap-5 items-center lg:flex-row font-extralight lg:h-[60vh]">
                {/* Text */}
                <div className="w-[90%] mx-auto lg:w-1/2 flex justify-center items-center">
                    <div className="lg:w-[80%] lg:h-full my-16 flex flex-col gap-7 lg:gap-5">
                        <p className="text-xl text-[#830000]">History</p>
                        <h1 className="text-3xl">
                            CRN Law Firm is a leading legal institution
                            known for its rich history and strong legal
                            expertise
                        </h1>
                        <p className="text-[#858585] text-lg">
                            The firm embarked on a mission to pursue justice.
                            Initially starting as a small consultancy office,
                            CRN rapidly expanded and earned a reputable standing,
                            winning the trust of its clients. Adapting to the
                            evolving needs of the industry, the firm has always
                            prioritized providing quality and client-centric
                            services. Today, with an exceptional team of highly
                            qualified attorneys and profound expertise in various
                            legal domains, CRN continues to offer comprehensive
                            legal solutions to its clients.
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div className="lg:w-1/2 lg:h-full">
                    <img className="object-cover h-full w-full" src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
        </div>
    )
}

export default History