import { useAuth } from '../Providers/AuthProviders'
import { useCart } from '../Providers/CartProviders'
import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TfiTruck } from 'react-icons/tfi'

const Checkout = () => {
  const user = useAuth()
  const { cart, total } = useCart()
  const originalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0
  return (
    <main className="flex flex-col md:flex-row justify-center  container mx-auto mt-6 mb-20 gap-6">
      <section className="flex flex-col ring-1 ring-gray-300 rounded-md w-full  md:w-8/12">
        <div className="flex  items-center justify-center container mx-auto p-4">
          <h1 className="font-bold text-2xl text-slate-700 ">صورتحساب</h1>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-xs text-slate-500 mb-2">آدرس تحویل سفارش</p>
          <div className="flex  items-center justify-start ">
            <HiOutlineLocationMarker className="w-6 h-6 ml-2 " />
            <h1 className="text-lg font-bold text-slate-800 ">
              همدان بلوار شهید فهمیده بیمارستان قلب و عروق فرشچیان واحد کامپیوتر
            </h1>
          </div>
          <h1 className="text-slate-800 font-black mt-4 ">
            نام و نام خانوادگی : {user.name}
          </h1>
        </div>
        <div className="flex  justify-start items-center p-4">
          <div className="flex items-center justify-center ">
            <TfiTruck className="w-8 h-8 text-red-500 ml-4" />
            <h1 className="font-black text-slate-700  ">ارسال عادی</h1>
          </div>
          <p className="text-xs text-slate-700 mr-4 rounded-xl bg-gray-300 p-2">
            {' '}
            {cart.length} کالا
          </p>
        </div>
        {cart.length ? (
          cart.map((item) => {
            return (
              <div className="flex  border-b-2 border-solid border-gray-300 p-2">
                <div className="p-2">
                  <img className="w-36 h-36 rounded-md" src={item.image} />
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <h1 className="font-bold text-lg text-slate-800 ">
                    {item.name}
                  </h1>

                  <div className="flex items-center">
                    <p className="text-xl font-bold text-slate-700 mr-2">
                      {item.price} تومان
                    </p>
                  </div>
                </div>
              </div>
            )
         })
         ) : (
            ""
            )}
      </section>

      <section className="flex flex-col gap-y-4 ring-1 ring-gray-300 rounded-md p-4 w-full  md:w-4/12 h-56">
        <div className="flex justify-between items-center  w-full">
          <p>قیمت کالاها</p>
          <p>{originalPrice} تومان</p>
        </div>
        <div className="flex justify-between items-center  w-full">
          <p className="text-rose-600"> سود شما از خرید ( تخفیف ) </p>
          <p>{originalPrice - total} تومان</p>
        </div>
        <div className="flex justify-between items-center  w-full">
          <p>جمع سبد خرید</p>
          <p>{total} تومان</p>
        </div>
        <Link className="w-full" to="/pay">
          <button className="bg-rose-600 text-white font-bold px-4 py-3 mt-4 rounded-md outline-none cursor-pointer">
            پرداخت{' '}
          </button>
        </Link>
        <section className="flex flex-col  ring-1 ring-gray-300 rounded-md p-4 w-full h-auto mt-8">
       <h1>انتخاب زمان تحویل</h1>
      </section>
      </section>
      
    </main>
    
  )
}

export default Checkout
//  <section className="flex items-center justify-center container mx-auto p-4">
//         <div>
//         <h1 className="font-bold text-2xl text-slate-700 ">صورتحساب</h1>
//         <div className="flex ">
//          <h1>نام و نام خانوادگی :</h1>
//          <h1>{user.name}</h1>
//         </div>
//         <div>
//          <h1>نام کالا:</h1>
//          <h1>{cart.map(c => <p>{c.name}</p>)}</h1>
//         </div>
//         </div>

//      </section>
