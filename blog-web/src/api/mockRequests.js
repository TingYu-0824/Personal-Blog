import axios from "axios";

const requests = axios.create({
    baseURL:'/mock',
    timeout: 5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调
    return res.data;
},(error)=>{
    //失败回调
    return Promise.reject(new Error('faile'));
})
export default requests;