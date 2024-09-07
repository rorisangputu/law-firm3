import History from "../Components/About/History"
import Numbers from "../Components/About/Numbers"
import Partners from "../Components/About/Partners"
import Title from "../Components/About/Title"
import Vision from "../Components/About/Vision"
import EmailCTO from "../Components/Home/EmailCTO"


const About = () => {
    return (
        <div className=''>
            <Title />
            <History />
            <Numbers />
            <Vision />
            <Partners />
            <EmailCTO />
        </div>
    )
}

export default About