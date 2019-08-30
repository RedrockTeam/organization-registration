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

interface OrganizationListDetail {
  hongyan: Organization
  qingxie: Organization
}

const organizationListDetail: OrganizationListDetail = {
  hongyan: {
    name: '红岩网校工作站',
    departmentList: [
      {
        name: '产品策划及运营部',
        posterStyle: {
          background: '#2C547C'
        },
        introduction:
          '挖据用户需求，提出产品功解升级力案推厂网站文化，开展线上线下活动的推广。利庄前媒体中台宣传网校的产品和活动，负资产品荣划，原型设计进行网上的合作共证。'
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
  qingxie: {
    name: '青年志愿者协会',
    departmentList: [
      {
        name: '产品策划及运营部',
        posterStyle: {
          background: '#2C547C'
        },
        introduction:
          '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
      },
      {
        name: '视觉设计部',
        posterStyle: {
          background: 'red'
        },
        introduction:
          '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
      },
      {
        name: 'Web研发部',
        posterStyle: {
          background: 'black'
        },
        introduction:
          '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
      },
      {
        name: '移动开发部',
        posterStyle: {
          background: 'yellow'
        },
        introduction:
          '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
      },
      {
        name: '运维安全部',
        posterStyle: {
          background: 'blue'
        },
        introduction:
          '工作站在制作网站，特别是为其他学生组织服务过程中，很好的实践了软件设计原理和方法。每个项目成立工作组，工作组成员选择项目经理、需求工程师、数据库管理员、UI设计师、系统设计师、程序员、测试员等角色，使用结构化或面向对象的软件设计方法，完善相关文档，严格按时间表执行项目。也为成员积累较好的项目管理经验和项目设计经验。'
      }
    ]
  }
}

export default organizationListDetail
