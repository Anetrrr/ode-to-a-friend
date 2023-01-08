import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Pictures from './pages/Pictures';
import Videos from './pages/Videos';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes>
        <Route index element={<About />} />
        <Route path="pictures" element={<Pictures />} />
        <Route path="videos" element={<Videos />} />
      </Routes>
      <Testimonials />
      <Contact />
      <Footer />  
    </BrowserRouter>
  )
}

export default App