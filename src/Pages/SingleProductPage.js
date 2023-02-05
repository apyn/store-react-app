import {
  HiOutlineSearch,
  HiChevronLeft,
  HiChevronDoubleLeft,
  HiOutlineShieldExclamation,
  HiOutlineFilter,
  HiOutlineSortDescending,
  HiOutlineDeviceMobile,
  HiOutlineDesktopComputer,
  HiOutlineColorSwatch,
} from 'react-icons/hi'
import { FaTruck, FaDigitalOcean } from 'react-icons/fa'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCartActions } from '../Providers/CartProviders'
import { toast } from 'react-hot-toast'
const SingleProduct = () => {
  const [product,setProduct]=useState([])
  const dispatch= useCartActions()

  const {id} = useParams()
  const navi=useNavigate()
const addHandler=(product)=>{
dispatch({type:"ADD_TO_CART",payload:product})
navi("/cart")
    toast.success(`${product.name} به سبد خرید اضافه شد`)
  }
//   useEffect(()=>{

//     const getProduct = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:5000/api/product/${_id}`)
//         console.log(data.description[0].support)
//       setProduct(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     getProduct()
// },[])

  return (
    <section className=" mb-4 ">
      <section className=" container mx-auto mt-4  ">
        <div className="flex justify-between items-center mt-10 mx-4 mb-6 md:hidden ">
          <div className="bg-stone-50 shadow-md rounded w-7 h-7 flex items-center justify-center">
            <HiChevronLeft className="w-6 h-6 text-slate-600" />
          </div>
          <div className="text-slate-800 text-2xl font-bold "> محصول </div>
          <div className="bg-stone-50 shadow-md rounded w-7 h-7 flex items-center justify-center">
            <HiOutlineSearch className="w-5 h-5" />
          </div>
        </div>

        <div className=" md:grid md:grid-cols-12 grid-rows-[50px,minmax(500px,1fr)]  md:gap-8">
          <div className="hidden md:block col-span-3 p-4 row-span-2 bg-white rounded-md">
            <div>
              <div className="p-4">
                <h1 className="text-violet-700 font-bold text-2xl md:text-base">
                  دسته بندی
                </h1>
                <div className="p-4">
                  <div className="flex justify-start items-center cursor-pointer mb-4">
                    <HiOutlineDeviceMobile className="w-6 h-6  stroke-slate-800 ml-2" />
                    <p className="text-slate-800  md:text-base "> تلفن همراه</p>
                  </div>
                  <div className="flex justify-start items-center cursor-pointer mb-4">
                    <HiOutlineDesktopComputer className="w-6 h-6 stroke-slate-800 ml-2" />
                    <p className="text-slate-800 md:text-base">کامپیوتر </p>
                  </div>
                  <div className="flex justify-start items-center cursor-pointer">
                    <HiOutlineColorSwatch className="w-6 h-6 stroke-slate-800 ml-2" />
                    <p className="text-slate-800 md:text-base">ساعت </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200">
                <h1 className="text-violet-700 font-bold"> فیلتر</h1>
                <div></div>
              </div>
            </div>
          </div>
          <div className=" flex justify-start items-center w-full md:col-span-9 md:p-4 md:bg-white rounded-md ">
            <div className="flex items-center justify-start px-4 ">
              <p className="text-sm text-violet-800 font-bold ">تلفن همراه</p>
              <HiChevronDoubleLeft className="w-4 h-4 text-slate-600" />
              <p className="text-sm text-violet-800 font-bold">برند آیفون</p>
              <HiChevronDoubleLeft className="w-4 h-4 text-slate-600" />
              <p className="text-sm text-slate-800 font-bold">
                آیفون 14 پرو مکس{' '}
              </p>
            </div>
          </div>
          <div className="  md:col-span-9 mx-4 md:mx-auto ">
            <div className="md:w-full ">
              <div className="flex flex-col  mt-6  ">
                <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-evenly sm:gap-4">
                  {/* image */}
                  <div className=" flex items-center justify-center text-center w-56 h-72 mb-6 md:w-3/12 md:h-auto">
                    <img
                      src={product.image}
                      className="w-full h-auto "
                    />
                  </div>
                  <div className='md:flex-col md:w-5/12 items-center justify-center md:items-start md:justify-start mt-4'>
                    {/* hedarer */}
                    <div className="flex flex-col gap-2 items-center justify-center md:items-start text-center mb-6 w-full ">
                      <h1 className="font-bold text-xl text-slate-800">
                          {product.name}
                        </h1>
                      <h2 className="font-bold text-sm text-gray-500">
                        Iphone 14 Pro Max 256
                      </h2>
                    </div>
                    {/* coler */}
                    <div className="flex items-center justify-center gap-4 mb-6 md:it md:justify-start">
                      <p>انتخاب رنگ</p>
                      <div className="flex">
                        <span className="bg-rose-600 rounded-full w-4 h-4"></span>
                        <span className="bg-orange-600 rounded-full w-4 h-4"></span>
                        <span className="bg-green-600 rounded-full w-4 h-4"></span>
                      </div>
                   
                    </div>
                    <div>
                        {/* {product.description[0].support} */}
                        {/* {product.description[1].support}
                        {product.description[2].support} */}
                      </div>
                  </div>
                  <div className='md:flex-col  md:bg-white md:rounded-md md:w-4-12'>
                    {/* dec */}
                    <div className="flex items-center justify-between gap-4 mb-6 md:bg-gray-100 md:p-4 md:w-full md:flex-col md:justify-center md:items-start md:rounded-md">
                      <div className="flex items-center justify-center text-slate-800">
                        <FaTruck className="w-5 h-5 ml-1" />
                        <span className="font-bold text-sm text-slate-800 ml-1">
                          ارسال :{' '}
                        </span>
                        <span className="text-xs text-slate-700">
                          {' '}
                          تی پاکس{' '}
                        </span>
                      </div>
                      <div className="flex items-center justify-center text-slate-800">
                        <HiOutlineShieldExclamation className="w-5 h-5 ml-1" />
                        <span className="font-bold text-sm text-slate-800 ml-1">
                          گارانتی:{' '}
                        </span>
                        <span className="text-xs text-slate-700">
                          {' '}
                          18 ماه زرین{' '}
                        </span>
                      </div>
                    </div>
                    {/* buttom */}
                    <div className="flex items-center justify-center gap-6 bg-white rounded-md pt-2 w-full md:flex-col md:justify-center md:items-center md:p-4 md:gap-2">
                      <button onClick={()=>addHandler(product)}
                       className="bg-rose-600 rounded-md text-white px-5 py-3 text-lg md:order-2">
                        اضافه به سبد خرید
                      </button>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:justify-items-center md:gap-2">
                        <p className="text-slate-800 text-lg  font-bold">
                         {product.price}
                        </p>
                        <p className="text-sm text-slate-800">تومان</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* v */}
                <div className="flex items-center justify-start gap-6 bg-white rounded-t-md pt-1 w-full px-4">
                  <div className="mb-4">
                    <h1 className="text-slate-800 font-bold text-xl mt-4 text-right">
                      ویژگی های کالا :
                    </h1>
                    <div className="flex flex-col items-start justify-center p-4 gap-2">
                      <span className="text-sm font-bold text-slate-800">
                        حافضه داخلی :
                      </span>
                      <span className="text-xs text-slate-800"> 128 گیگ</span>
                      <span className="text-sm  font-bold text-slate-800">
                        صفحه نمایش :
                      </span>
                      <span className="text-xs text-slate-800">
                        {' '}
                        6 اینج و بزرگتر
                      </span>
                      <span className="text-sm  font-bold text-slate-800">
                        شبکه های ارتباطی:{' '}
                      </span>
                      <span className="text-xs text-slate-800">3G 4G 5G</span>
                    </div>
                  </div>
                </div>
                {/* tozih */}
                <div className="flex flex-col items-start justify-center gap-6 bg-white rounded-md pt-1 w-full px-4 mt-4 ">
                  <h1 className="text-slate-800 font-bold text-xl mt-4 text-right">
                    {' '}
                    نقد و بررسی :
                  </h1>
                  <div className="flex flex-col items-start justify-center p-4 gap-2">
                    <p className="prose-headings:text-slate-800 prsoe prose-base prose-st">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SingleProduct
