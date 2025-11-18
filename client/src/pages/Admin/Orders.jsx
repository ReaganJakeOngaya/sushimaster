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
      duration: 800,
      offset: 50,
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
      case 'pending': return 'bg-yellow-500';
      case 'processing': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
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
      color: 'bg-black',
      change: '+12%'
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: FiClock,
      color: 'bg-yellow-500',
      change: '+5%'
    },
    {
      title: 'Processing',
      value: stats.processing,
      icon: FiPackage,
      color: 'bg-blue-500',
      change: '+8%'
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: FiCheckCircle,
      color: 'bg-green-500',
      change: '+15%'
    }
  ];

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8" data-aos="fade-down">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            <span className="text-black">ORDERS</span>{' '}
            <span className="text-red-600">
              MANAGEMENT
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Track and manage customer orders in real-time
          </p>
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders by customer or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-12 pr-8 py-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold appearance-none"
            >
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
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
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                {stat.change}
              </div>
            </div>
            
            <h3 className="text-gray-600 font-semibold mb-2 text-sm">{stat.title}</h3>
            <p className="text-2xl font-black text-black mb-2">{stat.value}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${stat.color}`}
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
            className="bg-white border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-black">#{order.id}</span>
                    <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold border ${getStatusBgColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <div className="text-lg font-black text-black">{order.customer}</div>
                  <div className="text-gray-600 font-semibold">Table {order.table}</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gray-600 font-semibold mb-2 text-sm">ITEMS</p>
                    <div className="space-y-1">
                      {order.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-black font-medium text-sm">• {item}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-2 text-sm">TIME & CONTACT</p>
                    <p className="text-black font-medium text-sm">{order.date} at {order.time}</p>
                    <p className="text-gray-600 text-xs">{order.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-2 text-sm">TOTAL AMOUNT</p>
                    <p className="text-2xl font-black text-red-600">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 lg:flex-col">
                <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                  <FiEye className="text-lg" />
                </button>
                
                {order.status !== 'completed' && order.status !== 'cancelled' && (
                  <>
                    <button 
                      onClick={() => updateOrderStatus(order.id, 'completed')}
                      className="p-3 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-colors"
                    >
                      <FiCheck className="text-lg" />
                    </button>
                    <button 
                      onClick={() => updateOrderStatus(order.id, 'cancelled')}
                      className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
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
          <div className="bg-white border border-gray-200 p-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-black text-gray-700 mb-2">NO ORDERS FOUND</h3>
            <p className="text-gray-600 font-semibold">No orders match your current search criteria</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;