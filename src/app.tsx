import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import '@tarojs/async-await'

import './app.scss'

class App extends Component {
  config: Config = {
    pages: [
      'pages/main/index',
      'pages/organization-detail/index',
      'pages/index/index',


      'pages/info-entrance/index',
      'pages/info-index/index',
      'pages/result/index',
      'pages/register/index',

    ],
    window: {
      // backgroundTextStyle: 'light',
      // navigationBarBackgroundColor: '#fff',
      // navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
