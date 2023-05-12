import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import { axiosEcommerce } from '../utils/xonfigAxios'
import ProductDetail from '../components/product/ProductDetail'
import SimilarProducts from '../components/product/SimilarProducts'

const Products = () => {


  const {id} = useParams()

    
  
  return (
    <main>

  

<ProductDetail productId={id}  />



      </main>
  )
}

export default Products