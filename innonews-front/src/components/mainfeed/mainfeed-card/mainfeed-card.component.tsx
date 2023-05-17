import React from 'react'
import truncate from '../../../utils/truncate-text'
import { Link } from 'react-router-dom'

type mainFeedCardProps = {
  news:any
}

const MainFeedCard:React.FC<mainFeedCardProps> = ({news}) => {
  return (
    <>
        <Link to={news.url} target='_blank'>
        <div className="news-card md:flex gap-3 w-full h-full">
                <img src={news.image} alt="" className="md:w-[50%] object-cover object-bottom"/>
                <div className="topic-content">
                    <span>{news.date}</span>
                    <h3>{news.title}</h3>
                    <p>{truncate(news.body)}</p>
                </div>
            </div>
        </Link>   
    </>
  )
}

export default MainFeedCard