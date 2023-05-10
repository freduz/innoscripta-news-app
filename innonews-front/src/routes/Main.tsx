import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from '../layouts/Root'
import Home from '../pages/home/home.component'

const Main = () => {
  return (
    <Routes>
      <Route element={<Root/>}>
        <Route index element={<Home/>}/>
      </Route>
      
    </Routes>
  )
}

export default Main