import React from 'react'
import { Link } from 'react-router-dom'

function BookingCTA() {
  return (
    <section className="booking" id="book">
      <h2>Prefer it done for you?</h2>
      <p>Request a nail or lash appointment and we'll get back to you to confirm availability.</p>
      <Link to="/book" className="btn btn-primary">Request a booking</Link>
    </section>
  )
}

export default BookingCTA