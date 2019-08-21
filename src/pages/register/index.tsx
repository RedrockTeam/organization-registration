import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'
import Mask from '../../components/Mask'

import './index.scss'

interface Info {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
  department: string
}

interface State {
  info: Info,
  maskIsShow: boolean
}

export default class Register extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    info: {
      stu_name: '红小岩',
      stu_num: '2019213821',
      stu_qq: '1223898813',
      stu_phone: '13833528432',
      department: 'Web研发部'
    },
    maskIsShow: false
  }

  maskShow(): void {
    this.setState({ maskIsShow: true })
  }

  render() {
    return (
      <View className="register">
        {this.state.maskIsShow ? <Mask type="INFOLACK" /> : null}
        <Navigation text="信息核对" />
        <View>
          <Text>姓名</Text>
          <Text>{this.state.info.stu_name}</Text>
          <Text>学号</Text>
          <Text>{this.state.info.stu_num}</Text>
          <Text>QQ</Text>
          <Text>{this.state.info.stu_qq}</Text>
          <Text>联系电话</Text>
          <Text>{this.state.info.stu_phone}</Text>
          <Text>报名部门</Text>
          <Text>{this.state.info.department}</Text>
          <Button onClick={this.maskShow}>确认提交</Button>
        </View>
      </View>
    )
  }
}
