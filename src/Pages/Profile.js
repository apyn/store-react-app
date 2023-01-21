import { CgProfile } from 'react-icons/cg'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
const Profile = () => {
  return (
    <section className="container mx-auto ">
      <div className="grid grid-cols-12 mt-6 mb-4 ">
        <div className="md:col-span-3 hidden md:block ">
          <div className="p-4 ">
            <div className="flex flex-col w-72 rounded-lg ring-1 ring-gray-300">
              <div className="flex justify-between items-center gap-10  p-4">
                <CgProfile className="w-10 h-10" />
                <div className="flex flex-col gap-2">
                  <span className="text-slate-800 font-bold text-base ">
                    عباس پاینده 
                  </span>
                  <span className="text-slate-500 text-sm">09182101066</span>
                </div>
                <AiOutlineEdit className="text-cyan-500 w-6 h-6 cursor-pointer" />
              </div>
              <div className="flex justify-start items-center p-4">
                <MdOutlineProductionQuantityLimits className="text-slate-800 h-5 w-5" />
                <h1 className="text-slate-700 font-bold text-base mr-2">
                  سفارشات
                </h1>
              </div>
              <span className="flex border-gray-300 border-2 border-solid px-4"></span>
              <div>
                <p>خروج</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-12 p-4 md:col-span-9 ">
          <div className="grid gap-1 border-2 rounded-lg grid-cols-1 lg:grid-cols-2">
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '>نام و نام خانوادگی</span>
                    <span className='text-base font-bold text-gray-700'>عباس پاینده</span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '>کد ملی </span>
                    <span className='text-base font-bold text-gray-700'>0011225526 </span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '> شماره موبایل </span>
                    <span className='text-base font-bold text-gray-700'>09182101066 </span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '>ایمیل </span>
                    <span className='text-base font-bold text-gray-700'>payandeh7@yahoo.com </span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '> رمز عبور </span>
                    <span  className='text-base font-bold text-gray-700'>**** </span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '>  روش بازگرداندن پول من</span>
                    <span className='text-base font-bold text-gray-700'>شماره شبا :IR-12345678910 </span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '>تاریخ تولد</span>
                    <span className='text-base font-bold text-gray-700'> 1371/04/16 </span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
            <div className="items-center rounded-md p-6 flex justify-between border-b-2 border-b-gray-300">
                <div className='flex flex-col gap-2'>
                    <span className='text-sm text-gray-500  '>  شغل   </span>
                    <span className='text-base font-bold text-gray-700'> توسعه نرم افزار و برنامه نویسی</span>
                </div>
                <AiOutlineEdit className="text-slate-700 w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

{
  /* <div className="flex w-full mt-4 gap-4">
<div className="flex flex-col w-72 rounded-lg ring-1 ring-gray-300 ">
    <div className="flex justify-between items-center gap-10  p-4">
        <CgProfile className="w-10 h-10"/>
        <div className="flex flex-col">
            <span className="text-slate-800 font-bold text-base ">name</span>
            <span className="text-slate-500 text-sm">tel</span>
        </div>
        <AiOutlineEdit className="text-cyan-500 w-6 h-6 cursor-pointer"/>
    </div>
        <div className="flex justify-start items-center p-4">
            <MdOutlineProductionQuantityLimits className="text-slate-800 h-5 w-5"/>
            <h1 className="text-slate-700 font-bold text-base mr-2">سفارشات</h1>
        </div>
            <span className="flex border-gray-300 border-2 border-solid px-4"></span>
    <div>
        <p>خروج</p>
    </div>
</div>

<div className="flex flex-col flex-1 rounded-lg ring-1 ring-gray-300 p-4">
    <div>moshkhasta</div>
    <div>adress</div>
    <div>favroit</div>
</div>
</div> */
}
