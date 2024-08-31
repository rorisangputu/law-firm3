

const HomeLawyer = () => {
    return (
        <div className="w-full">
            {/* Container for the lawyer section */}
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-0">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh]">
                    <img
                        className="w-full h-full object-cover lg:object-cover lg:object-left-bottom"
                        src="https://plus.unsplash.com/premium_photo-1695942301071-a70004b9e916?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Lawyer"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full lg:w-1/2  h-[50vh] lg:h-[70vh] flex items-center">
                    <div className="w-[90%] mx-auto flex flex-col py-5">
                        {/* Introduction Paragraph */}
                        <p className="text-lg font-extralight text-gray-700 leading-relaxed">
                            With the inspiring power of law, we build the future:
                            Welcome to our law firm! Proudly leading with a dedicated
                            and passionate team, we pursue justice. Making a difference
                            in Legal Solutions with avant-garde approaches!
                        </p>
                        {/* Lawyer Info */}
                        <div className="py-5">
                            <h1 className="text-2xl font-extralight my-2">Ceren Kurt</h1>
                            <h2 className="text-[#830000] font-extralight">Commercial Lawyer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLawyer;
