import Taro, { Component } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss'

interface Props {
  text: string
}

export default class Navigation extends Component<Props, {}> {
  render() {
    return (
      <View className='navigation'>
        <Text className='navigation-text'>{this.props.text}</Text>
      </View>
    )
  }
}
