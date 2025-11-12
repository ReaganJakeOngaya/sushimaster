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
      duration: 1000,
      offset: 100,
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
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
        {/* Background Elements */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 text-center" data-aos="zoom-in">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-12 border border-green-100 max-w-2xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              Order <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Confirmed!</span>
            </h1>
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 shadow-lg">
              <p className="text-white text-3xl font-black mb-2">#{orderNumber}</p>
              <p className="text-green-100 font-semibold">Your order has been placed successfully</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg mx-auto mb-3">
                  <FaClock className="text-white text-lg" />
                </div>
                <p className="text-slate-600 font-semibold mb-1">Delivery Time</p>
                <p className="text-2xl font-black text-slate-900">25-35 min</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg mx-auto mb-3">
                  <FaTruck className="text-white text-lg" />
                </div>
                <p className="text-slate-600 font-semibold mb-1">Total Amount</p>
                <p className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${total.toFixed(2)}
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg mx-auto mb-3">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <p className="text-slate-600 font-semibold mb-1">Delivery To</p>
                <p className="text-sm font-bold text-slate-900 truncate">{formData.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                Track Order
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-sm">→</span>
                </div>
              </button>
              
              <Link
                to="/menu"
                className="group px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 border border-green-200"
              >
                Order Again
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-sm">↻</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Link
            to="/cart"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-orange-100 mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-700">Back to Cart</span>
          </Link>

          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
              <FaLock />
              SECURE CHECKOUT / チェックアウト
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
            <span className="text-slate-900">Secure</span>{' '}
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Checkout
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-semibold">
            Complete your order with confidence - your payment is secure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Checkout Form */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Delivery Information */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-8 border border-orange-100">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <FaUser className="text-white text-lg" />
                </div>
                Delivery Information
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-700 font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 font-bold mb-2">Delivery Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold resize-none"
                    rows="3"
                    placeholder="Enter your complete delivery address"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Payment Information */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-8 border border-orange-100">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <FaCreditCard className="text-white text-lg" />
                </div>
                Payment Method
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3">Select Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                    required
                  >
                    <option value="credit">💳 Credit Card</option>
                    <option value="debit">💳 Debit Card</option>
                    <option value="paypal">💰 PayPal</option>
                    <option value="cash">💵 Cash on Delivery</option>
                  </select>
                </div>

                {formData.paymentMethod !== 'cash' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-bold mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-white border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <FaShieldAlt className="text-green-500 text-xl" />
                  <span className="text-green-700 font-bold">Your payment information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-8 border border-orange-100 sticky top-24">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <FaTruck className="text-white text-lg" />
                </div>
                Order Summary
              </h2>

              {cart.length > 0 ? (
                <>
                  {/* Order Items */}
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-orange-100">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center shadow-lg flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-black text-slate-900 text-lg">{item.name}</h3>
                          <p className="text-slate-600 font-semibold">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Totals */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-orange-100">
                      <span className="text-slate-600 font-semibold">Subtotal</span>
                      <span className="font-black text-slate-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-orange-100">
                      <span className="text-slate-600 font-semibold">Tax (8.5%)</span>
                      <span className="font-black text-slate-900">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-orange-100">
                      <span className="text-slate-600 font-semibold">Delivery Fee</span>
                      <span className="font-black text-slate-900">${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-orange-200">
                      <span className="text-2xl font-black text-slate-900">Total</span>
                      <span className="text-3xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={cart.length === 0}
                    className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                      cart.length === 0
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-lg'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-2xl hover:scale-105'
                    }`}
                  >
                    <FaLock />
                    Place Order • ${total.toFixed(2)}
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-black text-sm">→</span>
                    </div>
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center shadow-lg">
                    <FaTruck className="text-slate-400 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Cart is Empty</h3>
                  <p className="text-slate-600 font-semibold mb-8">
                    Add some delicious items to proceed with checkout
                  </p>
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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