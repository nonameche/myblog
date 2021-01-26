import React from 'react'
import Search from './Search'
import Navbar from './Navbar'
import UserInfo from './UserInfo'
import {Setting} from './Setting'

function HeaderRight(props) {
  return (
    <div className='header-right'>
      <Search />
      <Setting></Setting>
      <UserInfo />
      <Navbar />
    </div>
  )
}

export default HeaderRight
