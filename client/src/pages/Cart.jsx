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
      duration: 800,
      offset: 50,
    });
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const delivery = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + delivery;

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2" data-aos="fade-right">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200"
            >
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <FaArrowLeft className="text-white text-sm" />
              </div>
              <span className="font-bold text-gray-700">Back to Menu</span>
            </Link>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                <span className="text-black">YOUR</span>{' '}
                <span className="text-red-600">
                  CART
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-semibold max-w-2xl">
                Review your delicious selections before checkout
              </p>
            </div>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="bg-white border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 flex items-center justify-center">
                <FaShoppingCart className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-black text-black mb-4">YOUR CART IS EMPTY</h3>
              <p className="text-gray-600 font-medium mb-8 max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Let's fix that!
              </p>
              <Link 
                to="/menu" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold hover:bg-red-700 transition-all duration-300"
              >
                Browse Menu
                <span className="text-sm">→</span>
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-gray-200">
              {/* Cart Header */}
              <div className="bg-black p-4 border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-black text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                      <FaShoppingCart size={16} />
                    </div>
                    CART ITEMS
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-bold">{cartItemCount} items</span>
                    <button
                      onClick={clearCart}
                      className="px-3 py-1 bg-gray-600 text-white text-sm font-bold hover:bg-red-700 transition-all duration-300"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="p-4 space-y-4">
                {cart.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-gray-50 p-4 border border-gray-200 group hover:border-gray-300 transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <div className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-300">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      
                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-black text-black">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                        
                        <p className="text-gray-600 font-bold mb-3 text-sm">
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
                          
                          <span className="font-black text-red-600">
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

        {/* Order Summary Section */}
        <div className="lg:col-span-1" data-aos="fade-left">
          <div className="sticky top-20 bg-white border border-gray-200 overflow-hidden">
            {/* Summary Header */}
            <div className="bg-black p-4">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                  <FaCreditCard size={16} />
                </div>
                ORDER SUMMARY
              </h2>
            </div>

            <div className="p-4">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 flex items-center justify-center">
                    <FaCreditCard className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-black text-black mb-2">NO ITEMS IN CART</h3>
                  <p className="text-gray-600 font-medium text-sm">Add items to see order summary</p>
                </div>
              ) : (
                <>
                  {/* Order Summary */}
                  <div className="bg-gray-50 p-4 border border-gray-200 mb-4">
                    <h3 className="text-lg font-black text-black mb-3 text-center">ORDER SUMMARY</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1 border-b border-gray-300">
                        <span className="text-gray-600 font-semibold text-sm">Subtotal ({cartItemCount} items):</span>
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
                  <Link
                    to="/checkout"
                    className={`block w-full py-4 font-bold text-sm text-center transition-all duration-300 ${
                      cart.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <FaCreditCard className="inline mr-2" />
                    PROCEED TO CHECKOUT
                    <span className="text-sm font-black ml-2">→</span>
                  </Link>

                  {/* Free Delivery Notice */}
                  {subtotal < 50 && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-black text-sm">✓</span>
                        <div>
                          <p className="text-xs font-bold text-gray-700">Free delivery on orders over $50</p>
                          <p className="text-xs text-gray-600">${(50 - subtotal).toFixed(2)} more to go!</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;