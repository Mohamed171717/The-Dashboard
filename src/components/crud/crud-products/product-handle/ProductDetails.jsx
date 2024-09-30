
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

  const [ product, setProduct] = useState();
  let { productID } = useParams();

  useEffect(() => {

    fetch(`http://localhost:9000/products/${productID}`)
    .then( (res) => res.json())
    .then( (product) => {
      setProduct(product)
    })

  }, [productID]);

  return (
    <>
    <h3 className="fs-5 fw-bold mb-25">Product Details</h3>
    { product && /* it means if there is product */
      <>
      <div className='product-details'>
        <div className='product-img'>
          <img src={`http://localhost:9000/images/${product.imageFilename}`} alt='' />
        </div>
        <div className='product-info'>
          <h4>{product.title}.</h4> 
          <h5>{product.category}</h5>
          <p className="c-grey fs-13">{product.description}</p>
          <div className='price-buy'>
            <h5>${product.price}</h5>
            <button className='btn-shape'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      </>
    } 
    </>
  )
}
