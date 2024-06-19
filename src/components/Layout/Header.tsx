import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { IoPersonCircleSharp } from "react-icons/io5";

export function Header() {
  const items: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Profile
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Logout
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];

  return (
    <div className="absolute top-0 right-500 bg-Slate-100 z-0 w-full h-20 pl-72 pr-4  overflow-hidden shadow-2xl shadow-blue-500/20">
      <div className="flex justify-between items-center h-full ">
        <div>
          <h2 className="text-2xl">Good Morning, Sanjeev</h2>
          <p>Hope you're doing good</p>
        </div>
        <div className="flex gap-4 justify-center items-center ">
          <input type="text" width={100} />
          <BsSearch size={20} />
          <IoMdNotificationsOutline size={24} />
          <Avatar size={54} icon={<IoPersonCircleSharp size={40} />} />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
