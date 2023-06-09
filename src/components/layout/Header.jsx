import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.eslice'

const Header = () => {

  const {isShowCart}=useSelector(store=>store.cart)

  const {token}=useSelector(store=>store.userInfo)

  const navigate =useNavigate()


 
const dispatch= useDispatch()

  const handleShowCart=()=>{

    if(!token) {

      navigate("/login")
    
    }
    dispatch(changeIsShowCart())



  }




  return (
    <section className=' flex justify-between  h-[80px] text-xl border-[1px] items-center w-full '>

<Link  to="/"><h1 className='text-red-500 font-semibold px-8 text-3xl'> e-commerce</h1></Link>

    <nav className='text-gray-400  h-full justify-center '>
        <Link to="/login" className='px-[70px]  text-4xl border-x-[1px]   py-auto '> <i className='bx bx-user'></i></Link>
        <Link to="/purchases" className='px-[70px]  text-4xl border-x-[1px]  py-0'> <i className='bx bx-box'></i></Link>
        <button onClick={handleShowCart} className={`px-[70px]  text-4xl border-x-[1px] h-full ${isShowCart ? "text-red-500" :"text-gray-400"} `}><i className='bx bx-cart'></i> </button>
    </nav>


    </section>
  )
}

export default Header