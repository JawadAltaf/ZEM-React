// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import WebsiteRoutes from './routes/WebsiteRoutes';
import AdminRoutes from './routes/AdminRoutes';
import './styles/index.css';
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            {WebsiteRoutes()}
            {AdminRoutes()}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
