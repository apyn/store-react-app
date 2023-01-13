import http from "./httpServices"


export const GetProductServices =()=>{
    return http.get('http://localhost:5000/api/product')
}