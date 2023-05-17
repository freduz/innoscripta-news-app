import React from 'react'
import truncate from '../../../utils/truncate-text'
import { Link } from 'react-router-dom'

type headLineProps = {
  headline:{
    date:string,
    body:string,
    url:string
  }
}

const Headline:React.FC<headLineProps> = ({headline}) => {
  return (
   <>
   <Link to={headline.url}>
   <div className="news-pick">
      <span>{headline.date}</span>
      <h3 className="text-[18px] font-playfair font-[700]">{truncate(headline.body,150)}</h3>
    </div>
   </Link>
   
   </>
  )
}

export default Headline