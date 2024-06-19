import { Badge } from "antd";
import React from "react";

const Task: React.FC = () => {
  return (
    <div className=" flex flex-col bg-gray-300 rounded-md p-2">
      <div className="flex justify-between">
        <h2>Task Title</h2>
        <Badge count={"progress"} showZero color="#faad14" />
      </div>
      <p>
        <span>AssignedTo:</span> name
      </p>
      <p>
        <span>Date added:</span> name
      </p>
    </div>
  );
};

export default Task;
