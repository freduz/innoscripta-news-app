import React, { useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import Headlines from "../../components/headlines/headlines.component"
import MainFeed from "../../components/mainfeed/mainfeed.component"
import LatestNews from "../../components/latest-news/latest-news.component"
import Footer from "../../components/footer/footer.component"
import CommonNews from "../../components/common-news/common-news.component"
import { RootState } from "../../store/store"
import { useCustomFeedMutation, useFindMutation, useNonLoginFeedMutation } from "../../store/slices/newsApiSlice"
import { setCustomFeed, setEducation, setPolitics, setSports, setTechnology } from "../../store/slices/newsSlice"
import MapErrorToToast from "../../utils/newsErrorHandler"


type HomeProps = {
}

const Home:React.FC<HomeProps> = (props) => {

     const {latestNews,randomPicks,trending} = useSelector((state:RootState) => state.news.customFeed)
     const {sports,education,technology,politics} = useSelector((state:RootState) => state.news)

     const [customFeedCaller,{isLoading:customFeedLoader}] = useCustomFeedMutation();
     const [findNewsApiCaller,{isLoading:commonNewsLoader}] = useFindMutation();
     const [findNonLoginFeedCaller,{isLoading:commonFeedLoader}] = useNonLoginFeedMutation();
     const {userInfo} = useSelector((state:RootState) => state.auth)
     const dispatcher = useDispatch();


   

    useEffect(() => {
     const loadSportsFeed = async () => {
           await findNewsApiCaller({searchTerm:'(football AND cricket)',pageSize:20}).unwrap()
          .then((sportsFeed:any) => {
               dispatcher(setSports(sportsFeed))
          })
          .catch((error:any) =>MapErrorToToast(error))
     }
     loadSportsFeed();
     
    },[dispatcher, findNewsApiCaller])

    useEffect(() => {
     const loadEducationFeed = async () => {
         try{
          await findNewsApiCaller({searchTerm:'(education)',pageSize:20}).unwrap()
          .then((educationFeed:any) =>{
               dispatcher(setEducation(educationFeed))
          })
          .catch((error:any) => MapErrorToToast(error))
         }catch(err){
          console.error(err)
         }
     }
     loadEducationFeed();
    },[])

    useEffect(() => {
     const loadTechnologyFeed = async () => {
          await findNewsApiCaller({searchTerm:'(technology)',pageSize:20}).unwrap()
          .then((techFeed:any) => {
               dispatcher(setTechnology(techFeed))
          })
          .catch((error:any) => MapErrorToToast(error))
     }
     loadTechnologyFeed();
    },[])
    useEffect(() => {
     const loadPoliticsFeed = async () => {
           await findNewsApiCaller({searchTerm:'(politics)',pageSize:20}).unwrap()
          .then((politicsFeed:any) => {
          dispatcher(setPolitics(politicsFeed)) 
          })
          .catch((error:any) => MapErrorToToast(error))

     }
     loadPoliticsFeed();
    },[])


    useEffect(() => {
     const loadCustomFeedData = async () => {
         if(userInfo){
          await customFeedCaller('').unwrap()
          .then(feed => {
               dispatcher(setCustomFeed(feed))
          })
          .catch((error:any) =>MapErrorToToast(error))
         }else{
          await findNonLoginFeedCaller('').unwrap()
          .then(feed => {
               dispatcher(setCustomFeed(feed))})
          .catch((error:any) =>MapErrorToToast(error))}

      
     }
     loadCustomFeedData();
},[customFeedCaller, findNonLoginFeedCaller,dispatcher])


    return (
        <>
        <section className="container mx-auto mt-7 news-content-area  lg:grid grid-cols-[minmax(5rem,_1fr)_2fr_minmax(5rem,_1fr)]">
         <LatestNews latestNews={latestNews} loading={customFeedLoader|| commonFeedLoader }/>  
         <MainFeed trending={trending} loading={customFeedLoader || commonFeedLoader}/>
         <Headlines headlines={randomPicks} loading={customFeedLoader || commonFeedLoader}/>
        
        
        </section>
        <hr />
   <section className="container mx-auto mt-7">
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews news={sports} label='Sports' loading={commonNewsLoader}/>
    </div>
    <hr />
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews news={education} label='Education' loading={commonNewsLoader}/>
    </div>
    <hr />
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews news={technology} label='Technology' loading={commonNewsLoader}/>
    </div>
    <div className="second-section-wrapper md:grid md:grid-cols-[minmax(5rem,4fr)] ">
         <CommonNews news={politics} label='Politics' loading={commonNewsLoader}/>
    </div>
   </section>
   <Footer/>
        </>
    )
}

export default Home