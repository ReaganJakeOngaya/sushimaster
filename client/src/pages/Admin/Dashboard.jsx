import { useEffect, useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import {
  FaShoppingCart,
  FaDollarSign,
  FaUsers,
  FaStar,
  FaClock,
  FaUtensils,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaBell,
  FaCog,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    activeUsers: 0,
    avgRating: 0,
    popularItems: [],
    recentOrders: [],
    salesData: [],
    categoryData: []
  });

  const [timeRange, setTimeRange] = useState('monthly');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    // Simulate API call
    setTimeout(() => {
      setStats({
        totalOrders: 1245,
        totalRevenue: 28450.75,
        activeUsers: 843,
        avgRating: 4.8,
        popularItems: [
          { name: 'Chezu Sushi', orders: 342, revenue: 7182, growth: 12 },
          { name: 'Original Sushi', orders: 298, revenue: 5662, growth: 8 },
          { name: 'Ramen Legendo', orders: 256, revenue: 3328, growth: 15 },
          { name: 'Nigiri Sushi', orders: 198, revenue: 4752, growth: 5 },
          { name: 'Mochi Ice Cream', orders: 176, revenue: 1584, growth: 20 }
        ],
        recentOrders: [
          { id: '#SK001', customer: 'Sarah Chen', amount: 45.50, status: 'Delivered', time: '2 min ago' },
          { id: '#SK002', customer: 'Mike Rodriguez', amount: 32.75, status: 'Processing', time: '5 min ago' },
          { id: '#SK003', customer: 'Emma Wilson', amount: 67.25, status: 'Delivered', time: '12 min ago' },
          { id: '#SK004', customer: 'James Brown', amount: 28.90, status: 'Cancelled', time: '15 min ago' },
          { id: '#SK005', customer: 'Lisa Kim', amount: 54.60, status: 'Processing', time: '18 min ago' }
        ],
        salesData: [
          { name: 'Jan', revenue: 4200, orders: 89 },
          { name: 'Feb', revenue: 3800, orders: 76 },
          { name: 'Mar', revenue: 5200, orders: 104 },
          { name: 'Apr', revenue: 4800, orders: 96 },
          { name: 'May', revenue: 6100, orders: 122 },
          { name: 'Jun', revenue: 7300, orders: 146 },
          { name: 'Jul', revenue: 6850, orders: 137 },
          { name: 'Aug', revenue: 7920, orders: 158 },
          { name: 'Sep', revenue: 8450, orders: 169 },
          { name: 'Oct', revenue: 9120, orders: 182 },
          { name: 'Nov', revenue: 8780, orders: 175 },
          { name: 'Dec', revenue: 9650, orders: 193 }
        ],
        categoryData: [
          { name: 'Sushi', value: 45, color: '#FF6B35' },
          { name: 'Ramen', value: 30, color: '#4ECDC4' },
          { name: 'Drinks', value: 15, color: '#45B7D1' },
          { name: 'Desserts', value: 10, color: '#FFA07A' }
        ]
      });
    }, 800);
  }, []);

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: FaShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: FaDollarSign,
      color: 'from-green-500 to-emerald-500',
      change: '+18%',
      trend: 'up'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      icon: FaUsers,
      color: 'from-purple-500 to-indigo-500',
      change: '+8%',
      trend: 'up'
    },
    {
      title: 'Avg Rating',
      value: stats.avgRating,
      icon: FaStar,
      color: 'from-orange-500 to-pink-500',
      change: '+2%',
      trend: 'up'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'Processing': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Cancelled': return 'bg-gradient-to-r from-red-500 to-pink-600';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8" data-aos="fade-down">
          <div>
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                <FaChartLine className="animate-pulse" />
                ADMIN DASHBOARD / ダッシュボード
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-slate-900">Business</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-semibold mt-2">
              Real-time analytics and performance metrics
            </p>
          </div>

          <div className="flex gap-4 mt-4 lg:mt-0">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold"
              />
            </div>
            <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300">
              <FaFilter className="text-slate-600" />
            </button>
            <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 relative">
              <FaBell className="text-slate-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300">
              <FaCog className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="text-white text-lg" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {stat.trend === 'up' ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                  {stat.change}
                </div>
              </div>
              
              <h3 className="text-slate-600 font-semibold mb-2">{stat.title}</h3>
              <p className="text-3xl font-black text-slate-900 mb-2">{stat.value}</p>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                  style={{ width: `${Math.min(100, (index + 1) * 25)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-xl border border-blue-100"
            data-aos="fade-right"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <FaChartLine className="text-white text-lg" />
                </div>
                Revenue Overview
              </h2>
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 bg-white border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats.salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#1d4ed8' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#047857' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-xl border border-blue-100"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <FaUtensils className="text-white text-lg" />
              </div>
              Category Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {stats.categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Popular Items */}
          <div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-xl border border-blue-100"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                <FaStar className="text-white text-lg" />
              </div>
              Popular Items
            </h2>
            <div className="space-y-4">
              {stats.popularItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center shadow-lg">
                      <span className="text-lg">🍣</span>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900">{item.name}</h4>
                      <p className="text-slate-600 text-sm font-semibold">{item.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      ${item.revenue}
                    </p>
                    <div className={`flex items-center gap-1 text-xs font-bold ${
                      item.growth > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.growth > 0 ? <FaArrowUp size={8} /> : <FaArrowDown size={8} />}
                      {item.growth}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-xl border border-blue-100"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <FaClock className="text-white text-lg" />
              </div>
              Recent Orders
            </h2>
            <div className="space-y-4">
              {stats.recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div>
                    <h4 className="font-black text-slate-900">{order.id}</h4>
                    <p className="text-slate-600 text-sm font-semibold">{order.customer}</p>
                    <p className="text-slate-400 text-xs">{order.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-slate-900">${order.amount}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
