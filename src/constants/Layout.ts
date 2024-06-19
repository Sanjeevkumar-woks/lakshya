import { SidebarTabsEnum } from "../enums/navigation";
import { SidebarNavigationItem } from "../interfaces/Layout";
import { GoPeople, GoTasklist } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineFileProtect } from "react-icons/ai";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
export const SIDEBAR_NAVIGATIONS: SidebarNavigationItem[] = [
  {
    name: SidebarTabsEnum.Dashboard,
    title: "Dashboard",
    href: "/dashboard",
    icon: RxDashboard,
  },
  {
    name: SidebarTabsEnum.Tasks,
    title: "Tasks",
    href: "/Tasks",
    icon: GoTasklist,
  },

  {
    name: SidebarTabsEnum.Projects,
    title: "Projects",
    href: "/Projects",
    icon: AiOutlineFileProtect,
  },
  {
    name: SidebarTabsEnum.Teams,
    title: "Teams",
    href: "/Teams",
    icon: PiMicrosoftTeamsLogo,
  },
  {
    name: SidebarTabsEnum.Employees,
    title: "Employees",
    href: "/Employees",
    icon: GoPeople,
  },
  {
    name: SidebarTabsEnum.Settings,
    title: "Settings",
    href: "/Settings",
    icon: CiSettings,
  },
];
