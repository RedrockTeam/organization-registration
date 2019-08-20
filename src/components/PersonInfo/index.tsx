import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import './index.scss'

interface Info {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

interface State {
  info: Info
}

export default class PersonInfo extends Component<{}, State> {
  state: State = {
    info: {
      stu_name: '红小岩',
      stu_num: '2019213821',
      stu_qq: '1223898813',
      stu_phone: '13833528432'
    }
  }

  render() {
    return (
      <View className='person-info'>
        <Text>姓名</Text>
        <Text>{this.state.info.stu_name}</Text>
        <Text>学号</Text>
        <Text>{this.state.info.stu_num}</Text>
        <Text>QQ</Text>
        <Text>{this.state.info.stu_qq}</Text>
        <Text>联系电话</Text>
        <Text>{this.state.info.stu_phone}</Text>
        <Button>编辑资料</Button>
      </View>
    )
  }
}
