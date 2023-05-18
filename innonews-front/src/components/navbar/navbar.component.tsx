import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../store/store'
import { useLogoutMutation } from '../../store/slices/userAuthSlice'
import { logout } from '../../store/slices/authSlice'
import HamMenu from '../hammenu/hammenu.component'
import SearchBox from '../searchbox/searchbox.component'

type NavBarProps = {}

const Navbar:React.FC<NavBarProps> = () => {

    const {userInfo} = useSelector((state:RootState) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutCall] = useLogoutMutation();


    const logOutHandler = async() => {
        try{
             await logoutCall('').unwrap();
             dispatch(logout())
             navigate('/login')
        }catch(err:any){

        }
    }


  return (
  <>
    <div className="bg-[#f0f0f0]">
    <nav className="relative container mx-auto py-3">
        <div className="flex items-center justify-between">
            <Link to="/">
            <h2 className="p-7 md:p-0 font-playfair text-[32px] font-[700] grow basis-0">Newspaper.</h2>
            </Link>
           <SearchBox/>
            <HamMenu/>
            {userInfo ? (
                <>
                <div className="hidden md:grow md:basis-0 md:flex items-center justify-end">
            <button onClick={logOutHandler}  type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Logout</button>
            <Link to='/settings'  type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Settings</Link>
        </div>
                </>
            ) : (
                <>
                <div className="hidden md:grow md:basis-0 md:flex items-center justify-end">
            <Link to="/login" className="text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Login</Link>
        </div>
                </>
            )
            
            
            }
           
        </div>
     </nav>
  </div>
  </>
  )
}

export default Navbar