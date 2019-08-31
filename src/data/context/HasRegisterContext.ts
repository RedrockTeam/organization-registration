import Taro from '@tarojs/taro'

const hasRegister = [
  {
    organization: '红岩网校工作站',
    department: 'Web研发部',
    status: 0,
    info: [
      {
        id: 1,
        organization: '红岩网校工作站',
        department: 'Web研发部',
        info:
          '亲爱的yjp同学,你好，你先前的申请的社团组织需要进行一面面试，现将详细面试信息发给你',
        time: '1545096558331'
      },
      {
        id: 2,
        organization: '红岩网校工作站',
        department: 'Web研发部',
        info:
          '亲爱的yyy同学,你好，你先前的申请的社团组织需要进行一面面试，现将详细面试信息发给你',
        time: '1566211679355'
      }
    ]
  },
  {
    organization: '红岩网校工作站',
    department: '移动开发部',
    status: 0,
    info: []
  },
  {
    organization: '红岩网校工作站',
    department: '运维安全部',
    status: 0,
    info: []
  },
  {
    organization: '红岩网校工作站',
    department: '产品策划及运营部',
    status: 0,
    info: []
  }
]

const changeStatus = (oName: string, dName: string) => {}
const addDepartment = (oName: string, dName: string) => {}

const HasRegisterContext = Taro.createContext({
  hasRegister,
  changeStatus,
  addDepartment
})

export default HasRegisterContext
