import React, { useState } from 'react'
import { RootState } from '../../store/store'
import SearchResultCard from './searchresult-card/search-resultcard.component'
import { useCategoriesMutation, useSourcesMutation } from '../../store/slices/preferenceApiSlice'
import { setCategories, setSources } from '../../store/slices/preferenceSlice'
import {useDispatch,useSelector} from 'react-redux';
import SelectBox from '../../components/select/select.component'

import "react-datepicker/dist/react-datepicker.css";
import { setSearchNews } from '../../store/slices/newsSlice'



type Props = {}

const SearchResult = (props: Props) => {

  const [categoryCaller] = useCategoriesMutation();
  const [sourcesCaller] = useSourcesMutation();
  const dispatch = useDispatch();
  const {categories,sources} = useSelector((state:RootState) => state.preferences)
  const [selectedSources,setSelectedSources] = useState([]);
  const [selectedCategories,setSelectedCategories] = useState([]);

  const onSourcesSearch = async (val:string) => {
    const sources = await sourcesCaller(val).unwrap();
    dispatch(setSources(sources))
}

const onCategorySearch = async (val:string) =>{
  const categories = await categoryCaller(val).unwrap();
  dispatch(setCategories(categories))
}

const sourcesSelectHandler = (val:any) => {
  setSelectedSources(val)
}

const categoriesSelectHandler = (val:any) => {
    setSelectedCategories(val);
}
const [date, setDate] = useState(''); 
  
  const handleDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  } 


  const {searchNews} = useSelector((state:RootState) => state.news)



  const filterResults = () => {
    const formattedSources = selectedSources?.map(source => {
      return source['cat']
    })
    
    const result:any = searchNews.filter((news:any) => {
     const source:string[] = news?.source?.uri;
        const filteredSource = formattedSources.find(sourceUrl => sourceUrl === source )
        if(filteredSource === news?.source?.uri){
          return news;
        }
    })

    const final = result.filter((rs:any) => {
           return rs.date === date
     })
    dispatch(setSearchNews(final))
  }



  return (
    <>
    <div className='container mx-auto w-full'>
      <div className='flex flex-col md:flex-row justify-between  mx-auto md:w-auto gap-5 p-10'>
      <SelectBox options={sources} label='Select sources' onSearch={onSourcesSearch} onSelect={sourcesSelectHandler} selectedValues={selectedSources} />
      <SelectBox options={categories} label='Select categories' onSearch={onCategorySearch} onSelect={categoriesSelectHandler} selectedValues={selectedCategories}/>
           <div className='flex flex-col justify-center items-center mt-5'>
           <input type="date" name='date' onChange={handleDateChange} />
           </div>
           <button onClick={filterResults}  type="button" className="mt-5 text-white bg-black hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">Filter results</button>
      </div>
      {
        searchNews?.length !==0 ? (
          <>
             <SearchResultCard label='' loading={false}  news={searchNews}/>
          </>
        ) : (
          <>
         <div>
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">No news found...</h2>
         </div>
          </>
        )
      }
 
    </div>
   
    </>
  )
}

export default SearchResult