import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import site from '../Data/site.js'
import photos from '../Data/instagram.js'

function InstagramStrip() {
  return (
    <section className="insta">
      <span className="label">Follow along</span>
      <h2>See more on Instagram</h2>

      {photos.length > 0 && (
        <div className="insta-grid">
          {photos.slice(0, 6).map((src) => (
            <a key={src} href={site.instagram} target="_blank" rel="noreferrer" aria-label="Open our Instagram">
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      )}

      <a className="btn btn-outline" href={site.instagram} target="_blank" rel="noreferrer">
        <FaInstagram /> Follow {site.instagramHandle}
      </a>
    </section>
  )
}

export default InstagramStrip