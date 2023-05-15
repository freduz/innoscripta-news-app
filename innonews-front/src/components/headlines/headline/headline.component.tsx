import React from 'react'

type headLineProps = {}

const Headline:React.FC<headLineProps> = (props) => {
  return (
   <>
    <div className="news-pick">
      <span>2023-04-25</span>
      <h3 className="text-[18px] font-playfair font-[700]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus voluptatibus possimus voluptate accusantium iste.</h3>
    </div>
   </>
  )
}

export default Headline