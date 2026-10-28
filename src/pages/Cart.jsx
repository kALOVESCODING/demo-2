import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { products, formatPrice } from '../data/products.js'

export default function Cart() {
  const { cart, setQty, removeItem, clearCart } = useCart()
  const [ordered, setOrdered] = useState(false)

  const rows = cart.map((i) => ({ ...products.find((p) => p.id === i.id), qty: i.qty })).filter((r) => r.id)
  const total = rows.reduce((s, r) => s + r.price * r.qty, 0)

  if (ordered) return (
    <div className="empty"><h2>🎉 Order placed!</h2><p>Thank you for shopping with us.</p>
      <Link to="/products" className="btn">Continue Shopping</Link></div>
  )

  if (rows.length === 0) return (
    <div className="empty"><h2>Your cart is empty</h2><Link to="/products" className="btn">Browse Products</Link></div>
  )

  return (
    <>
      <h2 className="title">Your Cart</h2>
      <div className="cart">
        {rows.map((r) => (
          <div className="cart-row" key={r.id}>
            <span className="cart-icon">{r.icon}</span>
            <div className="grow"><strong>{r.name}</strong><br />{formatPrice(r.price)}</div>
            <div className="qty">
              <button onClick={() => setQty(r.id, r.qty - 1)} aria-label="Decrease">−</button>
              <span>{r.qty}</span>
              <button onClick={() => setQty(r.id, r.qty + 1)} aria-label="Increase">+</button>
            </div>
            <strong className="line-total">{formatPrice(r.price * r.qty)}</strong>
            <button className="remove" onClick={() => removeItem(r.id)} aria-label="Remove">✕</button>
          </div>
        ))}
        <div className="summary">
          <h3>Total: {formatPrice(total)}</h3>
          <button className="btn" onClick={() => { clearCart(); setOrdered(true) }}>Place Order</button>{' '}
          <button className="btn btn-outline" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </>
  )
}
