import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link, useLocation } from 'react-router-dom'
import { Icon as LegacyIcon } from '@ant-design/compatible'
import { Menu } from 'antd'

import navList from './navList'

function NavBar(props) {
  const location = useLocation()
  const { mode = 'horizontal' } = props
  return (
    <Menu mode={mode} selectedKeys={[location.pathname]} className='header-nav'>
      {navList.map(nav => (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>
            {nav.icon && <LegacyIcon type={nav.icon} />}
            <span className='nav-text'>{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default NavBar
