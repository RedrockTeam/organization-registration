import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'
import Mask from '../../components/Mask'

import { StuInfoContext } from '../../data/context'
import api from '../../api'

import './index.scss'

interface State {
  maskIsShow: boolean
}

export default class Register extends PureComponent<{}, State> {
  static contextType = StuInfoContext

  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    maskIsShow: false
  }

  maskShow(): void {
    this.setState({ maskIsShow: true })
  }

  maskHide():void {
    this.setState({ maskIsShow: false })
  }

  async register(oName: string, dName: string) {
    const data = {
      oName,
      dName
    }
    Taro.showLoading({
      title: '加载中...'
    })
    const response = await api.userSubmit(data)
    Taro.hideLoading()
    if(response.status === 500) {
      alert('报名失败，请核查自己的个人信息')
    } else if(response.status === 200) {
      this.maskShow()
      setTimeout(() => {
        this.setState({ maskIsShow: true })
        Taro.redirectTo({
          url: '/pages/main/index?from=register&to=OrganizationIndex'
        })
        Taro.showLoading({
          title: '加载中...'
        })
        setTimeout(() => {
          Taro.hideLoading()
        })
      }, 2000)
    }
  }

  render() {
    const stuInfo = this.context
    const { organization, department } = this.$router.params

    return (
      <View className="register">
        {this.state.maskIsShow ? <Mask type="registersuccess" /> : null}
        <Navigation text="信息核对" enableBack={true} />
        <View>
          <Text>姓名</Text>
          <Text>{stuInfo.stu_name}</Text>
          <Text>学号</Text>
          <Text>{stuInfo.stu_num}</Text>
          <Text>QQ</Text>
          <Text>{stuInfo.stu_qq}</Text>
          <Text>联系电话</Text>
          <Text>{stuInfo.stu_phone}</Text>
          <Text>报名部门</Text>
          <Text>
            {organization}-{department}
          </Text>
          <Button onClick={() => this.register(organization, department)}>
            确认提交
          </Button>
        </View>
      </View>
    )
  }
}
