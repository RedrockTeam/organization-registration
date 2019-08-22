import Taro, { PureComponent } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'

interface Props {
  text: string,
  enableBack: boolean
}

export default class Navigation extends PureComponent<Props, {}> {
  render() {
    return (
      <View className='navigation'>
        <Text className='navigation-text'>{this.props.text}</Text>
      </View>
    )
  }
}
