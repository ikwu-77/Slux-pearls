 import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import packages from '../Data/packages.js'
import services from '../Data/services.js'
import site from '../Data/site.js'

const steps = ['Details', 'Date & time', 'Review']
const options = [...services.map((s) => s.name), ...packages.map((p) => p.name)]

function Book() {
  const [params] = useSearchParams()
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({
    name: '', email: '', phone: '',
    service: params.get('service') || '',
    date: '', time: '', reference: '', notes: '',
  })

  const set = (key) => (e) => setData({ ...data, [key]: e.target.value })

  function go(n) {
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (step < 3) go(step + 1)
  }

  const text = [
    'Hi Slux Pearl, I would like to request a booking.',
    '',
    `Name: ${data.name}`,
    `Service: ${data.service}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    data.reference ? `Reference: ${data.reference}` : null,
    data.notes ? `Notes: ${data.notes}` : null,
  ].filter((line) => line !== null).join('\n')

  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

  if (sent) {
    return (
      <section className="book">
        <span className="label">Request sent</span>
        <h1>Thank you</h1>
        <p className="shop-note">
          We'll reply to confirm availability. Your booking is only confirmed once we do.
        </p>
        <p className="shop-note">
          If WhatsApp didn't open,{' '}
          <a href={waLink} target="_blank" rel="noreferrer" className="text-link">tap here to send it</a>.
        </p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </section>
    )
  }

  return (
    <section className="book">
      <span className="label">Appointments</span>
      <h1>Book an appointment</h1>
      <p className="shop-note">Fill in the details below and we'll get back to you shortly.</p>

      <ol className="stepper">
        {steps.map((s, i) => (
          <li key={s} className={step === i + 1 ? 'active' : step > i + 1 ? 'done' : ''}>
            <span className="dot">{i + 1}</span>
            <span className="step-name">{s}</span>
          </li>
        ))}
      </ol>

      <form className="book-form" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="form-row">
              <label>
                Full name *
                <input type="text" value={data.name} onChange={set('name')} placeholder="Your full name" required />
              </label>
              <label>
                Email address *
                <input type="email" value={data.email} onChange={set('email')} placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              Phone / WhatsApp number *
              <input type="tel" value={data.phone} onChange={set('phone')} placeholder="+234 800 000 0000" required />
            </label>
            <label>
              Service *
              <select value={data.service} onChange={set('service')} required>
                <option value="">Select a service</option>
                {options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-row">
              <label>
                Preferred date *
                <input
                  type="date"
                  value={data.date}
                  onChange={set('date')}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </label>
              <label>
                Preferred time *
                <input type="time" value={data.time} onChange={set('time')} required />
              </label>
            </div>
            <label>
              Reference image (optional)
              <input
                type="text"
                value={data.reference}
                onChange={set('reference')}
                placeholder="Paste a link to your reference photo"
              />
            </label>
            <label>
              Additional notes (optional)
              <textarea rows="4" value={data.notes} onChange={set('notes')} placeholder="Any special requests?" />
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <dl className="review">
              {[
                ['Name', data.name],
                ['Email', data.email],
                ['Phone / WhatsApp', data.phone],
                ['Service', data.service],
                ['Date', data.date],
                ['Time', data.time],
                ['Reference', data.reference || '—'],
                ['Notes', data.notes || '—'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="shop-note">
              The button below opens WhatsApp with these details ready to send. That's how your request reaches us.
            </p>
          </>
        )}

        <div className="form-actions">
          {step > 1 && (
            <button type="button" className="btn btn-outline" onClick={() => go(step - 1)}>Back</button>
          )}
          {step < 3 ? (
            <button type="submit" className="btn btn-primary">Continue →</button>
          ) : (
            <a
              className="btn btn-primary"
              href={waLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setSent(true)}
            >
              Send request on WhatsApp
            </a>
          )}
        </div>
      </form>
    </section>
  )
}

export default Book