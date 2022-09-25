import axios from "axios"

//1、创建axios的实例

export function request(config){
  const instance1 = axios.create({
    baseURL:'真实接口请联系coderwhy001',
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
