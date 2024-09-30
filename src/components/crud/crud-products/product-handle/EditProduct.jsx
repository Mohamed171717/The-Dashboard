import React, { useEffect } from 'react';
import { useState, } from 'react';
import { useNavigate, useParams } from "react-router-dom";


export default function EditProduct() {


  let navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});
  const [products, setProducts] = useState();
  let { productID } = useParams();

  function getProductId () {
    fetch(`http://localhost:9000/products/${productID}`)
    .then( (res) => res.json())
    .then( (data) => {
      setProducts(data)
    })  
  }

  useEffect( getProductId, [productID]);



  async function handleSubmit(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const product = Object.fromEntries(formData.entries())

    if( !product.title || !product.description || !product.category 
      || !product.price) {
        alert("please full all the fields")
        return
      }
    
    try { 
      const response = await fetch(`http://localhost:9000/products/${productID}`, {
        method: "PATCH",
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
        alert("unable to update the product")
      }
    }
    catch(error) {
      // alert("unable to connect the server")
    }

  };

  return (
    <>
    <h3 className="fs-5 fw-bold mb-25">Edit Product</h3>
    { products && 
      <>
      <form onSubmit={ handleSubmit } id='editProduct'>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            defaultValue={products.title}
          />
          <span className='text-danger'>{validationErrors.title}</span>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            defaultValue={products.description}
          />
          <span className='text-danger'>{validationErrors.description}</span>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            id="price"
            step="0.01"
            min="1"
            defaultValue={products.price}
          />
          <span className='text-danger'>{validationErrors.price}</span>
        </div>
        <div className="mb-3">
          <select className="form-select" id="category" name="category" defaultValue={products.category}>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Shoes">Shoes</option>
          </select>
          <span className='text-danger'>{validationErrors.category}</span>
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            name="imageFilename"
            id="imageFilename"
          />
          <span className='text-danger'>{validationErrors.imageFilename}</span>
        </div>
        <div className="edit-product col-auto">
          <button type="submit" className="btn btn-primary mb-3 fs-14 fw-bold">
            Update Product
          </button>
        </div>
      </form>
      </>
    }
    </>
  )
}
