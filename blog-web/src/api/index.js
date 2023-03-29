//接口统一管理
import requests from "./requests";
import mockRequests from "./mockRequests";
// export const reqblogImg = ()=>requests({url:'https://jsonplaceholder.typicode.com/',method:''})

export const reqHomeCard = ()=> mockRequests.get('/codedetail');
export const reqCodeCard = ()=> mockRequests.get('/codedetail');
export const reqTimeline = ()=> mockRequests.get('/mockTimeline');
export const reqMessage = ()=> mockRequests.get('/mockMessage');




