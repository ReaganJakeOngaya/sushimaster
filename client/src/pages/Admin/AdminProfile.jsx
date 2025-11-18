import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  
  FaCog,
  FaBell,
  FaLock,
  FaChartLine,
  FaUsers,
  FaBox
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: 'Admin User',
    email: 'admin@sushiking.com',
    phone: '+1 (555) 123-4567',
    address: '123 Sushi Street, Tokyo, Japan',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    joinDate: '2022-03-15',
    role: 'Super Administrator',
    permissions: ['Full Access'],
    lastLogin: '2025-06-15 14:30'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...admin });
  const [activeTab, setActiveTab] = useState('profile');

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
    setAdmin(formData);
    setIsEditing(false);
  };

  const adminStats = [
    { label: 'Total Orders', value: '1,245', icon: FaShoppingBag, color: 'bg-red-600' },
    { label: 'Active Users', value: '843', icon: FaUsers, color: 'bg-green-600' },
    { label: 'Revenue', value: '$28,450', icon: FaChartLine, color: 'bg-black' },
    { label: 'Menu Items', value: '45', icon: FaBox, color: 'bg-yellow-500' },
  ];

  const recentActivities = [
    { action: 'Updated menu item', target: 'Chezu Sushi', time: '2 min ago', type: 'update' },
    { action: 'Processed order', target: '#SK001', time: '5 min ago', type: 'order' },
    { action: 'Added new user', target: 'Sarah Chen', time: '15 min ago', type: 'user' },
    { action: 'Updated settings', target: 'Payment Gateway', time: '1 hour ago', type: 'settings' },
    { action: 'Reviewed feedback', target: 'Customer Review', time: '2 hours ago', type: 'review' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'update': return '🔄';
      case 'order': return '📦';
      case 'user': return '👤';
      case 'settings': return '⚙️';
      case 'review': return '⭐';
      default: return '📝';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'update': return 'text-blue-600';
      case 'order': return 'text-green-600';
      case 'user': return 'text-purple-600';
      case 'settings': return 'text-gray-600';
      case 'review': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1" data-aos="fade-right">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/admin"
              className="group inline-flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-300 mb-6 border border-gray-200"
            >
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <FaArrowLeft className="text-white text-sm" />
              </div>
              <span className="font-bold text-gray-700">Back to Dashboard</span>
            </Link>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                <span className="text-black">ADMIN</span>{' '}
                <span className="text-red-600">
                  PROFILE
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-semibold max-w-2xl">
                Manage your administrator account and settings
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white border border-gray-200 mb-6">
            <div className="bg-black p-4 border-b border-gray-300">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <FaUser className="text-red-600" />
                NAVIGATION
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {[
                { id: 'profile', label: 'Profile Info', icon: FaUser },
                { id: 'security', label: 'Security', icon: FaUser },
                { id: 'notifications', label: 'Notifications', icon: FaBell },
                { id: 'preferences', label: 'Preferences', icon: FaCog }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 font-bold text-sm transition-all duration-300 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white border border-gray-200">
            <div className="bg-black p-4 border-b border-gray-300">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <FaChartLine className="text-red-600" />
                QUICK STATS
              </h3>
            </div>
            <div className="p-4 space-y-4">
              {adminStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-aos="fade-left">
          {/* Profile Information */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200">
                <div className="bg-black p-4 border-b border-gray-300">
                  <h2 className="text-xl font-black text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                      <FaUser size={16} />
                    </div>
                    PROFILE INFORMATION
                  </h2>
                </div>

                <div className="p-6">
                  {/* Avatar Section */}
                  <div className="text-center mb-8">
                    <img 
                      src={admin.avatar} 
                      alt="Admin Profile" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-black text-black">{admin.name}</h2>
                    <p className="text-gray-600 font-semibold">{admin.email}</p>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                        {admin.role}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <FaClock size={12} />
                        <span className="text-xs font-semibold">Joined {admin.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  {!isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200">
                          <div className="w-10 h-10 bg-black flex items-center justify-center">
                            <FaEnvelope className="text-white text-sm" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-semibold">Email</p>
                            <p className="text-black font-bold">{admin.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200">
                          <div className="w-10 h-10 bg-black flex items-center justify-center">
                            <FaPhone className="text-white text-sm" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-semibold">Phone</p>
                            <p className="text-black font-bold">{admin.phone}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200">
                        <div className="w-10 h-10 bg-black flex items-center justify-center">
                          <FaMapMarkerAlt className="text-white text-sm" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">Address</p>
                          <p className="text-black font-bold">{admin.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200">
                        <div className="w-10 h-10 bg-black flex items-center justify-center">
                          <FaLock className="text-white text-sm" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">Last Login</p>
                          <p className="text-black font-bold">{admin.lastLogin}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200">
                        <div className="w-10 h-10 bg-black flex items-center justify-center">
                          <FaUser className="text-white text-sm" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold">Permissions</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {admin.permissions.map((permission, index) => (
                              <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                                {permission}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsEditing(true)}
                        className="w-full py-3 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaEdit size={14} />
                        EDIT PROFILE
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-bold mb-2 text-sm">Full Name</label>
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
                      
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 py-3 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaSave size={14} />
                          SAVE CHANGES
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="flex-1 py-3 bg-gray-600 text-white font-bold text-sm hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaTimes size={14} />
                          CANCEL
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white border border-gray-200">
                <div className="bg-black p-4 border-b border-gray-300">
                  <h2 className="text-xl font-black text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                      <FaClock size={16} />
                    </div>
                    RECENT ACTIVITY
                  </h2>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                        <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1">
                          <p className="font-bold text-black">
                            {activity.action} <span className={getActivityColor(activity.type)}>{activity.target}</span>
                          </p>
                          <p className="text-gray-600 text-sm">{activity.time}</p>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="bg-white border border-gray-200">
              <div className="bg-black p-4 border-b border-gray-300">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <FaShield size={16} />
                  </div>
                  SECURITY SETTINGS
                </h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 border border-gray-200">
                    <h3 className="font-black text-black mb-2">Change Password</h3>
                    <p className="text-gray-600 text-sm mb-4">Update your password regularly to keep your account secure</p>
                    <button className="w-full py-3 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300">
                      CHANGE PASSWORD
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200">
                    <h3 className="font-black text-black mb-2">Two-Factor Authentication</h3>
                    <p className="text-gray-600 text-sm mb-4">Add an extra layer of security to your account</p>
                    <button className="w-full py-3 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300">
                      ENABLE 2FA
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200">
                  <h3 className="font-black text-black mb-4">Login Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white border border-gray-200">
                      <div>
                        <p className="font-bold text-black">Chrome • Windows</p>
                        <p className="text-gray-600 text-sm">Last active: 2 min ago</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Current</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white border border-gray-200">
                      <div>
                        <p className="font-bold text-black">Safari • macOS</p>
                        <p className="text-gray-600 text-sm">Last active: 2 days ago</p>
                      </div>
                      <button className="text-red-600 text-sm font-bold hover:text-red-700">
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="bg-white border border-gray-200">
              <div className="bg-black p-4 border-b border-gray-300">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <FaBell size={16} />
                  </div>
                  NOTIFICATION SETTINGS
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {[
                  { label: 'Order Notifications', description: 'Get notified when new orders come in' },
                  { label: 'System Alerts', description: 'Important system updates and maintenance' },
                  { label: 'User Activities', description: 'Notifications about user actions' },
                  { label: 'Sales Reports', description: 'Daily and weekly sales summaries' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200">
                    <div>
                      <h3 className="font-bold text-black">{item.label}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="bg-white border border-gray-200">
              <div className="bg-black p-4 border-b border-gray-300">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                    <FaCog size={16} />
                  </div>
                  PREFERENCES
                </h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Language</label>
                    <select className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold">
                      <option>English</option>
                      <option>Japanese</option>
                      <option>Spanish</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Time Zone</label>
                    <select className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold">
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC-8 (Pacific Time)</option>
                      <option>UTC+9 (Japan Time)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">Dashboard Theme</label>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-black text-white font-bold text-sm">Dark</button>
                    <button className="px-4 py-2 bg-gray-200 text-black font-bold text-sm">Light</button>
                    <button className="px-4 py-2 bg-gray-200 text-black font-bold text-sm">Auto</button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-black text-white font-bold text-sm hover:bg-red-700 transition-all duration-300">
                    SAVE PREFERENCES
                  </button>
                  <button className="px-6 py-3 bg-gray-200 text-black font-bold text-sm hover:bg-gray-300 transition-all duration-300">
                    RESET DEFAULTS
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;