import { useEffect, useRef } from 'react';
import pepsi from '../../assets/pepsi.png';
import coke from '../../assets/coke.png';
import atos from '../../assets/atos.png';
import meltwater from '../../assets/meltwater.png';
import kafka from '../../assets/kafka.png';
import amazon from '../../assets/amazonmus.png';

const TrustCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let startPosition = 0;

        const animate = () => {
            startPosition -= 1; // Adjust the speed by changing this value
            if (startPosition <= -carousel.scrollWidth / 2) {
                startPosition = 0; // Reset position to start for seamless loop
            }
            carousel.style.transform = `translateX(${startPosition}px)`;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div className="w-full bg-[#830000] overflow-hidden flex flex-col gap-5 py-10 h-[30vh]">
            <div className="w-[90%] mx-auto py-5">
                <p className="text-xl text-white font-thin">They have trusted us.</p>
            </div>
            <div className="w-full py-5">
                <div className="flex w-[200%] whitespace-nowrap" ref={carouselRef}>
                    {/* Wrap content twice for seamless loop */}
                    <div className="flex gap-10 text-white">
                        {[pepsi, atos, kafka, meltwater, coke, amazon].map((image, index) => (
                            <span key={`image1-${index}`} className="carousel-item">
                                <img src={image} alt="" className="carousel-image" />
                            </span>
                        ))}
                        {/* Duplicate the items to create a seamless loop effect */}
                        {[pepsi, atos, kafka, meltwater, coke, amazon].map((image, index) => (
                            <span key={`image2-${index}`} className="carousel-item">
                                <img src={image} alt="" className="carousel-image" />
                            </span>
                        ))}
                        {/* Duplicate the items to create a seamless loop effect */}
                        {[pepsi, atos, kafka, meltwater, coke, amazon].map((image, index) => (
                            <span key={`image2-${index}`} className="carousel-item">
                                <img src={image} alt="" className="carousel-image" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustCarousel;
