import React, { useRef } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import './hammenu.style.css'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import { useLogoutMutation } from '../../store/slices/userAuthSlice'
import { logout } from '../../store/slices/authSlice'
type categoriesProps = {}

const HamMenu:React.FC<categoriesProps> = (props) => {

    const {userInfo} = useSelector((state:RootState) => state.auth)
        const navRef:any = useRef();
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const [logoutCall] = useLogoutMutation();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    const logOutHandler = async() => {
        try{
            navRef.current.classList.toggle(
                "responsive_nav"
            );
             await logoutCall('').unwrap();
             dispatch(logout())
             navigate('/login')
        }catch(err:any){

        }
    }

    const navigateSettings = () => {
        navRef.current.classList.toggle(
			"responsive_nav"
		);
        navigate('/settings')
    }

  return (
   <>
   <div className='md:hidden'>
   <header id='head'>
			<nav className='flex justify-center' ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
                <div>
                {userInfo ? (
                <>
                <div className="hidden md:grow md:basis-0 md:flex items-center justify-end">
            <button onClick={logOutHandler}  type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Logout</button>
            <button onClick={navigateSettings}  type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Settings</button>
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
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
   </div>
   
     <hr></hr>
   </>
  )
}

export default HamMenu