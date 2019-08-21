import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import './index.scss'
import titlepng from '../../assets/title2x.png'
import sloganpng from '../../assets/slogan2x.png'

export default class Index extends PureComponent {

  config: Config = {
    navigationStyle: 'custom',
  }

  toEntranceInfo() {
    Taro.redirectTo({
      url: '/pages/info-entrance/index'
    })
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Image src={titlepng} />
        <Image src={sloganpng} />
        <Button onClick={this.toEntranceInfo}>开始报名</Button>
        <Text>第一次登陆需绑定信息哦</Text>
      </View>
    )
  }
}
