import { useEffect } from "react"
import Navbar from "../../../components/Navbar"
import ConatactForm from "../../../components/ConatactForm"
import Footer from "../../../components/Footer"
import Goto_Top from "../../../components/Goto_Top"


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Goto_Top/>
            <ConatactForm />
            <Footer />
        </>
    )
}

export default Contact