import React, {FC} from 'react'
import useDarkMode from 'use-dark-mode'
import DarkModeToggle from 'react-dark-mode-toggle'

interface BaseProps{
  style?:{}
}

export const Setting:FC<BaseProps> = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const darkMode = useDarkMode()
  console.log('🚀 ~ file: Setting.tsx ~ line 12 ~ darkMode', darkMode.value)
  return (
    <div className='menu'>
      <DarkModeToggle
        onChange={darkMode.toggle}
        checked={!darkMode.value}
        size={40}
      />
    </div>
  )
}
