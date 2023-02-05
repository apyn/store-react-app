
import { Link,useSearchParams } from 'react-router-dom'
import {
  HiClipboardList,
  HiOutlineCurrencyDollar,
  HiOutlineTrash,
} from 'react-icons/hi'
import { useCart, useCartActions } from '../Providers/CartProviders'

const CartPage = () => {
  // const query = useSearchParams()
  // const redirect=query.get("redirect")|| "/"
  const { cart, total } = useCart()
  const dispatch = useCartActions()
  const originalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0
  const incHandler = (cartitem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartitem })
  }
  const removeHandler = (cartitem) => {
    console.log(cartitem)
    dispatch({ type: 'REMOVE_PRODUCT', payload: cartitem })
  }
  return (
    <main className="md:mb-8 flex flex-col items-center justify-center md:container md:flex-row md:items-start mx-auto mt-6 gap-6 ">
      <section className="flex flex-col ring-1 ring-gray-300 rounded-md mg-red-100 w-full md:w-8/12">
        <div className="flex justify-between items-center p-4 ">
          <h1 className="font-bold text-slate-800 dark:text-zinc-300">سبد خرید شما</h1>
          <HiOutlineTrash className="cursor-pointer dark:text-zinc-300 hover:text-rose-700 h-6 w-6" />
        </div>
        {cart.length ? (
          cart.map((item) => {
            return (
              <div className="flex border-b-2 border-solid border-gray-300 p-2">
                <div className="p-2">
                  <img className="w-36 h-36 rounded-md" src={item.image} />
                  <div className="mt-4 text-center flex items-center justify-center">
                    <span
                      onClick={() => incHandler(item)}
                      className="bg-transparent dark:text-zinc-300 text-rose-500 font-bold py-2 px-3 border-t-2 border-b-2 border-r-2 border-solid border-gray-300 outline-none rounded-r-md cursor-pointer"
                    >
                      +
                    </span>
                    <span className="bg-transparent dark:text-zinc-300 text-rose-500 font-bold py-2 px-3 border-t-2 border-b-2 border-solid border-gray-300 outline-none ">
                      {item.quantity}
                    </span>
                    <span
                      onClick={() => removeHandler(item)}
                      className="bbg-transparent dark:text-zinc-300 text-rose-500 font-bold py-2 px-3 border-t-2 border-b-2 border-l-2 border-solid border-gray-300 outline-none rounded-l-md cursor-pointer"
                    >
                      <HiOutlineTrash className="h-6 w-5 dark:text-zinc-300" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <h1 className="font-bold text-lg text-slate-800 dark:text-zinc-300 ">
                    {item.name}{' '}
                  </h1>
                  <div className="flex items-center">
                    <span className="bg-red-500 dark:text-zinc-300 rounded-full h-4 w-4 "> </span>
                    <p className="text-xs text-gray-500 mr-2 dark:text-zinc-300">قرمز</p>
                  </div>
                  <div className="flex items-center">
                    <HiClipboardList className=" w-5 h-5 dark:text-zinc-300" />
                    <p className="text-xs text-gray-500 dark:text-zinc-300 mr-2">
                      گارانتی 18 ماهه (فنی خدماتی فناوران ارتباطات ژینا) موبایل
                      کمک
                    </p>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineCurrencyDollar className="w-5 h-5 dark:text-zinc-300" />
                    <p className="text-xs text-gray-500 dark:text-zinc-300 mr-2">
                      {' '}
                      {item.discount} تخفیف
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xl font-bold text-slate-700 dark:text-zinc-300  mr-2">
                      {item.price} تومان
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <img src="https://www.digikala.com/statics/img/svg/empty-cart.svg" />
            <p>سبد خرید شما خالی می باشد</p>
            <p className="text-xs  text-gray-500">
              می توانید جهت مشاهده محصولات به صفحه زیر بروید
            </p>
            <Link
              className="text-sm text-rose-500 dark:text-zinc-300 dark:hover:text-zinc-400 hover:text-rose-700 hover:font-extrabold mb-6"
              to="/"
            >
              صفحه اصلی
            </Link>
          </div>
        )}{' '}
      </section>

      <section className="flex flex-col gap-y-4 ring-1 ring-gray-300 rounded-md p-4 w-full md:w-4/12 h-56">
        <div className="flex justify-between items-center  w-full">
          <p className='dark:text-zinc-300'>قیمت کالاها</p>
          <p className='dark:text-zinc-300'>{originalPrice} تومان</p>
        </div>
        <div className="flex justify-between items-center  w-full">
          <p className="text-rose-600 dark:text-zinc-300"> سود شما از خرید ( تخفیف ) </p>
          <p className='dark:text-zinc-300'>{originalPrice - total} تومان</p>
        </div>
        <div className="flex justify-between items-center  w-full">
          <p className='dark:text-zinc-300'>جمع سبد خرید</p>
          <p className='dark:text-zinc-300'>{total} تومان</p>
        </div>
        <Link className="" to="/login?redirect=/checkout">
          <button className="bg-rose-600 dark:text-zinc-300 text-white font-bold px-4 py-3 mt-4 rounded-md outline-none cursor-pointer">
            ادامه سفارش
          </button>
        </Link>
      </section>
    </main>
  )
}

export default CartPage
