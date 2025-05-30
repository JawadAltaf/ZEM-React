// src/routes/WebsiteRoutes.jsx
import { Route } from 'react-router-dom';
import About from "../modules/website/About/About";
import Career from "../modules/website/Career/Career";
import Contact from "../modules/website/Contact/Contact";
import Home from "../modules/website/home/Home";
import Login from "../modules/website/Login/Login";
import Register from "../modules/website/Register/Register";
import ResetPage from "../modules/website/ResetPage/ResetPage";
import ConformPasswordPage from "../modules/website/ConformPasswordPage/ConformPasswordPage";
import CareerDetail from "../modules/website/CareerDetail/CareerDetail";

const WebsiteRoutes = () => (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career-detail/:id" element={<CareerDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPage />} />
        <Route path="/set-new-password" element={<ConformPasswordPage />} />
    </>
);

export default WebsiteRoutes;
