import AboutUs from '../Components/Home/AboutUs';
import Hero from '../Components/Home/Hero';
import HomeLawyer from '../Components/Home/HomeLawyer';
import PracticeAreas from '../Components/Home/PracticeAreas';
import TrustCarousel from '../Components/Home/TrustCarousel';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col"> {/* Added gap-10 for spacing between components */}
            <Hero />
            <TrustCarousel />
            <AboutUs />
            <HomeLawyer />
            <PracticeAreas />
        </div>
    );
};

export default Home;
