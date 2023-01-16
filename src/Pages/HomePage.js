// import * as data from '../data'
import toast from 'react-hot-toast'
import {
  HiShoppingCart,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineSortDescending,
  HiPhone,
  HiOutlineDeviceMobile,
  HiOutlinePhotograph,
  HiOutlineDesktopComputer,
  HiOutlineColorSwatch,
  HiOutlineClock,
  
} from 'react-icons/hi'
import { FaDigitalOcean } from 'react-icons/fa'
import { useCart, useCartActions } from '../Providers/CartProviders'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const checkincart = (cart, p) => {
  return cart.find((c) => c._id === p._id)
}
const HomePage = () => {
  const [products, setProducts] = useState([])
  const { cart } = useCart()
  const dispatch = useCartActions()
  const clickHandler = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
    toast.success(`${product.name} به سبد خرید اضافه شد`)
  }
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/product')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    getProduct()
  }, [])
  return (
    <section className=' container mx-auto mt-4  '>
      <div className="flex justify-between items-center mt-10 mx-4 mb-6 md:hidden ">
        <div className="flex items-center justify-center w-7 h-7">
          <FaDigitalOcean className="w-6 h-6 text-violet-600" />
        </div>
        <div className="text-slate-800 text-2xl font-bold ">ساعت هوشمند</div>
        <div className="bg-stone-50 shadow-md rounded w-7 h-7 flex items-center justify-center">
          <HiOutlineSearch className="w-5 h-5" />
        </div>
      </div>

      <div className=" flex justify-center items-center  mx-4 gap-x-4 mb-8 md:mb-2 md:hidden">
        <div className="flex items-center justify-center rounded-md bg-white px-2 py-3 w-full">
          <HiOutlineSortDescending className="w-5 h-5 ml-2 text-violet-600" />
          <p className="text-sm text-slate-800">محبوب ترین محصول</p>
        </div>
        <div className="flex justify-center items-center bg-white rounded-md px-2 py-3 w-full">
          <HiOutlineFilter className="w-5 h-5 ml-2 text-gray-400" />
          <p className="text-sm text-slate-800">فیلتر : اپل</p>
        </div>
      </div>
      <section className=' container mx-auto mt-4  '>
      <div className="flex justify-between items-center mt-10 mx-4 mb-6 md:hidden ">
        <div className="flex items-center justify-center w-7 h-7">
          <FaDigitalOcean className="w-6 h-6 text-violet-600" />
        </div>
        <div className="text-slate-800 text-2xl font-bold ">ساعت هوشمند</div>
        <div className="bg-stone-50 shadow-md rounded w-7 h-7 flex items-center justify-center">
          <HiOutlineSearch className="w-5 h-5" />
        </div>
      </div>

      <div className=" flex justify-center items-center  mx-4 gap-x-4 mb-8 md:mb-2 md:hidden">
        <div className="flex items-center justify-center rounded-md bg-white px-2 py-3 w-full">
          <HiOutlineSortDescending className="w-5 h-5 ml-2 text-violet-600" />
          <p className="text-sm text-slate-800">محبوب ترین محصول</p>
        </div>
        <div className="flex justify-center items-center bg-white rounded-md px-2 py-3 w-full">
          <HiOutlineFilter className="w-5 h-5 ml-2 text-gray-400" />
          <p className="text-sm text-slate-800">فیلتر : اپل</p>
        </div>
      </div>
    <div className='grid grid-cols-12 grid-rows-[50px,minmax(500px,1fr)]  md:gap-8'>
        <div className='hidden md:block col-span-3 p-4 row-span-2 bg-white rounded-md'>
          <div>
            <div className='p-4'>
              <h1 className='text-violet-700 font-bold text-2xl md:text-base'>دسته بندی</h1>
              <div className='p-4'>
               <div className='flex justify-start items-center cursor-pointer mb-4'>
               <HiOutlineDeviceMobile className='w-6 h-6  stroke-slate-800 ml-2'/>
                <p className='text-slate-800  md:text-base '> تلفن همراه</p>
               </div>
               <div className='flex justify-start items-center cursor-pointer mb-4'>
               <HiOutlineDesktopComputer className='w-6 h-6 stroke-slate-800 ml-2'/>
                <p className='text-slate-800 md:text-base' >کامپیوتر  </p>
               </div>
               <div className='flex justify-start items-center cursor-pointer'>
               <HiOutlineColorSwatch className='w-6 h-6 stroke-slate-800 ml-2'/>
                <p className='text-slate-800 md:text-base' >ساعت  </p>
               </div>
              </div>
            </div>
            <div className='bg-blue-200'>
              <h1 className='text-violet-700 font-bold'> فیلتر</h1>
              <div >
             
              </div>
            </div>
          </div>
          </div>
    <div className="hidden md:flex col-span-9 p-4 bg-white rounded-md ">
      <div className='flex justify-start items-center '>
      <HiOutlineSortDescending className='w-6 h-6 text-violet-700'/>
      <Link className='text-sm text-gray-400  p-3 cursor-pointer hover:font-bold hover:text-gray-500 '>محبوب ترین</Link>
      <Link className='text-sm text-gray-400  p-3 cursor-pointer hover:font-bold hover:text-gray-500 '>پرفروش ترین</Link>
      <Link className='text-sm text-gray-400  p-3 cursor-pointer hover:font-bold hover:text-gray-500 '>پر بازدیدترین</Link>
      <Link className='text-sm text-gray-400  p-3 cursor-pointer hover:font-bold hover:text-gray-500 '>ارزان ترین</Link>
      </div>
    </div>
    <div className='col-span-12 md:col-span-9 mx-4 md:mx-auto '>
    <div className="grid  gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => {
          return (
            <div className="bg-white rounded-md shadow-lg p-3">
              <div className="w-full h-auto rounded-md bg-gray-100 p-1 overflow-hidden mb-2">
               <Link to="/singleproduct"  >
               <img className="" src={product.image} />
               </Link>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">برند</p>
                <div className="flex">
                  <p className="rounded-full w-3 h-3 bg-red-400 ring-1 ring-white"></p>
                  <p className="rounded-full w-3 h-3 bg-blue-400 ring-1 ring-white"></p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-2 text-base md:text-lg font-bold text-slate-800">
                {product.name}
              </div>
              <div className="flex items-center justify-end mb-2 text-base md:text-lg font-bold text-violet-800">
                {product.price} $
              </div>
              <button className="bg-violet-700 text-white rounded-md text-center font-bold w-full p-2">
                سفارش
              </button>
            </div>
          )
        })}

      </div>
    </div>
    </div>
   
    </section>
   
    </section>
  )
}

export default HomePage

{
  /* <main className="mt-10 mb-4">
<section className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] max-w-7xl container mx-auto gap-x-10 gap-y-6">
  {products.map((product) => {
    return (
      <section
        key={product._id}
        className="flex flex-col overflow-hidden rounded-md shadow-lg shadow-gray-400 bg-gray-100 "
      >
        <div className="w-full h-auto hover:opacity-75 ">
          <img className="" src={product.image} alt={product.name} />
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="font-bold ">{product.name}</p>
          <p className="font-bold">$ {product.price}</p>
        </div>
        <button
          onClick={() => clickHandler(product)}
          className="border-none flex items-center justify-center gap-4 outline-none rounded-b-md  px-4 py-2 cursor-pointer bg-violet-700 text-white font-bold overflow-hidden"
        >
          {checkincart(cart, product) ? 'ادامه سفارش' : 'خرید'}
          <HiShoppingCart />
        </button>
      </section>
    )
  })}
</section>
</main>  */
}
