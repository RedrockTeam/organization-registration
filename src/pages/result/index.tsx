import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'

import './index.scss'

interface Info {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
  department: string
}

interface State {
  message: string
}

export default class Result extends Component<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    message: '您好，您已成功报名红岩网校视觉设计部。请于9月12日-18日8:00-20:00至太极操场西三门三楼（红岩网校工作站b区）参与面试。预祝您面试顺利，视觉设计部期待您的加入。',
  }

  render() {
    return (
      <View className="result">
        <Navigation text="录取结果" />
        <View>
          <Text>{this.state.message}</Text>
          <Button>返回</Button>
        </View>
      </View>
    )
  }
}
