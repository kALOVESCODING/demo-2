import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  // cart = [{ id, qty }]
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart')) || [] } catch { return [] }
  })

  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])

  const addToCart = (id) =>
    setCart((c) => c.find((i) => i.id === id)
      ? c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      : [...c, { id, qty: 1 }])

  const setQty = (id, qty) =>
    setCart((c) => qty < 1 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i)))

  const removeItem = (id) => setCart((c) => c.filter((i) => i.id !== id))
  const clearCart = () => setCart([])
  const count = cart.reduce((n, i) => n + i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, setQty, removeItem, clearCart, count }}>
      {children}
    </CartContext.Provider>
  )
}
