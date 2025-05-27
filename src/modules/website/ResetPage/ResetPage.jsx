import { useEffect } from "react"
import Footer from "../../../components/Footer"
import Goto_Top from "../../../components/Goto_Top"
import Navbar from "../../../components/Navbar"
import ResetPassword from "../../../components/ResetPassword"

const ResetPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <Navbar />
            <Goto_Top />
            <ResetPassword />
            <Footer />
        </>
    )
}

export default ResetPage