import { Table, Typography } from "antd";
import { useTasksTable } from "./useTasksTable";
import { title } from "process";
import { TablePaginationFooter } from "../../common/TablePaginationFooter";

import { useMemo } from "react";
import { TableHeader } from "./TableHeader";
const DEFAULT_PAGE_SIZE = 20;
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

  const tableHeader = useMemo(
    () => (
      <TableHeader
        title="Tasks"
        totalCount={data?.totalCount || 0}
        searchBox={true}
      />
    ),
    [data, setAppliedFilters]
  );

  return (
    <Table
      scroll={{
        x: "max-content",
        y: -300,
      }}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      title={() => tableHeader}
      loading={isLoading}
      footer={() => {
        return (
          <>
            <TablePaginationFooter
              page={page}
              pageSize={DEFAULT_PAGE_SIZE}
              totalCount={data?.totalCount || 0}
              setPage={setPage}
            />
          </>
        );
      }}
    />
  );
}
