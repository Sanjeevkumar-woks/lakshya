import { useState } from "react";
import { useQuery } from "react-query";
import { TasksService } from "../../services/TaskService";

export function useTasksTable() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({});
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] = useState("");
  const DEFAULT_PAGE_SIZE = 10;

  const { data, isLoading } = useQuery(
    [
      TasksService.GET_TASKS,
      {
        size: DEFAULT_PAGE_SIZE,
        page,
        ...appliedFilters,
        searchKeyword: debouncedSearchKeyword,
      },
    ],
    () => {
      return TasksService.getTask({
        page,
        size: DEFAULT_PAGE_SIZE,
        ...appliedFilters,
        searchKeyword: debouncedSearchKeyword,
      });
    }
  );
  console.log(data);

  return {
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
  };
}
