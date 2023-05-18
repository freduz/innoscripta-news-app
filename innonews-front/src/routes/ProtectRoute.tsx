import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
import React from 'react'
import { RootState } from '../store/store'

type ProtectedRouteProps = {
    children:any
}

const ProtectRoute:React.FC<ProtectedRouteProps> = ({children}) => {

    const {userInfo} = useSelector((state:RootState) => state.auth)
    if(!userInfo){
        return <Navigate to="/login"></Navigate>
    }


  return children;
}

export default ProtectRoute