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
import mapErrorToToast from "../../utils/newsErrorHandler"


type HomeProps = {
}

const Home:React.FC<HomeProps> = (props) => {

     const [customFeedCaller,{isLoading:customFeedLoader}] = useCustomFeedMutation();
     const [findNewsApiCaller,{isLoading:commonNewsLoader}] = useFindMutation();
     const [findNonLoginFeedCaller,{isLoading:commonFeedLoader}] = useNonLoginFeedMutation();
     const {userInfo} = useSelector((state:RootState) => state.auth)
     const dispatcher = useDispatch();


    useEffect(() => {
          const loadCustomFeedData = async () => {
               let customfFeedData = []
              if(userInfo){
               customfFeedData = await customFeedCaller('').unwrap();
              }else{
               customfFeedData = await findNonLoginFeedCaller('').unwrap();
              }

              dispatcher(setCustomFeed(customfFeedData))
          }
          loadCustomFeedData();
    },[customFeedCaller, findNonLoginFeedCaller,dispatcher])

    useEffect(() => {
     const loadSportsFeed = async () => {
          const sportsFeed = await findNewsApiCaller({searchTerm:'(football AND cricket)',pageSize:20}).unwrap()
          .then((payload:any) => console.log('fulfilled', payload))
          .catch((error) =>mapErrorToToast(error))
          dispatcher(setSports(sportsFeed))
     }
     loadSportsFeed();
     
    },[dispatcher, findNewsApiCaller])

    useEffect(() => {
     const loadEducationFeed = async () => {
         try{
          const educationFeed = await findNewsApiCaller({searchTerm:'(education)',pageSize:20}).unwrap()
          .then((payload) => console.log('fulfilled', payload))
          .catch((error) => mapErrorToToast(error))
          dispatcher(setEducation(educationFeed))
         }catch(err){
          console.error(err)
         }
     }
     loadEducationFeed();
    },[])

    useEffect(() => {
     const loadTechnologyFeed = async () => {
          const techFeed = await findNewsApiCaller({searchTerm:'(technology)',pageSize:20}).unwrap()
          .then((payload) => console.log('fulfilled', payload))
          .catch((error) => mapErrorToToast(error))
          dispatcher(setTechnology(techFeed))
     }
     loadTechnologyFeed();
    },[])
    useEffect(() => {
     const loadPoliticsFeed = async () => {
          const politicsFeed = await findNewsApiCaller({searchTerm:'(politics)',pageSize:20}).unwrap()
          .then((payload) => console.log('fulfilled', payload))
          .catch((error) => mapErrorToToast(error))
          dispatcher(setPolitics(politicsFeed))
     }
     loadPoliticsFeed();
    },[])



     const {latestNews,randomPicks,trending} = useSelector((state:RootState) => state.news.customFeed)
     const {sports,education,technology,politics} = useSelector((state:RootState) => state.news)

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