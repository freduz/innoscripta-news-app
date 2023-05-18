import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from '../layouts/Root'
import Home from '../pages/home/home.component'
import Login from '../pages/login/login.component'
import Register from '../pages/register/register.component'
import UserSettings from '../pages/settings/user-settings.component'
import SearchResult from '../pages/searchResult/searchresult.component'
import SingleNews from '../pages/single-news/singlenews.component'

const Main = () => {
  return (
    <Routes>
      <Route element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/settings' element={<UserSettings/>} />
        <Route path='/search' element={<SearchResult/>}/>
        <Route path='/news/:slug' element={<SingleNews/>}/>
        <Route path='/news/:slug' element={<SingleNews/>}/>
        <Route path='/news/:slug' element={<SingleNews/>}/>
        <Route path='/news/:slug' element={<SingleNews/>}/>
      </Route>
      
    </Routes>
  )
}

export default Main