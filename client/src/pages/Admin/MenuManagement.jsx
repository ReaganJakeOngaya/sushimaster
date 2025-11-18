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
      duration: 800,
      offset: 50,
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
      sushi: 'bg-red-600',
      ramen: 'bg-yellow-500',
      desserts: 'bg-pink-500',
      drinks: 'bg-blue-500'
    };
    return colors[category] || 'bg-gray-600';
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
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8" data-aos="fade-down">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            <span className="text-black">MENU</span>{' '}
            <span className="text-red-600">
              MANAGEMENT
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Create and manage your restaurant menu items
          </p>
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-12 pr-8 py-3 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold appearance-none"
            >
              <option value="all">All Categories</option>
              <option value="sushi">Sushi</option>
              <option value="ramen">Ramen</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
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

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Menu Items List */}
        <div className="xl:col-span-3">
          <div 
            className="bg-white border border-gray-200 p-6"
            data-aos="fade-right"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-black flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                  <FiTag className="text-white text-lg" />
                </div>
                MENU ITEMS ({filteredItems.length})
              </h2>
              <button 
                onClick={() => setIsEditing(null)}
                className="flex items-center gap-3 bg-black text-white px-6 py-3 hover:bg-red-700 transition-all duration-300 font-semibold"
              >
                <FiPlus className="text-xl" />
                ADD NEW ITEM
              </button>
            </div>

            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-gray-50 p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-16 h-16 ${getCategoryColor(item.category)} flex items-center justify-center text-2xl`}>
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-black text-black">{item.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-semibold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-2xl font-black text-red-600">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-green-500"
                            style={{ width: `${item.popularity}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">{item.popularity}%</span>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEdit(item)}
                          className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors"
                        >
                          <FiEdit className="text-lg" />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
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
                <h3 className="text-2xl font-black text-gray-700 mb-2">NO MENU ITEMS FOUND</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Form */}
        <div 
          className="bg-white border border-gray-200 p-6 h-fit"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-black text-black mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
              <FiPlus className="text-white text-lg" />
            </div>
            {isEditing ? 'EDIT MENU ITEM' : 'CREATE NEW ITEM'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <FiType className="text-red-600" />
                ITEM NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                placeholder="Enter item name"
                required
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <FiType className="text-red-600" />
                DESCRIPTION
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                rows="3"
                placeholder="Describe your menu item"
                required
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <FiDollarSign className="text-red-600" />
                PRICE
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <FiTag className="text-red-600" />
                CATEGORY
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold appearance-none"
                required
              >
                <option value="sushi">Sushi</option>
                <option value="ramen">Ramen</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <FiTag className="text-red-600" />
                TAGS
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black font-semibold"
                placeholder="premium, cheese, traditional"
              />
              <p className="text-xs text-gray-500 mt-2 font-semibold">Separate tags with commas</p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-4 font-bold hover:bg-red-700 transition-all duration-300 text-lg"
            >
              {isEditing ? 'UPDATE MENU ITEM' : 'ADD TO MENU'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;