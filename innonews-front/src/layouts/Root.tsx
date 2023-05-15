import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar.component'
import Banner from '../components/banner/banner.component'
import Categories from '../components/categories/categories.component'

type headerProps = {}

const Root:React.FunctionComponent<headerProps> = (props) => {
  return (
      <>
      <Banner/>
      <Navbar/>
      <Categories/>
      <Outlet/>
      </>
  )
}

export default Root