import React, { useState } from 'react'
import works from '../Data/portfolio.js'

const filters = [
  'All',
  'Press-on Nails',
  'French Tips',
  'Nail Art',
  'Classic Lashes',
  'Hybrid Lashes',
  'Wispy Lashes',
  'Cat-Eye Lashes',
]

function Portfolio() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? works : works.filter((w) => w.category === active)

  return (
    <>
      <section className="portfolio-banner">
        <div className="portfolio-banner-inner">
          <span className="label">Our work</span>
          <h1>
            Nail <span className="amp">&amp;</span> <span className="script">Lash</span> Gallery
          </h1>
          <p>Beautiful styles. Real results.</p>
        </div>
      </section>

      <section className="portfolio">
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              className={active === f ? 'filter active' : 'filter'}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {works.length === 0 ? (
          <div className="gallery-empty">
            <h3>Gallery coming soon</h3>
            <p>Photos of real Slux Pearl nail and lash work will appear here.</p>
          </div>
        ) : shown.length === 0 ? (
          <p className="shop-note" style={{ marginTop: 28 }}>No photos in this category yet.</p>
        ) : (
          <div className="masonry">
            {shown.map((w) => (
              <figure key={w.image} className="masonry-item">
                <img src={w.image} alt={w.title || w.category} loading="lazy" />
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default Portfolio