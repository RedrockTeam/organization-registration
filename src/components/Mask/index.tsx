import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import './index.scss'

import infoLackIconPng from '../../assets/info-lack.png'
import infoRight from '../../assets/info-right.png'

interface Props {
  type: string
}

export default class Mask extends PureComponent<Props, {}> {
  render() {
    return (
      <View className='mask'>
        <View>
          <Image src={infoLackIconPng}/>
          <Text>您的信息还没有填写完整哦</Text>
        </View>
      </View>
    )
  }
}

