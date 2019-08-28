import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { organizationList } from '../../data/static'

import './index.scss'

export default class OrganizationIndex extends PureComponent {

  toDetail(sign: string) {
    Taro.navigateTo({
      url: `/pages/organization-detail/index?sign=${sign}`
    })
  }

  render() {
    const organizationLists = organizationList.map(item => (
      <View onClick={() => this.toDetail(item.sign)}>
        <Text>{item.name}</Text>
        <Text>{item.desc}</Text>
        <View className="arrow"></View>
      </View>
    ))
    return <View className="organization-index">{organizationLists}</View>
  }
}
