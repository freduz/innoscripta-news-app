import React from 'react'
import Headline from './headline/headline.component'
import { ThreeDots } from  'react-loader-spinner'

type headlineProps = {
  headlines:any[],
  loading:any
}

const Headlines:React.FC<headlineProps> = ({headlines,loading}) => {
  return (
    <>
       <div className="third-section p-7">
        <div className="font-playfair pb-3  flex flex-col gap-4">
            <div className="news-title border-dotted border-b-2 border-black pb-5">
                <h2 className="text-[18px] font-[700]">Random picks</h2>
            </div>
            <div className="mx-auto" >
              
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
                    {
                      !loading && (
                        <div className="random-pick-news flex flex-col gap-5">
                        {
                          headlines.slice(0,28).map(headline => (
                            <Headline key={headline} headline={headline}/>
                          ))
                        }
                       
                      </div>
                      )
                    }
           
           
        </div>
      </div>
    </>
  )
}

export default Headlines