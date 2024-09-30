import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


export default function AllProducts() {
  const [products, setProducts] = useState([]);

  
  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });
  }
  
  const deleteProduct = (productID) => {
    Swal.fire({
      title: "Are You Sure You Want To Delete This Product?",
      showCancelButton: true
    })
    .then( (data) => {
      if( data.isConfirmed ) {
        fetch(`http://localhost:9000/products/${productID}`,{ method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            getAllProducts();
          });  
        }
      })
  }
  
  useEffect( getAllProducts, [])

  return (
    <>
      <h3 className="fs-5 fw-bold ml-20 mb-25">Products</h3>
        <Link className="c-white" to={"/crud/all-products/add"}>
          <button className="btn btn-success ml-20 btn-sm fw-bolder">Add New Product</button>
        </Link>
      <div className="crud-page d-grid m-20 gap-20">
        {products.map((product) => { 
          return (
            <div key={product.id} className="crud p-relative rad-6 bg-white p-20">
              <div className="contact"> 
                <Link onClick={() => { deleteProduct(product.id)} } to="">
                  <i className="fa-solid fa-xmark"></i>
                </Link>
              </div>
              <div className="contents txt-c">
                <div className="image">
                  <img className="w-100" src={`http://localhost:9000/images/${product.imageFilename}`} alt=""/>
                </div>
                <h4>{product.title}</h4>
                <p className="c-grey fs-13">{ product.description.length > 200? product.description.slice(0,70) : product.description }</p>
              </div>
              <div className="info d-flex fs-13">
                <div className="links around-flex">
                  <Link to={`/crud/all-products/edit/${product.id}`} className=" btn-shape c-white">
                    Update
                  </Link>
                  <Link to={`/crud/all-products/${product.id}`} className=" btn-shape c-white">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
