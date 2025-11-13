import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import AdminDashboard from './pages/Admin/Dashboard'
import AdminOrders from './pages/Admin/Orders'
import AdminMenu from './pages/Admin/MenuManagement'
import Header from './components/Header'
import Footer from './components/Footer'
import Trending from './pages/Trending'
import { CartProvider } from './context/CartContext';
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/menu" element={<AdminMenu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
