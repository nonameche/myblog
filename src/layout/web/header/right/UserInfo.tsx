import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

// methods
import { loginout } from '@/redux/user/actions'

// components
import { Button, Dropdown, Menu } from 'antd'
import AppAvatar from '@/components/Avatar'

// hooks
import useBus from '@/hooks/useBus'
interface State{
  user:''
}
interface UserInfoType{
  username?:string,
  github?:string,
  role?:number
}

function UserInfo(props) {
  const dispatch = useDispatch()
  const bus = useBus()
  const userInfo:UserInfoType = useSelector<State>(state => state.user)
  const { username, role } = userInfo

  const MenuOverLay = (
    <Menu>
      {role === 1 && (
        <Menu.Item>
          <span onClick={() => bus.emit('openUploadModal')}>导入文章</span>
        </Menu.Item>
      )}
      {role === 1 && (
        <Menu.Item>
          <span onClick={() => props.history.push('/admin')}>后台管理</span>
        </Menu.Item>
      )}
      <Menu.Item>
        <span className='user-logout' onClick={() => dispatch(loginout())}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className='header-userInfo'>
      {username ? (
        <Dropdown placement='bottomCenter' overlay={MenuOverLay} trigger={['click', 'hover']}>
          <div style={{ height: 55 }}>
            <AppAvatar userInfo={userInfo} popoverVisible={false} />
          </div>
        </Dropdown>
      )
        : (
          <>
            <Button
              ghost
              type='primary'
              size='small'
              style={{ marginRight: 20 }}
              onClick={() => bus.emit('openSignModal', 'login')}>
              登录
            </Button>
            <Button ghost type='primary' size='small' onClick={() => bus.emit('openSignModal', 'register')}>
              注册
            </Button>
          </>
        )}
    </div>
  )
}

export default withRouter(UserInfo)
