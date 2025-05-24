import { useEffect } from "react"
import Navbar from "../../../components/Navbar"
import WhoWeSec from "../../../components/WhoWeSec"
import TestimonialSlider from "../../../components/Slider"
import Footer from "../../../components/Footer"
import WhyChooseAbout from "../../../components/WhyChooseAbout"


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <WhoWeSec title="ABOUT US" />
            <WhyChooseAbout/>
            <TestimonialSlider />
            <Footer />
        </>
    )
}

export default About