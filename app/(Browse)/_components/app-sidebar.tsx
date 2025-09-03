import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Navigation from "./navigation"
import Following from "./following"
import Recommended from "./recommended"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircleGauge } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <Navigation/>
        <SidebarSeparator/>
        <Following/>
        <SidebarSeparator/>
        <Recommended/>
      </SidebarContent>
      <SidebarFooter>
        <Button size={'lg'} className="rounded-lg" asChild>
          <Link href={"/u/"}>
          <span>View Profile</span>
          <CircleGauge/>
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}