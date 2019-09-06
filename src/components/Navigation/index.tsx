import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  text: string
  enableBack: boolean
}

export default class Navigation extends PureComponent<Props, {}> {
  state = {
    isIphoneX: false
  }
  componentWillMount() {
    const { model } = Taro.getSystemInfoSync()
    if (/iPhone\sX/.test(model)) {
      this.setState({
        isIphoneX: true
      })
    }
  }

  backLastPage() {
    Taro.navigateBack({
      delta: 1
    })
  }

  render() {
    return (
      <View
        className="navigation"
        style={this.state.isIphoneX ? { borderTop: '44px solid #e5e5e5' } : undefined}
      >
        {this.props.enableBack ? (
          <View className="arrow-box" onClick={this.backLastPage}>
            <View className="arrow" />
          </View>
        ) : null}
        <Text className="navigation-text">{this.props.text}</Text>
      </View>
    )
  }
}
