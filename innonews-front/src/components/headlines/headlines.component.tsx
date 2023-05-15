import React from 'react'
import Headline from './headline/headline.component'

type headlineProps = {}

const Headlines:React.FC<headlineProps> = (props) => {
  return (
    <>
       <div className="third-section p-7">
        <div className="font-playfair pb-3  flex flex-col gap-4">
            <div className="news-title border-b-2 border-black pb-5">
                <h2 className="text-[18px] font-[700]">Random picks</h2>
            </div>
            <div className="random-pick-news flex flex-col gap-5">
               <Headline/>
               <Headline/>
               <Headline/>
               <Headline/>
               <Headline/>
               <Headline/>
            </div>
           
        </div>
      </div>
    </>
  )
}

export default Headlines