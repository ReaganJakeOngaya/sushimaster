import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  FaCreditCard,
  FaCheckCircle,
  FaArrowLeft,
  FaLock,
  FaShieldAlt,
  FaTruck,
  FaClock,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart, addOrder } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const deliveryFee = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const generateOrderNumber = () => {
    return `SK${Date.now().toString().slice(-6)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate order number
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    // Create order object
    const order = {
      id: newOrderNumber,
      date: new Date().toLocaleDateString(),
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: total,
      status: 'Processing',
      deliveryAddress: formData.address
    };
    
    // Add to order history
    addOrder(order);
    
    // Clear cart
    clearCart();
    
    // Show confirmation
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
        <div className="text-center" data-aos="zoom-in">
          <div className="bg-white border border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-600 flex items-center justify-center">
              <FaCheckCircle className="text-white text-2xl" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-black mb-4">
              ORDER <span className="text-green-600">CONFIRMED!</span>
            </h1>
            
            <div className="bg-green-600 p-4 mb-6">
              <p className="text-white text-2xl font-black mb-1">#{orderNumber}</p>
              <p className="text-green-100 font-semibold text-sm">Your order has been placed successfully</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 border border-gray-300">
                <div className="w-8 h-8 bg-green-600 flex items-center justify-center mx-auto mb-2">
                  <FaClock className="text-white text-sm" />
                </div>
                <p className="text-gray-600 font-semibold text-xs mb-1">Delivery Time</p>
                <p className="text-lg font-black text-black">25-35 min</p>
              </div>
              
              <div className="bg-gray-50 p-4 border border-gray-300">
                <div className="w-8 h-8 bg-green-600 flex items-center justify-center mx-auto mb-2">
                  <FaTruck className="text-white text-sm" />
                </div>
                <p className="text-gray-600 font-semibold text-xs mb-1">Total Amount</p>
                <p className="text-lg font-black text-green-600">
                  ${total.toFixed(2)}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 border border-gray-300">
                <div className="w-8 h-8 bg-green-600 flex items-center justify-center mx-auto mb-2">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <p className="text-gray-600 font-semibold text-xs mb-1">Delivery To</p>
                <p className="text-xs font-bold text-black truncate">{formData.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all duration-300 flex items-center gap-2"
              >
                Track Order
                <span className="text-sm">→</span>
              </button>
              
              <Link
                to="/menu"
                className="px-6 py-3 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
              >
                Order Again
                <span className="text-sm">↻</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Checkout Form Section */}
        <div className="lg:col-span-2" data-aos="fade-right">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/cart"
              className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200"
            >
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <FaArrowLeft className="text-white text-sm" />
              </div>
              <span className="font-bold text-gray-700">Back to Cart</span>
            </Link>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                <span className="text-black">SECURE</span>{' '}
                <span className="text-red-600">
                  CHECKOUT
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-semibold max-w-2xl">
                Complete your order with confidence - your payment is secure
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Delivery Information */}
            <div className="bg-white border border-gray-200">
              <div className="bg-black p-4 border-b border-gray-300">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <FaUser size={16} />
                  </div>
                  DELIVERY INFORMATION
                </h2>
              </div>
              
              <div className="p-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Delivery Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold resize-none"
                      rows="3"
                      placeholder="Enter your complete delivery address"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white border border-gray-200">
              <div className="bg-black p-4 border-b border-gray-300">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <FaCreditCard size={16} />
                  </div>
                  PAYMENT METHOD
                </h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-3 text-sm">Select Payment Method</label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                      required
                    >
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash on Delivery</option>
                    </select>
                  </div>

                  {formData.paymentMethod !== 'cash' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-bold mb-2 text-sm">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-bold mb-2 text-sm">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200">
                    <FaShieldAlt className="text-green-600 text-lg" />
                    <span className="text-green-700 font-bold text-sm">Your payment information is secure and encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1" data-aos="fade-left">
          <div className="sticky top-20 bg-white border border-gray-200 overflow-hidden">
            {/* Summary Header */}
            <div className="bg-black p-4">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                  <FaTruck size={16} />
                </div>
                ORDER SUMMARY
              </h2>
            </div>

            <div className="p-4">
              {cart.length > 0 ? (
                <>
                  {/* Order Items */}
                  <div className="max-h-80 overflow-y-auto mb-4 space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-gray-50 p-3 border border-gray-200">
                        <div className="flex gap-3">
                          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-300">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-black text-black text-sm truncate">{item.name}</h4>
                            <p className="text-gray-600 font-bold text-xs">
                              ${item.price.toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-black text-red-600 text-sm">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Totals */}
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
                        <span className="font-black text-black">${deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-gray-400">
                        <span className="text-lg font-black text-black">Total:</span>
                        <span className="text-xl font-black text-red-600">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={cart.length === 0}
                    className={`w-full py-4 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      cart.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <FaLock size={14} />
                    PLACE ORDER • ${total.toFixed(2)}
                    <span className="text-sm font-black">→</span>
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 flex items-center justify-center">
                    <FaTruck className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-black text-black mb-2">CART IS EMPTY</h3>
                  <p className="text-gray-600 font-medium text-sm mb-4">
                    Add some delicious items to proceed with checkout
                  </p>
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300"
                  >
                    Browse Menu
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;