import axios from 'axios'
// @ts-ignore
import qs from 'qs'

axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置请求头
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.baseURL = '/api' // 配置接口地址

// POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use((config) => {
//   console.log(qs.stringify(config.data))
//   // 在发送请求之前做某件事
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//   }
//   return config
// }, (error) => {
//   console.log('错误的传参')
//   return Promise.reject(error)
// })

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  console.log(error)
  console.log('网络异常')
  return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function myPost (url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 返回一个Promise(发送get请求)
export function myGet (url: string, param: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 导出请求
export function Post (url: string, parameter: any) {
  return axios.post(url, parameter)
}
// 导出请求
export function Get (url: string) {
  return axios.get(url)
}
// 删除请求
export function Delete (url: string) {
  return axios.delete(url)
}
// PUT请求
export function Put (url: string, parameter: object) {
  return axios.put(url, parameter)
}
// 并发请求
export function axiosAll (arr: Array<any> = []) {
  return axios.all(arr)
}
