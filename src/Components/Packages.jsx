import React from 'react'
import { Link } from 'react-router-dom'
import packages from '../Data/packages.js'
import PackageCard from './PackageCard.jsx'

function Packages() {
  const featured = packages.filter((p) => p.nails).slice(0, 3)

  return (
    <section className="packages" id="packages">
      <div className="packages-head">
        <h2>Featured packages</h2>
        <Link to="/shop">View all</Link>
      </div>
      <div className="package-grid">
        {featured.map((pack) => (
          <PackageCard pack={pack} key={pack.name} compact />
        ))}
      </div>
    </section>
  )
}

export default Packages