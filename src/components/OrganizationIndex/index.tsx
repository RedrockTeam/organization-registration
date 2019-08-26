import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

interface Organization {
  name: string,
  desc: string
}

interface State {
  organizationList: Array<Organization>
}


export default class OrganizationIndex extends PureComponent<{}, State> {
  state = {
    organizationList: [
      {
        name: '红岩网校',
        desc: '红岩网校是学校唯一的互联网学生组织'
      },
      {
        name: '红岩网校',
        desc: '红岩网校是学校唯一的互联网学生组织'
      },
      {
        name: '红岩网校',
        desc: '红岩网校是学校唯一的互联网学生组织'
      },
      {
        name: '红岩网校',
        desc: '红岩网校是学校唯一的互联网学生组织'
      },
      {
        name: '红岩网校',
        desc: '红岩网校是学校唯一的互联网学生组织'
      },
    ]
  }

  render() {
    const organizationLists = this.state.organizationList.map((item) => {
      return (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.desc}</Text>
          <View className='arrow'></View>
        </View>
      )
    })
    return (
      <View className="organization-index">
        {organizationLists}
      </View>
    )
  }
}
