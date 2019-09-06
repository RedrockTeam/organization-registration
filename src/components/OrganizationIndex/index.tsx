import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { organizationList } from '../../data/static'

import './index.scss'

export default class OrganizationIndex extends PureComponent {
  state = {
    isIphoneX: false
  }
  toDetail(sign: string) {
    Taro.navigateTo({
      url: `/pages/organization-detail/index?sign=${sign}`
    })
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
    const organizationLists = organizationList.map((item, index) => (
      <View
        onClick={() => this.toDetail(item.sign)}
        key={`organization-${index}`}
      >
        <Text>{item.name}</Text>
        <Text>{item.desc}</Text>
        <View className="arrow"></View>
      </View>
    ))
    return (
      <View
        className="organization-index"
        style={this.state.isIphoneX ? { paddingTop: `${44 + 79}px` } : undefined}
      >
        {organizationLists}
      </View>
    )
  }
}
