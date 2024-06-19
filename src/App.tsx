import React, { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { Sidebar } from "./components/Layout/Sidebar";
import { SidebarTabsEnum } from "./enums/navigation";
import { Header } from "./components/Layout/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Tasks from "./Pages/tasks";
import Projects from "./Pages/projects";
import Employees from "./Pages/employees";
import Settings from "./Pages/settings";
import Teams from "./Pages/teams";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SidebarTabsEnum.Dashboard);
  useEffect(() => {}, [activeTab]);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <BrowserRouter>
        <div className="flex">
          <Header />
          <Sidebar
            activeTab={SidebarTabsEnum.Dashboard}
            setActiveTab={setActiveTab}
          />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
