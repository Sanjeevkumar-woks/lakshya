import { Pagination, PaginationProps } from "antd";
import React from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

interface ITableFooterProps {
  page: number;
  totalCount?: number;
  setPage: (page: number) => void;
  pageSize: number;
}

export const TablePaginationFooter = (payload: ITableFooterProps) => {
  const { page, totalCount, setPage, pageSize } = payload;

  const itemRender: PaginationProps["itemRender"] = (
    current,
    type,
    originalElement
  ) => {
    if (type == "page") {
      // @ts-ignore
      return React.cloneElement(originalElement, {
        // @ts-ignore
        className: `${originalElement.props.className} ${
          current === page ? "bg-gray-200" : ""
        }`,
      });
    }
    if (type === "prev") {
      return (
        <div className="flex justify-center items-center w-full h-full ant-pagination-item hover:rounded-l-8">
          <BsArrowBarLeft />
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className="flex justify-center items-center w-full h-full ant-pagination-item border-0 hover:rounded-r-8">
          <BsArrowBarRight />
        </div>
      );
    }
    return originalElement;
  };

  return (
    <div className="flex w-full justify-start items-center">
      <Pagination
        current={page}
        total={totalCount}
        onChange={(page) => setPage(page)}
        showSizeChanger={false}
        hideOnSinglePage={true}
        pageSize={pageSize}
        defaultPageSize={10}
        rootClassName="text-center"
        itemRender={itemRender}
      />
    </div>
  );
};
