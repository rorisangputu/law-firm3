import AboutUs from '../Components/Home/AboutUs';
import Clients from '../Components/Home/Clients';
import ConsultationCTO from '../Components/Home/ConsultationCTO';
import EmailCTO from '../Components/Home/EmailCTO';
import Hero from '../Components/Home/Hero';
import HomeFAQ from '../Components/Home/HomeFAQ';
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
            <ConsultationCTO />
            <Clients />
            <HomeFAQ />
            <EmailCTO />
        </div>
    );
};

export default Home;
