import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaMinus, FaPlus, FaCreditCard } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const delivery = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + delivery;

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link to="/menu" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6">
          <FaArrowLeft />
          Back to Menu
        </Link>
        <h2 className="text-3xl font-bold mb-2">Your Cart</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl text-gray-300 mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
              <Link 
                to="/menu" 
                className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-200">
                {cart.map(item => (
                  <div key={item.id} className="py-4 flex items-start">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)} each</p>
                      <div className="flex items-center gap-3 mt-2">
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
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors mt-2"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-24">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8.5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 my-3"></div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className={`block w-full py-3 rounded-lg font-bold text-center ${
              cart.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-dark text-white transition-colors'
            }`}
          >
            <FaCreditCard className="inline mr-2" />
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;