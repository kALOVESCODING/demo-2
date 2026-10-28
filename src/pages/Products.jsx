import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [sort, setSort] = useState('default')
  const q = params.get('q') || ''
  const category = params.get('category') || 'All'

  const setCategory = (c) => {
    const next = new URLSearchParams(params)
    c === 'All' ? next.delete('category') : next.set('category', c)
    setParams(next)
  }

  const list = useMemo(() => {
    let l = products.filter((p) =>
      (category === 'All' || p.category === category) &&
      (q === '' || `${p.name} ${p.category}`.toLowerCase().includes(q.toLowerCase())))
    if (sort === 'low')    l = [...l].sort((a, b) => a.price - b.price)
    if (sort === 'high')   l = [...l].sort((a, b) => b.price - a.price)
    if (sort === 'rating') l = [...l].sort((a, b) => b.rating - a.rating)
    return l
  }, [q, category, sort])

  return (
    <>
      <h2 className="title">All Products {q && <small>for "{q}"</small>}</h2>

      <div className="toolbar">
        <div className="chips">
          {['All', ...categories].map((c) => (
            <button key={c} className={`chip ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {list.length === 0 ? <p>No products found.</p> :
        <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>}
    </>
  )
}
