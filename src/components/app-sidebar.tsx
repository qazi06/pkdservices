import logoImage from '../assets/logo.5294e2f22022c5a5f613.png'
import { Link } from 'react-router-dom';
import * as React from "react";
import {
  IconHome,
  IconSchool,
  IconUsersPlus,
  IconBuildingBank,
  IconUserShield,
} from "@tabler/icons-react";
import { NavMain } from "@/components/nav-mainIcons";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "M.Moin",
    email: "Store Admin", 
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: IconHome,
    },
    {
      title: "Degrees", 
      url: "/degrees",
      icon: IconSchool,
    },
    {
      title: "Register Degree",
      url: "/register-degree",
      icon: IconUsersPlus,
    },
    {
      title: "College",
      url: "/college",
      icon: IconBuildingBank,
    },
    {
      title: "Register College", 
      url: "/register-college",
      icon: IconUsersPlus,
    },
    {
      title: "Super Admin",
      url: "/super-admin",
      icon: IconUserShield,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2 h-18 mb-14"
            >
              <Link to="/">
                <img className='flex w-14' src={logoImage} alt="Logo" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
