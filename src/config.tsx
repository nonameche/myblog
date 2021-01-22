import React from 'react'
import { GithubFilled } from '@ant-design/icons'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'

// // API_BASE_URL
export const API_BASE_URL = 'https://lmsworld.cn/api'
// API_BASE_URL
// export const API_BASE_URL = 'http://127.0.0.1:6060'

// project config
export const HEADER_BLOG_NAME = '闲情偶寄' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/logo.jpeg'), // 侧边栏头像
  title: 'nonameche', // 标题
  subTitle: '自律使我自由，分享使我快乐', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/nonameche',
      icon: <GithubFilled className='homepage-icon' />
    },
    juejin: {
      link: 'https://juejin.im/user/782508010771992',
      icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
    }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: 'e097fd05c3ffc1cf079d', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: false, // 是否开启
  content: (
    <>
      个人笔记网站，请访问
      <Href href='https://alvin.run'> alvin's note</Href>
    </>
  )
}
