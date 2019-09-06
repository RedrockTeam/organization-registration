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
  hasRegisterLists: Array<HasRegisterList>
  changeStatus: ChangeStatus
}

export default class HasRegister extends PureComponent<Props, {}> {
  static defaultProps = {
    hasRegisterLists: [],
    changeStatus: (oName: string, dName: string) => {}
  }

  state = {
    isIphoneX: false
  }

  async changeReadState(
    oName: string,
    dName: string,
    info: Array<HasRegisterInfo>,
    status: number
  ) {
    Taro.showLoading({
      title: '加载中...'
    })
    if (status === 1) {
      const data = { oName, dName }
      this.props.changeStatus(oName, dName)
      const response = await api.readNewInfo(data)
      console.log(response)
    }
    const message = info[info.length - 1].info
    Taro.navigateTo({
      url: `/pages/result/index?message=${message}&organization=${oName}&from=HasRegister`
    })
    setTimeout(() => {
      Taro.hideLoading()
    }, 2000)
  }

  componentWillMount() {
    const { model } = Taro.getSystemInfoSync()
    if (/iPhone\sX/.test(model)) {
      this.setState({
        isIphoneX: true
      })
    }
  }

  render() {
    return (
      <View
        className="has-register"
        style={
          this.state.isIphoneX ? { paddingTop: `${44 + 79}px` } : undefined
        }
      >
        {this.props.hasRegisterLists.length > 0 ? (
          this.props.hasRegisterLists.map((item, index) => {
            const organization = item.organization
            const department = item.department
            const bgStyle = posterBg[organization][department]

            return (
              <View style={bgStyle} key={`hasRegister-${index}`}>
                <Text>
                  {organization}-{department}
                </Text>
                <View
                  style={
                    item.info.length >= 1
                      ? { background: 'rgb(255, 255, 255)' }
                      : { background: 'rgb(219, 219, 219)' }
                  }
                  onClick={
                    item.info.length >= 1
                      ? () =>
                          this.changeReadState(
                            organization,
                            department,
                            item.info,
                            item.status
                          )
                      : () => false
                  }
                >
                  {item.status == 1 ? <View className="point"></View> : null}
                  <Text>录取结果</Text>
                </View>
                <View className="department-mask"></View>
              </View>
            )
          })
        ) : (
          <Text>您还没有报名任何部门哦</Text>
        )}
      </View>
    )
  }
}
