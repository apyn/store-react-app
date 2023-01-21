
import * as data from '../../data'
import { SwiperSlide ,Swiper, useSwiper} from "swiper/react";
import  pic from "../../Assets/Images/1.png"
const OffSlider = () => {
 
  return (
    <section className="container mx-auto">
  <div onMouseMove={true } className="flex justify-start gap-x-1 items-center overflow-auto flex-nowrap scrollbar-hide cursor-pointer bg-violet-200 p-4 mb-4 rounded-md shadow-lg dark:bg-slate-700 dark:shadow-slate-600">
   <div>
   <h1 className="ml-4 text-slate-800 font-bold dark:text-zinc-300 md:text-2xl text-center">
      پیشنهادات شگفت انگیز
    </h1>
  <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"/>
   </div>
   {data.products.map((product)=>{
     return (
      <div className="flex flex-col justify-center items-center p-2 shrink-0 overflow-hidden bg-white rounded-md " >

      <div className="bg-gray-200  rounded-md mt-1 ">
      <img  src={product.image} className="w-40 h-40 object-contain"/>
      </div>
  <div className="flex justify-between items-center p-4">
  <span className="text-slate-800 decoration-black text-sm font-extrabold ml-2">{product.offPrice} تومان</span>
       <span className=" text-center bg-rose-500 rounded-2xl text-white text-xs p-1"> {product.discount} </span>
  </div>
    <span className="text-slate-500 line-through text-sm  mb-4" >{product.price} تومان</span> 
 </div>
     
    )
   })}
</div>
    </section>
  )
}

export default OffSlider
