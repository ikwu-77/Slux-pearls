import React from 'react'
import { Link } from 'react-router-dom'
import {
  FiStar, FiEye, FiHeart, FiEdit3, FiSend, FiMessageCircle, FiSmile, FiMapPin, FiClock,
} from 'react-icons/fi'
import services from '../Data/services.js'
import { lashStyles, nailShapes, nailLengths } from '../Data/styles.js'
import studio from '../Data/studio.js'
import FaqList from '../Components/FaqList.jsx'

const icons = {
  nails: <FiStar />,
  lashes: <FiEye />,
  combo: <FiHeart />,
  custom: <FiEdit3 />,
}

const shapePaths = {
  Square: 'M14 86 V14 H46 V86 Z',
  Almond: 'M14 86 V46 C14 26 24 12 30 8 C36 12 46 26 46 46 V86 Z',
  Stiletto: 'M14 86 V52 C14 34 26 16 30 4 C34 16 46 34 46 52 V86 Z',
}

function NailShape({ name }) {
  return (
    <svg viewBox="0 0 60 90" className="nail-art" aria-hidden="true">
      <path d={shapePaths[name]} />
    </svg>
  )
}

function StyleCard({ item, art }) {
  return (
    <div className="style-card">
      <div className="style-art">
        {item.image ? <img src={item.image} alt={item.name} loading="lazy" /> : art}
      </div>
      <h4>{item.name}</h4>
      <p>{item.text}</p>
    </div>
  )
}

const steps = [
  { icon: <FiSend />, title: 'Send your request', text: 'Pick a service, date and time on the Book page.' },
  { icon: <FiMessageCircle />, title: 'We confirm', text: 'We reply on WhatsApp to confirm availability.' },
  { icon: <FiSmile />, title: 'Enjoy your session', text: 'Sit back and enjoy your new look.' },
]

function Services() {
  return (
    <section className="book wide">
      <span className="label">What we offer</span>
      <h1>Our services</h1>

      <div className="svc-grid">
        {services.map((s) => (
          <div className="svc-card" key={s.name}>
            <div className="svc-img">
              {s.image ? (
                <img src={s.image} alt={s.name} loading="lazy" />
              ) : (
                <div className="svc-ph">
                  {icons[s.icon]}
                  <small>Photo coming soon</small>
                </div>
              )}
            </div>
            <div className="svc-body">
              <h4>{s.name}</h4>
              <p>{s.blurb}</p>
            </div>
          </div>
        ))}
      </div>

      {studio.details.ready && (
        <>
          <h3 className="guide-h">What to expect</h3>
          <div className="expect-list">
            {studio.details.items.map((d) => (
              <div className="expect-row" key={d.name}>
                <div>
                  <strong>{d.name}</strong>
                  <p>{d.includes}</p>
                </div>
                <span className="time-pill"><FiClock /> {d.time}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <h3 className="guide-h">Lash styles</h3>
      <div className="style-grid">
        {lashStyles.map((l) => (
          <StyleCard key={l.name} item={l} art={<FiEye />} />
        ))}
      </div>

      <h3 className="guide-h">Nail shapes</h3>
      <div className="style-grid">
        {nailShapes.map((n) => (
          <StyleCard key={n.name} item={n} art={<NailShape name={n.name} />} />
        ))}
      </div>
      <p className="shop-note">{nailLengths}</p>

      <h3 className="guide-h">How a session works</h3>
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

      {studio.visit.ready && (
        <>
          <h3 className="guide-h">Find us</h3>
          <div className="info-card">
            <p className="visit-where"><FiMapPin /> {studio.visit.where}</p>
            <table className="hours-table">
              <tbody>
                {studio.visit.hours.map(([day, time]) => (
                  <tr key={day}><td>{day}</td><td>{time}</td></tr>
                ))}
              </tbody>
            </table>
            {studio.visit.note && <p className="shop-note">{studio.visit.note}</p>}
          </div>
        </>
      )}

      {studio.policy.ready && (
        <>
          <h3 className="guide-h">Booking policy</h3>
          <div className="info-card">
            <ul className="policy-list">
              {studio.policy.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </>
      )}

      <div className="cta-banner">
        <h3>Ready for your next look?</h3>
        <p>Book your appointment and let's make it happen.</p>
        <Link to="/book" className="btn btn-primary">Book now →</Link>
      </div>

      <h3 className="guide-h">Good to know</h3>
      <FaqList topics={['booking', 'lashes']} />
    </section>
  )
}

export default Services