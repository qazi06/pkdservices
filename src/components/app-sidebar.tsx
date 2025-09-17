import logoImage from '../assets/logo.5294e2f22022c5a5f613.png'
import { Link } from 'react-router-dom';
// import Router from '@/Routing/Router';
import * as React from "react";
import {
  // IconCamera,
  IconUsersPlus,
  IconHome,
  // IconDatabase,
  // IconFileAi,
  // IconFileDescription,
  // IconFileWord,
  // IconHelp,
  IconSchool,
  // IconReport,
  // IconSearch,
  // IconSettings,
  IconBuildingBank,
  IconUserShield,
  // IconMenu2,
} from "@tabler/icons-react";
// import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-mainIcons";
// import { NavSecondary } from "@/components/nav-secondary"
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
      url: "/home2",
      icon: IconHome,
    },
    {
      title: "Degrees",
      url: "#",
      icon: IconSchool,
    },
    {
      title: "Register Degree",
      url: "#",
      icon: IconUsersPlus,
    },
    {
      title: "College",
      url: "#",
      icon: IconBuildingBank,
    },
    {
      title: "Register College",
      url: "#",
      icon: IconUsersPlus,
    },
    {
      title: "Super Admin",
      url: "#",
      icon: IconUserShield,
    },
  ],
  // navClouds: [
  //   {
  //     title: "Capture",
  //     icon: IconCamera,
  //     isActive: true,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Proposal",
  //     icon: IconFileDescription,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Prompts",
  //     icon: IconFileAi,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
//   navSecondary: [
//     {
//       title: "Settings",
//       url: "#",
//       icon: IconSettings,
//     },
//     {
//       title: "Get Help",
//       url: "#",
//       icon: IconHelp,
//     },
//     {
//       title: "Search",
//       url: "#",
//       icon: IconSearch,
//     },
//   ],
//   documents: [
//     {
//       name: "Data Library",
//       url: "#",
//       icon: IconDatabase,
//     },
//     {
//       name: "Reports",
//       url: "#",
//       icon: IconReport,
//     },
//     {
//       name: "Word Assistant",
//       url: "#",
//       icon: IconFileWord,
//     },
//   ],
//   SidebarTrigger:[
//     {
//       name: "Word Assistant",
//       url: "#",
//     icon: IconMenu2,
//   },
// ],
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
      <NavMain items={data.navMain} />
      {/* <NavDocuments items={data.documents} /> */}
      <SidebarContent>
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
