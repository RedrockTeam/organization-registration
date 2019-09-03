import Taro from '@tarojs/taro'

interface StuInfo {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}
const stuInfo = {
  stu_name: ' ',
  stu_num: ' ',
  stu_qq: ' ',
  stu_phone: ' '
}

const changeStuInfo = (stuInfo: StuInfo) => {}

const StuInfoContext = Taro.createContext({ stuInfo, changeStuInfo })

export default StuInfoContext
