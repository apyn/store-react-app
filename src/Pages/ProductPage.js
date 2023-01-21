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
    HiChevronDown
  
} from 'react-icons/hi'
import {TbDeviceWatch} from "react-icons/tb"
import { FaDigitalOcean } from 'react-icons/fa'
import { useCart, useCartActions } from '../Providers/CartProviders'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
const checkincart = (cart, p) => {
  return cart.find((c) => c._id === p._id)
}
const ProductPage = () => {
  const [isfilter,setisFilter]=useState(true)
  const[iscolor,setiscolor]=useState(false)
  const [products, setProducts] = useState([])
  const { cart } = useCart()
     const navi= useNavigate()

  const clickHandler = (product) => {
  // navi(`/singleproduct/${product._id}`)
  {checkincart(cart, product) ? navi("/cart") :   navi(`/singleproduct/${product._id}`)
} 
  }
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/product')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    getProduct()
  }, [])
  return (
   
    
      <section className=' container mx-auto md:mt-4  md:mb-8'>
      <div className="flex justify-between items-center mt-1 mx-4 mb-6 md:hidden ">
        <div className="flex items-center justify-center w-7 h-7">
          <FaDigitalOcean className="w-6 h-6 text-violet-600" />
        </div>
        <div className="text-slate-800  text-2xl font-bold ">ساعت هوشمند</div>
        <div className="bg-stone-50 dark:bg-slate-700 dark:text-slate-200 shadow-md rounded w-7 h-7 flex items-center justify-center">
          <HiOutlineSearch className="w-5 h-5" />
        </div>
      </div>

      <div className=" flex justify-center items-center  mx-4 gap-x-4 mb-8 md:mb-2 md:hidden">
        <div className="flex items-center justify-center rounded-md bg-white dark:bg-slate-700 dark:text-slate-200 px-2 py-3 w-full">
          <HiOutlineSortDescending className="w-5 h-5 ml-2 text-violet-600" />
          <p className="text-sm text-slate-800 dark:text-slate-200">محبوب ترین محصول</p>
        </div>
        <div className="flex justify-center items-center bg-white dark:bg-slate-700 dark:text-slate-200 rounded-md px-2 py-3 w-full">
          <HiOutlineFilter className="w-5 h-5 ml-2 text-gray-400 dark:text-slate-200" />
          <p className="text-sm text-slate-800 dark:text-slate-200">فیلتر : اپل</p>
        </div>
      </div>
    <div className='grid grid-cols-12 grid-rows-[50px,minmax(500px,1fr)]   md:gap-8'>
   
        <div className='hidden md:block  col-span-3  row-span-2  '>
          <div className=' bg-white dark:bg-slate-700 rounded-md p-4 '>
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
               <TbDeviceWatch className='w-6 h-6 stroke-slate-800 ml-2'/>
                <p className='text-slate-800 md:text-base' >ساعت  </p>
               </div>
               
              </div>
            </div>
            <div className=' dark:bg-slate-700 p-4'>
              <h1 className=' font-bold text-violet-700'> فیلتر</h1>
              <div className='p-4  flex flex-col   '>
             
                <button className='flex items-center justify-center' onClick={()=>setisFilter(!isfilter)}>  
               <HiOutlineFilter className='w-6 h-6 text-slate-800 ml-2'/>
               <span>برند محصلول</span>
               <HiChevronDown className={`w-5 h-5 text-slate-700  mr-8   ${isfilter ? "-rotate-180" : ""} `}/>
                </button>
                <div className={isfilter ? "p-4 h-auto flex flex-col" : "hidden"}>
                  <label>
                    <input type="checkbox" className="from-checkbox text-violet-700 focus:ring-violet-700 rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> اپل</span>
                  </label>
                  <label>
                    <input type="checkbox" className="from-checkbox text-violet-700 focus:ring-violet-700  rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> سامسونگ</span>
                  </label>
                  <label>
                    <input type="checkbox" className="from-checkbox text-violet-700 focus:ring-violet-700  rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> شیائومی</span>
                  </label>
                  <label>
                    <input type="checkbox" className="from-checkbox text-violet-700 focus:ring-violet-700  rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> هواوی</span>
                  </label>
               
              
                </div>
                <button className='flex items-center justify-center mt-4' onClick={()=>setiscolor(!iscolor)}>  
               <HiOutlineColorSwatch className='w-6 h-6 text-slate-800 ml-2'/>
               <span>رنگ محصلول</span>
               <HiChevronDown className={`w-5 h-5 text-slate-700  mr-8   ${iscolor ? "-rotate-180" : ""} `}/>
                </button>
                <div className={iscolor ? "p-4 h-auto flex flex-col " : "hidden"}>
                <label>
                    <input type="checkbox" className="from-checkbox text-blue-700 focus:ring-blue-700 rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> آبی</span>
                  </label>
                  <label>
                    <input type="checkbox" className="from-checkbox text-red-700 focus:ring-red-700 rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> قرمز</span>
                  </label>
                  <label>
                    <input type="checkbox" className="from-checkbox text-black focus:ring-black  rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> مشکی</span>
                  </label>
                  <label>
                    <input type="checkbox" className="from-checkbox text-green-700 focus:ring-green-700  rounded"/>
                    <span className='text-slate-800 mr-2 text-sm '> سبز</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          </div>
    <div className="hidden md:flex col-span-9 p-4 bg-white dark:bg-slate-700 rounded-md ">
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
            <div className="bg-white dark:bg-slate-700 rounded-md shadow-lg p-3">
              <div className="w-full h-auto rounded-md bg-gray-100 dark:bg-gray-400 p-1 overflow-hidden mb-2">
               <Link to="/singleproduct"  >
               <img className="" src={product.image} />
               </Link>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500 dark:text-gray-200">برند</p>
                <div className="flex">
                  <p className="rounded-full w-3 h-3 bg-red-400 ring-1 ring-white"></p>
                  <p className="rounded-full w-3 h-3 bg-blue-400 ring-1 ring-white"></p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-2 text-base md:text-lg font-bold dark:text-gray-200 text-slate-800">
                {product.name}
              </div>
              <div className="flex items-center justify-end mb-2 text-base md:text-lg font-bold text-violet-800 dark:text-slate-200">
                {product.price} $
              </div>
              <button   onClick={() => clickHandler(product)}
              className="bg-violet-700 text-white rounded-md text-center font-bold w-full p-2">
 {checkincart(cart, product) ? 'ادامه سفارش' : 'مشاهده'}              </button>
            </div>
          )
        })}

      </div>
    </div>
    </div>
   
    </section>
   
  )
}

export default ProductPage

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
