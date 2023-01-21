import { AiOutlineFieldTime } from "react-icons/ai"
import image1 from "../../Assets/Images/1.jpg"
import image2 from "../../Assets/Images/2.jpg"
import image3 from "../../Assets/Images/3.jpg"
import image4 from "../../Assets/Images/4.jpg"
const BlogSlider = () => {
    return ( 
        <section className="container mx-auto mb-6">
            <div className="flex justify-between items-center p-4 md:p-2">
            <h1 className="text-slate-800 dark:text-zinc-300 font-extrabold md:text-lg  ">خواندنی ها</h1>
            <h1 className="text-blue-800 dark:text-zinc-300 font-extrabold text-sm cursor-pointer "> خواندن مطالب بیشتر</h1>

            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center bg-white p-4 gap-x-4 mb-4 md:shadow-lg dark:shadow-slate-500 rounded-md dark:bg-slate-700 dark:text-zinc-300 ">
                <div className=" flex flex-col justify-center items-center   overflow-hidden rounded-lg ring-1 ring-gray-300">
                <div className=" bg-white w-80 h-48">
                <img src={image1} className=" "/>
                </div>
                <p className="text-slate-800 font-extrabold text-base m-4 dark:text-zinc-300">راهنمای خرید اسپیکر</p>
           <div className="flex justify-between items-center gap-x-4">
           <div className="flex justify-between items-center p-2">
                    <p className="bg-red-600 w-5 h-5 rounded-full"></p>
                    <span className="text-gray-400 text-sm mr-2">پاینده</span>
                </div>
                <div className="flex justify-between items-center p-2">
                    <AiOutlineFieldTime className="text-gray-500"/>
                    <span className="text-gray-400 text-xs mr-2">24 دی ماه1401 </span>
                </div>
           </div>
                </div>
                <div className=" flex flex-col justify-center items-center   overflow-hidden rounded-lg ring-1 ring-gray-300">
                <div className=" bg-white w-80 h-48">
                <img src={image2} className=" "/>
                </div>
                <p className="text-slate-800 font-extrabold text-base m-4 dark:text-zinc-300">راهنمای خرید اسپیکر</p>
           <div className="flex justify-between items-center gap-x-4">
           <div className="flex justify-between items-center p-2">
                    <p className="bg-red-600 w-5 h-5 rounded-full"></p>
                    <span className="text-gray-400 text-sm mr-2">پاینده</span>
                </div>
                <div className="flex justify-between items-center p-2">
                    <AiOutlineFieldTime className="text-gray-500"/>
                    <span className="text-gray-400 text-xs mr-2">24 دی ماه1401 </span>
                </div>
           </div>
                </div>
                <div className=" flex flex-col justify-center items-center   overflow-hidden rounded-lg ring-1 ring-gray-300">
                <div className=" bg-white w-80 h-48">
                <img src={image3} className=" "/>
                </div>
                <p className="text-slate-800 font-extrabold text-base m-4 dark:text-zinc-300">راهنمای خرید اسپیکر</p>
           <div className="flex justify-between items-center gap-x-4">
           <div className="flex justify-between items-center p-2">
                    <p className="bg-red-600 w-5 h-5 rounded-full"></p>
                    <span className="text-gray-400 text-sm mr-2">پاینده</span>
                </div>
                <div className="flex justify-between items-center p-2">
                    <AiOutlineFieldTime className="text-gray-500"/>
                    <span className="text-gray-400 text-xs mr-2">24 دی ماه1401 </span>
                </div>
           </div>
                </div>
                <div className=" flex flex-col justify-center items-center   overflow-hidden rounded-lg ring-1 ring-gray-300">
                <div className=" bg-white w-80 h-48">
                <img src={image4} className=" "/>
                </div>
                <p className="text-slate-800 font-extrabold text-base m-4 dark:text-zinc-300">راهنمای خرید اسپیکر</p>
           <div className="flex justify-between items-center gap-x-4">
           <div className="flex justify-between items-center p-2">
                    <p className="bg-red-600 w-5 h-5 rounded-full"></p>
                    <span className="text-gray-400 text-sm mr-2">پاینده</span>
                </div>
                <div className="flex justify-between items-center p-2">
                    <AiOutlineFieldTime className="text-gray-500"/>
                    <span className="text-gray-400 text-xs mr-2">24 دی ماه1401 </span>
                </div>
           </div>
                </div>
            </div>
           
        </section>
     );
}
 
export default BlogSlider;