import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button, Text } from '@tarojs/components'

import Navigation from '../../components/Navigation'

import './index.scss'

interface PosterStyle {
  background: string
}

interface Department {
  name: string,
  posterStyle: PosterStyle,
  introduction: string,
}

interface Organization {
  name: string,
  departmentList: Array<Department>
}

interface State {
  organizationList: Array<Organization>,
}

export default class Main extends Component<{}, State> {
  config: Config = {
    navigationStyle: 'custom'
  }

  state = {
    organizationList: [
      {
        name: '红岩网校',
        departmentList: [
          {
            name: '产品策划及运营部',
            posterStyle: {
              background: '#2C547C'
            },
            introduction: '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
          },
          {
            name: '视觉设计部',
            posterStyle: {
              background: 'red'
            },
            introduction: '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
          },
          {
            name: 'Web研发部',
            posterStyle: {
              background: 'black'
            },
            introduction: '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
          },
          {
            name: '移动开发部',
            posterStyle: {
              background: 'yellow'
            },
            introduction: '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
          },
          {
            name: '运维安全部',
            posterStyle: {
              background: 'blue'
            },
            introduction: '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
          },
        ]
      },
    ]
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const organization = this.state.organizationList[0]
    const name = this.state.organizationList[0].name
    const departmentList = organization.departmentList

    const posters = departmentList.map(value => value.posterStyle)
    const titles = departmentList.map(value => value.name)
    const introductions = departmentList.map(value => value.introduction)

    return (
      <View className='organization-detail'>
        <Navigation text={name}/>
        <View>
          <View>
            {posters.map(value => <View style={value} />)}
          </View>
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
