import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Header and Footer are written once and shown on every page.
export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="container main"><Outlet /></main>
      <Footer />
    </div>
  )
}
