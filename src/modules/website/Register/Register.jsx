import { useEffect } from "react"
import Navbar from "../../../components/Navbar"
import Goto_Top from "../../../components/Goto_Top"
import Footer from "../../../components/Footer"
import RegisterForm from "../../../components/RegisterForm"

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Goto_Top />
            <RegisterForm />
            <Footer />
        </>
    )
}

export default Register