import WebsiteRoutes from './routes/WebsiteRoutes';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';



function App() {


  return (
    <>
      <BrowserRouter>
        <WebsiteRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
