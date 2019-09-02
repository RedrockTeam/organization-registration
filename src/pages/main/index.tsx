import Taro, { PureComponent, Config, useContext } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Navigation from '../../components/Navigation'
import OrganizationIndex from '../../components/OrganizationIndex'
import HasRegister from '../../components/HasRegister'
import PersonInfo from '../../components/PersonInfo'
import TabBar from '../../components/TabBar'

import { HasRegisterContext } from '../../data/context'

import './index.scss'

export default class Main extends PureComponent {
  static contextType = HasRegisterContext

  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    pageType: 'PersonInfo'
  }

  changePage = (pageType: string) => {
    this.setState({
      pageType: pageType
    })
  }

  componentWillMount() {
    console.log(this.$router.params)
    const params = this.$router.params
    const { from, to } = params
    this.setState({
      pageType: to,
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const pageType = this.state.pageType
    const { hasRegister, changeStatus } = useContext(HasRegisterContext)
    let haveNewMessage: boolean = false
    for(let value of hasRegister) {
      if(value.status == 1) {
        haveNewMessage = true
        break
      }
    }

    switch (pageType) {
      case 'OrganizationIndex': {
        return (
          <View className="main">
            <Navigation text="报名系统" enableBack={false} />
            <OrganizationIndex />
            <TabBar pageType={pageType} changePage={this.changePage} />
          </View>
        )
      }
      case 'HasRegister': {
        return (
          <View className="main">
            <Navigation text="已报部门" enableBack={false} />
            <HasRegister
              hasRegisterLists={hasRegister}
              changeStatus={changeStatus}
            />
            <TabBar
              pageType={pageType}
              changePage={this.changePage}
              haveNewMessage={haveNewMessage}
            />
          </View>
        )
      }
      case 'PersonInfo': {
        return (
          <View className="main">
            <Navigation text="个人信息" enableBack={false} />
            <PersonInfo />
            <TabBar pageType={pageType} changePage={this.changePage} />
          </View>
        )
      }
    }
  }
}
