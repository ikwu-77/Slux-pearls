import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiChevronRight } from 'react-icons/fi'
import { FaInstagram, FaTiktok, FaFacebookF, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import site from '../Data/site.js'

function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  function goHome() {
    if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const active = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <>
      <header className="header">
        <Link to="/" className="brand" onClick={goHome} aria-label="Slux Pearl home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Slux Pearl</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {site.links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={active}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-icons">
          <Link to="/shop" state={{ focusSearch: true }} aria-label="Search products"><FiSearch /></Link>
          <Link to="/cart" aria-label="Cart"><FiShoppingBag /></Link>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><FiMenu /></button>
        </div>
      </header>

      <div className={open ? 'drawer-backdrop show' : 'drawer-backdrop'} onClick={() => setOpen(false)} />
      <aside className={open ? 'drawer open' : 'drawer'} aria-hidden={!open}>
        <div className="drawer-top">
          <Link to="/" className="brand" aria-label="Slux Pearl home">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">Slux Pearl</span>
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Close menu"><FiX /></button>
        </div>

        <nav className="drawer-links">
          {site.links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={active}>
              {l.label} <FiChevronRight />
            </NavLink>
          ))}
        </nav>

        <div className="drawer-follow">
          <p>Follow us</p>
          <div className="socials">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={site.x} target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>

        <a
          className="btn btn-outline whatsapp-btn"
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> WhatsApp enquiry
        </a>

        <div className="drawer-legal">
          <span>© {new Date().getFullYear()} Slux Pearl. All rights reserved.</span>
          <span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span>
        </div>
      </aside>
    </>
  )
}

export default Header