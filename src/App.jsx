import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import WebsiteRoutes from './routes/WebsiteRoutes';
import './styles/index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import AdminRoutes from './routes/AdminRoutes';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      {
        loading ? <Loader /> : <>
          <BrowserRouter>
            <Routes>
              {...WebsiteRoutes()}
              {...AdminRoutes()}
            </Routes>
          </BrowserRouter>
        </>
      }
    </>
  )
}

export default App;