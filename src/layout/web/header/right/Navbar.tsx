import React from 'react'
import navList from './navList'

import { Link, useLocation } from 'react-router-dom'
import { AppstoreOutlined, HomeOutlined, EditOutlined, FolderOutlined, UserOutlined, SendOutlined} from '@ant-design/icons'

import { Menu } from 'antd'

const Icons = {
  home: HomeOutlined,
  edit: EditOutlined,
  app: AppstoreOutlined,
  folder: FolderOutlined,
  user: UserOutlined,
  navigation: SendOutlined
}

function getIcon(icon) {
  const Icon = Icons[icon] || HomeOutlined
  return <Icon />
}

function NavBar(props) {
  const location = useLocation()
  const { mode = 'horizontal' } = props
  return (
    <Menu mode={mode} selectedKeys={[location.pathname]} className='header-nav'>
      {navList.map(nav => (
        <Menu.Item key={nav.link} icon={nav.icon && getIcon(nav.icon)}>
          {nav.href ? (<a className='nav-text' href={nav.href} target='blank'>{nav.title}</a>) : (<Link to={nav.link}>
            {/* {nav.icon && <LegacyIcon type={nav.icon} />} */}
            <span className='nav-text'>{nav.title}</span>
          </Link>)}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default NavBar
