import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '../ui/sidebar'
import { AccountMenu } from '../ui/account-menu'

export function AuthLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-screen w-screen bg-background overflow-hidden p-2">
      <SidebarProvider>
        <Sidebar side="left" variant="floating" collapsible="icon">
          <SidebarHeader>
            header <SidebarTrigger />
          </SidebarHeader>
          <SidebarContent></SidebarContent>
          <SidebarFooter>
            <AccountMenu user={{ name: 'name', email: 'email', avatar: 'avatar' }} />
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
      <SidebarInset>
        s<div>saddsa</div>
        {children}
      </SidebarInset>
    </div>
  )
}
