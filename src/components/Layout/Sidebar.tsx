import Link from "antd/es/typography/Link";
import { SidebarTabsEnum } from "../../enums/navigation";
import { SidebarNavigationItem } from "../../interfaces/Layout";
import { SIDEBAR_NAVIGATIONS } from "../../constants/Layout";
import { NavigationTab } from "./NavigationTab";
import lakshya from "../../lakshya.png";
import { Input } from "antd";
export interface ISidebarProps {
  activeTab: SidebarTabsEnum;
  setActiveTab: React.Dispatch<React.SetStateAction<SidebarTabsEnum>>;
}

export function Sidebar(props: ISidebarProps) {
  const { activeTab, setActiveTab } = props;

  return (
    <>
      <div
        className={`sticky left-0 top-0 bg-Slate-100 z-10 flex flex-col items-center h-screen w-64 py-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]`}
      >
        <Link href={"/"}>
          <img
            className="rounded-md bg-slate-400"
            src={lakshya}
            width={150}
            height={140}
            alt="lakshya"
          />
        </Link>
        <div className="flex flex-col justify-between h-full w-full mt-12">
          <div className="flex flex-col gap-2 items-center w-full">
            {SIDEBAR_NAVIGATIONS.map((item, itemIndex) => {
              return (
                <NavigationTab
                  navigationItem={item}
                  activeTab={activeTab}
                  key={itemIndex}
                  setActiveTab={setActiveTab}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
