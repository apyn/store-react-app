import http from "./httpServices";


export  const singupUser =(data)=>{
return http.post('/user/register',data)
}