import Taro, {Component} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

interface bgStyle {
  background: string
}

interface department {
  name: string,
  bgStyle: bgStyle
}

interface State {
  departmentList: Array<department>
}

export default class HasRegister extends Component<{}, State> {

  state = {
    departmentList: [
      {
        name: '红岩网校-产品策划及运营部',
        bgStyle: {
          background: '#2C547C'
        }
      },
      {
        name: 'web研发部',
        bgStyle: {
          background: '#2C547C'
        }
      }
    ]
  }

  render() {
    const departmentLists = this.state.departmentList.map((item, index) => {
      return (
        <View style={item.bgStyle}>
          <Text>{item.name}</Text>
          <View>录取结果</View>
        </View>
      )
    })
    return (
      <View className='has-register'>
        {departmentLists}
      </View>
    )
  }
}
