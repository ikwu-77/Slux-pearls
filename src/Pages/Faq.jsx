import React from 'react'
import FaqList from '../Components/FaqList.jsx'
import site from '../Data/site.js'

function Faq() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Slux Pearl, I have a question.')}`

  return (
    <section className="book">
      <span className="label">Help</span>
      <h1>Questions &amp; answers</h1>
      <p className="shop-note">Quick answers to what customers ask us most.</p>

      <FaqList />

      <div className="cta-banner">
        <h3>Can't find your answer?</h3>
        <p>Send us a message and we'll get back to you.</p>
        <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
      </div>
    </section>
  )
}

export default Faq