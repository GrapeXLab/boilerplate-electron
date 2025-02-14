import {
  Sidebar,
  SidebarContent,
  SidebarFooter, SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '../ui/sidebar'
import { AccountMenu } from '../ui/sidebar/account-menu'
import { HeaderSidebar } from '../ui/sidebar/header-sidebar'

export function AuthLayout({ children }: { children: React.ReactElement }) {
  return (
      <SidebarProvider className="h-screen w-screen bg-background overflow-hidden p-2">
        <Sidebar side="left" variant="floating" collapsible="icon">
          <HeaderSidebar/>
          <SidebarContent></SidebarContent>
          <SidebarFooter>
            <AccountMenu user={{ name: 'name', email: 'email', avatar: 'avatar' }} />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className='h-full w-full mx-auto'>
          <SidebarTrigger />
            {children}
        </SidebarInset>
      </SidebarProvider>
  )
}
