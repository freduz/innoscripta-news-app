import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSingleMutation } from '../../store/slices/newsApiSlice';
import { Link } from 'react-router-dom';

type Props = {}

const SingleNews = (props: Props) => {

    const {slug} = useParams();
    const [newsData,setNewsData] = useState([])
    const [findSingleNews] = useSingleMutation();

    useEffect(() => {
         const loadSingleNews = async () => {
            const news = await findSingleNews(slug).unwrap();
             setNewsData(news?.response?.results)
         }

         loadSingleNews();
    },[slug])

  return (
    <>
     <div className='container mx-auto w-full'>
      <div className='md:flex md:flex-col ml-3'>
                                <div className="news-title p-4">
                                    <h2 className="text-[18px] font-[700]">{slug} news</h2>
                                </div>
                         <div className="md:grid md:grid-cols-[repeat(auto-fill,minmax(100px,300px))]">
                            {
                                newsData?.map((data:any) => (
                                    <>
                                    <Link key={data} to={data.webUrl} target='_blank'>
                                    <div className="news-card flex gap-2 p-4 h-fit">
                                            <div className="topic-content">
                                                <span className="font-playfair text-sm font-bold">{data.webPublicationDate.split("T")[0]}</span>
                                                <h3 className="text-[18px] font-playfair font-[700]">{data.webTitle}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                     
                                    </>
                                ))
                            } 
                            </div>
                        </div>
    </div>
    </>
  )
}

export default SingleNews