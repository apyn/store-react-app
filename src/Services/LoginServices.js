import http from "./httpServices"

export const LoginServices =(data)=>{
return http.post('/user/login',data)
}