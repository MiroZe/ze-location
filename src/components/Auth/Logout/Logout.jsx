import { Navigate } from "react-router-dom"
import useUserStore from "../../../zustand/userState";
import { useEffect } from "react";




const Logout = () => {

    const {clearUser} = useUserStore();
    useEffect(()=> {
        clearUser()
    },[clearUser])

    return <Navigate to='/'/>

}


export default Logout;