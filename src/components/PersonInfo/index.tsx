import Taro, { PureComponent, useContext } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import { StuInfoContext } from '../../data/context'

import './index.scss'

export default class PersonInfo extends PureComponent {
  state = {
    isIphoneX: false
  }

  editInfo() {
    Taro.navigateTo({
      url: '/pages/info-index/index?from=PersonInfo'
    })
    Taro.showLoading({
      title: '加载中...'
    })
    setTimeout(() => {
      Taro.hideLoading()
    }, 2000)
  }

  componentWillMount() {
    const { model } = Taro.getSystemInfoSync()
    if (/iPhone\sX/.test(model)) {
      this.setState({
        isIphoneX: true
      })
    }
  }

  render() {
    const { stuInfo } = useContext(StuInfoContext)
    const { stu_name, stu_num, stu_qq, stu_phone } = stuInfo

    return (
      <View
        className="person-info"
        style={
          this.state.isIphoneX ? { paddingTop: `${44 + 79}px` } : undefined
        }
      >
        <Text>姓名</Text>
        <Text>{stu_name}</Text>
        <Text>学号</Text>
        <Text>{stu_num}</Text>
        <Text>QQ</Text>
        <Text>{stu_qq}</Text>
        <Text>联系电话</Text>
        <Text>{stu_phone}</Text>
        <Button onClick={this.editInfo}>编辑资料</Button>
      </View>
    )
  }
}
