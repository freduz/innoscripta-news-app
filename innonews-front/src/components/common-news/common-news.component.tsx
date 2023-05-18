import React from 'react'
import { Link } from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner'

type Props = {
    news:any[],
    label:string,
    loading:any
}

const CommonNews:React.FC<Props> = ({news,label,loading}) => {
  return (
    <>
    <div className="mx-auto flex justify-center" >
              
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
                                <div className=' md:flex md:flex-col ml-3'>
                                <div className="news-title p-4">
                                    <h2 className="text-[18px] font-[700]">{label}</h2>
                                </div>
                         <div className="md:grid md:grid-cols-[repeat(auto-fill,minmax(100px,300px))]">
                            {
                                news?.map(data => (
                                    <>
                                    <Link to={data.url} target='_blank' key={data}>
                                    <div className="news-card flex gap-2 p-4 h-fit">
                                            <img src={data.urlToImage} alt="" className="w-[50%] object-cover object-bottom"/>
                                            <div className="topic-content">
                                                <span className="font-playfair text-sm font-bold">2023-05-03</span>
                                                <h3 className="font-playfair font-[200] text-[13px]">A Dark Day for LGBTI Rights as Uganda’s Parliament Passes Anti-LGBTI Law</h3>
                                            </div>
                                        </div>
                                    </Link>
                                     
                                    </>
                                ))
                            } 
                            </div>
                        </div>
                            )
                        }
   
    </>
  )
}

export default CommonNews