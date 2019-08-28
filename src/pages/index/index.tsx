import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import './index.scss'
import titlepng from '../../assets/title2x.png'
import sloganpng from '../../assets/slogan2x.png'
import api from '../../api'
import formatQuery from '../../utils/formatQuery'

import { StuInfoContext } from '../../data/context'

interface StuInfo {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

interface State {
  enableClick: boolean
  clickType: string
  stuInfo: StuInfo
}

export default class Index extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    enableClick: true,
    clickType: 'toIndex',
    stuInfo: {
      stu_name: '红小岩',
      stu_num: '2019213256',
      stu_qq: '66666666',
      stu_phone: '15527654589'
    }
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
      const stuInfo = this.state.stuInfo
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
        this.setState({
          enableClick: true,
          clickType: 'toIndex',
          stuInfo: info.data
        })
      } else {
        console.log(info)
      }
    }
  }

  componentWillMount() {
    // this.login()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <StuInfoContext.Provider value={this.state.stuInfo}>
        <View className="index">
          <Image src={titlepng} />
          <Image src={sloganpng} />
          <Button onClick={this.beginRegister}>开始报名</Button>
          <Text>第一次登陆需绑定信息哦</Text>
        </View>
      </StuInfoContext.Provider>
    )
  }
}
