import React from 'react'

type mainFeedCardProps = {}

const MainFeedCard:React.FC<mainFeedCardProps> = (props) => {
  return (
    <>
    <div className="news-card flex gap-3 w-full h-full">
                <img src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/qctjhv74mkbijidnxysv" alt="" className="w-[50%] object-cover object-bottom"/>
                <div className="topic-content">
                    <span>2023-05-03</span>
                    <h3>A Dark Day for LGBTI Rights as Uganda’s Parliament Passes Anti-LGBTI Law</h3>
                </div>
            </div>
    </>
  )
}

export default MainFeedCard