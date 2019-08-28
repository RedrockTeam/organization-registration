import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import { StuInfoContext } from '../../data/context'

import './index.scss'

export default class PersonInfo extends PureComponent {
  static contextType = StuInfoContext

  render() {
    const { stu_name, stu_num, stu_qq, stu_phone } = this.context

    return (
      <View className="person-info">
        <Text>姓名</Text>
        <Text>{stu_name}</Text>
        <Text>学号</Text>
        <Text>{stu_num}</Text>
        <Text>QQ</Text>
        <Text>{stu_qq}</Text>
        <Text>联系电话</Text>
        <Text>{stu_phone}</Text>
        <Button>编辑资料</Button>
      </View>
    )
  }
}
