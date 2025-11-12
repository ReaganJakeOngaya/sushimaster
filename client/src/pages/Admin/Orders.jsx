import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiEye, FiCheck, FiX, FiClock, FiPackage, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { FaBell, FaCog, FaDollarSign } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    // Simulate API call
    setTimeout(() => {
      setOrders([
        {
          id: 1,
          customer: 'John Doe',
          items: ['Chezu Sushi', 'Original Sushi'],
          total: 40.00,
          status: 'completed',
          date: '2023-06-15',
          time: '14:30',
          customerEmail: 'john@example.com',
          table: 'T12'
        },
        {
          id: 2,
          customer: 'Jane Smith',
          items: ['Ramen Legendo', 'Mochi Ice Cream'],
          total: 22.00,
          status: 'processing',
          date: '2023-06-14',
          time: '19:15',
          customerEmail: 'jane@example.com',
          table: 'T05'
        },
        {
          id: 3,
          customer: 'Bob Johnson',
          items: ['Nigiri Sushi', 'Sakura Tea'],
          total: 30.50,
          status: 'pending',
          date: '2023-06-13',
          time: '12:45',
          customerEmail: 'bob@example.com',
          table: 'T08'
        }
      ]);
    }, 500);
  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.id.toString().includes(searchTerm) ||
                         order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (id, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="text-yellow-500" />;
      case 'processing': return <FiPackage className="text-blue-500" />;
      case 'completed': return <FiCheckCircle className="text-green-500" />;
      case 'cancelled': return <FiXCircle className="text-red-500" />;
      default: return <FiClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'from-yellow-500 to-amber-500';
      case 'processing': return 'from-blue-500 to-cyan-500';
      case 'completed': return 'from-green-500 to-emerald-500';
      case 'cancelled': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'processing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length
  };

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.total,
      icon: FiPackage,
      color: 'from-purple-500 to-indigo-500',
      change: '+12%'
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: FiClock,
      color: 'from-yellow-500 to-amber-500',
      change: '+5%'
    },
    {
      title: 'Processing',
      value: stats.processing,
      icon: FiPackage,
      color: 'from-blue-500 to-cyan-500',
      change: '+8%'
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: FiCheckCircle,
      color: 'from-green-500 to-emerald-500',
      change: '+15%'
    }
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8" data-aos="fade-down">
          <div>
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                <FiPackage className="animate-pulse" />
                ORDERS MANAGEMENT / 注文管理
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-slate-900">Orders</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-semibold mt-2">
              Track and manage customer orders in real-time
            </p>
          </div>

          <div className="flex gap-4 mt-4 lg:mt-0">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search orders by customer or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold"
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold appearance-none"
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
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
              className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="text-white text-lg" />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                  {stat.change}
                </div>
              </div>
              
              <h3 className="text-slate-600 font-semibold mb-2">{stat.title}</h3>
              <p className="text-3xl font-black text-slate-900 mb-2">{stat.value}</p>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                  style={{ width: `${Math.min(100, (stat.value / Math.max(1, stats.total)) * 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid gap-6">
          {filteredOrders.map((order, index) => (
            <div 
              key={order.id}
              className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-slate-800">#{order.id}</span>
                      <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold border ${getStatusBgColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="text-lg font-black text-slate-800">{order.customer}</div>
                    <div className="text-slate-600 font-semibold">Table {order.table}</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-slate-600 font-semibold mb-2">Items</p>
                      <div className="space-y-1">
                        {order.items.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-slate-800 font-medium">• {item}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-600 font-semibold mb-2">Time & Contact</p>
                      <p className="text-slate-800 font-medium">{order.date} at {order.time}</p>
                      <p className="text-slate-600 text-sm">{order.customerEmail}</p>
                    </div>
                    <div>
                      <p className="text-slate-600 font-semibold mb-2">Total Amount</p>
                      <p className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        ${order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 lg:flex-col">
                  <button className="p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors shadow-sm">
                    <FiEye className="text-lg" />
                  </button>
                  
                  {order.status !== 'completed' && order.status !== 'cancelled' && (
                    <>
                      <button 
                        onClick={() => updateOrderStatus(order.id, 'completed')}
                        className="p-3 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-colors shadow-sm"
                      >
                        <FiCheck className="text-lg" />
                      </button>
                      <button 
                        onClick={() => updateOrderStatus(order.id, 'cancelled')}
                        className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors shadow-sm"
                      >
                        <FiX className="text-lg" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl border border-purple-100 p-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-black text-slate-700 mb-2">No orders found</h3>
              <p className="text-slate-600 font-semibold">No orders match your current search criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;