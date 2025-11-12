import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaFish,
  FaIceCream,
  FaMugHot,
  FaUtensils,
  FaPlus,
  FaMinus,
  FaTrash,
  FaCreditCard,
  FaCheckCircle,
  FaClock,
  FaTimes,
  FaShoppingCart,
  FaStar,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sushi1 from '../assets/sushi-1.png';
import sushi2 from '../assets/sushi-2.png';
import sushi3 from '../assets/sushi-3.png';
import sushi4 from '../assets/sushi-4.png';
import sushi5 from '../assets/sushi-5.png';
import sushi10 from '../assets/sushi-10.png';
import sushi11 from '../assets/sushi-11.png';
import sushi12 from '../assets/sushi-12.png';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [addedItemId, setAddedItemId] = useState(null);
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'Chezu Sushi',
      price: 21.0,
      description: 'Premium cheese sushi with fresh ingredients',
      category: 'sushi',
      rating: 4.8,
      tags: ['Premium', 'Fresh'],
      badge: 'Popular',
      image: sushi12,
    },
    {
      id: 2,
      name: 'Original Sushi',
      price: 19.0,
      description: 'Traditional Japanese sushi made with finest fish',
      category: 'sushi',
      rating: 4.6,
      tags: ['Traditional', 'Classic'],
      image: sushi11,
    },
    {
      id: 3,
      name: 'Nigiri Sushi',
      price: 24.0,
      description: 'Hand-pressed sushi with premium toppings',
      category: 'sushi',
      rating: 4.9,
      tags: ['Hand-pressed', 'Premium'],
      badge: "Chef's Special",
      image: sushi3,
    },
    {
      id: 4,
      name: 'Temaki Sushi',
      price: 18.0,
      description: 'Hand-rolled cone sushi with fresh seaweed',
      category: 'sushi',
      rating: 4.7,
      tags: ['Hand-rolled', 'Fresh'],
      image: sushi2,
    },
    {
      id: 5,
      name: 'Ramen Legendo',
      price: 13.0,
      description: 'Legendary ramen with rich broth and tender noodles',
      category: 'ramen',
      rating: 4.8,
      tags: ['Rich Broth', 'Tender'],
      badge: 'Popular',
      image: sushi10,
    },
    {
      id: 6,
      name: 'Tonkotsu Ramen',
      price: 16.0,
      description: 'Rich pork bone broth with chashu and egg',
      category: 'ramen',
      rating: 4.7,
      tags: ['Pork Bone', 'Chashu'],
      image: sushi4,
    },
    {
      id: 7,
      name: 'Udon Noodles',
      price: 12.0,
      description: 'Thick wheat noodles in savory dashi broth',
      category: 'ramen',
      rating: 4.5,
      tags: ['Thick Noodles', 'Dashi'],
      image: sushi5,
    },
    {
      id: 8,
      name: 'Dango',
      price: 8.0,
      description: 'Sweet rice dumplings with traditional glaze',
      category: 'desserts',
      rating: 4.6,
      tags: ['Sweet', 'Traditional'],
      image: sushi1,
    },
    {
      id: 9,
      name: 'Mochi Ice Cream',
      price: 9.0,
      description: 'Soft mochi filled with premium ice cream',
      category: 'desserts',
      rating: 4.8,
      tags: ['Soft', 'Premium'],
      badge: 'Popular',
      image: sushi1,
    },
    {
      id: 10,
      name: 'Oruncha Tea',
      price: 5.0,
      description: 'Traditional Japanese green tea',
      category: 'drinks',
      rating: 4.5,
      tags: ['Green Tea', 'Traditional'],
      image: sushi4,
    },
    {
      id: 11,
      name: 'Sakura Tea',
      price: 6.0,
      description: 'Delicate cherry blossom flavored tea',
      category: 'drinks',
      rating: 4.7,
      tags: ['Cherry Blossom', 'Delicate'],
      badge: 'Seasonal',
      image: sushi4,
    },
    {
      id: 12,
      name: 'Mugicha',
      price: 4.5,
      description: 'Refreshing barley tea, served cold',
      category: 'drinks',
      rating: 4.4,
      tags: ['Barley', 'Cold'],
      image: sushi4,
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1000);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const delivery = subtotal > 0 ? 3.99 : 0;
  const total = subtotal + tax + delivery;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Menu Section */}
        <div className="lg:col-span-2" data-aos="fade-right">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-orange-100"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                <FaArrowLeft className="text-white text-sm" />
              </div>
              <span className="font-bold text-slate-700">Back to Home</span>
            </Link>
            
            <div className="text-center lg:text-left">
              <h2 className="text-6xl md:text-7xl font-black leading-tight mb-4">
                <span className="text-slate-900">Our</span>{' '}
                <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Menu
                </span>
              </h2>
              <p className="text-xl text-slate-600 font-semibold max-w-2xl">
                Authentic Japanese cuisine crafted with passion and tradition
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12" data-aos="fade-up">
            {[
              { key: 'all', label: 'All Items', icon: FaUtensils },
              { key: 'sushi', label: 'Sushi', icon: FaFish },
              { key: 'ramen', label: 'Ramen', icon: FaUtensils },
              { key: 'desserts', label: 'Desserts', icon: FaIceCream },
              { key: 'drinks', label: 'Drinks', icon: FaMugHot },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                  activeFilter === key
                    ? 'text-white shadow-2xl'
                    : 'text-slate-700 bg-white shadow-lg hover:shadow-xl border-2 border-slate-200'
                }`}
              >
                {/* Background Gradient for Active State */}
                {activeFilter === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl"></div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                  activeFilter === key 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gradient-to-br from-orange-50 to-pink-50 text-orange-600'
                }`}>
                  <Icon size={18} />
                </div>
                
                <span className="relative z-10">{label}</span>
                
                {/* Hover Effect */}
                {activeFilter !== key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                )}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 backdrop-blur-sm"
                data-aos="fade-up"
              >
                {/* Badge */}
                {item.badge && (
                  <div className={`absolute top-6 left-6 z-20 px-4 py-2 rounded-2xl font-black text-sm shadow-lg ${
                    item.badge === "Chef's Special"
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                      : item.badge === 'Seasonal'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-pink-600 text-white'
                  }`}>
                    {item.badge}
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg flex items-center gap-1">
                  <FaStar className="text-yellow-500" size={16} />
                  <span className="font-black text-slate-900">{item.rating}</span>
                </div>

                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-8 transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full max-w-xs py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 ${
                        addedItemId === item.id
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                          : 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {addedItemId === item.id ? (
                        <>
                          <FaCheckCircle size={20} />
                          Added to Cart!
                        </>
                      ) : (
                        <>
                          <FaShoppingCart size={18} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-black text-slate-900">{item.name}</h3>
                    <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 font-medium">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-slate-700 text-sm font-bold rounded-full border border-orange-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                      addedItemId === item.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    {addedItemId === item.id ? (
                      <>
                        <FaCheckCircle size={18} />
                        Item Added!
                      </>
                    ) : (
                      <>
                        <FaPlus size={16} />
                        Quick Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div
          className="lg:col-span-1"
          data-aos="fade-left"
        >
          <div className="sticky top-24 bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm overflow-hidden">
            {/* Cart Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-white flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <FaShoppingCart size={20} />
                  </div>
                  Your Order
                </h2>
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">{cartItemCount}</span>
                  </div>
                  {cartItemCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"></div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center shadow-lg">
                    <FaShoppingCart className="text-slate-400 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Your cart is empty</h3>
                  <p className="text-slate-600 font-medium">Add some delicious items to get started!</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="max-h-96 overflow-y-auto mb-6 space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100 group hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex gap-4">
                          {/* Item Image */}
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center shadow-lg flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          
                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-black text-slate-900 text-lg truncate">{item.name}</h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-slate-400 hover:text-red-500 transition-colors duration-200 p-1 rounded-lg hover:bg-red-50"
                                title="Remove item"
                              >
                                <FaTrash size={14} />
                              </button>
                            </div>
                            
                            <p className="text-slate-600 font-bold mb-3">
                              ${item.price.toFixed(2)} each
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                >
                                  <FaMinus size={10} />
                                </button>
                                <span className="font-black text-slate-900 text-lg min-w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                >
                                  <FaPlus size={10} />
                                </button>
                              </div>
                              
                              <span className="font-black text-lg bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-orange-100 mb-6">
                    <h3 className="text-xl font-black text-slate-900 mb-4 text-center">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-orange-100">
                        <span className="text-slate-600 font-semibold">Subtotal:</span>
                        <span className="font-black text-slate-900">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-orange-100">
                        <span className="text-slate-600 font-semibold">Tax (8.5%):</span>
                        <span className="font-black text-slate-900">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-orange-100">
                        <span className="text-slate-600 font-semibold">Delivery Fee:</span>
                        <span className="font-black text-slate-900">${delivery.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t-2 border-orange-200">
                        <span className="text-xl font-black text-slate-900">Total:</span>
                        <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                    className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                      cart.length === 0
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-lg'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-2xl hover:scale-105'
                    }`}
                  >
                    <FaCreditCard size={20} />
                    Proceed to Checkout
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-black">→</span>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
