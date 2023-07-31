import React from "react";
import { CiSearch } from "react-icons/ci";

type StudentsTopProps = {
  onAddStudent: () => void;
};

const StudentsTop: React.FC<StudentsTopProps> = ({ onAddStudent }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Student List</h1>
      </div>
      <div className="flex">
        <div className="relative mr-2 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="h-[37px] w-[212px] rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="absolute right-3 top-3 text-gray-400">
            <CiSearch size={18} color="#C4C4C4" />
          </div>
        </div>

        <button
          className="ml-6 h-11 rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 focus:outline-none"
          onClick={onAddStudent}
        >
          Add New Student
        </button>
      </div>
    </div>
  );
};

export default StudentsTop;
