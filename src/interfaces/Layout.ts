import { SidebarTabsEnum } from "../enums/navigation";

export interface SidebarNavigationItem {
  name?: SidebarTabsEnum;
  title: string;
  href?: string;
  icon?: any;
  isGrouped?: boolean;
  items?: SidebarNavigationItem[];
}