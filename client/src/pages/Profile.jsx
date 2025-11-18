import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  FaArrowLeft,
  FaUser,
  FaEdit,
  FaSave,
  FaTimes,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaShoppingBag,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Sushi Street, Tokyo, Japan',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    joinDate: '2023-01-15',
  });

  const { orders } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Total Orders', value: orders.length, icon: FaShoppingBag, color: 'bg-red-600' },
    { label: 'Completed', value: orders.filter(o => o.status === 'Delivered').length, icon: FaCheckCircle, color: 'bg-green-600' },
    { label: 'Total Spent', value: `$${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}`, icon: FaStar, color: 'bg-black' },
    { label: 'Member Since', value: '2023', icon: FaUser, color: 'bg-gray-600' },
  ];

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information Section */}
        <div className="lg:col-span-1" data-aos="fade-right">
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
                <span className="text-black">MY</span>{' '}
                <span className="text-red-600">
                  PROFILE
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-semibold max-w-2xl">
                Manage your account and track your orders
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white border border-gray-200">
            {/* Profile Header */}
            <div className="bg-black p-4 border-b border-gray-300">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                  <FaUser size={16} />
                </div>
                PROFILE INFORMATION
              </h2>
            </div>

            <div className="p-4">
              {/* Avatar Section */}
              <div className="text-center mb-6">
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 mx-auto mb-4"
                />
                <h2 className="text-xl font-black text-black">{user.name}</h2>
                <p className="text-gray-600 font-semibold text-sm">{user.email}</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-gray-500">
                  <FaClock size={12} />
                  <span className="text-xs font-semibold">Member since {user.joinDate}</span>
                </div>
              </div>
              
              {!isEditing ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200">
                    <div className="w-8 h-8 bg-black flex items-center justify-center">
                      <FaPhone className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Phone</p>
                      <p className="text-black font-bold text-sm">{user.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200">
                    <div className="w-8 h-8 bg-black flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">Address</p>
                      <p className="text-black font-bold text-sm">{user.address}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full py-3 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaEdit size={12} />
                    EDIT PROFILE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold resize-none"
                        rows="3"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaSave size={12} />
                      SAVE
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-3 bg-gray-600 text-white font-bold text-sm hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaTimes size={12} />
                      CANCEL
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Stats and Order History Section */}
        <div className="lg:col-span-2" data-aos="fade-left">
          {/* Stats Section */}
          <div className="mb-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-4 text-center"
                >
                  <div className={`w-12 h-12 ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="text-white text-lg" />
                  </div>
                  <div className="text-xl font-black text-black mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-semibold text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order History */}
          <div className="bg-white border border-gray-200">
            <div className="bg-black p-4 border-b border-gray-300">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                  <FaShoppingBag size={16} />
                </div>
                ORDER HISTORY
              </h2>
            </div>

            <div className="p-4">
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order, index) => (
                    <div 
                      key={order.id} 
                      className="bg-gray-50 p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-black text-black">ORDER #{order.id}</h3>
                          <p className="text-gray-600 font-semibold text-sm">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 font-bold text-xs ${
                          order.status === 'Delivered' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-yellow-500 text-white'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-gray-700 font-semibold text-sm leading-relaxed">
                          {order.items.join(', ')}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-black text-red-600">
                          ${order.total.toFixed(2)}
                        </span>
                        <button className="px-4 py-2 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300">
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 flex items-center justify-center">
                    <FaShoppingBag className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-black text-black mb-2">NO ORDERS YET</h3>
                  <p className="text-gray-600 font-medium text-sm mb-4">
                    You haven't placed any orders yet. Start your culinary journey!
                  </p>
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300"
                  >
                    <FaShoppingBag size={12} />
                    BROWSE MENU
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

export default Profile;