import {toast} from 'react-toastify'

const MapErrorToToast = (error:any) => {

    console.log(error)
        if(error?.status === 500){
            toast.error("You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period")
        }
        if(error?.status === 401){
            toast.error("You are not logged in.")
            localStorage.removeItem('userInfo')
        }
        }

export default MapErrorToToast