import { useState } from "react";
import {HiHeart, HiOutlineViewGrid ,HiOutlineHome ,HiOutlineShoppingCart} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProviders";
const Footer = () => {
  const { cart } = useCart()

    return (
      <>
    <div className="   fixed  bottom-0 left-0 right-0 w-full bg-white rounded-t-md shadow-md  "> 
    <ul className="md:hidden flex items-center justify-between rounded-t-md overflow-hidden">
      <li  className= 'flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 '>
        <HiOutlineHome className="w-6 h-6"/>
        <Link to="/" className="text-xs mt-1">خانه</Link>
      </li>
      <li className=" flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 ">
      <HiOutlineViewGrid className="w-6 h-6"/>
        <Link to="/products" className="text-xs mt-1">دسته بندی</Link>
      </li>
      <li className="relative flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 ">
         <HiOutlineShoppingCart className="w-6 h-6"/>
        <Link to="/cart" className="text-xs mt-1">سبد خرید</Link>
        <span className="bg-red-600  text-xs font-light flex items-center justify-center  text-white rounded-full h-4 w-4 absolute left-5 top-1 ">
                  {cart.length}
                </span>
      </li>
      <li className=" flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 ">
      <HiHeart className="w-6 h-6"/>
        <Link to="/favorits" className="text-xs mt-1">علاقه مندی</Link>
      </li>
    </ul>
   
     </div>
      <div className=" container mx-auto hidden md:flex flex-col justify-between dark:bg-slate-700 bg-white rounded-t-md w-full">
    <div className="flex">
    <div className="w-6/12 p-4 ">
        <h1 className="text-base font-bold text-slate-700 dark:text-slate-200">فروشگاه اینترنتی دیجی تایز</h1>
        <p className="prose prose-sm prose-stone text-justify p-2 whitespace-pre-line dark:text-slate-200">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <ul className=" w-3/12 p-4">
        <span className="font-bold text-slate-800 dark:text-slate-200">محصولات</span>
        <li className="text-xs font-bold dark:text-slate-200 text-zinc-700 hover:text-violet-700 cursor-pointer p-1">تلفن همراه</li>
        <li className="text-xs font-bold dark:text-slate-200 text-zinc-700 hover:text-violet-700 cursor-pointer p-1"> تبلت </li>
        <li className="text-xs font-bold dark:text-slate-200 text-zinc-700 hover:text-violet-700 cursor-pointer p-1"> لپ تاپ و کامپیوتر</li>
        <li className="text-xs font-bold dark:text-slate-200 text-zinc-700 hover:text-violet-700 cursor-pointer p-1">گیمینگ </li>
        <li className="text-xs font-bold dark:text-slate-200 text-zinc-700 hover:text-violet-700 cursor-pointer p-1"> ساعت هوشمند</li>
        <li className="text-xs font-bold dark:text-slate-200 text-zinc-700 hover:text-violet-700 cursor-pointer p-1"> لوازم جانبی</li>
      </ul>
      <div className="flex flex-col items-end p-4 w-3/12 ">
        <div className="bg-red-500 rounded-md h-36 w-60 overflow-hidden">
          <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"/>
        </div>
        <div className="flex flex-col items-end justify-cneter mt-1 p-2">
          <span className="text-slate-500 text-sm dark:text-zinc-200">09182101066</span>
          <span className="text-slate-500 text-sm dark:text-zinc-200 ">payandeh7@yahoo.com</span>
        </div>
      </div>
    </div>
        <div className="bg-zinc-100 w-full flex justify-center items-center text-sm py-1 text-slate-700 dark:text-zinc-300 dark:bg-slate-800 ">تمامی حقوق این سایت متعلق به سایت دی جی تایز می باشد</div>
    </div>
    </>
      );
}
 
export default Footer;