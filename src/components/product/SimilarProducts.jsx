import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/xonfigAxios'
import ProductCard from '../home/ProductCard'

const SimilarProducts = ({categoryId,productId}) => {
const [similarProducts, setSimilarProducts] = useState([])
    useEffect(() => {
      if (categoryId){

        axiosEcommerce
      .get(`Products?categoryId=${categoryId}`)
      .then((res)=>{
        
const otherProducts=res.data.filter(Product=>Product.id !== productId)

        setSimilarProducts( otherProducts )
    
    })
      .catch((err)=>console.log(err))
        
      }

    }, [categoryId,productId])
    
  return (
    <section className='px-2 grid gap-12'>
        <h2 className='text-red-500 font-bold mt-6 min-w-screen'>Discover similar items</h2>

        <section className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>

{
similarProducts.map(product=> <ProductCard className="w-[300px]" key={product.id} product={product}/>)

}


        </section>
    </section>
  )
}

export default SimilarProducts