import { Button, Input, Typography } from "antd";
import { BsSearch } from "react-icons/bs";
import { IoCloseCircleOutline, IoPulseOutline } from "react-icons/io5";
import _ from "lodash";

interface ITableHeaderProps {
  title: string;
  searchBox?: boolean;
  totalCount?: number;
  searchKeyword?: string; // state
  selectedRows?: string[]; // state
  extra?: React.ReactNode;
  bulkActions?: React.ReactNode;
  filters?: any[];
  appliedFilters?: Record<string, string[] | number[] | number | Date>;
  handleChangeSearchKeyword?: (e: any) => void;
  handleChangeFilters?: (
    filters: Record<string, string[] | number[] | number | Date>
  ) => void;
  resetAppliedFilters?: () => void;
}

export const TableHeader = (props: ITableHeaderProps) => {
  const {
    title,
    searchBox,
    totalCount,
    searchKeyword,
    selectedRows,
    extra,
    bulkActions,
    filters,
    appliedFilters,
    handleChangeSearchKeyword,
    handleChangeFilters,
    resetAppliedFilters,
  } = props;

  return (
    <div className="md-4">
      <div className={`flex w-full py-2 justify-between items-center`}>
        <div className="flex gap-4 items-center">
          {!selectedRows?.length && (
            <p className="text-gray-900 font-semibold text-lg lowercase">
              {totalCount} {title}
            </p>
          )}

          {(selectedRows?.length && (
            <p className="text-gray-900 font-semibold text-lg lowercase">
              {selectedRows.length} {title} selected{" "}
              <span className="text-gray-500"> of {totalCount}</span>
            </p>
          )) || <></>}

          {selectedRows?.length ? bulkActions : <></>}
        </div>
        {!selectedRows?.length && (
          <div className={`flex items-center justify-end`}>
            <div className="flex gap-3 items-center">
              {searchBox && (
                <Input
                  placeholder="Search"
                  prefix={<BsSearch className="text-gray-500" />}
                  className="w-90"
                  value={searchKeyword}
                  onChange={handleChangeSearchKeyword}
                  allowClear
                />
              )}
              {((_.isEmpty(appliedFilters) && !totalCount) ||
              !filters?.length ? (
                <></>
              ) : (
                <Button
                  title="Filter"
                  className="flex items-center gap-2 text-primary-700 font-medium"
                  onClick={() => {
                    // dispatch(
                    //   showDrawer({
                    //     drawerType: DRAWER_TYPE_ENUM.VIEW_FILTER_DRAWER_NEW,
                    //     drawerProps: {
                    //       filters,
                    //       appliedFilters,
                    //       onApplyFilters: handleChangeFilters
                    //     }
                    //   })
                    // );
                  }}
                  type="text"
                  // size="small"
                >
                  <IoPulseOutline />
                  Add Filter
                </Button>
              )) || <></>}
              {extra}
            </div>
          </div>
        )}
      </div>
      {appliedFilters &&
        Object.keys(appliedFilters).some((key) =>
          Array.isArray(appliedFilters[key])
            ? (appliedFilters[key] as any[]).length > 0
            : !_.isNil(appliedFilters[key])
        ) && (
          <div className="flex flex-wrap gap-4 items-center mt-3">
            <div className="flex gap-2 items-center">
              <Typography.Text className="text-gray-700 text-sm">
                Applied Filters:
              </Typography.Text>
            </div>
            {Object.keys(appliedFilters).map((key, index) => {
              const filter = filters?.find(
                (filter) => filter.filterName === key
              );
              const filterValues = Array.isArray(appliedFilters[key])
                ? (appliedFilters[key] as any[])
                : [appliedFilters[key]];

              // Map filter values to their corresponding labels
              const filterLabels = filterValues.map((value: any) => {
                return filter?.values?.find((item: any) => item.value === value)
                  ?.label;
              });

              // If filterValues is empty, do not render the button
              if (filterValues.length === 0) {
                return null;
              }

              return (
                <Button
                  size="small"
                  className="text-gray-700 text-sm font-medium py-2 flex gap-1 items-center"
                  key={index}
                >
                  {filter?.filterLabel} is {filterLabels[0]}
                  {filterLabels.length > 1 &&
                    ` and ${filterLabels.length - 1} others`}
                  {
                    <IoCloseCircleOutline
                      onClick={(event) => {
                        event.stopPropagation();
                        const newFilters = { ...appliedFilters };
                        delete newFilters[key];
                        handleChangeFilters && handleChangeFilters(newFilters);
                      }}
                      height={14}
                      width={14}
                      className="text-gray-400 hover:text-gray-700"
                    />
                  }
                </Button>
              );
            })}
          </div>
        )}
    </div>
  );
};
