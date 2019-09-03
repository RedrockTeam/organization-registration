import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import './index.scss'
import titlepng from '../../assets/title2x.png'
import sloganpng from '../../assets/slogan2x.png'
import api from '../../api'

import { StuInfoContext, HasRegisterContext } from '../../data/context'

interface StuInfo {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

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

interface State {
  enableClick: boolean
  clickType: string
  stuInfo: StuInfo
  hasRegister: Array<HasRegister>
}

export default class Index extends PureComponent<{}, State> {
  constructor() {
    super()
  }
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    enableClick: true,
    clickType: 'toInfo',
    stuInfo: {
      stu_name: '',
      stu_num: '',
      stu_qq: '',
      stu_phone: ''
    },
    hasRegister: [
      {
        organization: '',
        department: '',
        status: 0,
        info: [
          {
            id: 1,
            organization: '',
            department: '',
            info: '',
            time: ''
          },
          {
            id: 2,
            organization: '',
            department: '',
            info: '',
            time: ''
          }
        ]
      }
    ]
  }

  changeStuInfo = (stuInfo: StuInfo) => {
    this.setState({
      stuInfo
    })
  }

  changeStatus = (oName: string, dName: string) => {
    const hasRegister = this.state.hasRegister
    for (let value of hasRegister) {
      if (value.organization === oName && value.department === dName) {
        value.status = 0
        break
      }
    }
    this.setState({
      hasRegister
    })
  }
  addDepartment = (organization: string, department: string) => {
    const hasRegister = this.state.hasRegister
    const newRegister: HasRegister = {
      organization,
      department,
      status: 0,
      info: []
    }
    hasRegister.push(newRegister)
    this.setState({
      hasRegister
    })
  }

  beginRegister() {
    if (!this.state.enableClick) {
      return
    }
    const clickType = this.state.clickType
    if (clickType === 'toInfo') {
      Taro.navigateTo({
        url: '/pages/info-entrance/index'
      })
    } else if (clickType === 'toIndex') {
      Taro.navigateTo({
        url: `/pages/main/index?from=Index&to=OrganizationIndex`
      })
    }
    Taro.showLoading({
      title: '加载中...'
    })
    setTimeout(() => {
      Taro.hideLoading()
    }, 2000)
  }

  async login() {
    const loginInfo = await Taro.login()
    console.log(loginInfo)

    if (loginInfo && loginInfo.code) {
      const code = loginInfo.code
      const info = await api.getOpenid(code)
      if (info.status === 202) {
        this.setState({
          enableClick: true,
          clickType: 'toInfo'
        })
      } else if (info.status === 200) {
        const response = await api.userAllChoose()
        if (response.status === 200) {
          this.setState({
            enableClick: true,
            clickType: 'toIndex',
            stuInfo: info.data,
            hasRegister: response.data
          })
        }
      } else {
        console.log(info)
      }
    }
  }

  componentWillMount() {
    this.login()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <StuInfoContext.Provider
        value={{
          stuInfo: this.state.stuInfo,
          changeStuInfo: this.changeStuInfo
        }}
      >
        <HasRegisterContext.Provider
          value={{
            hasRegister: this.state.hasRegister,
            changeStatus: this.changeStatus,
            addDepartment: this.addDepartment
          }}
        >
          <View className="index">
            <Image src={titlepng} />
            <Image src={sloganpng} />
            <Button onClick={this.beginRegister}>开始报名</Button>
            <Text>第一次登陆需绑定信息哦</Text>
          </View>
        </HasRegisterContext.Provider>
      </StuInfoContext.Provider>
    )
  }
}
