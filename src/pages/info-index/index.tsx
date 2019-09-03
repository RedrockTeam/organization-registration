import Taro, { PureComponent, Config } from '@tarojs/taro'
import Information from '../../components/Information'

import './index.scss'

export default class InfoIndex extends PureComponent {
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
      <Information pageType='modify' />
    )
  }
}
