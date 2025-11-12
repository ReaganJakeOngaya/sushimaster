import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaHeart
} from 'react-icons/fa'
import logo from '../assets/sushi-12.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-lg">
                    <img 
                       src={logo} 
                       alt="SushiKing Logo" 
                       className="h-10 w-10 object-contain" 
                    />
                  </span>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                  SushiKing
                </h3>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed mb-6 font-medium">
              Bringing authentic Japanese flavors to your table with the finest ingredients 
              and traditional techniques passed down through generations.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="text-sm font-semibold">Crafted with passion since 1985</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-black mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center">
                <FaArrowRight className="text-white text-sm" />
              </div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Menu', path: '/menu' },
                { name: 'Trending', path: '/trending' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/aboutus' },
                { name: 'Cart', path: '/cart' },
                { name: 'Profile', path: '/profile' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group font-semibold"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-black mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center">
                <FaPhone className="text-white text-sm" />
              </div>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">
                  <FaMapMarkerAlt className="text-orange-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">123 Sakura Street</p>
                  <p className="text-slate-400 text-sm">Tokyo, Japan 100-0001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">
                  <FaPhone className="text-orange-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">+81 3-1234-5678</p>
                  <p className="text-slate-400 text-sm">Mon-Sun, 11AM-10PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">
                  <FaEnvelope className="text-orange-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">hello@sushiking.com</p>
                  <p className="text-slate-400 text-sm">We reply within 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-black mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center">
                <FaClock className="text-white text-sm" />
              </div>
              Stay Connected
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {[
                { icon: FaFacebook, color: 'hover:bg-blue-600', label: 'Facebook' },
                { icon: FaInstagram, color: 'hover:bg-pink-600', label: 'Instagram' },
                { icon: FaTwitter, color: 'hover:bg-sky-500', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon 
                    size={18} 
                    className="text-slate-300 group-hover:text-white transition-colors" 
                  />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-4 border border-slate-600">
              <p className="text-slate-300 font-semibold mb-3 text-sm">
                Get exclusive offers and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm font-semibold">
            © {new Date().getFullYear()} SushiKing. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors font-semibold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors font-semibold">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors font-semibold">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>for sushi lovers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer