import React, { useEffect, useRef } from 'react';

const TrustCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let startPosition = 0;

        const animate = () => {
            startPosition -= 1; // Adjust the speed by changing this value
            if (startPosition <= -carousel.scrollWidth / 2) {
                startPosition = 0;
            }
            carousel.style.transform = `translateX(${startPosition}px)`;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div className='w-full bg-[#961717] overflow-hidden'>
            <div className='w-[90%] mx-auto py-10'>
                <p className='text-xl text-white font-thin'>They have trusted us.</p>
            </div>
            <div className='w-full'>
                <div
                    className='flex w-[200%] whitespace-nowrap'
                    ref={carouselRef}
                >
                    <div className='flex space-x-8 text-white'>
                        <span>Trusted by Company A</span>
                        <span>Recognized by Company B</span>
                        <span>Awarded by Company C</span>
                        <span>Partnered with Company D</span>
                        <span>Endorsed by Company E</span>
                        <span>Praised by Company F</span>
                    </div>

                    {/* Duplicate the items to create a seamless loop effect */}
                    <div className='flex space-x-8 text-white'>
                        <span>Trusted by Company A</span>
                        <span>Recognized by Company B</span>
                        <span>Awarded by Company C</span>
                        <span>Partnered with Company D</span>
                        <span>Endorsed by Company E</span>
                        <span>Praised by Company F</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustCarousel;
