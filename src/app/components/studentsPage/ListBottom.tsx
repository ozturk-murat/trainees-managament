import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ListBottomProps {
  rowsPerPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const ListBottom: React.FC<ListBottomProps> = ({
  rowsPerPage,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="items-right mt-4 flex justify-end">
      <div className="flex w-4/12 items-center justify-around text-gray-400">
        <div className="ml-4">
          <label htmlFor="rowsPerPage" className="text-sm">
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            className="bg-transparen ml-1 p-2"
            value={rowsPerPage}
            onChange={(e) => onPageChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="px-2 text-gray-400">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full p-2 hover:bg-gray-200 disabled:opacity-50"
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-full p-2 hover:bg-gray-200 disabled:opacity-50"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default ListBottom;
