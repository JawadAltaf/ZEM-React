import About from "../modules/website/About/About";
import Career from "../modules/website/Career/Career";
import Contact from "../modules/website/Contact/Contact";
import Home from "../modules/website/home/Home";

import { Routes, Route } from 'react-router-dom';
import Login from "../modules/website/Login/Login";

export default function WebsiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/login" element={<Login />} />

        </Routes>
    )
}