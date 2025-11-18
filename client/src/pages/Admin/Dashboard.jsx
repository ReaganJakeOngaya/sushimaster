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
import sushi1 from '../../assets/Temaki-sushi.jpg';
import sushi2 from '../../assets/Dragonroll.jpg';
import sushi3 from '../../assets/volcano-ramen.jpg';
import sushi4 from '../../assets/Rainbow-sushi.jpg';
import sushi5 from '../../assets/spicy-tuna.jpg';

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
      duration: 800,
      offset: 50,
    });

    // Simulate API call
    setTimeout(() => {
      setStats({
        totalOrders: 1245,
        totalRevenue: 28450.75,
        activeUsers: 843,
        avgRating: 4.8,
        popularItems: [
          { name: 'Temaki sushi', orders: 342, revenue: 7182, growth: 12 , image: sushi1},
          { name: 'Dragon roll', orders: 298, revenue: 5662, growth: 8 , image: sushi2},
          { name: 'Volcano Ramen ', orders: 256, revenue: 3328, growth: 15, image: sushi3 },
          { name: 'Rainbow Sushi', orders: 198, revenue: 4752, growth: 5, image: sushi4 },
          { name: 'Spicy Tuna', orders: 176, revenue: 1584, growth: 20, image: sushi5 }
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
      color: 'bg-red-600',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: FaDollarSign,
      color: 'bg-green-600',
      change: '+18%',
      trend: 'up'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      icon: FaUsers,
      color: 'bg-black',
      change: '+8%',
      trend: 'up'
    },
    {
      title: 'Avg Rating',
      value: stats.avgRating,
      icon: FaStar,
      color: 'bg-yellow-500',
      change: '+2%',
      trend: 'up'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-600';
      case 'Processing': return 'bg-yellow-500';
      case 'Cancelled': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8" data-aos="fade-down">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            <span className="text-black">BUSINESS</span>{' '}
            <span className="text-red-600">
              INSIGHTS
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Real-time analytics and performance metrics
          </p>
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="pl-12 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
            />
          </div>
          <button className="p-3 bg-white border border-gray-300 hover:border-black transition-all duration-300">
            <FaFilter className="text-gray-600" />
          </button>
          <button className="p-3 bg-white border border-gray-300 hover:border-black transition-all duration-300 relative">
            <FaBell className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          <button className="p-3 bg-white border border-gray-300 hover:border-black transition-all duration-300">
            <FaCog className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 ${stat.color} flex items-center justify-center`}>
                <stat.icon className="text-white text-lg" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.trend === 'up' ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                {stat.change}
              </div>
            </div>
            
            <h3 className="text-gray-600 font-semibold mb-2 text-sm">{stat.title}</h3>
            <p className="text-2xl font-black text-black mb-2">{stat.value}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${stat.color}`}
                style={{ width: `${Math.min(100, (index + 1) * 25)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div 
          className="bg-white border border-gray-200 p-6"
          data-aos="fade-right"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black text-black flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                <FaChartLine className="text-white text-lg" />
              </div>
              REVENUE OVERVIEW
            </h2>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
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
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#dc2626" 
                  strokeWidth={3}
                  dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#991b1b' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#16a34a" 
                  strokeWidth={3}
                  dot={{ fill: '#16a34a', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#15803d' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div 
          className="bg-white border border-gray-200 p-6"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-black text-black mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <FaUtensils className="text-white text-lg" />
            </div>
            CATEGORY DISTRIBUTION
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
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Items */}
        <div 
          className="bg-white border border-gray-200 p-6"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-black text-black mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center">
              <FaStar className="text-white text-lg" />
            </div>
            POPULAR ITEMS
          </h2>
          <div className="space-y-4">
            {stats.popularItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center border border-gray-300">
                    <span className="text-lg">
                      <img
                        src={item.image}
                        className=" object-contain "
                     />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-black">{item.name}</h4>
                    <p className="text-gray-600 text-sm font-semibold">{item.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-red-600">
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
          className="bg-white border border-gray-200 p-6"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-black text-black mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 flex items-center justify-center">
              <FaClock className="text-white text-lg" />
            </div>
            RECENT ORDERS
          </h2>
          <div className="space-y-4">
            {stats.recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div>
                  <h4 className="font-black text-black">{order.id}</h4>
                  <p className="text-gray-600 text-sm font-semibold">{order.customer}</p>
                  <p className="text-gray-400 text-xs">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-black">${order.amount}</p>
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
  );
};

export default Dashboard;