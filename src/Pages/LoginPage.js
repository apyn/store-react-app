import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate ,useSearchParams} from "react-router-dom";
import {  useAuth, useAuthActions } from "../Providers/AuthProviders";
import { LoginServices } from "../Services/LoginServices";


const initialValues = {
   
    email: '',

    password: '',
  
  }

const LoginPage = () => {

      const [query] = useSearchParams()
  const redirect=query.get("redirect")|| "/"

//   console.log(redirect)
    const Auth=useAuthActions()
    const userdata=useAuth()
   const navi= useNavigate()
    const [error,setError]=useState(null)


    useEffect(()=>{
        if(userdata)  
        navi(redirect)
      },[redirect,userdata])
const onSubmit =async(values)=>{
    console.log(values)
   try {
    const {data}= await LoginServices(values)
    toast.success("ورود با موفقیعت ")
    setError(null)
    Auth(data)
 localStorage.setItem("Auth",JSON.stringify(data))
navi(redirect)
  
   } catch (error) {
    console.log(error.response.data.message)
    setError(error.response.data.message)
   }
}
const formik= useFormik({initialValues,onSubmit})
    return ( 
        <section className="flex justify-center items-center container mx-auto p-4 mt-8 ">
            <form onSubmit={formik.handleSubmit} className="ring-1  ring-gray-300 rounded-md w-96 flex flex-col  p-4">
                <h1 className=" text-center text-3xl font-black  text-indigo-700 mb-4">فروشگاه </h1>
                <p className="text-slate-700 mb-4"> ورود به پنل کاربری</p>
                <div className="flex flex-col mt-4 ">
                    <label className="text-slate-500 text-sm ">ایمیل یا شماره موبایل را وارد کنید </label>
                <input     
                {...formik.getFieldProps("email")} name="email" type="text" className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 " />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-slate-500 text-sm "> کلمه عبور</label>
                <input {...formik.getFieldProps("password")} name="password" type="text" className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 " />
                </div>
          
            <button type="submit" className="bg-indigo-700 text-white font-bold px-4 py-3 mt-6 rounded-md">ورود</button>
          <p className="text-red-600 font-normal mt-2">{error}</p>
          <span className="mt-6 text-slate-700 text-sm flex items-center justify-between">
          <Link to="/signup"> ثبت نام</Link>
          <Link>فراموشی رمز عبور</Link>
          </span>
            </form>
        </section>
     );
}
 
export default LoginPage
