import React, { Component } from 'react'
import PropTypes from 'prop-types'
import navList from './navList'

import { Link, useLocation } from 'react-router-dom'
import { AppstoreOutlined, HomeOutlined, EditOutlined, FolderOutlined, UserOutlined} from '@ant-design/icons'

import { Menu } from 'antd'

const Icons = {
  home: HomeOutlined,
  edit: EditOutlined,
  app: AppstoreOutlined,
  folder: FolderOutlined,
  user: UserOutlined,
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
          <Link to={nav.link}>
            {/* {nav.icon && <LegacyIcon type={nav.icon} />} */}
            <span className='nav-text'>{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default NavBar
