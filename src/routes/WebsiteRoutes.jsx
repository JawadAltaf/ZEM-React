import { Routes, Route } from 'react-router-dom';
import About from "../modules/website/About/About";
import Career from "../modules/website/Career/Career";
import Contact from "../modules/website/Contact/Contact";
import Home from "../modules/website/home/Home";
import Login from "../modules/website/Login/Login";
import Register from "../modules/website/Register/Register";
import ResetPage from '../modules/website/ResetPage/ResetPage';
import ConformPasswordPage from '../modules/website/ConformPasswordPage/ConformPasswordPage';
import CareerDetail from '../modules/website/CareerDetail/CareerDetail';

export default function WebsiteRoutes() {
    return [
        <Route path="/" element={<Home />} key="/" />,
        <Route path="/about" element={<About />} key="/about" />,
        <Route path="/contact" element={<Contact />} key="/contact" />,
        <Route path="/career" element={<Career />} key="/career" />,
        <Route path="/career-detail/:id" element={<CareerDetail />} key="/career-detail/:id" />,
        <Route path="/login" element={<Login />} key="/login" />,
        <Route path="/register" element={<Register />} key="/register" />,
        <Route path="/reset-password" element={<ResetPage />} key="reset-password" />,
        <Route path="/set-new-password" element={<ConformPasswordPage />} key="/set-new-password" />

    ]
}