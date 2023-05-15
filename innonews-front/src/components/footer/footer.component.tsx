import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white">
    <div className="inner-content container p-10 mx-auto md:p-30 flex flex-col gap-[5rem]">
        <div className="main-footer-content flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="left-content">
                <h2 className="text-[32px] font-playfair font-[700]">Newspaper.</h2>
                <div className="pr-3">
                    <p className="text-[16px] font-playfair font[400]">Daily newspaper magazine with interesting scientific articles and guides on modern technology and fashion.</p>
                <div className="read-more-section mt-7">
                    <Link className="text-[16px] font-[700] text-[#e09d37]" to="#">Read more</Link>
                    <i className="fa fa-light fa-arrow-right"></i>
                </div>
                </div>
            </div>
            <div className="middle-content w-full">
                <h2 className="text-[20px] font-playfair font-[700]">Company</h2>
                <div className="border-b-2 border-white w-full"></div>
                <div className="read-more-section mt-7 flex flex-col text-[16px] font-playfair font[400]">
                    <Link to="">Home Page</Link>
                    <Link to="">About us</Link>
                    <Link to="">Blog</Link>
                    <Link to="">Simple post</Link>  
                </div>
            </div>
            <div className="right-content w-full">
                <h2 className="text-[20px] font-playfair font-[700]">Categories</h2>
                <div className="border-b-2 border-white w-full"></div>
                <div className="flex flex-col mt-7 text-[16px] font-playfair font[400]">
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Terms and Condition</Link>
                    <Link to="">Contact</Link>
                    <Link to="">Newsletter</Link>
                </div>
            </div>
          </div>
          <div className="end-content-footer flex flex-col md:flex-row  items-center justify-between">
            <div>
                <i className="fa fa-solid fa-envelope text-[#e09d37] text-[16px] font-playfair font[400]"></i>
                <span className="text-[16px] font-playfair font[400]">info@newspaper.domain</span>
            </div>
            <div className="self-center text-center text-[16px] font-playfair font[400]">
                <span>Copyright &copy; 2021 Newspaper Magazine. All right reserved.</span>
            </div>
          </div>
    </div>
      
  </footer>
  )
}

export default Footer