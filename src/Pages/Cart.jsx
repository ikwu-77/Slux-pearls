import React from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'
import { useCart } from '../Components/CartContext.jsx'
import site from '../Data/site.js'

const naira = (n) => '₦' + n.toLocaleString('en-NG')

function Cart() {
  const { items, setQty, removeItem, clear } = useCart()

  if (items.length === 0) {
    return (
      <section className="cart">
        <h1>Your cart</h1>
        <p className="shop-note">Your cart is empty.</p>
        <Link to="/shop" className="btn btn-primary">Browse the shop</Link>
      </section>
    )
  }

  const total = items
    .filter((i) => i.priceValue != null)
    .reduce((sum, i) => sum + i.priceValue * i.qty, 0)
  const hasTbc = items.some((i) => i.priceValue == null)

  const lines = items.map((i, n) => {
    const opts = Object.entries(i.choices || {}).map(([k, v]) => `${k}: ${v}`).join(', ')
    const price = i.priceValue != null ? naira(i.priceValue * i.qty) : 'price TBC'
    return `${n + 1}. ${i.name} x${i.qty}${opts ? ` (${opts})` : ''} - ${price}`
  })
  const text = [
    'Hi Slux Pearl, I would like to order:',
    '',
    ...lines,
    '',
    `Total: ${naira(total)}${hasTbc ? ' + items with price to be confirmed' : ''}`,
  ].join('\n')
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

  return (
    <section className="cart">
      <h1>Your cart</h1>

      {items.map((i) => (
        <div className="cart-row" key={i.key}>
          <div>
            <Link to={`/shop/${i.slug}`}>{i.name}</Link>
            <small>{Object.entries(i.choices || {}).map(([k, v]) => `${k}: ${v}`).join(' · ')}</small>
          </div>
          <div className="qty">
            <button onClick={() => setQty(i.key, i.qty - 1)} aria-label="Less">−</button>
            <span>{i.qty}</span>
            <button onClick={() => setQty(i.key, i.qty + 1)} aria-label="More">+</button>
          </div>
          <span className="cart-price">{i.priceValue != null ? naira(i.priceValue * i.qty) : 'TBC'}</span>
          <button className="remove-btn" onClick={() => removeItem(i.key)} aria-label={`Remove ${i.name}`}>
            <FiTrash2 />
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <strong>{naira(total)}{hasTbc ? ' + TBC' : ''}</strong>
        </div>
        {hasTbc && (
          <p className="shop-note">Items marked TBC will have their price confirmed when you place your request.</p>
        )}
        <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
          Send order on WhatsApp
        </a>
        <button className="clear-link" onClick={clear}>Clear cart</button>
      </div>
    </section>
  )
}

export default Cart