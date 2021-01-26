import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loginout } from '@/redux/user/actions'

import { DownOutlined } from '@ant-design/icons'

import { Button, Dropdown, Menu, Avatar } from 'antd'
import logo from '@/assets/images/logo.jpeg'
interface State {
  user:{}
}

interface UserInfo{
  username?:''
}
function AdminHeader(props) {
  const dispatch = useDispatch()
  const history = useHistory()

  const userInfo:UserInfo = useSelector<State>(state => state.user)

  const menu = (
    <Menu className='menu'>
      <Menu.Item>
        <span onClick={e => history.push('/')}>
          返回主页
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={e => {
            dispatch(loginout())
            history.push('/')
          }}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )

  return <>
    <div>
      {/* <img src={logo} alt='pvmed' /> */}
      <span className='header-title'>Blog Manager</span>
      <Dropdown overlay={menu} className='header-dropdown'>
        <a className='ant-dropdown-link'>
          {userInfo.username} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  </>
}

export default AdminHeader
