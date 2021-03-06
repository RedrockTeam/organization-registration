import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import '@tarojs/async-await'

import './app.scss'

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/main/index',
      'pages/result/index',
      'pages/register/index',
      'pages/organization-detail/index',
      'pages/info-entrance/index',
      'pages/info-index/index',

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
