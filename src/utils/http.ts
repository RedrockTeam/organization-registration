// HTTP 工具类
import Taro from '@tarojs/taro'

const hostname = ''

export default class http {
  static async request(method, url, data) {
    let Authtoken: string = ''

    if (Taro.getStorageSync('Authtoken')) {
      Authtoken = Taro.getStorageSync('Authtoken')
    }
    const param: any = {
      method: method,
      header: {
        Authorization: `Bearer ${Authtoken}`
      }
    }

    url = `${hostname}${url}${this.formatQuery(data)}`
    param['url'] = url

    return Taro.request(param).then(response => {
      return response
    })
  }

  // url处理
  static formatQuery(query) {
    let params: Array<string> = []

    if (query) {
      for (let item in query) {
        let vals = query[item]
        if (vals !== undefined) {
          params.push(item + '=' + query[item])
        }
      }
    }
    return params.length ? '?' + params.join('&') : ''
  }

  // 处理 get 请求
  static get(url, data) {
    return this.request('GET', url, data)
  }

  // 处理 post 请求
  static post(url, data) {
    return this.request('POST', url, data)
  }
}
