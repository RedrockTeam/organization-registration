import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'
import OrganizationIndex from '../../components/OrganizationIndex'
import HasRegister from '../../components/HasRegister'
import PersonInfo from '../../components/PersonInfo'
import TabBar from '../../components/TabBar'


import './index.scss'

interface State {
  pageType: string
}

export default class Main extends Component<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  constructor(props) {
    super(props)
    this.state = {
      pageType: '报名系统'
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='main'>
        <Navigation text={this.state.pageType}/>
        <PersonInfo />
        <TabBar />
      </View>
    )
  }
}
