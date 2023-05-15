import React from 'react'
import MainFeedCard from './mainfeed-card/mainfeed-card.component'

type mainFeedProps = {}

const MainFeed:React.FC<mainFeedProps> = (props) => {
  return (
    <>
     <div className="second-section p-7 border-r-2 border-black">
     <div className="font-playfair pb-3 flex flex-col gap-4">
            <h2 className="text-[18px] font-[700]">Main feed</h2>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
            <MainFeedCard/>
        </div>
      </div>
    
    </>
  )
}

export default MainFeed