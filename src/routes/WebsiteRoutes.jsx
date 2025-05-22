import Home from "../modules/website/home/Home";

import { Routes, Route } from 'react-router-dom';

export default function WebsiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    )
}