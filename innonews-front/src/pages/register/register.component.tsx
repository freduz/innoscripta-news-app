import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Input from '../../components/input/input.component'
import Button from '../../components/button/button.component'
import { register } from '../../store/slices/authSlice'
import { useRegisterMutation } from '../../store/slices/userAuthSlice'
import {toast} from 'react-toastify'

type registerProps = {}

const defaultFormFields = {
  fullname:'',
  email:'',
  password:'',
  confirmPassword:''
}

const Register:React.FC<registerProps> = (props) => {

  const [registerFormFields,setRegisterFormFields] = useState(defaultFormFields);
  const {fullname,email,password,confirmPassword} = registerFormFields;
  const [registerCall] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e:React.ChangeEvent<any>) => {
          const {name,value} = e.target;
          setRegisterFormFields({...registerFormFields,[name]:value})
  }

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const res = await registerCall({name:fullname,email,password,password_confirmation:confirmPassword}).unwrap()
      dispatch(register({...res}))
      navigate('/')
    }catch(e:any){
      toast.error(e?.data?.message)
    }
  }






  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://img.icons8.com/glyph-neue/64/news.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={submitHandler}>
        <Input id='fullname' name='fullname' type='text' label='Full name' labelClass='block text-sm font-medium leading-6 text-gray-900' autoComplete="fullname" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={fullname} onChange={handleChange}/>
        <Input id='email' name='email' type='email' label='Email address' labelClass='block text-sm font-medium leading-6 text-gray-900' autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={email} onChange={handleChange}/>
        <Input id='password' name='password' type='password' label='Password' labelClass='block text-sm font-medium leading-6 text-gray-900' autoComplete="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={password} onChange={handleChange}/>
        <Input id='confirmPassword' name='confirmPassword' type='password' label='Confirm password' labelClass='block text-sm font-medium leading-6 text-gray-900' autoComplete="confirm-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={confirmPassword} onChange={handleChange}/>
        <Button type='submit' className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">Sign Up</Button>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link to="/login" className="font-semibold leading-6 text-black hover:text-black">&nbsp;Already have an account?</Link>
    </p>
  </div>
</div>

    </>
  )
}

export default Register