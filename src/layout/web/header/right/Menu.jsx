import React, {useState} from 'react'
import useDarkMode from 'use-dark-mode'
import DarkModeToggle from 'react-dark-mode-toggle'

export default () => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const darkMode = useDarkMode(false)

  return (
    <div className='menu'>
      <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={40}
      />
    </div>
  )
}
