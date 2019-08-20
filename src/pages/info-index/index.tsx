import Taro, { Component, Config } from '@tarojs/taro'
import Information from '../../components/Information'

import './index.scss'

export default class InfoIndex extends Component {
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
      <Information text='保存' />
    )
  }
}
