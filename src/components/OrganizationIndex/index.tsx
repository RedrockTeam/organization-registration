import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { organizationList } from '../../data/static'

import './index.scss'

export default class OrganizationIndex extends PureComponent {
  state = {
    isLongScreen: false
  }
  toDetail(sign: string) {
    Taro.navigateTo({
      url: `/pages/organization-detail/index?sign=${sign}`
    })
  }

  componentWillMount() {
    const { screenWidth, screenHeight } = Taro.getSystemInfoSync()
    if (screenHeight / screenWidth > 1.8) {
      this.setState({
        isLongScreen: true
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
        style={this.state.isLongScreen ? { maxHeight: '655px' } : undefined}
      >
        {organizationLists}
      </View>
    )
  }
}
