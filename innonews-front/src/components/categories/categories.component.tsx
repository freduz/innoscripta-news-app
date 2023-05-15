import React from 'react'

type categoriesProps = {}

const Categories:React.FC<categoriesProps> = (props) => {
  return (
   <>
    <div className="container mx-auto flex items-center justify-between">
        <ul className="hidden md:flex items-center justify-between py-4 w-full text-black font-playfair">
           <li><a href="">NEWS</a></li>
           <li><a href="">ENTERTAINMENT</a></li>
           <li><a href="">TECHNOLOGY</a></li>
           <li><a href="">TRAVEL</a></li>
           <li><a href="">FOOD</a></li>
           <li><a href="">SPORTS</a></li>
        </ul>
     </div>
     <hr></hr>
   </>
  )
}

export default Categories