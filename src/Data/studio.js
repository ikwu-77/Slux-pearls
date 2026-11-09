const studio = {
  // 6. How long each service takes and what it includes
  details: {
    ready: false,
    items: [
      { name: 'Nail Application', time: 'About 1 hour', includes: 'Nail prep, fitting and application of your chosen set.' },
      { name: 'Lash Application', time: 'About 1 hour', includes: 'Lash application in your chosen style.' },
      { name: 'Nail & Lash Combo', time: 'About 2 hours', includes: 'Your nail set and lashes in one visit.' },
      { name: 'Custom Designs', time: 'Confirmed on request', includes: 'Timing depends on the design you choose.' },
    ],
  },

  // 8. Where and when
  visit: {
    ready: false,
    where: 'Studio address, or home visits in your area',
    hours: [
      ['Monday to Friday', '10:00 – 18:00'],
      ['Saturday', '10:00 – 16:00'],
      ['Sunday', 'Closed'],
    ],
    note: 'Appointments are by request. We confirm your slot on WhatsApp.',
  },

  // 9. Booking policy
  policy: {
    ready: false,
    points: [
      'A deposit may be needed to secure your slot.',
      'Please tell us at least 24 hours ahead if you need to reschedule.',
      'Late arrivals may mean a shorter session.',
    ],
  },
}

export default studio