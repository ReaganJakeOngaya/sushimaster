import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  FaArrowLeft,
  FaFire,
  FaStar,
  FaShoppingCart,
  FaCheckCircle,
  FaPlus,
  FaClock,
  FaHeart,
  FaShare,
  FaChartLine,
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

const Trending = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItemId, setAddedItemId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const trendingItems = [
    {
      id: 1,
      name: 'Dragon Roll',
      price: 24.0,
      description: 'Premium eel and avocado with special dragon sauce',
      category: 'sushi',
      rating: 4.9,
      orders: 1247,
      trend: '🔥 Hot',
      tags: ['Premium', 'Eel', 'Avocado'],
      image: sushi12,
      isNew: true,
    },
    {
      id: 2,
      name: 'Volcano Ramen',
      price: 18.0,
      description: 'Spicy volcanic broth with tender chashu and bamboo',
      category: 'ramen',
      rating: 4.8,
      orders: 987,
      trend: '🚀 Trending',
      tags: ['Spicy', 'Rich Broth', 'Chashu'],
      image: sushi10,
    },
    {
      id: 3,
      name: 'Rainbow Sushi',
      price: 22.0,
      description: 'Colorful assortment of fresh fish and vegetables',
      category: 'sushi',
      rating: 4.7,
      orders: 856,
      trend: '✨ Popular',
      tags: ['Colorful', 'Fresh', 'Assorted'],
      image: sushi11,
      isNew: true,
    },
    {
      id: 4,
      name: 'Matcha Tiramisu',
      price: 12.0,
      description: 'Japanese twist on classic Italian dessert',
      category: 'desserts',
      rating: 4.9,
      orders: 734,
      trend: '🌟 New',
      tags: ['Matcha', 'Dessert', 'Japanese-Italian'],
      image: sushi1,
      isNew: true,
    },
    {
      id: 5,
      name: 'Sakura Mojito',
      price: 8.0,
      description: 'Cherry blossom infused mojito with fresh mint',
      category: 'drinks',
      rating: 4.6,
      orders: 621,
      trend: '🌸 Seasonal',
      tags: ['Cherry Blossom', 'Refreshing', 'Mint'],
      image: sushi4,
    },
    {
      id: 6,
      name: 'Spicy Tuna Crispy',
      price: 20.0,
      description: 'Crispy rice with spicy tuna and special sauce',
      category: 'sushi',
      rating: 4.8,
      orders: 1123,
      trend: '🔥 Hot',
      tags: ['Spicy', 'Crispy', 'Tuna'],
      image: sushi3,
    },
    {
      id: 7,
      name: 'Black Tonkotsu',
      price: 16.0,
      description: 'Rich black garlic tonkotsu ramen with premium pork',
      category: 'ramen',
      rating: 4.7,
      orders: 892,
      trend: '🖤 Premium',
      tags: ['Black Garlic', 'Rich', 'Premium Pork'],
      image: sushi5,
    },
    {
      id: 8,
      name: 'Mochi Donuts',
      price: 10.0,
      description: 'Soft mochi donuts with various glazes',
      category: 'desserts',
      rating: 4.5,
      orders: 567,
      trend: '🍩 Viral',
      tags: ['Mochi', 'Donuts', 'Sweet'],
      image: sushi2,
      isNew: true,
    },
  ];

  const categories = [
    { key: 'all', label: 'All Trending', count: trendingItems.length },
    { key: 'sushi', label: 'Sushi', count: trendingItems.filter(item => item.category === 'sushi').length },
    { key: 'ramen', label: 'Ramen', count: trendingItems.filter(item => item.category === 'ramen').length },
    { key: 'desserts', label: 'Desserts', count: trendingItems.filter(item => item.category === 'desserts').length },
    { key: 'drinks', label: 'Drinks', count: trendingItems.filter(item => item.category === 'drinks').length },
  ];

  const filteredItems = activeCategory === 'all' 
    ? trendingItems 
    : trendingItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case '🔥 Hot': return 'from-red-500 to-orange-500';
      case '🚀 Trending': return 'from-purple-500 to-pink-500';
      case '✨ Popular': return 'from-yellow-500 to-orange-500';
      case '🌟 New': return 'from-blue-500 to-cyan-500';
      case '🌸 Seasonal': return 'from-pink-500 to-rose-500';
      case '🖤 Premium': return 'from-gray-800 to-slate-700';
      case '🍩 Viral': return 'from-purple-500 to-indigo-500';
      default: return 'from-orange-500 to-pink-500';
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-400/15 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-orange-100 mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-700">Back to Home</span>
          </Link>

          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
              <FaFire className="animate-pulse" />
              TRENDING NOW / トレンド
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
              Trending
            </span>
            <br />
            <span className="text-slate-900">This Week</span>
          </h1>

          <p className="text-xl text-slate-600 font-semibold max-w-2xl mx-auto">
            Discover what everyone is loving right now! Our most popular dishes based on customer orders and ratings.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '2.4K+', label: 'Weekly Orders', icon: '📈' },
                { number: '4.8★', label: 'Avg Rating', icon: '⭐' },
                { number: '98%', label: 'Happy Customers', icon: '😊' },
                { number: '15min', label: 'Avg Prep Time', icon: '⚡' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl">{stat.icon}</div>
                  <h4 className="text-3xl font-black text-white">{stat.number}</h4>
                  <p className="text-slate-400 font-semibold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`group relative px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                activeCategory === category.key
                  ? 'text-white shadow-2xl'
                  : 'text-slate-700 bg-white shadow-lg hover:shadow-xl border-2 border-slate-200'
              }`}
            >
              {/* Background Gradient for Active State */}
              {activeCategory === category.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl"></div>
              )}
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                activeCategory === category.key 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gradient-to-br from-red-50 to-orange-50 text-red-600'
              }`}>
                <FaFire size={18} />
              </div>
              
              <span className="relative z-10 font-bold">
                {category.label}
              </span>
              
              <span className={`px-2 py-1 rounded-full text-xs font-black ${
                activeCategory === category.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gradient-to-r from-red-500 to-orange-600 text-white'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Trending Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-aos="fade-up">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 backdrop-blur-sm"
              data-aos="zoom-in"
            >
              {/* Trend Badge */}
              <div className={`absolute top-4 left-4 z-20 px-3 py-2 rounded-2xl font-black text-xs shadow-lg bg-gradient-to-r ${getTrendColor(item.trend)} text-white`}>
                {item.trend}
              </div>

              {/* New Badge */}
              {item.isNew && (
                <div className="absolute top-4 right-4 z-20 px-3 py-2 rounded-2xl font-black text-xs shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  NEW
                </div>
              )}

              {/* Favorite Button */}
              <button className="absolute top-4 right-16 z-20 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200">
                <FaHeart className="text-red-400 text-sm" />
              </button>

              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-6 transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                      addedItemId === item.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {addedItemId === item.id ? (
                      <>
                        <FaCheckCircle size={16} />
                        Added!
                      </>
                    ) : (
                      <>
                        <FaShoppingCart size={14} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-black text-slate-900 flex-1 pr-2">{item.name}</h3>
                  <span className="text-lg font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-3 font-medium">
                  {item.description}
                </p>

                {/* Rating and Orders */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-slate-100 rounded-xl px-2 py-1">
                      <FaStar className="text-yellow-500 text-xs" />
                      <span className="text-xs font-black text-slate-900">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100 rounded-xl px-2 py-1">
                      <FaChartLine className="text-green-500 text-xs" />
                      <span className="text-xs font-black text-slate-900">{item.orders}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <FaClock className="text-xs" />
                    <span className="text-xs font-bold">15min</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-slate-700 text-xs font-bold rounded-full border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Add Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    addedItemId === item.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {addedItemId === item.id ? (
                    <>
                      <FaCheckCircle size={14} />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <FaPlus size={12} />
                      Quick Add
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Hungry for More?
              </h3>
              <p className="text-orange-100 text-lg font-semibold mb-8 max-w-2xl mx-auto">
                Explore our full menu and discover all the delicious options waiting for you!
              </p>
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Explore Full Menu
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-sm">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
