import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { singupUser } from '../Services/SignupServices'
const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordconfirm: '',
}


const validationSchema = yup.object({
  name: yup.string().required('نام اجباری می باشد'),
  email: yup.string().email('ایمیل نا معتبر').required('ایمیل اجباری می باشد'),
  phoneNumber: yup
    .string()
    .required('شماره موبایل اجباری می باشد')
    .matches(/^[0-9]{11}$/, 'شماره تماس نامعبتر')
    .nullable(),
  password: yup.string().required('کلمه عبور را وارد کنید'),
  passwordconfirm: yup
    .string()
    .required('کمله عبور اجباری می باشد')
    .oneOf([yup.ref('password'), null], 'کمله عبور همخوانی ندارد'),
})

const SignupPage =  () => {
  const navi=useNavigate()
const [error,setError]=useState(null)
  const onSubmit = async (values) => {
    const {name,email,phoneNumber,password}=values
    const Datauser={
     name,email,phoneNumber,password
    }
    // axios.post('http://localhost:5000/api/user/register',Datauser).then(res=>console.log(res.data)).catch(err =>console.log(err.message))
   try {
     const {data} =await singupUser(Datauser) 
     toast.success("ثبت نام با موفقیعت ")
     setError(null)  
     navi("/")
     }
     catch (error) {
    console.log(error.response.data.message)
    setError(error.response.data.message)
   }
   }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  })
  return (
    <section className="flex justify-center items-center container mx-auto p-4 mt-6 mb-4">
      <form
        onSubmit={formik.handleSubmit}
        className="ring-1  ring-gray-300 rounded-md w-96 flex flex-col  p-4"
      >
        <h1 className=" text-center text-3xl font-black  text-indigo-700 mb-4">
          فروشگاه{' '}
        </h1>
        <p className="text-slate-700 mb-4">ثبت نام </p>
        
        <div className="flex flex-col mt-2 ">
          <div className="flex justify-between items-center">
            <label className="text-slate-500 text-sm">نام و نام خانوادگی</label>
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-xs flex">{formik.errors.name}</p>
            )}
          </div>
          <input
            {...formik.getFieldProps('name')}
            name="name"
            type="text"
            className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex justify-between items-center">
            <label className="text-slate-500 text-sm"> ایمیل </label>
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs flex">{formik.errors.email}</p>
            )}
          </div>
          <input
            {...formik.getFieldProps('email')}
            name="email"
            type="text"
            className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex justify-between items-center">
            <label className="text-slate-500 text-sm"> شماره موبایل </label>
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-red-500 text-xs flex">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
          <input
            {...formik.getFieldProps('phoneNumber')}
            name="phoneNumber"
            type="text"
            className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex justify-between items-center">
            <label className="text-slate-500 text-sm">کلمه عبور </label>
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-xs flex">
                {formik.errors.password}
              </p>
            )}
          </div>
          <input
            {...formik.getFieldProps('password')}
            name="password"
            type="text"
            className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex justify-between items-center">
            <label className="text-slate-500 text-sm"> تکرار کلمه عبور </label>
            {formik.errors.passwordconfirm &&
              formik.touched.passwordconfirm && (
                <p className="text-red-500 text-xs flex">
                  {formik.errors.passwordconfirm}
                </p>
              )}
          </div>
          <input
            {...formik.getFieldProps('passwordconfirm')}
            name="passwordconfirm"
            type="text"
            className="outline-none ring-1 mt-2 ring-gray-400 px-4 py-2 rounded-md text-slate-700 focus:ring-2 focus:ring-indigo-700 "
          />
        </div>
        <button
          disabled={!formik.isValid}
          type="submit"
          className="bg-indigo-700 text-white font-bold px-4 py-3 mt-6 rounded-md cursor-pointer  disabled:bg-gray-400
          "
        >
          ثبت نام
        </button>
        <p className='text-red-600 font-normal mt-4'>{error}</p>
      </form>
    </section>
  )
}

export default SignupPage
