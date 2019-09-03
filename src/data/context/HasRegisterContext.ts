import Taro from '@tarojs/taro'

interface HasRegisterInfo {
  id: number
  organization: string
  department: string
  info: string
  time: string
}

interface HasRegister {
  organization: string
  department: string
  status: number
  info: Array<HasRegisterInfo>
}

const hasRegister: Array<HasRegister> = [

]

const changeStatus = (oName: string, dName: string) => {}
const addDepartment = (organization: string, department: string) => {}

const HasRegisterContext = Taro.createContext({
  hasRegister,
  changeStatus,
  addDepartment
})

export default HasRegisterContext
