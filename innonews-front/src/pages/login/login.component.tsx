import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Input from '../../components/input/input.component'
import Button from '../../components/button/button.component'
import { useLoginMutation } from '../../store/slices/userAuthSlice'
import { setCredentials } from '../../store/slices/authSlice'
import { RootState } from '../../store/store'
import {toast} from 'react-toastify'

type loginProps = {}


const defaultFormFields:{email:string,password:string} = {
  email:'',
  password:''
}

const Login:React.FC<loginProps> = (props) => {

  const [formFields,setFormFields] = useState(defaultFormFields);
  const {email,password} = formFields;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const {userInfo} = useSelector((state:RootState) => state.auth)


  useEffect(() => {
    if(userInfo){
      navigate('/',{replace:true})
    }

  },[navigate,userInfo])

  const handleChange = (event:React.ChangeEvent<any>) => {
    const {name,value} = event.target;

    setFormFields({...formFields,[name]:value})
  }

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const res = await login({email,password}).unwrap()
      dispatch(setCredentials({...res}))
      navigate('/',{replace:true})
    }catch(e:any){
      toast.error(e?.data?.message || e?.error)
    }

  }



  return (
    <>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://img.icons8.com/glyph-neue/64/news.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={submitHandler}>
    <Input id='email' name='email' type='email' label='Email address' labelClass='block text-sm font-medium leading-6 text-gray-900'  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={email} onChange={handleChange}/>
    <Input id='password' name='password' type='password' label='Password' labelClass='block text-sm font-medium leading-6 text-gray-900' required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" value={password} onChange={handleChange}/>
    <Button type='submit' className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">Sign In</Button>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link to="/register" className="font-semibold leading-6 text-black hover:text-black">&nbsp;Register here..</Link>
    </p>
  </div>
</div>

    </>
  )
}

export default Login