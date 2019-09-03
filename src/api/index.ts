import Taro from '@tarojs/taro'
import http from '../utils/http'

interface UserInfoData {
  stuName: string
  stuNum: string
  stuQQ: string
  stuPhone: string
}

interface RegisterData {
  oName: string
  dName: string
}

interface GetOpenID {
  (code: string): Promise<any>
}
interface UserInfo {
  (info: UserInfoData): Promise<any>
}
interface UserChoose {
  (data: RegisterData): Promise<any>
}
interface UserSubmit {
  (data: RegisterData): Promise<any>
}
interface UserAllChoose {
  (): Promise<any>
}
interface ReadNewInfo {
  (data: RegisterData): Promise<any>
}
interface UserModifyInfo {
  (info: UserInfoData): Promise<any>
}

interface API {
  getOpenid: GetOpenID
  userinfo: UserInfo
  userChoose: UserChoose
  userSubmit: UserSubmit
  userAllChoose: UserAllChoose
  readNewInfo: ReadNewInfo
  userModifyInfo: UserModifyInfo
}

const api: API = {
  getOpenid: code =>
    http.post('/getOpenid', { code }).then(res => {
      const jwt = res.header.Authorization
      Taro.setStorageSync('Authtoken', jwt)
      return res.data
    }),
  userinfo: info => http.post('/userInfo', info).then(res => res.data),
  userChoose: data => http.post('/userChoose', data).then(res => res.data),
  userSubmit: data => http.post('/userSubmit', data).then(res => res.data),
  userAllChoose: () =>
    http.get('/userAllChoose', {}).then(res => res.data),
  readNewInfo: data =>
    http.post('/readNewInfo', data).then(res => res.data),
  userModifyInfo: info =>
    http.post('/userModifyInfo', info).then(res => res.data)
}

export default api
