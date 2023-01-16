import { useState } from "react";
import {HiHeart, HiOutlineViewGrid ,HiOutlineHome ,HiOutlineShoppingCart} from "react-icons/hi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isselcet,setisselect]=useState(false)
    return (
    <div className=" md:hidden fixed bottom-0 left-0 right-0 w-full bg-white rounded-t-md shadow-md  "> 
    <ul className="flex items-center justify-between rounded-t-md overflow-hidden">
      <li  className= 'flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 '>
        <HiOutlineHome className="w-6 h-6"/>
        <Link to="/" className="text-xs mt-1">خانه</Link>
      </li>
      <li className=" flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 ">
      <HiOutlineViewGrid className="w-6 h-6"/>
        <Link to="/products" className="text-xs mt-1">دسته بندی</Link>
      </li>
      <li className=" flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 ">
         <HiOutlineShoppingCart className="w-6 h-6"/>
        <Link to="/cart" className="text-xs mt-1">سبد خرید</Link>
      </li>
      <li className=" flex flex-col items-center justify-center gap-x-4 p-2 w-full text-slate-800 ">
      <HiHeart className="w-6 h-6"/>
        <Link to="/favorits" className="text-xs mt-1">علاقه مندی</Link>
      </li>
    </ul>
    
     </div>
      );
}
 
export default Footer;