import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const navigate = useNavigate()

  const onSearch = (e) => {
    e.preventDefault()
    navigate(q.trim() ? `/products?q=${encodeURIComponent(q.trim())}` : '/products')
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">🛍️ ShopZone</Link>

        <form className="search" onSubmit={onSearch} role="search">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." aria-label="Search" />
          <button type="submit" aria-label="Search">🔍</button>
        </form>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation" onClick={() => setOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            🛒 Cart {count > 0 && <span className="badge">{count}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
