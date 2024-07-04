import React from "react";
import { TasksTable } from "../components/Task/TasksTable";

const Employees: React.FC = () => {
  return (
    <div className="py-24 m-10">
      <TasksTable />
    </div>
  );
};

export default Employees;
