import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'

import Navigation from '../Navigation'
import Mask from '../Mask'

import './index.scss'

interface Props {
  text: string
}

interface State {
  maskIsShow: boolean
  infoPageType: string
}

export default class Information extends PureComponent<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      maskIsShow: false,
      infoPageType: ''
    }
  }

  maskShow(): void {
    this.setState({ maskIsShow: true })
  }

  maskHide(): void {
    this.setState({ maskIsShow: false })
  }

  render() {
    return (
      <View className="person-info">
        {this.state.maskIsShow ? <Mask type="INFOLACK" /> : null}
        <Navigation text="个人信息" />
        <Text>姓名</Text>
        <Input placeholder="点击输入您的真实姓名" placeholderClass="input-p" />
        <Text>学号</Text>
        <Input
          type="number"
          placeholder="点击输入学号"
          placeholderClass="input-p"
        />
        <Text>QQ</Text>
        <Input
          type="number"
          placeholder="点击输入QQ号码"
          placeholderClass="input-p"
        />
        <Text>联系电话</Text>
        <Input
          type="number"
          placeholder="点击输入联系电话"
          placeholderClass="input-p"
        />
        <Text>联系电话务必为常用电话，个人信息直接影响\n报名信息录入！</Text>
        <Button onClick={this.maskShow}>{this.props.text}</Button>
      </View>
    )
  }
}
