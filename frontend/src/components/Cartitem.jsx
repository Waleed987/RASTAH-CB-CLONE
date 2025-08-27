import { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';

function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdateQuantity(item.productId, item.size, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemoveItem(item.productId, item.size);
  };

  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      {/* Product Image */}
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
          <img 
            src={item.imageUrl || "/hero.webp"} 
            alt={item.productName} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">{item.productName}</h3>
          <p className="text-sm text-gray-600 capitalize">{item.gender} • {item.subcategory}</p>
          <p className="text-sm text-gray-600">Size: {item.size}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        
        <span className="w-12 text-center text-lg font-medium text-gray-900">
          {quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">
          Rs. {item.price?.toLocaleString() || "0"}
        </p>
        <p className="text-sm text-gray-600">
          Total: Rs. {(item.price * quantity)?.toLocaleString() || "0"}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors duration-200"
        title="Remove item"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}

export default CartItem;