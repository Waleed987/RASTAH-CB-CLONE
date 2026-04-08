import { useState } from "react";
import api from "../api";

function Admin() {
  const [item, setItem] = useState({
    productName: "",
    price: "",
    imageUrl: "",
    gender:"",
    availability:"",
    size:"",
    subcategory:"",

  });

  const [deleteItem, setDeleteItem] = useState("");

  const handleDeleteItemChange = (e) => {
    const { value } = e.target;
    setDeleteItem(value);
  };

  const handleAddItemChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItemSubmit = async (e) => {
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
      
      await api.post("/api/inventory/collection", itemData);
      alert("Item added successfully!");
      setItem({ 
        productName: "", 
        price: "", 
        imageUrl: "", 
        gender: "", 
        availability: "", 
        size: "", 
        subcategory: "" 
      }); // reset form
    } catch (err) {
      console.error(err);
      alert("Failed to add item: " + (err.response?.data?.Error || err.message));
    }
  };

  const handleDeleteItemSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!deleteItem.trim()) {
        alert("Please enter an item name to delete");
        return;
      }
      
      await api.delete(`/api/inventory/collection/${deleteItem}`);
      alert("Item deleted successfully");
      setDeleteItem(""); // reset form
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting item: " + (error.response?.data?.Error || error.message));
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-wrap ">
      <div className="mr-5  w-90  md:w-120 border-2 flex flex-col rounded-[26px] p-6">
        <h1 className="text-center p-5 mb-2 text-xl font-bold">ADD ITEM</h1>
        
        <form
          className="flex flex-col space-y-6"
          onSubmit={handleAddItemSubmit}
        >
          <div className="flex items-center w-full">
            <label className="w-28">Item Name:</label>
            <input
              type="text"
              name="productName"
              value={item.productName}
              onChange={handleAddItemChange}
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
              onChange={handleAddItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Image URL:</label>
            <input
              placeholder="/home.webp"
              type="text"
              name="imageUrl"
              value={item.imageUrl}
              onChange={handleAddItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            />
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Gender:</label>
            <select
              name="gender"
              value={item.gender}
              onChange={handleAddItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Availability:</label>
            <select
              name="availability"
              value={item.availability}
              onChange={handleAddItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            >
              <option value="">Select Availability</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
              <option value="pre-order">Pre-Order</option>
            </select>
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Size:</label>
            <select
              name="size"
              value={item.size}
              onChange={handleAddItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            >
              <option value="">Select Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>

          <div className="flex items-center w-full">
            <label className="w-28">Subcategory:</label>
            <input
              type="text"
              name="subcategory"
              value={item.subcategory}
              onChange={handleAddItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              placeholder="e.g., T-Shirts, Jeans, Dresses"
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


      <div className="mt-5 lg:mt-0 w-90 md:w-120 border-2 flex flex-col rounded-[26px] p-6">
        <h1 className="text-center p-5 mb-2 text-xl font-bold">REMOVE ITEM</h1>
        
        <form
          className="flex flex-col space-y-6"
          onSubmit={handleDeleteItemSubmit}
        >
          <div className="flex items-center w-full">
            <label className="w-28">Item Name:</label>
            <input
              type="text"
              name="deleteItem"
              value={deleteItem}
              onChange={handleDeleteItemChange}
              className="px-2 py-1 border-2 ml-2 w-[70%] h-10 rounded-[10px]"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Remove Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
