import { useEffect } from 'react';
import Card from '../../../components/Card';
import Goto_Top from '../../../components/Goto_Top';
import HomeSlider from '../../../components/HomeSlider';
import Navbar from '../../../components/Navbar';
import TestimonialSlider from '../../../components/Slider';
import WhoWeSec from '../../../components/WhoWeSec';
import WhyChoose from '../../../components/WhyChoose';
import Footer from '../../../components/Footer';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Navbar />
            <HomeSlider />
            <Card />
            <WhoWeSec title="WHO WE ARE" />
            <Goto_Top />
            <WhyChoose />
            <TestimonialSlider />
            <Footer />
        </>
    )
}

export default Home