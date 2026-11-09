import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import packages from '../Data/packages.js'
import PackageCard from '../Components/PackageCard.jsx'

const categories = ['All', 'Nails', 'Lashes', 'Bundles', 'Accessories']

function Shop() {
  const location = useLocation()
  const [params] = useSearchParams()
  const searchRef = useRef(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(() => {
  const wanted = params.get('category')
  return categories.includes(wanted) ? wanted : 'All'
})
  const [sort, setSort] = useState('featured')
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    if (location.state?.focusSearch) searchRef.current?.focus()
  }, [location.key])

  function clearFilters() {
    setSearch('')
    setCategory('All')
    setSort('featured')
  }

  let results = packages.filter((p) => {
    const text = `${p.name} ${p.items.join(' ')} ${p.nails || ''} ${p.lashes || ''}`.toLowerCase()
    return (
      text.includes(search.toLowerCase()) &&
      (category === 'All' || p.category === category)
    )
  })

  if (sort === 'low') {
    results = [...results].sort((a, b) => (a.priceValue ?? 1e12) - (b.priceValue ?? 1e12))
  }
  if (sort === 'high') {
    results = [...results].sort((a, b) => (b.priceValue ?? -1) - (a.priceValue ?? -1))
  }

  return (
    <>
      <section className="shop-banner">
        <div className="shop-banner-inner">
          <h1>Shop our<br />beauty packages</h1>
          <p>Nail sets, lash styles, bundles and more. Find your perfect match.</p>
        </div>
      </section>

      <section className="shop">
        <p className="shop-note">
          Prices marked TBC or "to be confirmed" will be confirmed when you place your request.
        </p>

        <div className="shop-controls">
          <input
            ref={searchRef}
            className="search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="panel-toggle" onClick={() => setPanelOpen((o) => !o)}>
            Filter &amp; sort
          </button>
          <div className={panelOpen ? 'filter-panel open' : 'filter-panel'}>
            <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category">
              {categories.map((c) => (
                <option key={c} value={c}>{c === 'All' ? 'All categories' : c}</option>
              ))}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
              <option value="featured">Sort by: Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
            <button className="clear-link" onClick={clearFilters}>Clear filters</button>
          </div>
        </div>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={category === c ? 'filter active' : 'filter'}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="package-grid">
          {results.map((pack) => (
            <PackageCard pack={pack} key={pack.name} showOrder />
          ))}
        </div>
        {results.length === 0 && <p className="shop-note">Nothing found. Try another search.</p>}

        <div className="more-banner">
          <h2>More beauty. More options.</h2>
          <p>Explore our full range of nails, lashes and beauty bundles.</p>
          <button
            className="btn btn-primary"
            onClick={() => { clearFilters(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            View all products →
          </button>
        </div>
      </section>
    </>
  )
}

export default Shop