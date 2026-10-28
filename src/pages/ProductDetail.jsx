import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { products, formatPrice } from '../data/products.js'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const p = products.find((x) => x.id === Number(id))

  if (!p) return <p>Product not found. <Link to="/products">Back to products</Link></p>

  return (
    <div className="detail">
      <div className="detail-img">{p.icon}</div>
      <div>
        <span className="tag">{p.category}</span>
        <h1>{p.name}</h1>
        <p className="rating">⭐ {p.rating} / 5</p>
        <p>{p.desc}</p>
        <p className="price big">{formatPrice(p.price)}</p>
        <button className="btn" onClick={() => addToCart(p.id)}>Add to Cart</button>{' '}
        <Link to="/products" className="btn btn-outline">Back</Link>
      </div>
    </div>
  )
}
