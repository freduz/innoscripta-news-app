import React, { useState } from 'react'
import { useSearchMutation } from '../../store/slices/newsApiSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setSearchNews } from '../../store/slices/newsSlice';

type Props = {}

const SearchBox:React.FC<Props> = (props) => {

  const [searchTerm,setSearchTerm] = useState('');
  const [searchNewsApi] = useSearchMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setSearchTerm(value)

  }


  const searchNews = async () => {
    const news = await searchNewsApi({searchTerm,pageSize:30}).unwrap();
    dispatch(setSearchNews(news?.articles?.results))
    navigate('/search')
  }

  const onKeyUp = (event:any) => {
    if (event.code === 'Enter') {
      searchNews();
    }

  }


  return (
    <div className="hidden md:block md:grow  md:basis-0">
                <div className='max-w-md mx-auto'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                          <button onClick={searchNews}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            </button>
                        </div>
                
                        <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        onChange={handleOnChange}
                        id="search"
                        name='searchTerm'
                        onKeyUp={onKeyUp}
                        placeholder="Search something.." /> 
                    </div>
                </div>
            </div>
  )
}

export default SearchBox