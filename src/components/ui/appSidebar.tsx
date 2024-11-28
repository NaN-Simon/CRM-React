import {
  Receipt,
  Home,
  NotebookTabs,
  BookOpen,
  UsersRound,
  ChartBar,
  ChartPie,
  PencilLine,
  MessageCircleQuestion,
  Calendar,
  Globe
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Team",
    url: "/team",
    icon: UsersRound,
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: NotebookTabs,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: Receipt,
  },
  {
    title: "Form",
    url: "/form",
    icon: BookOpen,
  },
  {
    title: "Bar",
    url: "/bar",
    icon: ChartBar,
  },
  {
    title: "Pie",
    url: "/pie",
    icon: ChartPie,
  },
  {
    title: "Line",
    url: "/line",
    icon: PencilLine,
  },
  {
    title: "Faq",
    url: "/faq",
    icon: MessageCircleQuestion,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Geography",
    url: "/geography",
    icon: Globe,
  },
]

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar