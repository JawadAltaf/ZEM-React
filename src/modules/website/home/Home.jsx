import { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import Goto_Top from '../../../components/Goto_Top';
import HomeSlider from '../../../components/HomeSlider';
import Loader from '../../../components/Loader';
import Navbar from '../../../components/Navbar';
import TestimonialSlider from '../../../components/Slider';

import WhoWeSec from '../../../components/WhoWeSec';
import WhyChoose from '../../../components/WhyChoose';


const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>

            {
                loading ? <Loader /> :
                    <>
                        <Navbar />
                        <HomeSlider />
                        <Card />
                        <WhoWeSec />
                        <Goto_Top />
                        <WhyChoose />
                        <TestimonialSlider />
                    </>
            }







        </>
    )
}

export default Home