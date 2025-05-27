import { useEffect } from "react"
import Navbar from "../../../components/Navbar"
import Goto_Top from "../../../components/Goto_Top"
import Footer from "../../../components/Footer"
import ConformPassword from "../../../components/ConformPassword"


const ConformPasswordPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Goto_Top />
            <ConformPassword />
            <Footer />
        </>
    )
}

export default ConformPasswordPage