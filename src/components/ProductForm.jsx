"use client"
import { useState } from "react";

function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",

    });

    const handleChange = (e) => {
        setProduct({
          ...product,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
       e.preventDefault();
       console.log(product)
      };
    return (

        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2">
                Product Name:
            </label>
            <input
                name="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3" />


            <label htmlFor="price" 
            className="block text-gray-700 text-sm font-bold mb-2">
                 Product Price:
                 </label>
            <input
             name="price"
              type="number" 
              placeholder="Price" 
              onChange={handleChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3" />



            <label
             htmlFor="description" 
             className="block text-gray-700 text-sm font-bold mb-2"> 
             Product Description:
             </label>
            <textarea 
            name="description"
             rows={3} 
             placeholder="description" 
             onChange={handleChange} 
             className="shadow appearance-none border rounded w-full py-2 px-3" />


            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-7 px-4 rounded">
                Save Product
            </button>
        </form>

    );
}
export default ProductForm;