import React from 'react'
import Search from './Search'
import Navbar from './Navbar'
import UserInfo from './UserInfo'
import Menu from './Menu'

function HeaderRight(props) {
  return (
    <div className='header-right'>
      <Search />
      <Menu></Menu>
      <UserInfo />
      <Navbar />
    </div>
  )
}

export default HeaderRight
