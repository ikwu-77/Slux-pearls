import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import site from '../Data/site.js'

function WhatsAppButton() {
  const text = encodeURIComponent('Hi Slux Pearl, I have a question.')
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton