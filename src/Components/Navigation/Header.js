import { NavLink } from 'react-router-dom'
import {
  HiOutlineShoppingCart,
  HiOutlineLogin,
  HiCamera,
  HiSearch,
} from 'react-icons/hi'
import { useCart } from '../../Providers/CartProviders'
import { useAuth } from '../../Providers/AuthProviders'
import { useState } from 'react'

const Header = () => {
  const { cart } = useCart()
  const Auth = useAuth()
  return (
    <nav className="hidden md:flex justify-between shadow-lg shadow-gray-200 rounded-b-md container mx-auto px-4 bg-slate-50">
      <ul className="flex items-center gap-2 ">
        <li className="px-4 py-3 text-violet-700 font-bold text-sm cursor-pointer rounded-md hover:text-violet-700 ">
          <NavLink to="/" className="">
            <HiCamera className="w-8 h-8" />
          </NavLink>
        </li>
        <li className="px-4 py-3 text-slate-800 font-bold text-sm cursor-pointer rounded-md hover:text-violet-700 ">
          <NavLink to="/" className="">
            خانه
          </NavLink>
        </li>
        <li className="px-4 py-3 text-slate-800 font-bold text-sm cursor-pointer rounded-md hover:text-violet-700 ">
          <NavLink  to="/" className="">
            محصولات{' '}
          </NavLink>
         
        </li>
        <li className="px-4 py-3 text-slate-800 font-bold text-sm cursor-pointer rounded-md hover:text-violet-700 ">
          <NavLink to="/" className="">
            بلاگ
          </NavLink>{' '}
        </li>
      </ul>
      <div className="flex justify-center items-center ">
        <span className="relative">
          <HiSearch className=" -left-5 -top-2  absolute" />
        </span>
        <input
          className="outline-none text-sm bg-violet-100 px-6 py-1 text-slate-800 rounded-md "
          placeholder="جستجو..."
        />
      </div>
      <ul className="flex items-center justify-center">
        <li className="px-4 py-3 text-violet-700 font-bold text-sm cursor-pointer rounded-md hover:bg-gray-100  hover:text-violet-700 ">
          <NavLink to="/cart" className="relative">
            <HiOutlineShoppingCart className="h-5 w-5 " />
            <span className="bg-red-600  text-xs font-light flex items-center justify-center  text-white rounded-full h-4 w-4 absolute -left-3 -top-2 ">
              {cart.length}
            </span>
          </NavLink>
        </li>
        <li className="px-4 py-3 text-violet-700 font-bold text-sm cursor-pointer rounded-md hover:bg-gray-100 hover:text-violet-700 ">
          <NavLink
            to={Auth ? '/Profile' : '/login'}
            className="flex justify-center items-center"
          >
            {/* <HiOutlineLogin className="h-5 w-5 ml-1" /> */}
            <a className="block"> {Auth ? 'پنل کاریری' : 'ورود'} </a>
          </NavLink>{' '}
        </li>
       
      </ul>
    </nav>
  )
}

export default Header
