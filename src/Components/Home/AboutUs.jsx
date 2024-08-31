import { FaCheck, FaComments, FaShieldAlt, FaLock } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 h-auto lg:h-[78vh]  flex items-center mt-10 lg:mt-0 mb-10 lg:mb-0"> {/* Added bottom margin for spacing on smaller screens */}
                <div className="w-[90%] mx-auto flex flex-col gap-6">
                    <p className="font-light text-xl text-[#7e201a]">About Us</p>
                    <h1 className="text-4xl font-extralight leading-[50px]">
                        Our Experienced Attorneys Combine Legal Expertise With
                        <span className="text-[#7e201a]"> Personalized Service</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-extralight">
                        Welcome to CRN Law Firm, where . With a deep understanding of the
                        ever-changing legal landscape, we are committed to protecting our
                        clients&apos; rights and serving their best interests. From corporate
                        law and commercial litigation to intellectual property, real estate,
                        employment law, and family law, our team has a proven track record
                        of success in a wide range of legal matter.
                    </p>
                    <button className="bg-[#830000] w-[40%] md:w-[30%] p-5 text-white font-extralight">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 h-full ">
                <div className="grid grid-cols-2 "> {/* Added grid gap for spacing between items */}
                    {/* Grid Item 1 */}
                    <div className="flex flex-col items-center gap-5 h-[30vh] lg:h-[39vh] justify-center border p-3">
                        <FaCheck className="text-[#830000] h-6 w-6 md:h-9 md:w-9" />
                        <p className="md:text-xl text-center font-extralight">
                            Efficient legal solutions tailored to clients.
                        </p>
                    </div>
                    {/* Grid Item 2 */}
                    <div className="flex flex-col items-center gap-5 h-[30vh] lg:h-[39vh] justify-center border p-3">
                        <FaComments className="text-[#830000] h-6 w-6 md:h-9 md:w-9" />
                        <p className="md:text-xl text-center font-extralight">
                            Clear communication throughout the process.
                        </p>
                    </div>
                    {/* Grid Item 3 */}
                    <div className="flex flex-col items-center gap-5 h-[30vh] lg:h-[39vh] justify-center border p-3">
                        <FaShieldAlt className="text-[#830000] h-6 w-6 md:h-9 md:w-9" />
                        <p className="md:text-xl text-center font-extralight">
                            The experienced team has a proven track record of success.
                        </p>
                    </div>
                    {/* Grid Item 4 */}
                    <div className="flex flex-col items-center gap-5 h-[30vh] lg:h-[39vh] justify-center border p-3">
                        <FaLock className="text-[#830000] h-6 w-6 md:h-9 md:w-9" />
                        <p className="md:text-xl text-center font-extralight">
                            Protecting creative innovations and intellectual property.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
