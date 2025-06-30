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
  
  // const removeFromCart = (itemId) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  // }; 

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const delivery = subtotal > 0 ? 3.99 : 0;
  const total = subtotal + tax + delivery;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu Section */}
        <div className="lg:col-span-2" data-aos="fade-right">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-gray-500">Our</span> Menu
            </h2>
            <p className="text-gray-600">Authentic Japanese cuisine crafted with passion</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <FaUtensils />
              All Items
            </button>
            <button
              onClick={() => setActiveFilter('sushi')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                activeFilter === 'sushi'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <FaFish />
              Sushi
            </button>
            <button
              onClick={() => setActiveFilter('ramen')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                activeFilter === 'ramen'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <FaUtensils />
              Ramen
            </button>
            <button
              onClick={() => setActiveFilter('desserts')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                activeFilter === 'desserts'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <FaIceCream />
              Desserts
            </button>
            <button
              onClick={() => setActiveFilter('drinks')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                activeFilter === 'drinks'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <FaMugHot />
              Drinks
            </button>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 relative"
                data-aos="fade-up"
              >
                {item.badge && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full z-10 ${
                      item.badge === "Chef's Special"
                        ? 'bg-yellow-500 text-white'
                        : item.badge === 'Seasonal'
                        ? 'bg-pink-500 text-white'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {item.badge}
                  </div>
                )}
                <div className="h-48 bg-gray-300 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                    <span className="text-yellow-400">★</span>
                    <span>{item.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                        addedItemId === item.id
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-primary hover:bg-primary hover:text-gray'
                      }`}
                    >
                      {addedItemId === item.id ? (
                        <>
                          <FaCheckCircle /> Added!
                        </>
                      ) : (
                        <>
                          <FaShoppingCart /> Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                        addedItemId === item.id
                          ? 'bg-green-500 text-white'
                          : 'bg-primary hover:bg-primary-dark text-white'
                      }`}
                    >
                      <FaPlus size={12} />
                      {addedItemId === item.id ? 'Added!' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div
          className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24"
          data-aos="fade-left"
        >
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FaCreditCard />
              Your Order
            </h2>
            <span className="bg-primary text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-5xl text-gray-300 mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-lg font-bold mb-1">Your cart is empty</h3>
              <p className="text-gray-500">Add some delicious items to get started!</p>
            </div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start mb-4 pb-4 border-b border-gray-100"
                  >
                    <div className="flex gap-3 flex-1">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-500 text-sm">${item.price.toFixed(2)} each</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8.5%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>${delivery.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 ${
                  cart.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 text-white transition-colors'
                }`}
              >
                <FaCreditCard />
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;