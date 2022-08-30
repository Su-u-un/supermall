import axios from "axios"

//1、创建axios的实例

export function request(config){
  const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2、axios的拦截器
  instance1.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })

  return instance1(config)
}
