import About from "../modules/website/About/About";
import Contact from "../modules/website/Contact/Contact";
import Home from "../modules/website/home/Home";

import { Routes, Route } from 'react-router-dom';

export default function WebsiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    )
}