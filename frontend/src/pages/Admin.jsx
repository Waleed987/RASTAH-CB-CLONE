import { useState } from "react";
import axios from "axios";

function Admin() {
  const [item, setItem] = useState({
    productName: "",
    price: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert price to number and validate
      const itemData = {
        ...item,
        price: parseFloat(item.price)
      };
      
      if (isNaN(itemData.price)) {
        alert("Please enter a valid price");
        return;
      }
      
      await axios.post("http://localhost:5000/api/inventory/collection", itemData);
      alert("Item added successfully!");
      setItem({ productName: "", price: "", imageUrl: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("Failed to add item: " + (err.response?.data?.Error || err.message));
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-90 w-90 md:h-120 md:w-120 border-2 flex flex-col rounded-[26px] p-6">
        <h1 className="text-center p-5 mb-2 text-xl font-bold">ADD ITEM</h1>
        
        <form
          className="flex flex-col space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center w-full">
            <label className="w-28">Item Name:</label>
            <input
              type="text"
              name="productName"
              value={item.productName}
              onChange={handleChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            />
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Price:</label>
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={handleChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Image URL:</label>
            <input
              type="url"
              name="imageUrl"
              value={item.imageUrl}
              onChange={handleChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
