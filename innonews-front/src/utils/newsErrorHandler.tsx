import {toast} from 'react-toastify'


const mapErrorToToast = (error:any) => {
    console.log('callled',error.status)
    
        if(error?.status === 500){
            toast.error("You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period")
        }
        }

export default mapErrorToToast