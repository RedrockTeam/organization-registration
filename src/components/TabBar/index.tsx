import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

import depindex0svg from '../../assets/dep-index0.svg'
import depindex1svg from '../../assets/dep-index1.svg'
import hasregister0svg from '../../assets/has-register0.svg'
import hasregister1svg from '../../assets/has-register1.svg'
import personinfo0svg from '../../assets/person-info0.svg'
import personinfo1svg from '../../assets/person-info1.svg'

interface ChangePage {
  (pageType: string): void
}
interface Props {
  pageType: string
  changePage: ChangePage
  haveNewMessage?: boolean
}

interface fontColor {
  color: string
}

interface TabState {
  img: string
  style: fontColor
  text: string
  pageType: string
}
interface TabStates {
  OrganizationIndex: Array<TabState>
  HasRegister: Array<TabState>
  PersonInfo: Array<TabState>
}
interface State {
  TabStates: TabStates
}

export default class TabBar extends PureComponent<Props, State> {
  static defaultProps = {
    pageType: 'OrganizationIndex'
  }

  state = {
    TabStates: {
      OrganizationIndex: [
        {
          img: depindex1svg,
          style: {
            color: 'color: rgba(180, 191, 188, 1)'
          },
          text: '报名系统',
          pageType: 'OrganizationIndex'
        },
        {
          img: hasregister0svg,
          style: {
            color: ''
          },
          text: '已报部门',
          pageType: 'HasRegister'
        },
        {
          img: personinfo0svg,
          style: {
            color: ''
          },
          text: '个人信息',
          pageType: 'PersonInfo'
        }
      ],
      HasRegister: [
        {
          img: depindex0svg,
          style: {
            color: ''
          },
          text: '报名系统',
          pageType: 'OrganizationIndex'
        },
        {
          img: hasregister1svg,
          style: {
            color: 'color: rgba(180, 191, 188, 1)'
          },
          text: '已报部门',
          pageType: 'HasRegister'
        },
        {
          img: personinfo0svg,
          style: {
            color: ''
          },
          text: '个人信息',
          pageType: 'PersonInfo'
        }
      ],
      PersonInfo: [
        {
          img: depindex0svg,
          style: {
            color: ''
          },
          text: '报名系统',
          pageType: 'OrganizationIndex'
        },
        {
          img: hasregister0svg,
          style: {
            color: ''
          },
          text: '已报部门',
          pageType: 'HasRegister'
        },
        {
          img: personinfo1svg,
          style: {
            color: 'color: rgba(180, 191, 188, 1)'
          },
          text: '个人信息',
          pageType: 'PersonInfo'
        }
      ]
    }
  }

  componentWillMount() {

  }

  render() {
    const tabState: Array<TabState> = this.state.TabStates[this.props.pageType]

    return (
      <View className="tab-bar">
        {tabState.map((item, index) => {
          return (
            <View
              onClick={() => this.props.changePage(item.pageType)}
              key={`tabBar-${index}`}
            >
              <Image src={item.img} />
              <Text style={item.style}>{item.text}</Text>
              {this.props.haveNewMessage && index === 1 ? (
                <View className="point"></View>
              ) : null}
            </View>
          )
        })}
      </View>
    )
  }
}
