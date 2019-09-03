import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'

import './index.scss'


interface State {
  message: string
}

export default class Result extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    message: '您好，您已成功报名红岩网校视觉设计部。请于9月12日-18日8:00-20:00至太极操场西三门三楼（红岩网校工作站b区）参与面试。预祝您面试顺利，视觉设计部期待您的加入。',
  }

  componentWillMount() {
    const message = this.$router.params.message
    this.setState({
      message
    })
  }

  back() {
    Taro.navigateBack()
  }

  render() {
    return (
      <View className="result">
        <Navigation text="录取结果" enableBack={true} />
        <View>
          <Text>{this.state.message}</Text>
          <Button onClick={this.back}>返回</Button>
        </View>
      </View>
    )
  }
}
