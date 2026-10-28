export const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books']

export const products = [
  { id: 1,  name: 'Wireless Headphones', category: 'Electronics', price: 2499, rating: 4.5, icon: '🎧', desc: 'Bluetooth 5.3, 30-hour battery and deep bass.' },
  { id: 2,  name: 'Smart Watch',         category: 'Electronics', price: 3999, rating: 4.3, icon: '⌚', desc: 'Heart-rate, sleep tracking and 7-day battery.' },
  { id: 3,  name: 'Laptop Backpack',     category: 'Fashion',     price: 1299, rating: 4.4, icon: '🎒', desc: 'Water-resistant, fits 15.6 inch laptops.' },
  { id: 4,  name: 'Running Shoes',       category: 'Sports',      price: 2199, rating: 4.6, icon: '👟', desc: 'Lightweight cushioned sole for daily runs.' },
  { id: 5,  name: 'Denim Jacket',        category: 'Fashion',     price: 1899, rating: 4.2, icon: '🧥', desc: 'Classic fit with soft inner lining.' },
  { id: 6,  name: 'Coffee Maker',        category: 'Home',        price: 3299, rating: 4.1, icon: '☕', desc: 'Brews 6 cups in under 8 minutes.' },
  { id: 7,  name: 'Table Lamp',          category: 'Home',        price: 799,  rating: 4.0, icon: '💡', desc: 'Adjustable arm with warm LED light.' },
  { id: 8,  name: 'Face Moisturizer',    category: 'Beauty',      price: 449,  rating: 4.4, icon: '🧴', desc: 'Hydrating cream with SPF 30.' },
  { id: 9,  name: 'Yoga Mat',            category: 'Sports',      price: 699,  rating: 4.5, icon: '🧘', desc: 'Non-slip 6mm mat with carry strap.' },
  { id: 10, name: 'Bluetooth Speaker',   category: 'Electronics', price: 1799, rating: 4.3, icon: '🔊', desc: 'Portable, waterproof, 12-hour playtime.' },
  { id: 11, name: 'Sunglasses',          category: 'Fashion',     price: 999,  rating: 4.1, icon: '🕶️', desc: 'UV400 protection with polarized lenses.' },
  { id: 12, name: 'JavaScript Book',     category: 'Books',       price: 549,  rating: 4.7, icon: '📘', desc: 'Learn modern JavaScript step by step.' },
  { id: 13, name: 'Lipstick Set',        category: 'Beauty',      price: 599,  rating: 4.2, icon: '💄', desc: 'Set of 4 long-lasting matte shades.' },
  { id: 14, name: 'Dumbbell Set',        category: 'Sports',      price: 1999, rating: 4.4, icon: '🏋️', desc: 'Adjustable 2 x 5 kg dumbbells.' },
  { id: 15, name: 'Desk Organizer',      category: 'Home',        price: 399,  rating: 4.0, icon: '🗂️', desc: 'Keeps pens, notes and gadgets tidy.' },
  { id: 16, name: 'Python Crash Course', category: 'Books',       price: 649,  rating: 4.8, icon: '📗', desc: 'Hands-on, project-based Python guide.' },
]

export const formatPrice = (n) => '₹' + n.toLocaleString('en-IN')
