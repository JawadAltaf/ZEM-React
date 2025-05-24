import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import CareerPage from '../../../components/CareerPage'
import Goto_Top from '../../../components/Goto_Top'
import Footer from '../../../components/Footer'

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Goto_Top />
            <CareerPage />
            <Footer />
        </>
    )
}

export default Career