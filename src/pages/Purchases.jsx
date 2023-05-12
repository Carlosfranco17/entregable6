import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosEcommerce, getConfig } from '../utils/xonfigAxios'
import PurchasesCard from '../components/purchases/PurchasesCard'

const Purchases = () => {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {

 axiosEcommerce
    .get("purchases", getConfig())
    .then((res)=>{

      const orderPurchases=res.data.sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime())
setPurchases(orderPurchases)

    })
    .catch((err)=>console.log(err))
    
  }, [])
  
  return (
    <main className='px-2 max-w-[1200px] mx-auto' >
      <section className='flex gap-4 items-center p-4 my-2'>

<Link to="/" className='text-gray-600'>Home</Link>
<div className='h-[7px] bg-red-500 w-[7px] rounded-full'></div>
<span className='font-bold'>Purchases</span>
</section>

      <section className='grid gap-8 py-6'>

        {


purchases.map(purchase=><PurchasesCard purchase={purchase} key={purchase ?.id}/>)


        }

      </section>
      
      
      </main>
  )
}

export default Purchases