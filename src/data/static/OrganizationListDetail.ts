const imgHostname = 'https://cyxbsmobile.redrock.team/static/register/'

interface PosterStyle {
  backgroundImage: string
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
  bangongshi: Organization
  zuzhibu: Organization
  xuanchuanbu: Organization
  xueshenghui: Organization
  qingxie: Organization
  dayituan: Organization
  kelian: Organization
  shelian: Organization
  yanhui: Organization
  huweidui: Organization
}

const organizationListDetail: OrganizationListDetail = {
  hongyan: {
    name: '红岩网校工作站',
    departmentList: [
      {
        name: '产品策划及运营部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}hongyan/hongyan-pm.png)`
        },
        introduction:
          'Ta是用户需求的倾听者，也是提出解决方案的总设计师。活跃在各部门之间，是促进各部门沟通的桥梁。Ta是创意的缔造者，拥有独特严谨的产品思维。一份原型图、一篇PRD可以让程序员和设计师开启工作模式，也可以写出优秀的文案对活动和产品形成强有力的助推，Office、Axure、Xmind等软件是Ta们的好帮手。产品策划及运营部旨在培养出优秀的产品经理，产品运营者和新媒体运营师。 '
      },
      {
        name: '视觉设计部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}hongyan/hongyan-design.png)`
        },
        introduction:
          'Ta是设计产品图形用户界面，跟踪产品视觉及体验效果的设计师。需要经常同设计软件打交道的Ta们，主要负责针对pc端、移动端、海报等界面的设计，团队协作设定产品整体界面视觉风格与创意规划，对设计成果进行定期评估和研究，进行视觉元素的优化设计。视觉设计部旨在设计出优秀的互联网产品，培养插画设计师、交互设计师、视觉设计师和UI设计师。 '
      },
      {
        name: 'Web研发部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}hongyan/hongyan-web.png)`
        },
        introduction:
          'Ta的职责包括“重邮小帮手”微信公众号、移动端／PC端网站开发、助力掌上重邮APP、提供强大的后台驱动等。目前分为前端和后端方向，前端主要采用html、css、JavaScript等利器，针对PC端、移动端等不同交互领域采用不同的设计风格与技术，将视觉无限的创意以行行代码形式转化为交互良好的网站页面，并通过一系列优化手段使用户体验达到最佳。后端主要负责将产品细致入微的现实需求转化为清晰的数据模型与业务逻辑，采用PHP、Java、Golang等开发语言操作数据库并进行严格的分析处理，掌控数据传递处理路上的每个流程，从而为网校提供最为坚实的数据后盾。'
      },
      {
        name: '移动开发部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}hongyan/hongyan-mobile.png)`
        },
        introduction:
          'Ta主要负责移动端产品的开发，以 Java & Kotlin，Objective-C & Swift为主要开发语言，涵盖Android、iOS两个平台。在这里你不但可以学到App开发，还能认识一大群志同道合的朋友。如果你对App开发感兴趣，对App制作有欲望，移动开发部将是你的秀场。来吧，如果你曾抱怨被大神虐哭，现在一个成为大神的机会等着你！'
      },
      {
        name: '运维安全部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}hongyan/hongyan-sre.png)`
        },
        introduction:
          'Ta既是红岩网校运维安全部(内部称之为 网校 SRE ( Site Reliability Engineering ))，也是重庆邮电大学 LUG(Linux User Group) ，主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化，还负责了重庆邮电大学的公益项目：重庆邮电大学开源镜像站。Ta们使用 Python语言来开发好玩有趣的项目，在这里你可以利用服务器资源来搭建自己想做的任何项目。你要对技术执着、对高性能孜孜不倦，“如果不能优雅的解决这个问题，那我们就有了两个问题”。'
      }
    ]
  },
  bangongshi: {
    name: '团委办公室',
    departmentList: [
      {
        name: '团委办公室',
        posterStyle: {
          backgroundImage: `url(${imgHostname}sanbushi/sanbushi-bangong.png)`
        },
        introduction:
          '重庆邮电大学团委办公室(以下简称办公室）是共青团重庆邮电大学委员会直属机构之一。是学校团学工作的枢纽与核心，在团委与各校级学生组织之间起到桥梁与纽带的作用，是所有学生组织中与老师联系最密切的部门，是团委老师的得力助手。办公室负责团委工作的上传下达——向上通过制作团委工作简报《重邮共青团》等，向团中央、团市委汇报学校团学工作动态；向下沟通联系各校级学生组织，传达团委相关工作要求，并针对学生组织相关工作予以监督。参与学生组织各类活动的筹备工作，负责学生活动场地的管理工作，监督并完善团建在线网站的建设。同时，办公室还协助完成学校大型活动的会务，秘书工作，协助完成大学生志愿者暑期“三下乡”社会实践活动，负责各项文件，奖状资料的管理存档工作。'
      },
    ]
  },
  zuzhibu: {
    name: '团委组织部',
    departmentList: [
      {
        name: '团委组织部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}sanbushi/sanbushi-zuzhi.png)`
        },
        introduction:
          '重庆邮电大学团委组织部是校团委核心直属部室。组织部以“严谨 高效 励志 笃行”作为部训，协调统筹各学院团总支及基层团支部开展工作。是负责全校共青团的基层组织建设工作、推优入党工作、五四评优表彰工作、开展青年马克思主义培养工程、指导主题团日活动的开展和团支部“活力提升”工程的实施以及开展班级团支部和班委会一体化运行机制改革等工作的职能部门。'
      },
    ]
  },
  xuanchuanbu: {
    name: '团委宣传部',
    departmentList: [
      {
        name: '团委宣传部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}sanbushi/sanbushi-xuanchuan.png)`
        },
        introduction:
          '校团委宣传部是我校团委的重要部门，担负着向学校、校团委各学生组织传达信息的重要任务，是校团委各部门正常工作的基本保证。宣传部是负责全校工作的宣传、报道，传达学校和团委的工作指示，会议通知，对广大团员青年进行思想政治教育、素质教育的宣传工作；负责通过网络、海报、橱窗、等形式开展政治思想教育工作。宣传部以丰富校园文化生活，活跃同学们的第二课堂，丰富广大同学的课余生活为己任，带领各团总支宣传部开展工作。'
      },
    ]
  },
  xueshenghui: {
    name: '校学生会',
    departmentList: [
      {
        name: '综合部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-zonghe.png)`
        },
        introduction:
          '综合部以其“承上启下”的重要作用在重庆邮电大学校学生会中拥有一席之地。综合部作为学生会的“中心枢纽”，默默地在学生会中付出，清除同学们的后顾之忧。 在过去的时间里，综合部协助各个部门举办了众多活动，与各个学院学院、各个部门有多方面的交流。除了和校内的部门保持联系，外联也是综合部重要的一部分，综合部积极同重庆市各高校保持联络。在综合部可以提高自己的办公和沟通能力。'
      },
      {
        name: '学习部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-xuexi.png)`
        },
        introduction:
          '学习部是以学校学风建设为中心开展一系列活动，包括“信科杯辩论赛"“新生杯辩论赛”"一站到底”等。学习部让你学到的从来都不是如何提高成绩,而是综合能力的提升和不同层面的沟通能力，每一个活动的前期准备，策划，现场模拟及掌控都是由学习部全权负责，怎样组织一场类似辩论赛的正式活动，这样的活动应该注意什么。“人活一世，年少一去不复返，当然要活出少年人的潇洒肆意。”欢迎萌新们加入学习部肆意的绽放你们的才华!'
      },
      {
        name: '宣传部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-xuanchuan.png)`
        },
        introduction:
          '是学生会工作的一个窗口，肩负着对内宣传学校、学生会动态，对外展现我校风采的职责。我部秉承着“全心全意为学生服务”的原则，切实做好各类宣传教育工作，把握正确的舆论导向，是广大学生与学生会的桥梁和纽带。我部工作主要为新媒体宣传、平面设计和视频制作三大块，线上和线下及时宣传，作用于学生会的各类活动的全过程。宣传部是学生会最具思想、更练能力、更需创新的部门之一。'
      },
      {
        name: '权益提案部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-quanyi.png)`
        },
        introduction:
          '“解决同学们‘食、住、行’的一切问题”是我们不变的工作重心。我们时刻为解决同学们疑难问题而准备着，除了进行包括“问题收集”、“问题解决”和“进度跟进”三大方面的日常工作，我们还将针对代表性问题不定期开展如“权小益见面会”、“提案大赛”等线上线下相关活动，力求听到每位重邮学子的声音的同时，也希望促进同学们表达沟通的能力。当然我们会及时和学校有关部门进行有效沟通对接，使每个同学合理的诉求得到解决，从而有效鼓励同学们为自己维权为自己发声。'
      },
      {
        name: '生活服务部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-fuwu.png)`
        },
        introduction:
          '承担同学和食堂沟通的桥梁工作，为学生搭建与学校食堂、学校后勤部门以及学校宿舍管理等部门沟通的桥梁。全校同学对于校园生活存在各种不满都可以向本部门反馈，我们将把收集到的建议和意见合理化过后及时反馈给有关后勤部门，进而建立健全反馈机制，优化校园后勤工作开展。'
      },
      {
        name: '文艺部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-wenyi.png)`
        },
        introduction:
          '重庆邮电大学学生会文艺部是一个开展各项校园文艺活动的职能部门，活跃校园文化气氛，丰富广大同学业余文化生活。主要举办“英悦重邮”、“草坪音乐会”、“校园十大歌手”、“诗悦流芳”、“室内音乐会”等校级比赛类节目、欣赏类节目，并会协助其他部门或者学院一起进行创新类节目的策划、承办等。'
      },
      {
        name: '体育部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-tiyu.png)`
        },
        introduction:
          '体育部是学校开展体育活动的主要组织部门。体育部多次成功举办校园大型户外体育活动，如极速重邮、力拔山河等。体育部有效的组织的体育活动，给同学提供更多的课余活动时间，丰富了同学们的课余活动，提高了同学参加体育锻炼的积极性。'
      },
      {
        name: '女生部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}xueshenghui/xueshenghui-nvsheng.png)`
        },
        introduction:
          '女生部作为我校特色部门是专门为女生设立的服务部门，是一个以女生活动为主的特殊部门。女生部结合女同学的生活方式和其他方面的特点，针对女生开展有益的活动，配合学校有关部门解决女同学在学习、生活中的困难，维护女同学的正当权益。女生部更注重着力于学生整体形象塑造,注重于展现新一代大学生的独特的风采和精神面貌。'
      }

    ]
  },
  qingxie: {
    name: '青年志愿者协会',
    departmentList: [
      {
        name: '综合管理部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}qingxie/qingxie-zonghe.png)`
        },
        introduction:
          '综合管理部负责青年志愿者协会内部事务的协调与管理，对学院的志愿活动的对接与考核，对青年志愿者协会内部物资进行管理，对学院志愿活动资料的收集整理及评分，以及负责志愿活动时长的管理和添加，在整个部门中起着纽带作用。在青春中奋斗，在最好的时光遇见综合，相约开启志愿之行！'
      },
      {
        name: '服务总队',
        posterStyle: {
          backgroundImage: `url(${imgHostname}qingxie/qingxie-fuwu.png)`
        },
        introduction:
          '天天节电活动，我们行走在每一栋教学楼，关闭电器，为环保助力。天天咨询活动中，是我们为退休教师解答疑惑的身影。夜晚的操场，天天护跑的志愿者保驾护航，为夜跑人提供存包服务。九月，你们迎来了大学，我们遇见了怀揣梦想朝气蓬勃的你，希望你梦想的起点，从青年志愿者协会服务总队开始。'
      },
      {
        name: '实践服务部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}qingxie/qingxie-shijian.png)`
        },
        introduction:
          '实践服务部主要负责校外志愿服务活动，社区市民学校建设，日常开展“四点半课堂”以及“周末课堂”等志愿活动。并负责规范管理校内各学院志愿活动，以及大学生暑期“三下乡”社会实践活动相关工作。以志愿之心，以志愿之行，你我携手，播下一颗爱的种子。实践服务部期待与你们的志愿之约！'
      },
      {
        name: '宣传推广部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}qingxie/qingxie-xuanchuan.png)`
        },
        introduction:
          '宣传推广部负责官方QQ的日常运营以及微信推送，各项志愿活动的宣传，校内外志愿活动的跟踪纪录；同时对志愿服务品牌项目进行推广，通过拍摄活动照片、推送优质文案以及录制视频直播等形式，使更多的人了解青协的日常，了解志愿活动。不忘初心方得始终，让志愿与你我同行。宣传推广部期待与你一起记录美好的志愿时光！'
      }
    ]
  },
  dayituan: {
    name: '大学生艺术团',
    departmentList: [
      {
        name: '综合部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}dayituan/dayituan-zonghe.png)`
        },
        introduction:
          '综合部是整个大艺团的心脏和大脑，负责整个艺术团后勤以及技术设备支持。目前，综合部内部分为工作组，负责校内文艺晚会和颁奖典礼的后勤，提供舞美、音响灯光调控和后台支持，同时衔接管理着各大团以及团内的日常事务。宣传组，管理大艺团官方公众号的运营，负责与艺术团相关活动的照片记录，新闻稿整理。校礼仪队，大艺团管理的礼仪队是重庆邮电大学唯一一支校级礼仪队，负责校内各大颁奖典礼的礼仪工作。'
      },
      {
        name: '管乐团',
        posterStyle: {
          backgroundImage: `url(${imgHostname}dayituan/dayituan-guanyue.png)`
        },
        introduction:
          '管乐团是大艺团的一个分团，历史悠久，承担着我校各项大型演出任务，组织编排各项文艺节目，为有文艺特长的同学搭建良好的交流和展示平台，在大大小小的比赛舞台上获奖无数。虽然人数不是最多的，但是我们的组成非常细致，木管、铜管、打击乐还有弦乐，再往下就是各种乐器声部。管乐团不仅是学乐器的地方，还能享受大排练那愉悦的气氛。'
      },
      {
        name: '民乐团',
        posterStyle: {
          backgroundImage: `url(${imgHostname}dayituan/dayituan-minyue.png)`
        },
        introduction:
          '重邮艺术血脉里的民族血统，磅礴壮丽的乐曲演出，细致严谨的排练风格，温暖和熙的相处氛围。我们带来优秀的演绎作品，传播民乐的魅力。不论是校内还是校外的大型活动，我们都投身参与，斩获荣誉。对待音乐，我们是认真而热忱的。我们喜爱志同道合的朋友，携手同行，相互进步。大音，只为让每一个人的神经递质疯狂释放。'
      },
      {
        name: '舞蹈团',
        posterStyle: {
          backgroundImage: `url(${imgHostname}dayituan/dayituan-wudao.png)`
        },
        introduction:
          '大学生艺术团舞蹈团是以民族舞、古典舞、现代舞为主的为各大舞台筹划演出和准备比赛的校级组织。平时会组织基本功、舞感训练和舞蹈组合的排练，并且有专门的舞蹈老师带队。学校的大型演出都有舞蹈团的身影！这里无关身高，无关技巧，只要有一颗热爱舞蹈的心就足够。'
      },
      {
        name: '合唱团',
        posterStyle: {
          backgroundImage: `url(${imgHostname}dayituan/dayituan-hechang.png)`
        },
        introduction:
          '重邮大艺团合唱团是隶属校团委的艺术团体，自成立以来，为广大爱好唱歌的同学提供一个提高合唱水平和互相交流的空间,  提升团员的整体文艺素质。作为校艺术团的主干力量，自成立以来就承担起学校各方面的合唱演出节目。合唱团长期坚持科学的歌唱发声训练和规范化的排练，并聘请专业老师进行指导。一直致力于音乐的推广，丰富学生的精神生活，并将加强文化交流、增进友谊情感作为自己的宗旨。合唱团热情欢迎每一个热爱歌唱的你。'
      },
      {
        name: '话剧团',
        posterStyle: {
          backgroundImage: `url(${imgHostname}dayituan/dayituan-huaju.png)`
        },
        introduction:
          '话剧团是一个以原创剧本为主的表演舞台，为各大舞台筹划演出以及参加各项比赛的校级组织。在学校的各大舞台以及重庆市大艺展总会有话剧团的身影。所以如果你有一颗热爱表演的心，我们就为你搭建舞台，成就你的梦想；如果你渴望释放自我，寻找自己的花样年华，我们就给你无限可能，演绎你自己的缤纷色彩。在这里既能满足你学业上的需求，又收获无限的快乐。So~优秀的你可别错过这一站哟！'
      }
    ]
  },
  kelian: {
    name: '学生科技联合会',
    departmentList: [
      {
        name: '综合部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}kelian/kelian-zonghe.png)`
        },
        introduction:
          '综合部是学生科联的枢纽中心。它是连接团委、主席团和科联各个部门、干事之间的纽带，起到上传下达的作用，并以办公室的日常管理为工作重点。其主要负责制定、完善、推广科联制度；负责科联对外联络和洽谈；负责科联各部门内部协调；负责组织科联干部干事成立大会、素质拓展、科联交享悦、科联杯、干部干事培训和考核、人才互荐交流、总结晚会等活动；负责与各学院的学生科创组织保持紧密联系，开展交流活动；负责与兄弟高校的学生科创组织进行交流合作。'
      },
      {
        name: '科创竞赛部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}kelian/kelian-jingsai.png)`
        },
        introduction:
          '科创竞赛部是学生科技联合会的竞技中心。以“科创点亮未来，竞赛成就梦想”为理念，主要负责开展和推广校内外科技竞赛活动，如“科普先锋秀”、“无线电猎狐大赛”等；组织“挑战杯”（大挑）大学生课外学术科技作品竞赛、“创青春”（小挑）全国大学生创业大赛的申报和立项工作。致力于为全校提供一个校内外公平竞技的平台，营造良好的校园竞技氛围。'
      },
      {
        name: '项目管理部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}kelian/kelian-guanli.png)`
        },
        introduction:
          '项目管理部是学生科联的科创中心，主要负责学生科联的创新、创业工作。负责协调开展“学生科技节”等系列大型科技活动，包括组织开展“学生课外学术科技作品竞赛”、“创新创业训练营”、“学生创新创业成果展”等系列活动。同时致力于“创新高端论坛”校内外创新创业沙龙活动、运用网络媒体发布校内外科创赛事资讯等，构建学校创新创业项目交流以及推广的平台，营造浓厚的科技创新创业氛围。'
      },
      {
        name: '科技人文部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}kelian/kelian-renwen.png)`
        },
        introduction:
          '科技人文部作为学生科技联合会的文化活动中心，秉承着“科技点缀生活，人文融入梦想”的理念，以“文峰青年大讲堂”、“重邮青年说”、“学长演播厅”为主打品牌活动。文峰青年大讲堂诚邀知名专家学者和文化名人，旨在浓厚校园科技文化氛围的同时，强化人文环境，打造属于重邮的专属讲堂。重邮青年说旨在寻找和培养一批敢于发声，说出自己对生活的感悟的重邮人，传播年轻正能量。学长演播厅邀请优秀学长学姐，为新生答疑解惑，力求将最新最热最有用的大学资讯和成功经验分享给重邮学子。'
      },
      {
        name: '信息部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}kelian/kelian-xinxi.png)`
        },
        introduction:
          '信息部是学生科联的技术中心。其主要负责科技创新实践活动的培训与开展。Web组主要负责Html5的开发及Web前端的基础培训，静态网页与动态网页的制作；UI组负责对网页整体界面美观、人机交互、操作逻辑的设计；运营组主要负责利用PowerPoint和Premiere等软件来进行产品运营以及宣传。致力于“培养精英团队”，打造科联信息化平台，丰富科联的创新创意活动。'
      },
      {
        name: '媒体运营部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}kelian/kelian-meiti.png)`
        },
        introduction:
          '媒体运营部是学生科联的创意中心。其主要负责学生科联创意设计及校内外宣传工作。设计海报、条漫及展板，活动现场布置等；制作活动视频、微电影和动画以及活动现场摄影摄像及新闻稿的撰写。同时也负责学生科联线上的运营工作，管理科联公众号的推广，通过海报、视频、网络等形式在校内外宣传科联活动，打响科联品牌，展示科联成果。'
      }
    ]
  },
  shelian: {
    name: '学生社团联合会',
    departmentList: [
      {
        name: '综合部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}shelian/shelian-zonghe.png)`
        },
        introduction:
          '作为我校学生社团联合会的管家部门，是一个沟通组织内部、联系组织外部的桥梁性部门。综合部，对内负责社联物资管理、各部门考勤考核以及财务报账问题，解决社联体系里的琐事，组织内部四个部门团建，协助监督其他部门完成相应任务。对外，掌握我校社联对外高校的交流与联系，为给树立我校社联树立一个良好的形象做出不少努力。部门更注重的是带动学校各个社团的发展，时刻监督并管理着社团的充分运行。'
      },
      {
        name: '社团活动部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}shelian/shelian-huodong.png)`
        },
        introduction:
          '社团活动部作为学生社团联合会直属四部门之一是一个以社团活动为主的特殊部门。社团活动部通过对各个社团不同的特点，针对不同类别的社团策划、组织、开展有助于社团发展的活动，社团活动部更侧重于组织开展新颖且独具特色的社团活动，同时承办各部门共同举办校级大型活动，丰富校园文化。'
      },
      {
        name: '社团服务部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}shelian/shelian-fuwu.png)`
        },
        introduction:
          '社团服务部服务部作为社联必不可少的四大部门之一，有着社团小帮手的称号。主要的工作职责是管理社团，是社联连接社团、社团部的重要桥梁，组织着社团的成立、招新、换届以及社团的评奖评优等工作。社团服务部相比其他三个更注重的是带动学校各个社团的发展，时刻监督并管理着社团的充分运行。'
      },
      {
        name: '宣传部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}shelian/shelian-xuanchuan.png)`
        },
        introduction:
          '宣传部作为学生社团联合会下的直属部门，主要负责相关活动前期的宣传推广工作，设计宣传推送、活动海报、内容视频等，以使后期活动能够顺利开展，并达到预期效果。同时负责审批社团的活动海报、视频等相关文化制品。并参与运营和搭建社联新媒体的学生社团宣传平台，更新宣传方法，加大宣传力度，拓宽宣传受众面。致力于使更多的同学了解并参与各个社团以及其组织的相关活动，丰富同学们的课余生活。'
      },
    ]
  },
  yanhui: {
    name: '研究生会',
    departmentList: [
      {
        name: '科技实践部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-keji.jpg)`
        },
        introduction:
          '我们将致力于创办与科技相关的赛事活动，如主办全校研究生英语风采大赛、协办各项科技竞赛、参管研究生辩论队。为我校研究生打开有创新、有思想、有趣味的新世界大门。'
      },
      {
        name: '信息宣传部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-xinxuan.jpg)`
        },
        introduction:
          '负责公众号运营，研会线上、线下宣传产品设计，宣传片、视频等多媒体作品制作以及其他宣传工作，对研会各个活动进行品牌包装和技术支持。让我们告别枯燥的海报制作，轻松掌握新媒体运营技巧。在信宣，技术不是关键，脑洞征服世界。'
      },
      {
        name: '外联部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-wailian.jpg)`
        },
        introduction:
          '主管企业俱乐部，负责全国各兄弟院校之间、本校研究生与企业等单位之间、校内各组织间的沟通与交流。各高校知名专家学者，重邮知名校友校企，社会知名人士都是你沟通的对象。'
      },
      {
        name: '自律权益部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-zilv.jpg)`
        },
        introduction:
          '这里是学生实现自我管理的重要平台，我们要配合学校管理日常纪律、维护公共秩序，还要协助学生宿舍安全卫生检查工作。我们的目标是：为全校研究生营造安全、文明、舒适的学习和生活环境。'
      },
      {
        name: '人力资源部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-renli.jpg)`
        },
        introduction:
          '掌握研会命脉，聆听各部心声。负责研会的人事管理、活动记录和物资进出与调度。长期的工作中以严谨高效的作风，根据研会章程，制定活动规范与考核制度。主办新老生交流会及素质拓展等活动，加强研会内部交流融合。人力资源部，团结研会力量，做实力HR ！'
      },
      {
        name: '文体部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-wenti.jpg)`
        },
        introduction:
          '研究生校园文化生活的缔造者和领跑人。于文，主办迎新晚会等大型活动，丰富研究生的课余生活，协助各分研会举办各类文艺活动，营造活跃向上的氛围。于体，参与组建、管理研究生各类球队，积极参加各类校级比赛，如运动会、“青春杯”篮球、足球赛、公园排球赛、校园马拉松等，宣传体育育人理念，提高研究生的综合素质。'
      },
      {
        name: '学术交流部',
        posterStyle: {
          backgroundImage: `url(${imgHostname}yanhui/yanhui-xueshu.jpg)`
        },
        introduction:
          '以举办特色鲜明的学术讲座和论坛活动为主，拓宽研究生的学术视野，增强同学们的学术研究氛围。同时根据在校研究生的需求，开展切实有效的不同主题交流活动，构建各领域专家与同学们面对面交流的平台。学术交流部，看似高冷却超接地气的部门！'
      }
    ]
  },
  huweidui: {
    name: '国旗护卫队',
    departmentList: [
      {
        name: '国旗护卫队',
        posterStyle: {
          backgroundImage: `url(${imgHostname}huweidui/huweidui.png)`
        },
        introduction:
          '重庆邮电大学国旗护卫队成立于2005年，原隶属于校团委，后调归学校保卫处人民武装部下。自成立至今，出色的完成了重庆人民广场“五一”升国旗任务、重庆市第五次少代会升旗仪式、校运会、八院联谊、九院联谊、特殊纪念日及每周一的升旗等任务。队内每一位队员都经过严格的训练，在校武装部和各届队员的共同努力下，已经形成具有重庆邮电大学特色的升旗模式。重庆邮电大学国旗护卫队受到各界广泛好评，为新时代爱国主义教育工作做出了巨大贡献。'
      },
    ]
  },
}

export default organizationListDetail
