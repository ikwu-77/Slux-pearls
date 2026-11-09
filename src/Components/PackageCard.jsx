import React from 'react'
import { Link } from 'react-router-dom'

function PackageCard({ pack, showOrder, compact }) {
  return (
    <article className={compact ? 'package-card compact' : 'package-card'}>
      {pack.tag && <span className="label">{pack.tag}</span>}
      <div className="package-top">
        <h3>{pack.name}</h3>
        <span className="price">{pack.price}</span>
      </div>

      <div className="package-img">
        {pack.featured && <span className="badge">Featured</span>}
        {pack.image ? (
          <img src={pack.image} alt={pack.name} />
        ) : (
          <div className="img-soon">
            <span className="brand-mark" aria-hidden="true" />
            <small>Image coming soon</small>
          </div>
        )}
      </div>

      {pack.items.length > 0 && (
        <ul>
          {(compact ? pack.items.slice(0, 3) : pack.items).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {!compact && pack.nails && (
        <div className="package-details">
          <p><strong>Nails:</strong> {pack.nails}</p>
          <p><strong>Lashes:</strong> {pack.lashes}</p>
        </div>
      )}
      {!compact && pack.note && <p className="package-note">{pack.note}</p>}

      {compact && (
        <Link to={`/shop/${pack.slug}`} className="btn btn-outline order-btn">View details</Link>
      )}
      {showOrder && (
        <Link to={`/shop/${pack.slug}`} className="btn btn-outline order-btn">
          Order {pack.name.replace('Slux ', '')}
        </Link>
      )}
    </article>
  )
}

export default PackageCard