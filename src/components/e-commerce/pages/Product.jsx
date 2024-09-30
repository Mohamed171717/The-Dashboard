import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../bread-crumbs/BreadCrumb';
import ProductDisplay from '../product-display/ProductDisplay';
import DescriptionBox from '../description-box/DescriptionBox';
import RelatedProducts from '../related-products/RelatedProducts';


export default function Product() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
    <div className="product">
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
    </>
  )
}
