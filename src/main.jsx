import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Navbar from './navbar/navbar.jsx'
import App from './App.jsx'
import Navbar from './navbar/navbar.jsx'
import Hero from './hero/hero.jsx'
import Footer from './footer/footer.jsx'
import PasswordApp from './password/password.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordApp/>
  </StrictMode>
)
