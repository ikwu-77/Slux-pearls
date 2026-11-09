import React from 'react'
import { Link } from 'react-router-dom'
import faqs from '../Data/faqs.js'

function FaqList({ topics }) {
  const list = topics
    ? faqs.filter((f) => f.topics?.some((t) => topics.includes(t)))
    : faqs

  if (list.length === 0) return null

  return (
    <div className="faq-list">
      {list.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
          {f.link && <Link to={f.link.to} className="text-link">{f.link.label}</Link>}
        </details>
      ))}
    </div>
  )
}

export default FaqList