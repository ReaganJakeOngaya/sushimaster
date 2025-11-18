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
  FaCheckCircle,
  FaShoppingCart,
  FaStar,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sushi1 from '../assets/sushi-1.png';
import sushi2 from '../assets/salmon-nigiri.jpg';
import sushi3 from '../assets/nigiri-sushi.jpg';
import sushi4 from '../assets/cherashizushi.jpg';
import sushi5 from '../assets/miso-ramen.jpg';
import sushi6 from '../assets/Dragonroll.jpg';
import sushi7 from '../assets/volcano-ramen.jpg';
import sushi8 from '../assets/Rainbow-sushi.jpg';
import sushi9 from '../assets/spicy-tuna.jpg';
import sushi10 from '../assets/shoyu-ramen.jpg';
import sushi11 from '../assets/Temaki-sushi.jpg';
import sushi12 from '../assets/maki-sushi.jpg';
import dessert1 from '../assets/mochi-dessert.jpg';
import dessert2 from '../assets/Anmitsu.jpg';
import dessert3 from '../assets/matcha.jpg';
import dessert4 from '../assets/black tonkotsu.jpeg';
import dessert5 from '../assets/Mochi-Donuts.jpg';
import drink1 from '../assets/green-tea.webp';
import drink2 from '../assets/sakura-tea.jpg';
import drink3 from '../assets/mugicha.jpg';
import drink4 from '../assets/sakura-mojito.jpg';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [addedItemId, setAddedItemId] = useState(null);
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'Maki Sushi',
      price: 21.0,
      description: 'Traditional Japanese dish consisting of vinegared rice and various fillings rolled in a sheet of nori (seaweed',
      category: 'sushi',
      rating: 4.8,
      tags: ['Premium', 'Fresh'],
      badge: 'Popular',
      image: sushi12,
    },
    {
      id: 2,
      name: 'Temaki sushi',
      price: 19.0,
      description: 'Sushi made by rolling a sheet of nori (dried seaweed) by hand into a distinct cone shape with seasoned sushi rice and various fillings',
      category: 'sushi',
      rating: 4.6,
      tags: ['Traditional', 'Classic'],
      image: sushi11,
    },
    {
      id: 3,
      name: 'Nigiri Sushi',
      price: 24.0,
      description: 'Sushi made of a small, hand-pressed mound of seasoned rice topped with a slice of raw fish or seafood, though it can also include cooked ingredients like shrimp or egg, or vegetables',
      category: 'sushi',
      rating: 4.9,
      tags: ['Hand-pressed', 'Premium'],
      badge: "Chef's Special",
      image: sushi3,
    },
    {
      id: 4,
      name: 'Salmonon Nigiri Sushi',
      price: 18.0,
      description: ' Dish consisting of a small, hand-pressed oval of vinegared sushi rice topped with a slice of fresh, sashimi-grade raw salmon',
      category: 'sushi',
      rating: 4.7,
      tags: ['Hand-rolled', 'Fresh'],
      image: sushi2,
    },
    {
      id: 5,
      name: 'Shoyu Ramen',
      price: 13.0,
      description: 'One of the four main types of Japanese ramen, characterized by its savory, clear, soy sauce-based broth',
      category: 'ramen',
      rating: 4.8,
      tags: ['Soy Broth', 'Savory', 'Noodles'],
      badge: 'Popular',
      image: sushi10,
    },
    {
      id: 6,
      name:'Cherashizushi',
      price: 16.0,
      description: 'A traditional Japanese dish consisting of vinegared sushi rice in a bowl or platter topped with a colorful assortment of ingredients',
      category: 'sushi',
      rating: 4.7,
      tags: ['Rice', 'Sashimi'],
      image: sushi4,
    },
    {
      id: 7,
      name: 'Miso Noodles',
      price: 12.0,
      description: 'noodle soup dish featuring a hearty broth flavored with miso (fermented soybean paste)',
      category: 'ramen',
      rating: 4.5,
      tags: ['Thick Noodles', 'Soybean Broth'],
      image: sushi5,
    },
    {
      id: 8,
      name: 'Anmitsu Dessert',
      price: 8.0,
      description: 'A traditional, popular Japanese cold dessert that originated in the Meiji era',
      category: 'desserts',
      rating: 4.6,
      tags: ['Sweet', 'Traditional', 'Cold'],
      image: dessert2,
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
      image: dessert1,
    },
    {
      id: 10,
      name: 'Oruncha Tea',
      price: 5.0,
      description: 'Traditional Japanese green tea',
      category: 'drinks',
      rating: 4.5,
      tags: ['Green Tea', 'Traditional'],
      image: drink1,
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
      image: drink2,
    },
    {
      id: 12,
      name: 'Mugicha',
      price: 4.5,
      description: 'Refreshing barley tea, served cold',
      category: 'drinks',
      rating: 4.4,
      tags: ['Barley', 'Cold'],
      image: drink3,
    },
    {
      id: 13,
      name: 'Dragon Roll Sushi',
      price: 4.5,
      description: 'American-style, inside-out sushi roll (uramaki) known for its striking presentation, which features thinly sliced avocado layered on top to resemble the scales of a dragon',
      category: 'sushi',
      rating: 4.4,
      tags: ['Avocado', 'Inside-out', 'Uramaki'],
      image: sushi6,
    },
    {
      id: 14,
      name: 'Volcano Ramen',
      price: 4.5,
      description: 'Creamy and rich, full flavor broth created from slow cooked pork bones, spiced up with spicy rayu, mayu, and togorashi',
      category: 'ramen',
      rating: 4.4,
      tags: ['Spicy', 'Rich Broth', 'Chashu'],
      image: sushi7,
    },
    {
      id: 15,
      name: 'Rainbow Roll Sushi',
      price: 4.5,
      description: 'A popular American-style, inside-out sushi roll (uramaki) consisting of a classic California roll base topped with a colorful layer of various fresh, thinly sliced fish and avocado',
      category: 'sushi',
      rating: 4.4,
      tags: ['Spicy', 'Rich Broth', 'Chashu'],
      image: sushi8,
    },
    {
      id: 16,
      name: 'Matcha Tiramisu',
      price: 4.5,
      description: 'A creative fusion dessert that replaces the traditional coffee element of an Italian tiramisu with matcha green tea',
      category: 'desserts',
      rating: 4.4,
      tags: ['Matcha', 'Green Tea', 'Fusion'],
      image: dessert3,
    },
    {
      id: 17,
      name: 'Sakura Mojito',
      price: 8.0,
      description: 'Cherry blossom infused mojito with fresh mint',
      category: 'drinks',
      rating: 4.6,
      tags: ['Cherry Blossom', 'Refreshing', 'Mint'],
      image: drink4,
    },
    {
      id: 18,
      name: 'Spicy Tuna Crispy',
      price: 20.0,
      description: 'Crispy rice with spicy tuna and special sauce',
      category: 'sushi',
      rating: 4.8,
      tags: ['Spicy', 'Crispy', 'Tuna'],
      image: sushi9,
    },
    {
      id: 19,
      name: 'Black Tonkotsu',
      price: 16.0,
      description: 'Rich black garlic tonkotsu ramen with premium pork',
      category: 'ramen',
      rating: 4.7,
      tags: ['Black Garlic', 'Rich', 'Premium Pork'],
      image: dessert4,
    },
    {
      id: 20,
      name: 'Mochi Donuts',
      price: 10.0,
      description: 'Soft mochi donuts with various glazes',
      category: 'desserts',
      rating: 4.5,
      tags: ['Mochi', 'Donuts', 'Sweet'],
      image: dessert5,
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
    navigate('/cart');
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Menu Section */}
        <div className="lg:col-span-2" data-aos="fade-right">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200"
            >
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <FaArrowLeft className="text-white text-sm" />
              </div>
              <span className="font-bold text-gray-700">Back to Home</span>
            </Link>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                <span className="text-black">OUR</span>{' '}
                <span className="text-red-600">
                  MENU
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-semibold max-w-2xl">
                Authentic Japanese cuisine crafted with passion and tradition
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8" data-aos="fade-up">
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
                className={`group relative px-4 py-3 font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === key
                    ? 'text-white bg-black'
                    : 'text-gray-700 bg-white hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <div className={`w-8 h-8 flex items-center justify-center ${
                  activeFilter === key 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  <Icon size={14} />
                </div>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
              >
                {/* Badge */}
                {item.badge && (
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1 font-black text-xs ${
                    item.badge === "Chef's Special"
                      ? 'bg-yellow-500 text-white'
                      : item.badge === 'Seasonal'
                      ? 'bg-pink-600 text-white'
                      : 'bg-red-600 text-white'
                  }`}>
                    {item.badge}
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 z-20 bg-white px-2 py-1 flex items-center gap-1 border border-gray-200">
                  <FaStar className="text-yellow-500" size={12} />
                  <span className="font-black text-black text-sm">{item.rating}</span>
                </div>

                {/* Image Container */}
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-all duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-3 font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                        addedItemId === item.id
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      {addedItemId === item.id ? (
                        <>
                          <FaCheckCircle size={16} />
                          ADDED TO CART!
                        </>
                      ) : (
                        <>
                          <FaShoppingCart size={14} />
                          ADD TO CART
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-black">{item.name}</h3>
                    <span className="text-lg font-black text-red-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-3 font-medium text-sm">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold border border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-3 font-bold flex items-center justify-center gap-2 transition-all duration-300 text-sm ${
                      addedItemId === item.id
                        ? 'bg-green-600 text-white'
                        : 'bg-black text-white hover:bg-red-700'
                    }`}
                  >
                    {addedItemId === item.id ? (
                      <>
                        <FaCheckCircle size={14} />
                        ITEM ADDED!
                      </>
                    ) : (
                      <>
                        <FaPlus size={12} />
                        QUICK ADD
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
          <div className="sticky top-20 bg-white border border-gray-200 overflow-hidden">
            {/* Cart Header */}
            <div className="bg-black p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <FaShoppingCart size={16} />
                  </div>
                  YOUR ORDER
                </h2>
                <div className="relative">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{cartItemCount}</span>
                  </div>
                  {cartItemCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 border border-black"></div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 flex items-center justify-center">
                    <FaShoppingCart className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-black text-black mb-2">YOUR CART IS EMPTY</h3>
                  <p className="text-gray-600 font-medium text-sm">Add some delicious items to get started!</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="max-h-80 overflow-y-auto mb-4 space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-50 p-3 border border-gray-200 group hover:border-gray-300 transition-all duration-300"
                      >
                        <div className="flex gap-3">
                          {/* Item Image */}
                          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          
                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-black text-black text-sm truncate">{item.name}</h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1"
                                title="Remove item"
                              >
                                <FaTrash size={12} />
                              </button>
                            </div>
                            
                            <p className="text-gray-600 font-bold mb-2 text-xs">
                              ${item.price.toFixed(2)} each
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-6 h-6 bg-black text-white flex items-center justify-center hover:bg-red-700 transition-all"
                                >
                                  <FaMinus size={8} />
                                </button>
                                <span className="font-black text-black text-sm min-w-6 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-6 h-6 bg-black text-white flex items-center justify-center hover:bg-red-700 transition-all"
                                >
                                  <FaPlus size={8} />
                                </button>
                              </div>
                              
                              <span className="font-black text-sm text-red-600">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 p-4 border border-gray-200 mb-4">
                    <h3 className="text-lg font-black text-black mb-3 text-center">ORDER SUMMARY</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1 border-b border-gray-300">
                        <span className="text-gray-600 font-semibold text-sm">Subtotal:</span>
                        <span className="font-black text-black">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-300">
                        <span className="text-gray-600 font-semibold text-sm">Tax (8.5%):</span>
                        <span className="font-black text-black">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-300">
                        <span className="text-gray-600 font-semibold text-sm">Delivery Fee:</span>
                        <span className="font-black text-black">${delivery.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-gray-400">
                        <span className="text-lg font-black text-black">Total:</span>
                        <span className="text-xl font-black text-red-600">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                    className={`w-full py-4 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      cart.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    PROCEED TO CART
                    <span className="text-sm font-black">→</span>
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
