import Taro, { PureComponent, Config } from '@tarojs/taro'
import Information from '../../components/Information'
import './index.scss'

export default class InfoEntrance extends PureComponent {
  config: Config = {
    navigationStyle: 'custom',
    disableScroll: true
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Information pageType='entrance' />
    )
  }
}
