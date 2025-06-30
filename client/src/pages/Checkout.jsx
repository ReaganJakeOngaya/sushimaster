import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart, addOrder } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit',
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const deliveryFee = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    
    // Create order object
    const order = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      items: cart.map(item => item.name),
      total: total,
      status: 'Processing'
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
      <div className="p-6 max-w-4xl mx-auto text-center">
        <div className="text-green-500 text-6xl mb-4">
          <FaCheckCircle />
        </div>
        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg mb-6">
          Your order for <strong>${total.toFixed(2)}</strong> has been placed successfully.
        </p>
        <p className="bg-gray-100 rounded-lg p-3 mb-6">
          Expected delivery: <strong>25-35 minutes</strong>
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="3"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {cart.length > 0 ? (
              <>
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <div key={item.id} className="p-4 flex items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <div className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <div className="flex justify-between py-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Tax (8.5%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="p-4">
                  <button
                    onClick={handleSubmit}
                    disabled={cart.length === 0}
                    className={`w-full bg-green-500 text-white py-3 rounded-lg font-medium ${
                      cart.length === 0
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'hover:bg-green-600'
                    }`}
                  >
                    <FaCreditCard className="inline mr-2" />
                    Place Order
                  </button>
                </div>
              </>
            ) : (
              <div className="p-8 text-center text-gray-500">
                Your cart is empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;