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
      duration: 1000,
      offset: 100,
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
    { label: 'Total Orders', value: orders.length, icon: FaShoppingBag, color: 'from-blue-500 to-cyan-500' },
    { label: 'Completed', value: orders.filter(o => o.status === 'Delivered').length, icon: FaCheckCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'Total Spent', value: `$${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}`, icon: FaStar, color: 'from-orange-500 to-pink-500' },
    { label: 'Member Since', value: '2023', icon: FaUser, color: 'from-purple-500 to-indigo-500' },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 border border-purple-100 mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <FaArrowLeft className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-700">Back to Home</span>
          </Link>

          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
              <FaUser className="animate-pulse" />
              MY PROFILE / プロフィール
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
            <span className="text-slate-900">My</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Profile
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-semibold">
            Manage your account and track your orders
          </p>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-lg border border-purple-100 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg mx-auto mb-4`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Profile Information */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-8 border border-purple-100">
              {/* Avatar Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur-lg opacity-75"></div>
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="relative w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-2xl mx-auto"
                  />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mt-4">{user.name}</h2>
                <p className="text-slate-600 font-semibold">{user.email}</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-slate-500">
                  <FaClock size={14} />
                  <span className="text-sm font-semibold">Member since {user.joinDate}</span>
                </div>
              </div>
              
              {!isEditing ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-purple-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">Phone</p>
                      <p className="text-slate-900 font-bold">{user.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-purple-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">Address</p>
                      <p className="text-slate-900 font-bold">{user.address}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <FaEdit />
                    Edit Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-2">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-purple-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold resize-none"
                        rows="3"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <FaSave />
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-4 bg-gradient-to-r from-slate-500 to-slate-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <FaTimes />
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-8 border border-purple-100">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <FaShoppingBag className="text-white text-lg" />
                </div>
                Order History
              </h2>
              
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order, index) => (
                    <div 
                      key={order.id} 
                      className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-black text-slate-900">Order #{order.id}</h3>
                          <p className="text-slate-600 font-semibold">{order.date}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-2xl font-bold text-sm ${
                          order.status === 'Delivered' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                            : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-slate-700 font-semibold leading-relaxed">
                          {order.items.join(', ')}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          ${order.total.toFixed(2)}
                        </span>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center shadow-lg">
                    <FaShoppingBag className="text-slate-400 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">No orders yet</h3>
                  <p className="text-slate-600 font-semibold mb-8">
                    You haven't placed any orders yet. Start your culinary journey!
                  </p>
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <FaShoppingBag />
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

export default Profile;