import React from 'react'
import { Link } from 'react-router-dom'
import { FiStar, FiEye, FiGift, FiHeart } from 'react-icons/fi'
import packages from '../Data/packages.js'

const categories = [
  { name: 'Nails', icon: <FiStar />, image: '' },
  { name: 'Lashes', icon: <FiEye />, image: '' },
  { name: 'Bundles', icon: <FiGift />, image: '' },
  { name: 'Accessories', icon: <FiHeart />, image: '' },
]

function Categories() {
  return (
    <section className="categories" id="shop">
      <span className="label">Shop by category</span>

      <div className="cat-row">
        {categories.map((c) => {
          const available = packages.some((p) => p.category === c.name)
          const inner = (
            <>
              <span className="cat-circle">
                {c.image ? <img src={c.image} alt="" /> : c.icon}
              </span>
              <span className="cat-name">{c.name}</span>
              {!available && <small className="cat-soon">Coming soon</small>}
            </>
          )
          return available ? (
            <Link key={c.name} to={`/shop?category=${c.name}`} className="cat-item">
              {inner}
            </Link>
          ) : (
            <div key={c.name} className="cat-item disabled">{inner}</div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories