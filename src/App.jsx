import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AllRoutes } from './pages/AllRoutes'
import { Navbar } from './components/Navbar'
import { useLocation } from 'react-router-dom'
import { Footer } from './components/footer'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
    }
  }, [location]);

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/signup" && <Navbar />}
      <AllRoutes />
      {location.pathname !== "/" && location.pathname !== "/signup" && <Footer />}
    </>
  )
}

export default App
