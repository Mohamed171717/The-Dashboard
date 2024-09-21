import React from 'react';
import { useEffect, useState, } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export default function EditProduct() {

  let { productID } = useParams();
  const [ product, setProduct] = useState();
  const [ title, setTitle] = useState("");
  const [ description, setDescription] = useState("");
  // const [ image, setImage] = useState({});
  const [ price, setPrice] = useState(0);
  const [ category, setCategory] = useState("");
  let navigate = useNavigate();



  useEffect(() => {

    fetch(`http://localhost:9000/products/${productID}`)
    .then( (res) => res.json())
    .then( (product) => {
      setProduct(product)
    })

  }, [productID]);

  function formSubmit(e) {
    
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:9000/products/${productID}`,
      data: {
        title,
        description,
        price,
        category,
        // image
      }
    })
    .then(() => {
      navigate("/crud/all-products")
    })
    
  }


  return (
    <>
    <h3 className="fs-5 fw-bold mb-25">Edit Product</h3>
    { product && 
      <>
      <form onSubmit={ formSubmit }>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder={product.title}
            onChange={ (e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="productDesc"
            placeholder={product.description}
            onChange={ (e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder={product.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="productCategory"
            placeholder={product.category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {/* <div className="mb-3">
          <input
            type="file"
            className="form-control"
            id="productImage"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </div> */}
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
