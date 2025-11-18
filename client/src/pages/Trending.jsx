import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faStar, faFaceSmile, faFireBurner } from '@fortawesome/free-solid-svg-icons';
import {
  FaArrowLeft,
  FaFire,
  FaStar,
  FaShoppingCart,
  FaCheckCircle,
  FaPlus,
  FaHeart,
  FaChartLine,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sushi1 from '../assets/matcha.jpg';
import sushi2 from '../assets/Mochi-Donuts.jpg';
import sushi3 from '../assets/spicy-tuna.jpg';
import sushi4 from '../assets/sakura-mojito.jpg';
import sushi5 from '../assets/black tonkotsu.jpeg';
import sushi10 from '../assets/volcano-ramen.jpg';
import sushi11 from '../assets/Rainbow-sushi.jpg';
import sushi12 from '../assets/Dragonroll.jpg';

const Trending = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItemId, setAddedItemId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
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
      trend: 'HOT',
      tags: ['Premium', 'Eel', 'Avocado'],
      image: sushi12,
      isNew: true,
    },
    {
      id: 2,
      name: 'Volcano Ramen',
      price: 18.0,
      description: 'Creamy and rich, full flavor broth created from slow cooked pork bones, spiced up with spicy rayu, mayu, and togorashi.',
      category: 'ramen',
      rating: 4.8,
      orders: 987,
      trend: 'TRENDING',
      tags: ['Spicy', 'Rich Broth', 'Chashu'],
      image: sushi10,
    },
    {
      id: 3,
      name: 'Rainbow Sushi',
      price: 22.0,
      description: 'A popular American-style, inside-out sushi roll (uramaki) consisting of a classic California roll base topped with a colorful layer of various fresh, thinly sliced fish and avocado',
      category: 'sushi',
      rating: 4.7,
      orders: 856,
      trend: 'POPULAR',
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
      trend: 'NEW',
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
      trend: 'SEASONAL',
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
      trend: 'HOT',
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
      trend: 'PREMIUM',
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
      trend: 'VIRAL',
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
      case 'HOT': return 'bg-red-600';
      case 'TRENDING': return 'bg-purple-600';
      case 'POPULAR': return 'bg-orange-600';
      case 'NEW': return 'bg-blue-600';
      case 'SEASONAL': return 'bg-pink-600';
      case 'PREMIUM': return 'bg-black';
      case 'VIRAL': return 'bg-purple-600';
      default: return 'bg-red-600';
    }
  };

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200 mx-auto"
          >
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-gray-700">Back to Home</span>
          </Link>

          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-600 text-white text-sm font-bold flex items-center gap-2">
              <FaFire className="animate-pulse" />
              TRENDING NOW / トレンド
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="text-red-600">
              TRENDING
            </span>
            <br />
            <span className="text-black">THIS WEEK</span>
          </h1>

          <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
            Discover what everyone is loving right now! Our most popular dishes based on customer orders and ratings.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mb-12" data-aos="fade-up">
          <div className="bg-black p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '2.4K+', label: 'Weekly Orders', icon: <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: 'white', height: '18px', width: '18px'}}/> },
                { number: '4.8★', label: 'Avg Rating', icon: <FontAwesomeIcon icon={faStar} style={{ color: 'white', height: '18px', width: '18px'}} /> },
                { number: '98%', label: 'Happy Customers', icon: <FontAwesomeIcon icon={faFaceSmile} style={{ color: 'white', height: '18px', width: '18px'}} /> },
                { number: '15min', label: 'Avg Prep Time', icon: <FontAwesomeIcon icon={faFireBurner} style={{ color: 'white', height: '18px', width: '18px'}} /> },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-2xl">{stat.icon}</div>
                  <h4 className="text-2xl font-black text-white">{stat.number}</h4>
                  <p className="text-gray-400 font-semibold text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`group relative px-4 py-3 font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.key
                  ? 'text-white bg-red-600'
                  : 'text-gray-700 bg-white hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <div className={`w-8 h-8 flex items-center justify-center ${
                activeCategory === category.key 
                  ? 'bg-red-700 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                <FaFire size={14} />
              </div>
              
              <span className="font-bold">
                {category.label}
              </span>
              
              <span className={`px-2 py-1 text-xs font-black ${
                activeCategory === category.key
                  ? 'bg-red-700 text-white'
                  : 'bg-red-600 text-white'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Trending Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-aos="fade-up">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
              data-aos="zoom-in"
            >
              {/* Trend Badge */}
              <div className={`absolute top-2 left-2 z-20 px-2 py-1 font-black text-xs ${getTrendColor(item.trend)} text-white`}>
                {item.trend}
              </div>

              {/* New Badge */}
              {item.isNew && (
                <div className="absolute top-2 right-2 z-20 px-left-2 py-1 font-black text-xs bg-blue-600 text-white">
                  NEW
                </div>
              )}

              {/* Favorite Button */}
              <button className="absolute top-2 right-10  z-20 w-6 h-6 bg-white flex items-center justify-center border border-gray-200 hover:scale-110 transition-all duration-200">
                <FaHeart className="text-red-400 text-xs" />
              </button>

              {/* Image Container */}
              <div className="relative h-40 bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-all duration-300"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-2 font-bold flex items-center justify-center gap-2 transition-all duration-300 text-sm ${
                      addedItemId === item.id
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {addedItemId === item.id ? (
                      <>
                        <FaCheckCircle size={12} />
                        ADDED!
                      </>
                    ) : (
                      <>
                        <FaShoppingCart size={12} />
                        ADD TO CART
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-black text-black flex-1 pr-2">{item.name}</h3>
                  <span className="text-base font-black text-red-600">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs leading-relaxed mb-3 font-medium">
                  {item.description}
                </p>

                {/* Rating and Orders */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1">
                      <FaStar className="text-yellow-500 text-xs" />
                      <span className="text-xs font-black text-black">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1">
                      <FaChartLine className="text-green-500 text-xs" />
                      <span className="text-xs font-black text-black">{item.orders}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
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
                  className={`w-full py-2 font-bold flex items-center justify-center gap-2 transition-all duration-300 text-xs ${
                    addedItemId === item.id
                      ? 'bg-green-600 text-white'
                      : 'bg-black text-white hover:bg-red-700'
                  }`}
                >
                  {addedItemId === item.id ? (
                    <>
                      <FaCheckCircle size={12} />
                      ADDED TO CART!
                    </>
                  ) : (
                    <>
                      <FaPlus size={10} />
                      QUICK ADD
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12" data-aos="fade-up">
          <div className="bg-red-600 p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                HUNGRY FOR MORE?
              </h3>
              <p className="text-red-100 text-base font-semibold mb-6 max-w-2xl mx-auto">
                Explore our full menu and discover all the delicious options waiting for you!
              </p>
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 px-6 py-4 bg-white text-black font-bold text-base hover:bg-gray-100 transition-all duration-300"
              >
                EXPLORE FULL MENU
                <div className="w-6 h-6 bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-xs">→</span>
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
