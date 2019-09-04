import Taro, { PureComponent, Config, useContext } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'

import { organizationListDetail } from '../../data/static'
import { HasRegisterContext } from '../../data/context'

import formatQuery from '../../utils/formatQuery'

import './index.scss'

interface PosterStyle {
  background: string
}

interface Department {
  name: string
  posterStyle: PosterStyle
  introduction: string
}

interface Organization {
  name: string
  departmentList: Array<Department>
}

interface Mouse {
  clientX: number
}

interface Style {
  transform: string
}
interface TextStyle {
  transform: string
}
interface State {
  sign: string
  startMouse: Mouse
  style: Style
  textStyle: TextStyle
  offset: number
  organization: Organization
  departmentIndex: number
  enableMove: boolean
}

export default class Main extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom',
    disableScroll: true
  }

  state = {
    sign: 'hongyan',
    startMouse: {
      clientX: 0
    },
    style: {
      transform: 'translate(0, 0)'
    },
    textStyle: {
      transform: 'rotateY(0)'
    },
    offset: 375,
    organization: {
      name: '红岩网校',
      departmentList: [
        {
          name: '产品策划及运营部',
          posterStyle: {
            background: '#2C547C'
          },
          introduction:
            '挖据用户需求，提出产品功解升级力案推厂网站文化，开展线上线下活动的推广。利庄前媒体中台宣传网校的产品和活动，负资产品荣划，原型设计进行网上的合作共证。挖据用户需求，提出产品功解升级力案推厂网站文化，开展线上线下活动的推广。'
        },
        {
          name: '视觉设计部',
          posterStyle: {
            background: 'red'
          },
          introduction:
            '设计产品图形用户界面，跟踪产品视觉及体验效果。对网站进行整体创意和美术设计，移动端和PC端用户的界面设计；网页宣传海报设计；网站产品的动画及动效设计。'
        },
        {
          name: 'Web研发部',
          posterStyle: {
            background: 'black'
          },
          introduction:
            '主要工作为将视觉页面还原为代码、设计数据库、添加逻辑完成交互。职责包括开发重邮小帮手微信号、手机端/PC 端网站开发、助力掌上重邮APP，提供强大的后台驱动等。'
        },
        {
          name: '移动开发部',
          posterStyle: {
            background: 'yellow'
          },
          introduction:
            '主要负责移动客户端产品的开发，以 Java、Objective-C、 Swift、C# 为主要开发语言，涵盖 Android、iOS、Windows 三个平台，进行网校产品开发。'
        },
        {
          name: '运维安全部',
          posterStyle: {
            background: 'blue'
          },
          introduction:
            '主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化，还负责了开源镜像站、OpenStack云计算资源池、源池Meatlouleste股务基等。'
        }
      ]
    },
    departmentIndex: 0,
    enableMove: true
  }

  touchStart(e) {
    const { clientX } = e.touches[0]
    const startMouse: Mouse = {
      clientX
    }
    this.setState({
      startMouse
    })
  }

  touchEnd(e) {
    if (!this.state.enableMove) {
      return
    }
    const { clientX } = e.changedTouches[0]
    const clientXStart = this.state.startMouse.clientX
    if (clientX - clientXStart > 50) {
      //右滑，显示上一个部门
      let departmentIndex = this.state.departmentIndex
      if (departmentIndex <= 0) {
        return
      }

      const offset = this.state.offset
      departmentIndex--
      const transform = -departmentIndex * offset
      const style: Style = {
        transform: `translate(${Taro.pxTransform(transform)})`
      }

      this.setState({
        departmentIndex,
        style,
        enableMove: false
      })
      setTimeout(() => {
        this.setState({
          enableMove: true
        })
      }, 500)
    } else if (clientX - clientXStart < -50) {
      //左滑，显示下一个部门
      let departmentIndex = this.state.departmentIndex
      const length = this.state.organization.departmentList.length
      if (departmentIndex >= length - 1) {
        return
      }

      const offset = this.state.offset
      departmentIndex++

      const transform = -departmentIndex * offset
      const style: Style = {
        transform: `translate(${Taro.pxTransform(transform)})`
      }
      this.setState({
        departmentIndex,
        style,
        enableMove: false
      })
      setTimeout(() => {
        this.setState({
          enableMove: true
        })
      }, 500)
    }
  }

  moveTo(index: number) {
    if (!this.state.enableMove) {
      return
    }
    const departmentIndex = index
    const offset = this.state.offset
    const transform = -departmentIndex * offset
    const style: Style = {
      transform: `translate(${Taro.pxTransform(transform)})`
    }
    this.setState({
      enableMove: false,
      departmentIndex: index,
      style
    })
    setTimeout(() => {
      this.setState({
        enableMove: true
      })
    }, 500)
  }

  toRegister(organization: string, department: string) {
    const registerInfo = {
      organization,
      department
    }
    Taro.navigateTo({
      url: `/pages/register/index${formatQuery(registerInfo)}`
    })
    Taro.showLoading({
      title: '加载中...'
    })
    setTimeout(() => {
      Taro.hideLoading()
    }, 2000)
  }
  componentWillMount() {
    const { sign } = this.$router.params

    if (sign) {
      const organization = organizationListDetail[sign]
      this.setState({
        sign,
        organization
      })
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const organization = this.state.organization
    const name = organization.name
    const departmentList = organization.departmentList

    const departmentIndex = this.state.departmentIndex
    const hasRegister = useContext(HasRegisterContext).hasRegister
    let isRegistered: boolean = false
    for (let value of hasRegister) {
      if (
        value.organization === name &&
        value.department === departmentList[departmentIndex].name
      ) {
        isRegistered = true
      }
    }

    const posters = departmentList.map(value => value.posterStyle)
    const titles = departmentList.map((value, index) => {
      if (index === departmentIndex) {
        return {
          name: value.name,
          style: {
            fontSize: Taro.pxTransform(20),
            color: 'rgba(51, 51, 51, 1)',
            fontWeight: 600
          }
        }
      } else if (index < departmentIndex) {
        return {
          name: value.name,
          style: {
            width: 0,
            paddingRight: 0,
            fontSize: 0
          }
        }
      } else {
        return {
          name: value.name,
          style: {}
        }
      }
    })
    const introductions = departmentList.map(value => value.introduction)

    return (
      <View className="organization-detail">
        <Navigation text={name} enableBack={true} />
        <View onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
          {/* <View className="arrow arrow-left" /> */}
          <View style={this.state.style}>
            {posters.map((value, index) => (
              <View style={value} key={`poster-${index}`} />
            ))}
          </View>
          {/* <View className="arrow arrow-right" /> */}
        </View>
        <View onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
          <View />
          <View />

          <View className="deparment-title-box">
            {titles.map((value, index) => (
              <Text
                style={value.style}
                key={`title-${index}`}
                onClick={() => this.moveTo(index)}
              >
                {value.name}
              </Text>
            ))}
          </View>
          <View>
            <View style={this.state.style}>
              {introductions.map((value, index) => (
                <View key={`introduction-${index}`}>{value}</View>
              ))}
            </View>
          </View>
          <Button
            onClick={
              isRegistered
                ? () => false
                : () => this.toRegister(name, titles[departmentIndex].name)
            }
            style={
              isRegistered
                ? { background: 'rgba(218,225,223,1)', color: '#fff' }
                : { background: 'background: rgba(154, 230, 199, 1)' }
            }
          >
            {isRegistered ? '已报名' : '立即报名'}
          </Button>
        </View>
      </View>
    )
  }
}
