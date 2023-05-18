import React from 'react'
import MainFeedCard from './mainfeed-card/mainfeed-card.component'
import { ThreeDots } from  'react-loader-spinner'

type mainFeedProps = {
  trending:any[],
  loading:any
}

const MainFeed:React.FC<mainFeedProps> = ({trending,loading}) => {
  return (
    <>
     <div className="second-section p-7 border-dotted border-r-2 border-black">
     <div className="font-playfair pb-3 flex flex-col gap-4">
            <h2 className="text-[18px] font-[700]">Main feed</h2>
            <div className="mx-auto">
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
                    
            { !loading && (
trending.slice(0,28).map(news => (
  <MainFeedCard key={news} news={news}/>
))
            )
              
            }
           
        </div>
      </div>
    
    </>
  )
}

export default MainFeed