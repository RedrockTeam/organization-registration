import Taro from '@tarojs/taro'

interface StuInfo {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}
const stuInfo = {
  stu_name: '个人信息获取失败',
  stu_num: '个人信息获取失败',
  stu_qq: '个人信息获取失败',
  stu_phone: '个人信息获取失败'
}

const changeStuInfo = (stuInfo: StuInfo) => {}

const StuInfoContext = Taro.createContext({ stuInfo, changeStuInfo })

export default StuInfoContext
