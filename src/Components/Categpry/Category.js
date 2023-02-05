import mobile from "../../Assets/Images/mobile.png";
import loptop from "../../Assets/Images/loptop.png";
import tablet from "../../Assets/Images/tablet.png";
import watch from "../../Assets/Images/watch.png";
import ps5 from "../../Assets/Images/ps5.png"
import acses from "../../Assets/Images/acsesory.png"
import { Link } from "react-router-dom";

const Categpry = () => {
  return (
    <section className="container mx-auto mt-4 mb-4 dark:bg-slate-700 rounded-md p-2 shadow-md dark:shadow-slate-700 ">
        <h1 className="text-center font-bold md:text-2xl text-slate-800 mb-4 dark:text-zinc-300 ">دسته بندی محصولات </h1>
      <div className=" flex md:justify-evenly justify-center gap-4 items-center p-4 flex-wrap">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <Link to="/products" className=" mb-2 flex justify-center items-center relative  bg-gray-200 dark:bg-slate-500 w-36 h-36 rounded-full shadow-md ">
            <img src={mobile} className="w-30 h-32  absolute -top-1" />
          </Link>
          <span  className="text-slate-800 font-bold text-base md:text-lg dark:text-zinc-300
          ">
            {' '}
            موبایل
          </span>
        </div>
     
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className=" mb-2 flex justify-center items-center relative bg-gray-200 dark:bg-slate-500 w-36 h-36 rounded-full shadow-md ">
          <img src={loptop} className="w-48 h-44  absolute -top-4" />
          </div>
          <span className="text-slate-800 font-bold text-base md:text-lg dark:text-zinc-300
          ">
            {' '}
            لپ تاپ و کامپیوتر

          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className=" mb-2 flex justify-center relative items-center  bg-gray-200 dark:bg-slate-500 w-36 h-36 rounded-full shadow-md ">
          <img src={tablet} className="w-30 h-32  absolute -top-1" />
        
          </div>
          <span className="text-slate-800 font-bold text-base md:text-lg dark:text-zinc-300
          ">
            {' '}
            تبلت
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className=" mb-2 flex justify-center relative items-center  bg-gray-200 dark:bg-slate-500 w-36 h-36 rounded-full shadow-md ">
          <img src={ps5} className="w-30 h-36  absolute -top-4" />

          </div>
          <span className="text-slate-800 font-bold text-base md:text-lg dark:text-zinc-300
          ">
            {' '}
            گیمینگ
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className=" mb-2 flex justify-center relative items-center  bg-gray-200 dark:bg-slate-500 w-36 h-36 rounded-full shadow-md ">
          <img src={watch} className="w-36 h-44  absolute -top-6" />
          </div>
          <span className="text-slate-800 font-bold text-base md:text-lg dark:text-zinc-300
          ">
            {' '}
            ساعت هوشمند
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className=" mb-2 flex justify-center relative items-center  bg-gray-200 dark:bg-slate-500 w-36 h-36 rounded-full shadow-md ">
          <img src={acses} className="w-32 h-36  absolute -top-3" />
          </div>
          <span className="text-slate-800 font-bold text-base md:text-lg dark:text-zinc-300
          ">
            {' '}
            لوازم جانبی
          </span>
        </div>
      </div>
    </section>
  )
}

export default Categpry
