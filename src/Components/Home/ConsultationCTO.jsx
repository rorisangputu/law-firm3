

const ConsultationCTO = () => {
    return (
        <div className="w-full border-t">
            {/* Container for the lawyer section */}
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-0">

                {/* Text Section */}
                <div className="w-full lg:w-1/2  h-[50vh] lg:h-[70vh] flex items-center">
                    <div className="w-[90%] mx-auto flex flex-col py-10 gap-5">
                        <h1 className="text-2xl font-extralight">Everyone who walks through our door is important</h1>
                        {/* Introduction Paragraph */}
                        <p className="text-lg font-extralight text-gray-700 leading-relaxed">
                            At the heart of our values is a commitment to treating each
                            individual with the utmost respect and care.
                        </p>
                        {/* Lawyer Info */}
                        <button className="py-4 bg-[#830000] text-white w-[50%] md:w-[40%] font-extralight">
                            Request Consultation
                        </button>
                    </div>
                </div>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh]">
                    <img
                        className="w-full h-full object-cover lg:object-cover lg:object-center"
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Lawyer"
                    />
                </div>
            </div>
        </div>
    );
}

export default ConsultationCTO