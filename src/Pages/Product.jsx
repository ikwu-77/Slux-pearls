import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import packages from '../Data/packages.js'
import { useCart } from '../Components/CartContext.jsx'

function ProductView({ slug }) {
  const pack = packages.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [index, setIndex] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [sizes, setSizes] = useState('')
  const [choices, setChoices] = useState(() => {
    const first = {}
    if (pack?.options) Object.entries(pack.options).forEach(([k, v]) => { first[k] = v[0] })
    return first
  })

  if (!pack) {
    return (
      <section className="book">
        <h1>Product not found</h1>
        <Link to="/shop" className="btn btn-primary">Back to shop</Link>
      </section>
    )
  }

  const images = [pack.image, ...(pack.gallery || [])].filter(Boolean)

  function add() {
    const finalChoices = sizes.trim() ? { ...choices, 'Nail sizes': sizes.trim() } : choices
    addItem({
      key: `${pack.slug}|${JSON.stringify(finalChoices)}`,
      slug: pack.slug,
      name: pack.name,
      price: pack.price,
      priceValue: pack.priceValue,
      choices: finalChoices,
      qty,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <section className="product">
      <Link to="/shop" className="back-link">← Back to shop</Link>

      <div className="product-grid">
        <div className="gallery">
          {images.length > 1 && (
            <div className="thumbs">
              {images.map((src, i) => (
                <button
                  key={src}
                  className={i === index ? 'thumb active' : 'thumb'}
                  onClick={() => setIndex(i)}
                  aria-label={`Photo ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
          <div className="gallery-main">
            {images.length ? (
              <img src={images[index]} alt={pack.name} />
            ) : (
              <div className="img-soon">
                <span className="brand-mark" aria-hidden="true" />
                <small>Image coming soon</small>
              </div>
            )}
            {images.length > 1 && (
              <>
                <button className="arrow left" onClick={() => setIndex((index - 1 + images.length) % images.length)} aria-label="Previous photo">
                  <FiChevronLeft />
                </button>
                <button className="arrow right" onClick={() => setIndex((index + 1) % images.length)} aria-label="Next photo">
                  <FiChevronRight />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="product-info">
          <h1>
            {pack.name} <span className="pill">{pack.category.replace(/s$/, '')}</span>
          </h1>
          <p className="product-price">{pack.price}</p>
          {pack.tag && <p className="shop-note">{pack.tag}</p>}

          {pack.items.length > 0 && (
            <>
              <h3 className="includes">Includes:</h3>
              <ul>
                {pack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {pack.note && <p className="package-note">{pack.note}</p>}

          {pack.options && (
            <div className="options">
              <h3>Customisation options</h3>
              {Object.entries(pack.options).map(([label, values]) => (
                <label key={label}>
                  {label}
                  <select
                    value={choices[label]}
                    onChange={(e) => setChoices({ ...choices, [label]: e.target.value })}
                  >
                    {values.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </label>
              ))}
              {pack.nails && (
                <label>
                  Your nail sizes (optional)
                  <input
                    type="text"
                    value={sizes}
                    onChange={(e) => setSizes(e.target.value)}
                    placeholder="Write your sizes, or 'not sure yet'"
                  />
                  <Link to="/size-guide" className="text-link">How to measure your nails</Link>
                </label>
              )}
            </div>
          )}

          <div className="buy-row">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Less">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="More">+</button>
            </div>
            <button className="btn btn-primary add-btn" onClick={add}>
              {added ? 'Added ✓' : 'Add to cart →'}
            </button>
          </div>
          {added && <Link to="/cart" className="text-link">View cart</Link>}
        </div>
      </div>
    </section>
  )
}

function Product() {
  const { slug } = useParams()
  return <ProductView key={slug} slug={slug} />
}

export default Product