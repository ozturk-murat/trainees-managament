import React, { useEffect } from "react";
import { useSidebar } from "../contexts/sidebarContext";
import { sidebarData } from "../../../utils/sidebarData";
import { MdLogout } from "react-icons/md";
import { LuPlayCircle } from "react-icons/lu";
interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  const { activePage, setActivePage, sidebarToogle, setSidebarToogle } =
    useSidebar();

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  };

  const handleToggleSidebar = () => {
    setSidebarToogle(!sidebarToogle);
    toggleSidebar();
  };

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setSidebarToogle(false);
    }
  }, []);

  return (
    <>
      <aside
        className={`left-0 top-0 flex h-screen flex-col overflow-y-auto border-r bg-[#F2EAE1] px-7 py-8 transition-transform rtl:border-l rtl:border-r-0 ${
          sidebarToogle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#" className="mx-auto">
          <div className="flex w-full items-center justify-center">
            <div className="h-4 w-1 bg-amber-300"></div>
            <div className="text-md whitespace-nowrap pl-2 font-bold text-black">
              MANAGE COURSES
            </div>
          </div>
        </a>

        <div className="-mx-2 mb-20 mt-6 flex flex-col items-center">
          <img
            className="mx-2 h-32 w-32 rounded-full object-cover"
            src="https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 text-base font-bold text-black">John Doe</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-yellow-500">Admin</p>
        </div>

        <div className="mt-6 flex flex-1 flex-col justify-between">
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
                  } flex items-center justify-center rounded px-4 py-2 text-gray-700`}
                  href={item.path}
                >
                  <div className="flex w-3/4 justify-start p-2">
                    <IconComponent fontSize={19} />
                    <span className="mx-4 font-medium text-black">
                      {item.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>
        <div className="flex justify-center">
          <a className="flex items-center justify-center">
            <span className="mx-4 text-sm font-medium text-black">Logout</span>
            <MdLogout fontSize={14} />
          </a>
        </div>
      </aside>
      <div
        className={`absolute top-3 flex justify-center transition-transform ${
          sidebarToogle ? "translate-x-80" : "translate-x-4"
        }`}
      >
        <button
          className="flex items-center justify-center"
          onClick={handleToggleSidebar}
        >
          <span className="mx-4 text-sm font-medium text-stone-300">
            {sidebarToogle ? (
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
