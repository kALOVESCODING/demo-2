import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
    <div className="card">
      <Link to={`/products/${product.id}`} className="card-img">{product.icon}</Link>
      <span className="tag">{product.category}</span>
      <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
      <p className="rating">⭐ {product.rating}</p>
      <div className="card-row">
        <strong className="price">{formatPrice(product.price)}</strong>
        <button className="btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
      </div>
    </div>
  )
}
