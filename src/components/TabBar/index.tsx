import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

import depindex0svg from '../../assets/dep-index0.svg'
import depindex1svg from '../../assets/dep-index1.svg'
import hasregister0svg from '../../assets/has-register0.svg'
import hasregister1svg from '../../assets/has-register1.svg'
import personinfo0svg from '../../assets/person-info0.svg'
import personinfo1svg from '../../assets/person-info1.svg'

export default class TabBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View className='tab-bar'>
        <View>
          <Image src={depindex1svg} />
          <Text>报名系统</Text>
        </View>
        <View>
          <Image src={hasregister0svg} />
          <Text>已报部门</Text>
        </View>
        <View>
          <Image src={personinfo0svg} />
          <Text>个人信息</Text>
        </View>
      </View>
    )
  }
}

