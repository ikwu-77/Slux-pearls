import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-cover">
      <div className="hero-content">
        <span className="label">Nails · Lashes · Bundles</span>
        <h1>
          Your beauty, <em>your signature.</em>
        </h1>
        <p>Press-on nails, lashes and little luxuries, styled for you.</p>
        <div className="buttons">
          <Link to="/shop" className="btn btn-primary">Shop packages</Link>
          <Link to="/book" className="btn btn-outline">Book an appointment</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero