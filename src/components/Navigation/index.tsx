import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  text: string
  enableBack: boolean
}

export default class Navigation extends PureComponent<Props, {}> {
  backLastPage() {
    Taro.navigateBack({
      delta: 1
    })
  }

  render() {
    return (
      <View className="navigation">
        {this.props.enableBack ? (
          <View className="arrow" onClick={this.backLastPage} />
        ) : null}
        <Text className="navigation-text">{this.props.text}</Text>
      </View>
    )
  }
}
