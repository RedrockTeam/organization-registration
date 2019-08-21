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
  (code: string): Promise<object>
}
interface UserInfo {
  (info: UserInfoData): Promise<object>
}
interface UserChoose {
  (data: RegisterData): Promise<object>
}
interface UserSubmit {
  (data: RegisterData): Promise<object>
}
interface UserAllChoose {
  (): Promise<object>
}
interface ReadNewInfo {
  (data: RegisterData): Promise<object>
}
interface UserModifyInfo {
  (info: UserInfoData): Promise<object>
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
    http.post('/api/getOpenid', { code }).then(res => {
      const jwt = res.header.jwt
      Taro.setStorageSync('Authtoken', jwt)
      return res.data
    }),
  userinfo: info => http.post('/api/userinfo', info).then(res => res.data),
  userChoose: data => http.post('/api/userChoose', data).then(res => res.data),
  userSubmit: data => http.post('/api/userSubmit', data).then(res => res.data),
  userAllChoose: () =>
    http.post('/api/userAllChoose', {}).then(res => res.data),
  readNewInfo: data =>
    http.post('/api/readNewInfo', data).then(res => res.data),
  userModifyInfo: info =>
    http.post('/api/userModifyInfo', info).then(res => res.data)
}

export default api
