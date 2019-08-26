import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'
import OrganizationIndex from '../../components/OrganizationIndex'
import HasRegister from '../../components/HasRegister'
import PersonInfo from '../../components/PersonInfo'
import TabBar from '../../components/TabBar'

import './index.scss'

interface State {
  pageType: string
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

interface StuInfo {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

export default class Main extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    pageType: 'PersonInfo',
    stu_name: '',
    stu_num: '',
    stu_qq: '',
    stu_phone: ''
  }

  changePage = (pageType: string) => {
    console.log(pageType)
    this.setState({
      pageType: pageType
    })
  }

  // componentWillMount() {
  //   console.log(this.$router.params)
  //   const params = this.$router.params

  //   // const {from, to, ...stuInfo} = params
  //   //以下为临时用，从接口拿到数据后格式和这个不一样
  //   const stuInfo: StuInfo = {
  //     stu_name: '',
  //     stu_num: '',
  //     stu_qq: '',
  //     stu_phone: ''
  //   }
  //   stuInfo.stu_name = params.stuName
  //   stuInfo.stu_num = params.stuNum
  //   stuInfo.stu_qq = params.stuQQ
  //   stuInfo.stu_phone = params.stuPhone
  //   const { from, to } = params

  //   this.setState({
  //     pageType: to,
  //     ...stuInfo
  //   })
  // }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const pageType = this.state.pageType

    console.log(pageType)

    let text: string
    let pageMain: JSX.Element

    switch (pageType) {
      case 'OrganizationIndex': {
        text = '报名系统'
        pageMain = <OrganizationIndex />
        break
      }
      case 'HasRegister': {
        text = '已报部门'
        pageMain = <HasRegister />
        break
      }
      default: {
        text = '个人信息'
        pageMain = <PersonInfo />
      }
    }
    return (
      <View className="main">
        <Navigation text={text} enableBack={false} />
        {pageMain}
        <TabBar pageType={pageType} changePage={this.changePage} />
      </View>
    )
  }
}
