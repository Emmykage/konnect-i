import React, { ReactNode } from 'react'
import SideNav from '../components/navigation/sideNav/SideNav'
import TopNav from '../components/navigation/top-nav/TopNav'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className='h-screen overflow-y-auto flex gap-0'>
        <SideNav/>
        <div className='bg-red-  flex-1 h-screen overflow-y-auto'>
          <TopNav/>
          <div className='px-4'>
            {children}

          </div>
        </div>

    </div>
  )
}

export default MainLayout