import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import './index.scss'

import infoLackIconPng from '../../assets/info-lack.png'
import infoRight from '../../assets/info-right.png'

interface Props {
  type: string
}

interface Page {
  img: string,
  text: string
}
interface PageContent {
  fail: Page,
  editsuccess: Page,
  registersuccess: Page
}
interface State {
  pageContent: PageContent
}

export default class Mask extends PureComponent<Props, State> {
  state = {
    pageContent: {
      fail: {
        img: infoLackIconPng,
        text: '请认真检查您填写的信息哦'
      },
      editsuccess: {
        img: infoRight,
        text: '修改成功'
      },
      registersuccess: {
        img: infoRight,
        text: '报名成功，请耐心等待结果'
      }
    }
  }

  render() {
    const page = this.state.pageContent[this.props.type]
    return (
      <View className='mask'>
        <View>
          <Image src={page.img}/>
          <Text>{page.text}</Text>
        </View>
      </View>
    )
  }
}

