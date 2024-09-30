import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  
  let navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});

  

  async function handleSubmit(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const product = Object.fromEntries(formData.entries())

    if( !product.title || !product.description || !product.category 
      || !product.price || !product.image.name) {
        alert("please full all the fields")
        return
      }
    
    try { 
      const response = await fetch("http://localhost:9000/products", {
        method: "POST",
        body: formData
      })
      const data = await response.json()
      if( response.ok) {
        // product create successfully
        navigate("/crud")
      }
      else if( response.status === 400) {
        setValidationErrors(data)  
      }
      else {
        alert("unable to create the product")
      }
    }
    catch(error) {
      alert("unable to connect the server")
    }


  };

  return (
    <>
      <h3 className="fs-5 fw-bold mb-25">New Product</h3>
      <form onSubmit={handleSubmit} id="addProduct">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Product Title"
          />
          <span className="text-danger">{validationErrors.title}</span>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Product Description"
          />
          <span className="text-danger">{validationErrors.description}</span>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            step="0.01"
            min="1"
            placeholder="Product Price"
          />
          <span className="text-danger">{validationErrors.price}</span>
        </div>
        <div className="mb-3">
          <select className="form-select" name="category">
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Shoes">Shoes</option>
          </select>
          <span className="text-danger">{validationErrors.category}</span>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            name="image"
          />
          <span className="text-danger">{validationErrors.image}</span>
        </div>
        <div className="add-product col-auto">
          <button type="submit" className="btn btn-primary mb-3 fs-14 fw-bold">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
