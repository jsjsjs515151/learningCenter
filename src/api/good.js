import http from "./../utils/request"; 

 export const getGoodList = (params)=>{
   return http.get('/good/getGood',params)
 }
 export const editGood = (data)=>{
    return http.post('/good/edit',data)
 }
 export const delGood = (data)=>{
    return http.post('/good/del',data)
 }
 export const addGood = (data)=>{
    return http.post('/good/add',data)
 }