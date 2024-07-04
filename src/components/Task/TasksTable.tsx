import { Table, Typography } from "antd";
import { useTasksTable } from "./useTasksTable";
import { title } from "process";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Assigned To",
    dataIndex: "assignedTo",
    key: "assignedTo",
  },
  {
    title: "Due In",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

export function TasksTable() {
  const {
    data,
    isLoading,
    page,
    setPage,
    size,
    setSize,
    searchKeyword,
    setSearchKeyword,
    appliedFilters,
    setAppliedFilters,
    debouncedSearchKeyword,
    setDebouncedSearchKeyword,
  } = useTasksTable();

  const dataSource = data?.tasks?.map((task: any) => {
    return {
      key: task._id,
      title: <Typography>{task.title}</Typography>,
    };
  });

  return <Table columns={columns} dataSource={dataSource} />;
}
