import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './Components/Intro.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import WhatsAppButton from './Components/WhatsAppButton.jsx'
import Home from './Pages/Home.jsx'
import Shop from './Pages/shop.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Book from './Pages/Book.jsx'
import Services from './Pages/Services.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import SizeGuide from './Pages/SizeGuide.jsx'
import Faq from './Pages/Faq.jsx'
import Legal from './Pages/Legal.jsx'

function App() {
  const [showIntro, setShowIntro] = useState(true)  

  return (
    <>
      {showIntro && <Intro onDone={() => setShowIntro(false)} />}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/book" element={<Book />} />
        <Route path="/services" element={<Services />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Legal title="Privacy" />} />
        <Route path="/terms" element={<Legal title="Terms" />} />
        <Route path="*" element={<p className="soon">Coming soon</p>} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App 