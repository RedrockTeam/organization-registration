import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'

import { organizationListDetail } from '../../data/static'

import './index.scss'

interface State {
  sign: string
}


export default class Main extends PureComponent<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    sign: 'hongyan'
  }

  componentWillMount() {
    const { sign } = this.$router.params
    if(sign) {
      this.setState({
        sign
      })
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const organizationName = this.state.sign

    const organization = organizationListDetail[organizationName]
    const name = organizationListDetail[organizationName].name
    const departmentList = organization.departmentList

    const posters = departmentList.map(value => value.posterStyle)
    const titles = departmentList.map(value => value.name)
    const introductions = departmentList.map(value => value.introduction)

    return (
      <View className='organization-detail'>
        <Navigation text={name} enableBack={false}/>
        <View>
          <View className='arrow arrow-left' />
          <View>
            {posters.map(value => <View style={value} />)}
          </View>
          <View className='arrow arrow-right' />
        </View>
        <View>
          <View />
          <View />

          <View className='deparment-title-box'>
            {titles.map(value => <Text>{value}</Text>)}
          </View>
          <View>
            <View>
              {introductions.map(value => <View>{value}</View>)}
            </View>
          </View>
          <Button>立即报名</Button>
        </View>
      </View>
    )
  }
}
