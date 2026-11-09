import React from 'react'
import { Link } from 'react-router-dom'
import sizes from '../Data/sizes.js'
import site from '../Data/site.js'
import FaqList from '../Components/FaqList.jsx'

const steps = [
  'Wash and dry your hands. Use bare nails, with no polish or gel.',
  'Use a flexible measuring tape, or a strip of paper or sticky tape that you mark and then lay against a ruler.',
  'Measure across the widest part of each nail, from one side edge to the other, in millimetres.',
  'Measure every finger on both hands. Your left and right hands can be different.',
  'Match each measurement to the nearest size in the chart below.',
  'Between two sizes? Choose the larger one and file the sides to fit.',
]

function SizeGuide() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Slux Pearl, I need help choosing my nail size.')}`

  return (
    <section className="book">
      <span className="label">Press-on nails</span>
      <h1>Nail size guide</h1>
      <p className="shop-note">
        The right size is what makes press-ons sit flat, look natural and last. It takes about five minutes.
      </p>

      <h3 className="guide-h">How to measure</h3>
      <ol className="guide-steps">
        {steps.map((s) => <li key={s}>{s}</li>)}
      </ol>

      <h3 className="guide-h">Size chart</h3>
      <table className="size-table">
        <thead>
          <tr><th>Size</th><th>Nail width</th></tr>
        </thead>
        <tbody>
          {sizes.map((s) => (
            <tr key={s.size}><td>{s.size}</td><td>{s.width}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="shop-note">
        Sizes can differ slightly between sets. If you're unsure, send us your measurements and we'll match them for you.
      </p>

      <h3 className="guide-h">Application &amp; care</h3>
       <FaqList topics={['nails']} />

      <div className="cta-banner">
        <h3>Need help choosing?</h3>
        <p>Message us your measurements or a photo of your hands.</p>
        <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
        {' '}
        <Link to="/shop" className="btn btn-outline">Back to shop</Link>
      </div>
    </section>
  )
}

export default SizeGuide