import { useEffect } from 'react'
import { useAppStore } from '../store/AppStore'

const MenuButton = () => {

  const { showNavbar, setShowNavbar } = useAppStore(state => state)

    const handleClick = () => {
        setShowNavbar(!showNavbar)
    }
  return (
    <button onClick={handleClick} className="flex flex-col items-center justify-center h-max w-max z-[4000]">
          <div className={`w-[28px] h-[3px] bg-white my-[3px] transition-[transform] duration-500 ${showNavbar && "openButton1"}`}></div>
          <div className={`w-[28px] h-[3px] bg-white my-[3px] transition-[transform] duration-500 ${showNavbar && "opacity-0"}`}></div>
          <div className={`w-[28px] h-[3px] bg-white my-[3px] transition-[transform] duration-500 ${showNavbar && "openButton2"}`}></div>
        </button>
  )
}

export default MenuButton