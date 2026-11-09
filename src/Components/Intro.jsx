import React, { useEffect, useRef, useState } from 'react'

const layers = [
  { name: 'ring', src: '/intro/ring.png', cls: 'ring' },
  { name: 's', src: '/intro/nail-s.png', cls: 'nail n-s' },
  { name: 'l', src: '/intro/nail-l.png', cls: 'nail n-l' },
  { name: 'x', src: '/intro/nail-x.png', cls: 'nail n-x' },
  { name: 'u', src: '/intro/nail-u.png', cls: 'nail n-u' },
  { name: 'text', src: '/intro/pearls-text.png', cls: 'pearls' },
  { name: 'final', src: '/intro/logo-final.jpg', cls: 'final' },
]

function Intro({ onDone }) {
  const [ready, setReady] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const loaded = useRef(new Set())
  const leavingRef = useRef(false)

  function mark(name) {
    loaded.current.add(name)
    if (loaded.current.size === layers.length) setReady(true)
  }

  function leave() {
    if (leavingRef.current) return
    leavingRef.current = true
    setLeaving(true)
    setTimeout(onDone, 700)
  }

  // when the animation has played and held for a moment, go to the site
  useEffect(() => {
    if (!ready) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = setTimeout(leave, reduce ? 800 : 5000)
    return () => clearTimeout(timer)
  }, [ready])

  // safety net: never trap a visitor on the intro if an image fails to load
  useEffect(() => {
    const timer = setTimeout(leave, 9000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className={`intro ${ready ? 'ready' : ''} ${leaving ? 'leaving' : ''}`}>
      <div className="intro-stage">
        {layers.map((l) => (
          <img
            key={l.name}
            src={l.src}
            alt={l.name === 'final' ? 'Slux Pearls' : ''}
            className={`layer ${l.cls}`}
            draggable="false"
            ref={(el) => { if (el && el.complete) mark(l.name) }}
            onLoad={() => mark(l.name)}
          />
        ))}
      </div>

      {!leaving && <button className="intro-skip" onClick={leave}>Skip</button>}
    </div>
  )
}

export default Intro