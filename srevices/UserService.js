import axios from 'axios'

export const Signup=(SignupObj)=>{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', SignupObj)
    return response
}
export const Signin=(LoginObj)=>{
    let response=axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', LoginObj)
    return response
}