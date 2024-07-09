import React from "react";
import { Settings } from "../components/Settings/Settings";

const SettingsPage: React.FC = () => {
  return (
    <div className="py-24 m-10">
      <Settings />
      <h2>Settings Page</h2>
      <p>This is the Settings Page.</p>
    </div>
  );
};

export default Settings;
