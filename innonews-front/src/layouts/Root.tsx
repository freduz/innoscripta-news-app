import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar.component'

type headerProps = {}

const Root:React.FunctionComponent<headerProps> = (props) => {
  return (
      <>
      <Navbar/>
      <Outlet/>
      </>
  )
}

export default Root