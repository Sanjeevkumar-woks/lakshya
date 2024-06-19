import { Breadcrumb, Typography } from "antd";
import React from "react";
import Task from "../components/Task/task";

const Tasks: React.FC = () => {
  return (
    <div className=" pt-20 m-8 h-full p-4">
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="/tasks">Tasks</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-2xl ">Project Name</h1>
      <div className="flex flex-col h-screen">
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="bg-gray-200 rounded-md flex-1 md:flex-grow-0 md:basis-1/6 p-2">
            <p>
              <span className="font-bold">Date added:</span>
              <small className="text-sm">12/12/2024</small>
            </p>
            <p>
              <span className="font-bold">Deadline:</span>
              <small className="text-sm">12/12/2024</small>
            </p>
            <p>
              <span className="font-bold">Participants:</span>
              <small className="text-sm">sanjeev,manju</small>
            </p>
          </div>

          <div className="bg-gray-200 rounded-md flex-2 md:flex-grow-0 md:basis-3/5 p-2">
            <small>Description:</small>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium maiores expedita consequatur eum! Ea beatae
              repudiandae consectetur cum nulla, sint quod dolorem modi eum
              necessitatibus ullam officiis odit obcaecati incidunt!
            </Typography>
          </div>
          <div className="bg-gray-200 rounded-md flex-1 md:flex-grow-0 md:basis-1/6 p-2 ">
            <p className="flex items-center">
              <span className="font-bold">All tasks:</span>
              <small className="ml-2">26</small>
            </p>
            <p className="flex items-center">
              <span className="font-bold">Done:</span>
              <small className="ml-2">10</small>
            </p>
            <p className="flex items-center">
              <span className="font-bold">Frozen:</span>
              <small className="ml-2">2</small>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 h-3/4 pt-4">
          <div className=" h-full rounded-md flex-1 p-4">
            <div className="bg-gray-200  rounded-md flex-1 p-4">
              <p className="font-bold text-2xl">Todo</p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Task />
              <Task />
            </div>
          </div>
          <div className=" h-full rounded-md flex-1 p-4">
            <div className="bg-gray-200  rounded-md flex-1 p-4">
              <p className="font-bold text-2xl">In Process</p>
            </div>

            <div className="flex flex-col gap-4  mt-4 ">
              <Task />
              <Task />
            </div>
          </div>
          <div className=" h-full rounded-md flex-1 p-4">
            <div className="bg-gray-200  rounded-md flex-1 p-4">
              <p className="font-bold text-2xl">Closed</p>
            </div>

            <div className="flex flex-col gap-4  mt-4">
              <Task />
              <Task />
            </div>
          </div>
          <div className=" h-full rounded-md flex-1 p-4">
            <div className="bg-gray-200  rounded-md flex-1 p-4">
              <p className="font-bold text-2xl">Frozen</p>
            </div>

            <div className="flex flex-col gap-4  mt-4 ">
              <Task />
              <Task />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
