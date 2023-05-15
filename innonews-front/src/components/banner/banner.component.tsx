import React from 'react'

type BannerProps = {}

const Banner:React.FC<BannerProps> = (props) => {
  return (
    <>
     <div className="bg-black">
        <div className="container mx-auto flex items-center justify-between text-white font-playfair text-[14px] font-[700]">
           <p>Magazine and newspaper with news arround the world</p>
           <div className="hidden md:flex p-2 space-x-6">
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
           </div>
        </div>
    </div>
    </>
  )
}

export default Banner;