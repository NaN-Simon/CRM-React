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
import avatar from '/img/avatar.png'
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
      <SidebarHeader >

        <div className="mb-3">
          <div className="flex justify-center items-center">
            <img
              className="rounded-full"
              alt="profile-user"
              width="100px"
              height="100px"
              src={avatar}
            />
          </div>
          <div className="text-center">
            <h2
              className="font-bold text-grey-100 mt-3"
            >
              NaN-Simon
            </h2>
            <h5 className="font-semibold text-green-200"  >
              Admin
            </h5>
          </div>
        </div>

      </SidebarHeader>
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