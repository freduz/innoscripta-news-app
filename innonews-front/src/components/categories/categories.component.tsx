import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

type categoriesProps = {}

const Categories:React.FC<categoriesProps> = (props) => {
  return (
   <>
    <div className="container mx-auto flex items-center justify-between">
        <ul className="hidden md:flex items-center justify-between py-4 w-full text-black font-playfair">
           <li><NavLink to="news/entertainment">ENTERTAINMENT</NavLink></li>
           <li><NavLink to="news/technology">TECHNOLOGY</NavLink></li>
           <li><NavLink to="news/travel">TRAVEL</NavLink></li>
           <li><NavLink to="news/business">BUSINESS</NavLink></li>
        </ul>
     </div>
     <hr></hr>
   </>
  )
}

export default Categories