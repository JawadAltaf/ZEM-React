import { useEffect } from "react"
import Goto_Top from "../../../components/Goto_Top";
import Navbar from "../../../components/Navbar";
import CareerDetailsPage from "../../../components/CareerDetailsPage";
import Footer from "../../../components/Footer";



const CareerDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Navbar />
            <Goto_Top />
            <CareerDetailsPage />
            <Footer/>
        </>
    )
}

export default CareerDetail;