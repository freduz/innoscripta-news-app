import React from "react"
import Headlines from "../../components/headlines/headlines.component"
import MainFeed from "../../components/mainfeed/mainfeed.component"
import LatestNews from "../../components/latest-news/latest-news.component"
import Footer from "../../components/footer/footer.component"
import CommonNews from "../../components/common-news/common-news.component"

type HomeProps = {
}

const Home:React.FC<HomeProps> = (props) => {
    return (
        <>
        <section className="container mx-auto mt-7 news-content-area  md:grid grid-cols-[minmax(5rem,_1fr)_2fr_minmax(5rem,_1fr)]">
         <LatestNews/>  
         <MainFeed/>
         <Headlines/>
        </section>
        <hr />
   <section className="container mx-auto mt-7">
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews/>
    </div>
    <hr />
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews/>
    </div>
    <hr />
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews/>
    </div>
   </section>
   <Footer/>
        </>
    )
}

export default Home