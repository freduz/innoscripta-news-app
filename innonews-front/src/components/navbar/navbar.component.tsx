import React from 'react'
import { Link } from 'react-router-dom'

type NavBarProps = {}

const Navbar:React.FC<NavBarProps> = () => {
  return (
  <>
    <div className="bg-[#f0f0f0]">
    <nav className="relative container mx-auto py-3">
        <div className="flex items-center justify-between ">
            <h2 className="font-playfair text-[32px] font-[700] grow basis-0">Newspaper.</h2>
            <div className="hidden md:block md:grow  md:basis-0">
                <div className='max-w-md mx-auto'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                
                        <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.." /> 
                    </div>
                </div>
            </div>
           <div className="hidden md:grow md:basis-0 md:flex items-center justify-end">
            <Link to="/login"  type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Login</Link>
        </div>
        </div>
     </nav>
  </div>
  </>
  )
}

export default Navbar