import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

export default function Home() {
  const featured = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4)
  return (
    <>
      <section className="hero">
        <h1>Everything you need, in one place</h1>
        <p>Electronics, fashion, home, beauty, sports and books at great prices.</p>
        <Link to="/products" className="btn btn-light">Shop Now</Link>
      </section>

      <h2 className="title">Shop by Category</h2>
      <div className="chips">
        {categories.map((c) => (
          <Link key={c} className="chip" to={`/products?category=${encodeURIComponent(c)}`}>{c}</Link>
        ))}
      </div>

      <h2 className="title">Top Rated</h2>
      <div className="grid">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </>
  )
}
