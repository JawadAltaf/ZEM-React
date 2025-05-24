import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Goto_Top from '../../../components/Goto_Top'
import Footer from '../../../components/Footer'
import LoginPage from '../../../components/LoginPage'

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <Navbar />
            <Goto_Top />
            <LoginPage/>
            <Footer/>

        </>
    )
}

export default Login