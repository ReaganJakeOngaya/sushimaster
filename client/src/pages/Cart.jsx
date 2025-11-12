
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaMinus, FaPlus, FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const delivery = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + delivery;

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-orange-100 mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-700">Back to Menu</span>
          </Link>

          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
              <FaShoppingCart />
              YOUR CART / カート
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
            <span className="text-slate-900">Your</span>{' '}
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Cart
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-semibold">
            Review your delicious selections before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2" data-aos="fade-right">
            {cart.length === 0 ? (
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-12 text-center border border-orange-100">
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center shadow-lg">
                  <FaShoppingCart className="text-slate-400 text-5xl" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Your cart is empty</h3>
                <p className="text-slate-600 text-lg font-semibold mb-8 max-w-md mx-auto">
                  Looks like you haven't added anything to your cart yet. Let's fix that!
                </p>
                <Link 
                  to="/menu" 
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Browse Menu
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-sm">→</span>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-8 border border-orange-100">
                {/* Cart Header */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                      <FaShoppingCart className="text-white text-lg" />
                    </div>
                    Cart Items
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-black text-slate-900">{cartItemCount} items</span>
                    <button
                      onClick={clearCart}
                      className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 font-bold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="space-y-6">
                  {cart.map(item => (
                    <div 
                      key={item.id} 
                      className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group"
                      data-aos="fade-up"
                    >
                      <div className="flex gap-6">
                        {/* Item Image */}
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center shadow-lg flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                        
                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-400 hover:text-red-500 transition-colors duration-200 p-2 rounded-lg hover:bg-red-50"
                            >
                              <FaTrash size={16} />
                            </button>
                          </div>
                          
                          <p className="text-slate-600 font-semibold mb-4">
                            ${item.price.toFixed(2)} each
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                              >
                                <FaMinus size={12} />
                              </button>
                              <span className="text-xl font-black text-slate-900 min-w-8 text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>
                            
                            <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1" data-aos="fade-left">
            <div className="sticky top-24 bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl border border-orange-100 backdrop-blur-sm overflow-hidden">
              {/* Summary Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6">
                <h2 className="text-2xl font-black text-white flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <FaCreditCard size={20} />
                  </div>
                  Order Summary
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-orange-100">
                    <span className="text-slate-600 font-semibold">Subtotal ({cartItemCount} items):</span>
                    <span className="font-black text-slate-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-100">
                    <span className="text-slate-600 font-semibold">Tax (8.5%):</span>
                    <span className="font-black text-slate-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-100">
                    <span className="text-slate-600 font-semibold">Delivery Fee:</span>
                    <span className="font-black text-slate-900">${delivery.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t-2 border-orange-200">
                    <span className="text-xl font-black text-slate-900">Total:</span>
                    <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className={`block w-full py-5 rounded-2xl font-bold text-lg text-center transition-all duration-300 ${
                    cart.length === 0
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-lg'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-2xl hover:scale-105'
                  }`}
                >
                  <FaCreditCard className="inline mr-3" />
                  Proceed to Checkout
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center inline-block ml-3">
                    <span className="text-white font-black text-sm">→</span>
                  </div>
                </Link>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-white text-sm font-black">✓</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Free delivery on orders over $50</p>
                      <p className="text-xs text-slate-600">${(50 - subtotal).toFixed(2)} more to go!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;