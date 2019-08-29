import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  text: string
  enableBack: boolean
  lastPage?: string
}

export default class Navigation extends PureComponent<Props, {}> {
  backLastPage() {

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
