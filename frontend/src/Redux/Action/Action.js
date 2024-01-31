import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../Actiontype/Actiontype"
import axios from "axios"
import { alerterror } from "./Actionerror"

export const register = (data,navigate)=>async(dispatch)=>{
    console.log(data)
    try {
        const res=await axios.post("/user/register",data)
        navigate("/profile")
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alerterror(element.msg))
        });
    }
}
export const login = (data,Navigate)=>async(dispatch)=>{
    try {
        await axios.post("/user/login", data).then(res=>dispatch({type:LOGIN,payload:res.data}))
        Navigate("/profile")
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alerterror(element.msg))
        });
    }
}
export const getcurrent=()=>async(dispatch)=>{
    const config={
        headers:{token:localStorage.getItem("token")}
    }
    try {
        await axios.get("/user/getcurrentuser",config).then(res=>dispatch({type:GETCURRENT,payload:res.data}))

    } catch (error) {
        console.log(error)
    }
}
export const logout=(navigate)=>{
    navigate("/login")
    return {type:LOGOUT}
}