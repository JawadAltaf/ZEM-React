import { useEffect } from "react"
import Navbar from "../../../components/Navbar"


const Contact = () => {
    useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    return (
        <>
            <Navbar />
        </>
    )
}

export default Contact