import Taro, { PureComponent, Config, useContext } from '@tarojs/taro'
import Information from '../../components/Information'

import './index.scss'

import { StuInfoContext } from '../../data/context'

export default class InfoIndex extends PureComponent {
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
    const { stuInfo, changeStuInfo } = useContext(StuInfoContext)
    return (
      <Information
        pageType="modify"
        stuInfo={stuInfo}
        changeStuInfo={changeStuInfo}
      />
    )
  }
}
