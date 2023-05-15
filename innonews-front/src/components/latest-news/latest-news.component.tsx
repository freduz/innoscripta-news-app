import React from 'react'
import { Link } from 'react-router-dom'

type latestNewsProps = {}

const LatestNews:React.FC<latestNewsProps> = (props) => {
  return (
   <>
    <div className="first-section p-7 border-r-2 border-black font-playfair flex flex-col gap-6">
    <div className="news-title border-b-2 border-black pb-5">
                <h2 className="text-[18px] font-[700]">Latest news</h2>
            </div>
            <div className="news-content flex flex-col gap-3">
                <img src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2023/05/Podcast_CHDT_episode_4x3_CH-only_MD.png?fit=1200%2C900&ssl=1" alt="" className="w-full h-25 object-cover object-bottom"/>
                 <div className="flex flex-col gap-3">
                    <span className="text-[15px] font-[700] font-sans">11 December 2021</span>
                    <h2 className="text-[32px] font-[500] font-playfair">Photo model</h2>
                    <p className="text-[16px] font-[400] font-playfair leading-[22.4px]">Some interesting inspirations and camera settings during photo sessions in the studio. Thanks to this, your photos will be even better. We have create...</p>
                      <div className="move-area flex items-center gap-2">
                        <Link to="">Read more</Link>
                        <i className="fa fa-light fa-arrow-right"></i>
                      </div>
                 </div>
            </div>
            <div className="news-content flex flex-col gap-3">
                <img src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2023/05/Podcast_CHDT_episode_4x3_CH-only_MD.png?fit=1200%2C900&ssl=1" alt="" className="w-full h-25 object-cover object-bottom"/>
                 <div className="flex flex-col gap-3">
                    <span className="text-[15px] font-[700] font-sans">11 December 2021</span>
                    <h2 className="text-[32px] font-[500] font-playfair">Photo model</h2>
                    <p className="text-[16px] font-[400] font-playfair leading-[22.4px]">Some interesting inspirations and camera settings during photo sessions in the studio. Thanks to this, your photos will be even better. We have create...</p>
                      <div className="move-area flex items-center gap-2">
                        <Link to="">Read more</Link>
                        <i className="fa fa-light fa-arrow-right"></i>
                      </div>
                 </div>
            </div>
            <div className="news-content flex flex-col gap-3">
                <img src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2023/05/Podcast_CHDT_episode_4x3_CH-only_MD.png?fit=1200%2C900&ssl=1" alt="" className="w-full h-25 object-cover object-bottom"/>
                 <div className="flex flex-col gap-3">
                    <span className="text-[15px] font-[700] font-sans">11 December 2021</span>
                    <h2 className="text-[32px] font-[500] font-playfair">Photo model</h2>
                    <p className="text-[16px] font-[400] font-playfair leading-[22.4px]">Some interesting inspirations and camera settings during photo sessions in the studio. Thanks to this, your photos will be even better. We have create...</p>
                      <div className="move-area flex items-center gap-2">
                        <Link to="">Read more</Link>
                        <i className="fa fa-light fa-arrow-right"></i>
                      </div>
                 </div>
            </div>
      </div>
  
           
   </>
  )
}

export default LatestNews