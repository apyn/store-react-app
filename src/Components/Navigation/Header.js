import { Link, NavLink } from 'react-router-dom'
import {
  HiOutlineShoppingCart,
  HiOutlineLogin,
  HiCamera,
  HiSearch,
  HiChevronDown,
  HiDeviceMobile,
} from 'react-icons/hi'
import {BsPaypal} from "react-icons/bs"
import { Menu } from '@headlessui/react'

import {IoGameControllerOutline as Game} from "react-icons/io5"
import {BiJoystickButton} from "react-icons/bi"
import {BsPhone,BsLaptop,BsTablet,BsSmartwatch} from "react-icons/bs"
import { Fade as Hamburger } from 'hamburger-react'
import { useCart } from '../../Providers/CartProviders'
import { useAuth } from '../../Providers/AuthProviders'
import { useState } from 'react'
import Switcher from '../../Hooks/Switcher'

const Header = () => {
  const [isloging,setinslogin]=useState(false)

  const { cart } = useCart()
  const Auth = useAuth()
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      <div className=" flex items-center px-4 justify-between md:hidden">
        <button className="" onClick={() => setNavbar(!navbar)}>
          <Hamburger className="dark:text-zinc-300"/>
        </button>
          <Switcher className="w-4 h-4  md:hidden" />
      </div>

      <div
        className={`flex-1 justify-self-center   md:block  ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        <nav className=" md:flex justify-between md:shadow-lg md:shadow-gray-200 dark:shadow-zinc-600     px-4 bg-slate-50 dark:bg-slate-800 dark:text-white">
          <ul className=" md:flex items-center md:gap-2 z-40">
            <li className="px-4 py-3 dark:text-zinc-300 text-violet-700 font-bold text-sm cursor-pointer rounded-md ">
              <NavLink to="/" className="">
                <BsPaypal className="w-8 h-8 hidden md:block" />
              </NavLink>
            </li>
            <li className="relative px-4 py-3 text-slate-800 dark:text-zinc-300 font-bold text-base cursor-pointer  dark:hover:text-zinc-400 hover:text-violet-700 ">
              <NavLink to="/" className="">
                خانه
              </NavLink>
            </li>
            <li className=" px-4 py-3 relative text-slate-800  dark:text-zinc-300 font-bold text-base cursor-pointer   ">
              <Menu >
                <Menu.Button  className="flex items-center justify-between " >
                   محصولات
                    <HiChevronDown className="w-5 h-5 fill-slate-800 mr-2 dark:fill-zinc-300 " />
                </Menu.Button>
                <Menu.Items className="grid grid-cols-2 gap-2 absolute w-96   text-xs p-4 rounded-md dark:bg-slate-700 shadow-lg  bg-white">
                    <Menu.Item>
                    {({active})=>(
                       <div className='flex justify-start  p-2 items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'>
                       <BsPhone className='w-8 h-8'/>
                       <div className='flex flex-col mr-2 justify-center items-start'>
                       <Link to="/products" className='text-slate-800 text-lg dark:text-zinc-300 font-bold ' >موبایل</Link>
                       <span className='text-gray-500 font-xs dark:text-zinc-400 '>اپل - سامسونگ ...</span>
                       </div>
                     </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({active})=>(
                    <div className='flex justify-start p-2 items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'>
                      <BsLaptop className='w-8 h-8'/>
                      <div className='flex flex-col mr-2 justify-center items-start'>
                      <Link to="#" className='text-slate-800 text-lg dark:text-zinc-300 font-bold ' >لپ تاپ  </Link>
                     <span className='text-gray-500 font-xs  dark:text-zinc-400'>اپل - ایسوس  ...</span>
                      </div>
                    </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({active})=>(
                    <div className='flex justify-start p-2 items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'>
                    <BsTablet className='w-8 h-8'/>
                    <div className='flex flex-col mr-2 justify-center items-start'>
                    <Link to="#" className='text-slate-800 text-lg dark:text-zinc-300 font-bold ' >تبلت</Link>
                    <span className='text-gray-500 font-xs  dark:text-zinc-400 '>سونی - سامسونگ </span>
                    </div>
                  </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({active})=>(
                    <div className='flex justify-start p-2 items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'>
                    <Game className='w-8 h-8'/>
                    <div className='flex flex-col mr-2 justify-center items-start'>
                    <Link to="#" className='text-slate-800 text-lg dark:text-zinc-300 font-bold ' >گیمینگ</Link>
                    <span className='text-gray-500 font-xs  dark:text-zinc-400'>PS5 -PS4 - xbox </span>
                    </div>
                  </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({active})=>(
                    <div className='flex justify-start p-2 items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'>
                    <BsSmartwatch className='w-8 h-8'/>
                    <div className='flex flex-col mr-2 justify-center items-start'>
                    <Link to="#" className='text-slate-800 dark:text-zinc-300 text-sm font-bold ' >ساعت هوشمند</Link>
                    <span className='text-gray-500 font-xs  dark:text-zinc-400 '>اپل - شیائمی ...</span>
                    </div>
                  </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({active})=>(
                       <div className='flex justify-start p-2 items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'>
                       <BiJoystickButton className='w-8 h-8'/>
                       <div className='flex flex-col mr-2 justify-center items-start'>
                       <Link to="#" className='text-slate-800 text-lg dark:text-zinc-300 font-bold ' >لوازم جانبی</Link>
                       <span className='text-gray-500 font-xs  dark:text-zinc-400 '>قاب گوشی - گلس </span>
                       </div>
                     </div>
                    )}
                    </Menu.Item>

                </Menu.Items>
              </Menu>
              
           
            </li>
            <li className="px-4 py-3 text-slate-800 dark:text-zinc-300 font-bold text-base dark:hover:text-zinc-400 cursor-pointer  hover:text-violet-700 ">
              <NavLink to="/" className="">
                بلاگ
              </NavLink>{' '}
            </li>
            <li className=" px-4 py-3 relative text-slate-800   dark:text-zinc-300 font-bold text-base cursor-pointer  ">
              <Menu>
           <Menu.Button className="flex">ارتباط با ما
                <HiChevronDown className="w-5 h-5 fill-slate-800 mr-2 dark:fill-zinc-300" />
                </Menu.Button>
                <Menu.Items className="flex flex-col w-40 mt-2 right-1 absolute overflow-hidden shadow-lg">
                  <Menu.Item >
                    {({active})=>(
                       <span className="text-xs p-4 rounded-t-md dark:bg-slate-700  bg-white hover:bg-gray-100 " >
                       درباره ما
                     </span>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({active})=>(
                       <span className="text-xs p-4 rounded-b-md dark:bg-slate-700  bg-white hover:bg-gray-100 " >
تماس با ما                     </span>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
         
            </li>
          
          </ul>

          <div className="hidden md:flex justify-center items-center flex-1 max-w-xl">
            <span className="relative">
              <HiSearch className=" -left-5 -top-2  absolute dark:fill-slate-800" />
            </span>
            <input
              className="	dark:bg-zinc-300 placeholder-slate-500 placehoder-sm outline-none text-sm bg-violet-100 px-6 py-2 text-slate-800  rounded-md w-full"
              placeholder=" جستوجوی نام برند ، محصلول ..."
            />
          </div>
          <ul className="flex items-center justify-between">
            <li className=" px-4 py-3 cursor-pointer rounded-md hidden md:block">
              <Switcher className="w-4 h-4 " />
            </li>
            <li className="hidden md:block px-4 py-3 text-violet-700 font-bold  cursor-pointer rounded-md hover:bg-gray-100  dark:hover:bg-slate-600 dark:hover:fill-zinc-300 hover:text-violet-700 ">
              <NavLink to="/cart" className="relative">
                <HiOutlineShoppingCart className="h-6 w-6 " />
                <span className="bg-red-600  text-xs font-light flex items-center justify-center  text-white rounded-full h-4 w-4 absolute -left-3 -top-2 ">
                  {cart.length}
                </span>
              </NavLink>
            </li>
            <li className="hidden md:block px-4 py-3 text-violet-700  font-bold text-lg cursor-pointer rounded-md ">
           
                {Auth  ? <div>
                  <div className="  relative text-violet-800  dark:text-slate-200 font-bold text-sm cursor-pointer rounded-md ">
              <Menu >
                <Menu.Button className="flex items-center justify-between z-50">
                               پنل کاربری
                  <HiChevronDown className="w-5 h-5 text-violet-800 " />
                </Menu.Button>
                <Menu.Items className=" flex flex-col w-full  mt-1 absolute">
                  <Menu.Item>
                    {({active})=>(
                       <NavLink to='/Profile' className="text-xs p-2 rounded-t-md dark:bg-slate-700  bg-white hover:bg-gray-100">
                               {Auth.name}
                        </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active})=>(
                         <NavLink to="/cart" className="text-xs p-2  bg-white  dark:bg-slate-700 hover:bg-gray-100">
                         سفارشات
                       </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({active})=>(
                         <NavLink to="#" className="text-xs p-2  bg-white rounded-b-md  dark:bg-slate-700 hover:bg-gray-100">
                         خروج
                       </NavLink>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
         
            </div>
              </div>
                            :
                      
                           
                <NavLink to="/login">ورود</NavLink>}
             
            
          </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Header
