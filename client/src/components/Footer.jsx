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
import logo from '../assets/sushi-1.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="SushiKing Logo" 
                    className="h-8 w-8 object-contain" 
                  />
                </div>
                <h3 className="text-2xl font-black text-white">
                  SushiKing
                </h3>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-4 font-medium text-sm">
              Bringing authentic Japanese flavors to your table with the finest ingredients 
              and traditional techniques passed down through generations.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaHeart className="text-red-600" />
              <span className="text-xs font-semibold">Crafted with passion since 1985</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-red-600 flex items-center justify-center">
                <FaArrowRight className="text-white text-xs" />
              </div>
              Quick Links
            </h4>
            <ul className="space-y-2">
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
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group font-semibold text-sm"
                  >
                    <div className="w-1 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-red-600 flex items-center justify-center">
                <FaPhone className="text-white text-xs" />
              </div>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-8 h-8 bg-gray-900 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <FaMapMarkerAlt className="text-red-600 group-hover:text-white text-xs" />
                </div>
                <div>
                  <p className="font-semibold text-sm">123 Sakura Street</p>
                  <p className="text-gray-400 text-xs">Tokyo, Japan 100-0001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-8 h-8 bg-gray-900 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <FaPhone className="text-red-600 group-hover:text-white text-xs" />
                </div>
                <div>
                  <p className="font-semibold text-sm">+81 3-1234-5678</p>
                  <p className="text-gray-400 text-xs">Mon-Sun, 9AM-10PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-8 h-8 bg-gray-900 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <FaEnvelope className="text-red-600 group-hover:text-white text-xs" />
                </div>
                <div>
                  <p className="font-semibold text-sm">hello@sushiking.com</p>
                  <p className="text-gray-400 text-xs">We reply within 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-black mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-red-600 flex items-center justify-center">
                <FaClock className="text-white text-xs" />
              </div>
              Stay Connected
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-2 mb-4">
              {[
                { icon: FaFacebook, color: 'hover:bg-blue-600', label: 'Facebook' },
                { icon: FaInstagram, color: 'hover:bg-pink-600', label: 'Instagram' },
                { icon: FaTwitter, color: 'hover:bg-sky-500', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group w-10 h-10 bg-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-105 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon 
                    size={16} 
                    className="text-gray-300 group-hover:text-white transition-colors" 
                  />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 p-3 border border-gray-700">
              <p className="text-gray-300 font-semibold mb-2 text-xs">
                Get exclusive offers and updates
              </p>
              <div className="flex gap-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-black border border-gray-600 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-600"
                />
                <button className="px-3 py-2 bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-gray-400 text-xs font-semibold order-2 md:order-1">
            © {new Date().getFullYear()} SushiKing. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs order-1 md:order-2">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors font-semibold">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors font-semibold">
              Terms of Service
            </Link>
            <Link to="/aboutus" className="text-gray-400 hover:text-white transition-colors font-semibold">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold order-3">
            <span>Made with</span>
            <FaHeart className="text-red-600" />
            <span>for sushi lovers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer