import React from 'react'
import { Link } from 'react-router-dom'
import truncate from '../../utils/truncate-text'

import { ThreeDots } from  'react-loader-spinner'

type latestNewsProps = {
  latestNews:any[],
  loading:any
}

const LatestNews:React.FC<latestNewsProps> = ({latestNews,loading}) => {
  return (
   <>
    <div className="first-section p-7 border-dotted border-r-2 border-black font-playfair flex flex-col gap-6">
    <div className="news-title border-dotted border-b-2 border-black pb-5">
                <h2 className="text-[18px] font-[700]">Latest news</h2>
                <div className="mx-auto flex justify-center">
          <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#000" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={loading}
          />
                    </div>
            </div>
            {
              !loading && (
                latestNews.slice(0,9).map(news => (
                  <>
                  <div className="news-content flex flex-col gap-3">
                  <img src={news.image} alt="" className="w-full h-25 object-cover object-bottom"/>
                   <div className="flex flex-col gap-3">
                      <span className="text-[15px] font-[700] font-sans">{news.date}</span>
                      <h2 className="text-[20px] font-[400] font-playfair">{news.title}</h2>
                      <p className="text-[16px] font-[400] font-playfair leading-[22.4px]">{truncate(news.body)}</p>
                        <div className="move-area flex items-center gap-2">
                          <Link to={news.url} target='_blank'>Read more</Link>
                          <i className="fa fa-light fa-arrow-right"></i>
                        </div>
                   </div>
              </div>
                  </>
                ))
              )
            }

      </div>
  
           
   </>
  )
}

export default LatestNews