import React, { useEffect, useState } from "react";
import { Popover, Typography } from "antd";
import { Link } from "react-router-dom";
import { SidebarTabsEnum } from "../../enums/navigation";
import { SidebarNavigationItem } from "../../interfaces/Layout";

export const NavigationTab = (props: {
  navigationItem: SidebarNavigationItem;
  activeTab: SidebarTabsEnum;
  setActiveTab: React.Dispatch<React.SetStateAction<SidebarTabsEnum>>;
}) => {
  const { navigationItem, activeTab, setActiveTab } = props;
  const Icon = navigationItem.icon;

  return (
    <Popover
      placement="right"
      title={null}
      trigger="hover"
      content={<Typography.Text>{navigationItem.title}</Typography.Text>}
    >
      <div className="flex flex-col w-full px-10">
        <Link
          to={navigationItem.href as string}
          className={`flex gap-2 hover:bg-orange-500 hover:rounded-md duration-300 translate-all ease-in p-4 text-center rounded-md text-gray-900
           ${
             activeTab == navigationItem.title
               ? "bg-orange-500 text-green-200"
               : ""
           }`}
          onClick={() => setActiveTab(navigationItem.title as SidebarTabsEnum)}
        >
          <Icon className="text-gray-900" size={20} />
          {navigationItem?.title}
        </Link>
      </div>
    </Popover>
  );
};
