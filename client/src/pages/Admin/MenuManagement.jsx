// MenuManagement.jsx
import { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiTag, FiDollarSign, FiType, FiSearch, FiFilter } from 'react-icons/fi';
import { FaBell, FaCog } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'sushi',
    tags: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    // Simulate API call
    setTimeout(() => {
      setMenuItems([
        {
          id: 1,
          name: 'Chezu Sushi',
          description: 'Premium cheese sushi with fresh ingredients',
          price: 21.00,
          category: 'sushi',
          tags: ['premium', 'cheese'],
          popularity: 95
        },
        {
          id: 2,
          name: 'Original Sushi',
          description: 'Traditional Japanese sushi made with finest fish',
          price: 19.00,
          category: 'sushi',
          tags: ['traditional', 'classic'],
          popularity: 88
        },
        {
          id: 3,
          name: 'Ramen Legendo',
          description: 'Legendary ramen with rich broth and tender noodles',
          price: 13.00,
          category: 'ramen',
          tags: ['broth', 'noodles'],
          popularity: 92
        }
      ]);
    }, 500);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setMenuItems(prev => prev.map(item => 
        item.id === isEditing ? { ...formData, id: isEditing, tags: formData.tags.split(',').map(tag => tag.trim()), popularity: 85 } : item
      ));
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
        tags: formData.tags.split(',').map(tag => tag.trim()),
        popularity: 80
      };
      setMenuItems(prev => [...prev, newItem]);
    }
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'sushi',
      tags: ''
    });
    setIsEditing(null);
  };

  const handleEdit = (item) => {
    setIsEditing(item.id);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      tags: item.tags.join(', ')
    });
  };

  const handleDelete = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const getCategoryColor = (category) => {
    const colors = {
      sushi: 'from-red-500 to-orange-500',
      ramen: 'from-amber-500 to-yellow-500',
      desserts: 'from-pink-500 to-rose-500',
      drinks: 'from-blue-500 to-cyan-500'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      sushi: '🍣',
      ramen: '🍜',
      desserts: '🍰',
      drinks: '🥤'
    };
    return icons[category] || '🍽️';
  };

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8" data-aos="fade-down">
          <div>
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                <FiTag className="animate-pulse" />
                MENU MANAGEMENT / メニュー管理
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-slate-900">Menu</span>{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-semibold mt-2">
              Create and manage your restaurant menu items
            </p>
          </div>

          <div className="flex gap-4 mt-4 lg:mt-0">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold appearance-none"
              >
                <option value="all">All Categories</option>
                <option value="sushi">Sushi</option>
                <option value="ramen">Ramen</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
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

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Menu Items List */}
          <div className="xl:col-span-3">
            <div 
              className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 shadow-xl border border-orange-100"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                    <FiTag className="text-white text-lg" />
                  </div>
                  Menu Items ({filteredItems.length})
                </h2>
                <button 
                  onClick={() => setIsEditing(null)}
                  className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  <FiPlus className="text-xl" />
                  Add New Item
                </button>
              </div>

              <div className="space-y-4">
                {filteredItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getCategoryColor(item.category)} flex items-center justify-center shadow-lg text-2xl`}>
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(item.category)}`}>
                              {item.category}
                            </span>
                          </div>
                          <p className="text-slate-600 mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-semibold"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3">
                        <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                              style={{ width: `${item.popularity}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-slate-600">{item.popularity}%</span>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEdit(item)}
                            className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors shadow-sm"
                          >
                            <FiEdit className="text-lg" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors shadow-sm"
                          >
                            <FiTrash2 className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🍽️</div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-2">No menu items found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* Add/Edit Form */}
          <div 
            className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 shadow-xl border border-orange-100 h-fit"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                <FiPlus className="text-white text-lg" />
              </div>
              {isEditing ? 'Edit Menu Item' : 'Create New Item'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FiType className="text-orange-500" />
                  Item Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold"
                  placeholder="Enter item name"
                  required
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FiType className="text-orange-500" />
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold"
                  rows="3"
                  placeholder="Describe your menu item"
                  required
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FiDollarSign className="text-orange-500" />
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  required
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FiTag className="text-orange-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold appearance-none"
                  required
                >
                  <option value="sushi">Sushi</option>
                  <option value="ramen">Ramen</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FiTag className="text-orange-500" />
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-semibold"
                  placeholder="premium, cheese, traditional"
                />
                <p className="text-xs text-slate-500 mt-2 font-semibold">Separate tags with commas</p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                {isEditing ? 'Update Menu Item' : 'Add to Menu'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;