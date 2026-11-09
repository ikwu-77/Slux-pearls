import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiSliders, FiSend } from 'react-icons/fi'

const steps = [
  {
    icon: <FiShoppingBag />,
    title: 'Choose your set',
    text: 'Browse the shop and pick the package you love.',
  },
  {
    icon: <FiSliders />,
    title: 'Make it yours',
    text: 'Choose your nail shape, length and lash style, and add your nail sizes.',
  },
  {
    icon: <FiSend />,
    title: 'Send your order',
    text: 'Tap "Send order on WhatsApp" and we will reply to confirm everything.',
  },
]

function HowItWorks() {
  return (
    <section className="how">
      <span className="label">Simple and easy</span>
      <h2>How it works</h2>

      <div className="how-grid">
        {steps.map((s, i) => (
          <div className="how-card" key={s.title}>
            <span className="how-icon">{s.icon}</span>
            <span className="how-step">Step {i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <div className="how-links">
        <Link to="/size-guide" className="text-link">Not sure of your size? →</Link>
        <Link to="/faq" className="text-link">Got questions? →</Link>
      </div>
    </section>
  )
}

export default HowItWorks