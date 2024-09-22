import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [matchResult, setMatchResult] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    getRegex(category);
  },[category]);

  let getRegex =(prop) => {
    const regex = /(?:computers)|(?:tablets)|(?:laptops)|(?:smart phone)|(?:accessories)/gm; // Example: Matches alphanumeric strings
    const result = regex.test(prop);
    setMatchResult(result);
  }

  let getUrl = () => {
    axios({
      method: "post",
      url: "http://localhost:9000/products",
      data: {
        title,
        description,
        price,
        category
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (matchResult === true) {
      getUrl();
      navigate("/crud")
    } else {
      document.querySelector("#productTitle").classList.add("is-valid");
      document.querySelector("#productDesc").classList.add("is-valid");
      document.querySelector("#productPrice").classList.add("is-valid");
      document.querySelector("#productCategory").classList.add("is-invalid");
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
            id="productTitle"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="productDesc"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="productCategory"
            placeholder="Product Category Must ('computers, laptops, tablets, smart phone, accessories')"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-3">
          <input
            className="form-control"
            type="file"
            id="formImage"
            onChange={ (e) => setImage(URL.createObjectURL(e.target.files[0]))}
            required
          />
        </div> */}
        <div className="add-product col-auto">
          <button type="submit" className="btn btn-primary mb-3 fs-14 fw-bold">
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}
