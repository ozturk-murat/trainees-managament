import React, { useEffect, useState } from "react";
import { useSidebar } from "../contexts/sidebarContext";
import { sidebarData } from "../../../utils/sidebarData";
import { MdLogout } from "react-icons/md";
import { LuPlayCircle } from "react-icons/lu";

function Sidebar() {
  const { activePage, setActivePage, isSidebarOpen, setIsSidebarOpen } =
    useSidebar();

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    <>
      <aside
        className={`flex flex-col w-72 h-screen px-7 py-8 overflow-y-auto bg-[#F2EAE1] border-r rtl:border-r-0 rtl:border-l left-0 top-0 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#" className="mx-auto">
          <div className="flex justify-center items-center w-full">
            <div className="w-1 h-4 bg-amber-300"></div>
            <div className="text-md font-bold pl-2 whitespace-nowrap text-black">
              MANAGE COURSES
            </div>
          </div>
        </a>

        <div className="flex flex-col items-center mt-6 -mx-2 mb-20">
          <img
            className="object-cover w-32 h-32 mx-2 rounded-full"
            src="https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 text-base font-bold text-black">John Doe</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-yellow-500">Admin</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {sidebarData.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.id}
                  onClick={() => handleSetActivePage(item.path)}
                  className={`${
                    activePage === item.path
                      ? "bg-yellow-500"
                      : "bg-transparent"
                  } flex items-center justify-center px-4 py-2 text-gray-700 rounded`}
                  href={item.path}
                >
                  <div className="flex w-3/4 justify-start p-2">
                    <IconComponent fontSize={19} />
                    <span className="mx-4 text-black font-medium">
                      {item.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>
        <div className="flex justify-center">
          <a className="flex justify-center items-center">
            <span className="mx-4 text-black text-sm font-medium">Logout</span>
            <MdLogout fontSize={14} />
          </a>
        </div>
      </aside>
      <div
        className={`flex justify-center absolute top-3 transition-transform ${
          isSidebarOpen ? "translate-x-80" : "translate-x-4"
        }`}
      >
        <button
          className="flex justify-center items-center"
          onClick={handleToggleSidebar}
        >
          <span className="mx-4 text-sm font-medium text-stone-300">
            {/* Toggle Icon */}
            {isSidebarOpen ? (
              <LuPlayCircle fontSize={18} className="rotate-180" />
            ) : (
              <LuPlayCircle fontSize={18} />
            )}
          </span>
        </button>
      </div>
    </>
  );
}

export default Sidebar;
