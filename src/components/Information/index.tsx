import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'

import Navigation from '../Navigation'
import Mask from '../Mask'

import './index.scss'
import api from '../../api'
import formatQuery from '../../utils/formatQuery'
import { StuInfoContext } from '../../data/context'

interface StuInfo {
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

interface sendInfo {
  stuName: string
  stuNum: string
  stuQQ: string
  stuPhone: string
}

//pageType为entrance代表是初始信息登记页，为modify代表是个人信息修改页
interface Props {
  pageType: string
  info?: StuInfo
}

interface State {
  maskIsShow: boolean
  //maskType 三种取值 fail/editsuccess/registersuccess
  maskType: string
  stu_name: string
  stu_num: string
  stu_qq: string
  stu_phone: string
}

export default class Information extends PureComponent<Props, State> {
  static contextType = StuInfoContext

  state = {
    maskIsShow: false,
    maskType: 'fail',
    stu_name: '',
    stu_num: '',
    stu_qq: '',
    stu_phone: ''
  }

  changeName(e): void {
    const name = e.detail.value
    this.setState({
      stu_name: name
    })
  }

  changeNum(e): void {
    const num = e.detail.value
    this.setState({
      stu_num: num
    })
  }

  changeQQ(e): void {
    const qq = e.detail.value
    this.setState({
      stu_qq: qq
    })
  }

  changePhone(e): void {
    const phone = e.detail.value
    this.setState({
      stu_phone: phone
    })
  }

  async submitInfo() {
    const { stu_name, stu_num, stu_qq, stu_phone } = this.state

    const info: sendInfo = {
      stuName: stu_name,
      stuNum: stu_num,
      stuQQ: stu_qq,
      stuPhone: stu_phone
    }
    if (!this.judgeInput(info)) {
      this.setState({
        maskIsShow: true,
        maskType: 'fail'
      })
      setTimeout(() => {
        this.setState({
          maskIsShow: false
        })
      }, 2000)
      return
    }

    if (this.props.pageType === 'entrance') {
      this.firstRegister(info)
      return
    } else if (this.props.pageType === 'modify') {
      this.modifyInfo(info)
    }
  }

  async firstRegister(info: sendInfo) {
    Taro.showLoading({
      title: '加载中...'
    })
    const response = await api.userinfo(info)
    if(response.status === 200) {
      this.context.changeStuInfo(response.data)
      Taro.redirectTo({
        url: `/pages/main/index?from=InfoEntrance&to=PersonInfo`
      })
      setTimeout(() => {
        Taro.hideLoading()
      }, 2000)
      return
    }
    Taro.hideLoading()
  }

  async modifyInfo(info: sendInfo) {
    Taro.showLoading({
      title: '加载中...'
    })
    const response = await api.userModifyInfo(info)
    if (response.status === 200) {
      Taro.hideLoading()
      this.setState({
        maskIsShow: true,
        maskType: 'editsuccess'
      })
      setTimeout(() => {
        delete response.data.id
        const data = response.data
        this.context.changeStuInfo(data)
        Taro.redirectTo({
          url: `/pages/main/index?from=PersonInfo&to=PersonInfo`
        })
        Taro.showLoading({
          title: '加载中...'
        })
        setTimeout(() => {
          Taro.hideLoading()
        }, 2000)
      }, 2000)
      return
    }
    Taro.hideLoading()
  }

  judgeInput(info: sendInfo): boolean {
    const chracterTest = new RegExp(/[\u4e00-\u9fa5]+/)
    const numberTest = new RegExp(/\d+/)

    //防止出现带空格输入
    for (let key in info) {
      info[key].replace(/\s/g, '')
    }

    if (!chracterTest.test(info.stuName)) {
      return false
    }
    if (!numberTest.test(info.stuNum) || info.stuNum.length !== 10) {
      return false
    }
    if (!numberTest.test(info.stuPhone) || info.stuPhone.length !== 11) {
      return false
    }
    if (!numberTest.test(info.stuQQ)) {
      return false
    }
    return true
  }

  componentWillUnmount() {
    this.setState({
      maskIsShow: false
    })
  }

  render() {
    const { stu_name, stu_num, stu_qq, stu_phone } = this.state
    return (
      <View className="person-info">
        {this.state.maskIsShow ? <Mask type={this.state.maskType} /> : null}
        <Navigation
          text="个人信息"
          enableBack={this.props.pageType === 'entrance' ? false : true}
        />
        <Text>姓名</Text>
        <Input
          placeholder="点击输入您的真实姓名"
          placeholderClass="input-p"
          value={stu_name}
          onInput={this.changeName}
        />
        <Text>学号</Text>
        <Input
          type="number"
          placeholder="点击输入学号"
          placeholderClass="input-p"
          value={stu_num}
          onInput={this.changeNum}
        />
        <Text>QQ</Text>
        <Input
          type="number"
          placeholder="点击输入QQ号码"
          placeholderClass="input-p"
          value={stu_qq}
          onInput={this.changeQQ}
        />
        <Text>联系电话</Text>
        <Input
          type="number"
          placeholder="点击输入联系电话"
          placeholderClass="input-p"
          value={stu_phone}
          onInput={this.changePhone}
        />
        <Text>联系电话务必为常用电话，个人信息直接影响\n报名信息录入！</Text>
        <Button onClick={this.submitInfo}>
          {this.props.pageType === 'entrance' ? '开始报名吧' : '保存'}
        </Button>
      </View>
    )
  }
}
