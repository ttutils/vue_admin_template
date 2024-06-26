import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['AUTHORIZATION'] = getToken()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Message.error({message: res.message || 'error', type: 'error'});
    } else {
      switch (res.message) {
        case '查询成功':
        case '获取版本号成功':
          break;
        default:
          Message.success({message: res.message || 'Success', type: 'success'});
      }
      return res
    }
  },
  error => {
    const res = error.response.data
    Message.error({message: res.message || 'error', type: 'error'});
    return Promise.reject(error)
  }
)

export default service
