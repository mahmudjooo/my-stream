import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { RootLayoutProps } from '@/types'
import React from 'react'
import { AppSidebar } from './_components/app-sidebar'

const Layout = ({children}: RootLayoutProps) => {
  return (
       <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default Layout