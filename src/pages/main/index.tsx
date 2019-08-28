import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Navigation from '../../components/Navigation'
import OrganizationIndex from '../../components/OrganizationIndex'
import HasRegister from '../../components/HasRegister'
import PersonInfo from '../../components/PersonInfo'
import TabBar from '../../components/TabBar'

import { StuInfoContext } from '../../data/context'

import './index.scss'

export default class Main extends PureComponent {
  static contextType = StuInfoContext

  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    pageType: 'PersonInfo',
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
