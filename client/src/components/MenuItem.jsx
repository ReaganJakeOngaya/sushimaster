import { useState } from 'react';
import { FaShoppingCart, FaCheckCircle, FaStar, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(item);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="group relative bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 backdrop-blur-sm">
      {/* Badge */}
      {item.badge && (
        <div className={`absolute top-6 left-6 z-20 px-4 py-2 rounded-2xl font-black text-sm shadow-lg ${
          item.badge === "Chef's Special"
            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
            : item.badge === 'Seasonal'
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
            : 'bg-gradient-to-r from-orange-500 to-pink-600 text-white'
        }`}>
          {item.badge}
        </div>
      )}

      {/* Rating */}
      <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-lg flex items-center gap-1">
        <FaStar className="text-yellow-500" size={16} />
        <span className="font-black text-slate-900">{item.rating}</span>
      </div>

      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-8 transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full max-w-xs py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 ${
              isAdding
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isAdding ? (
              <>
                <FaCheckCircle size={20} />
                Added to Cart!
              </>
            ) : (
              <>
                <FaShoppingCart size={18} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-black text-slate-900">{item.name}</h3>
          <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-slate-600 leading-relaxed mb-4 font-medium">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-slate-700 text-sm font-bold rounded-full border border-orange-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
            isAdding
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
              : 'bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
          }`}
        >
          {isAdding ? (
            <>
              <FaCheckCircle size={18} />
              Item Added!
            </>
          ) : (
            <>
              <FaPlus size={16} />
              Quick Add
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;