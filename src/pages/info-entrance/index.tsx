import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'
import Information from '../../components/Information'
import './index.scss'

export default class InfoEntrance extends PureComponent {
  config: Config = {
    navigationStyle: 'custom'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Information text='开始报名吧' />
    )
  }
}
