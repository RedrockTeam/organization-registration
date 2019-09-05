import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'

import './index.scss'

interface State {
  message: string
  organization: string
  isIphoneX: boolean
}

export default class Result extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom',
    disableScroll: true
  }

  state = {
    message:
      '您好，您已成功报名红岩网校视觉设计部。请于9月12日-18日8:00-20:00至太极操场西三门三楼（红岩网校工作站b区）参与面试。预祝您面试顺利，视觉设计部期待您的加入。',
    organization: '红岩网校工作站',
    isIphoneX: false
  }

  componentWillMount() {
    const { model } = Taro.getSystemInfoSync()
    if (/iPhone\sX/.test(model)) {
      this.setState({
        isIphoneX: true
      })
    }
    const { message, organization } = this.$router.params
    this.setState({
      message,
      organization
    })
  }

  back() {
    Taro.navigateBack()
  }

  render() {
    return (
      <View
        className="result"
        style={this.state.isIphoneX ? { paddingTop: '44px' } : undefined}
      >
        <Navigation text="录取结果" enableBack={true} />
        <View>
          <Text>{this.state.message}</Text>
          <Text>{this.state.organization}</Text>
          <Button onClick={this.back}>返回</Button>
        </View>
      </View>
    )
  }
}
