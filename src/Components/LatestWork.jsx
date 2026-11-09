import React from 'react'
import { Link } from 'react-router-dom'
import works from '../Data/portfolio.js'

function LatestWork() {
  if (works.length === 0) return null

  return (
    <section className="latest">
      <span className="label">Our work</span>
      <h2>Latest from the studio</h2>

      <div className="latest-grid">
        {works.slice(0, 4).map((w) => (
          <Link to="/portfolio" key={w.image} aria-label="See our gallery">
            <img src={w.image} alt={w.title || w.category} loading="lazy" />
          </Link>
        ))}
      </div>

      <Link to="/portfolio" className="btn btn-outline">See the full gallery →</Link>
    </section>
  )
}

export default LatestWork