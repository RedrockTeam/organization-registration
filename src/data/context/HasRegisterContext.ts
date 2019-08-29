import Taro from '@tarojs/taro'

const HasRegister = [
  {
    organization: '红岩',
    department: 'web',
    status: 0,
    info: [
      {
        id: 1,
        organization: '红岩',
        department: 'web',
        info:
          '亲爱的yjp同学,你好，你先前的申请的社团组织需要进行一面面试，现将详细面试信息发给你',
        time: '1545096558331'
      },
      {
        id: 2,
        organization: '红岩',
        department: 'web',
        info:
          '亲爱的yyy同学,你好，你先前的申请的社团组织需要进行一面面试，现将详细面试信息发给你',
        time: '1566211679355'
      }
    ]
  },
  {
    organization: '红岩',
    department: '移动',
    status: 0,
    info: []
  },
  {
    organization: '红岩',
    department: 'sre',
    status: 0,
    info: []
  }
]

const HasRegisterContext = Taro.createContext(HasRegister)

export default HasRegisterContext
