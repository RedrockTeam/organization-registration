import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

import { posterBg } from '../../data/static'
import api from '../../api'

interface HasRegisterInfo {
  id: number
  organization: string
  department: string
  info: string
  time: string
}

interface HasRegisterList {
  organization: string
  department: string
  status: number
  info: Array<HasRegisterInfo>
}

interface ChangeStatus {
  (oName: string, dName: string): void
}

interface Props {
  hasRegisterLists: Array<HasRegisterList>,
  changeStatus: ChangeStatus
}

export default class HasRegister extends PureComponent<Props, {}> {
  static defaultProps = {
    hasRegisterLists: [
      {
        organization: '红岩网校工作站',
        department: 'Web研发部',
        status: 0,
        info: [
          {
            id: 1,
            organization: '红岩网校工作站',
            department: 'Web研发部',
            info:
              '亲爱的yjp同学,你好，你先前的申请的社团组织需要进行一面面试，现将详细面试信息发给你',
            time: '1545096558331'
          },
          {
            id: 2,
            organization: '红岩网校工作站',
            department: 'Web研发部',
            info:
              '亲爱的yyy同学,你好，你先前的申请的社团组织需要进行一面面试，现将详细面试信息发给你',
            time: '1566211679355'
          }
        ]
      },
      {
        organization: '红岩网校工作站',
        department: '移动开发部',
        status: 0,
        info: []
      },
      {
        organization: '红岩网校工作站',
        department: '运维安全部',
        status: 0,
        info: []
      }
    ],
    changeStatus: (oName: string, dName: string) => {}
  }

  async changeReadState(
    oName: string,
    dName: string,
    info: Array<HasRegisterInfo>
  ) {
    Taro.showLoading({
      title: '加载中...'
    })
    const data = { oName, dName }
    this.props.changeStatus(oName, dName)
    const response = await api.readNewInfo(data)
    if(response.status === 200) {
      const message = info[info.length - 1]
      Taro.navigateTo({
        url: `/pages/result/index?message=${message}&from=HasRegister`
      })
      setTimeout(() => {
        Taro.hideLoading()
      }, 2000)
      return
    }
  }

  render() {
    return (
      <View className="has-register">
        {this.props.hasRegisterLists.map((item, index) => {
          const organization = item.organization
          const department = item.department
          const bgStyle = posterBg[organization][department]

          return (
            <View style={bgStyle} key={index} >
              <Text>
                {organization}-{department}
              </Text>
              <View
                style={
                  item.info.length >= 1
                    ? { background: 'rgb(255, 255, 255)' }
                    : { background: 'rgb(219, 219, 219)' }
                }
                onClick={() =>
                  this.changeReadState(organization, department, item.info)
                }
              >
                {item.status == 1 ? <View className="point"></View> : null}
                <Text>录取结果</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}
