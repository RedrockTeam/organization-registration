import Taro from '@tarojs/taro'

const stuInfo = {
  stu_name: '',
  stu_num: '',
  stu_qq: '',
  stu_phone: ''
}

const StuInfoContext = Taro.createContext(stuInfo)

export default StuInfoContext
