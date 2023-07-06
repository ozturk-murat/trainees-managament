"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dashboardData from "../../utils/dashboardData";
import { useSidebar } from "./contexts/sidebarContext";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // User login check
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  // if (!sessionStorage.getItem("isLoggedIn")) {
  //   return null;
  // }

  const Cards = () =>
    dashboardData.map((item) => {
      const IconComponent = item.icon;

      const colorVariants: { [key: string]: string } = {
        sky: "bg-sky-50",
        fuchsia: "bg-fuchsia-50",
        amber: "bg-amber-50",
        "yellow-amber": "bg-gradient-to-r from-yellow-500 to-amber-300",
      };

      return (
        <div
          key={item.type}
          className={`flex h-60 rounded-lg p-4 shadow-sm ${
            colorVariants[item.color]
          }`}
        >
          <div className="flex w-full justify-between p-5">
            <div className="flex flex-col justify-start">
              <IconComponent color={item.iconColor} size={42} />
              <div
                className={`pt-4 text-sm font-medium text-neutral-500  ${
                  item.type === "users" ? "text-white" : " text-neutral-500"
                }`}
              >
                {item.name}
              </div>
            </div>
            <div
              className={`flex items-end justify-end text-[30px] font-bold uppercase text-black`}
            >
              {item.total}
            </div>
          </div>
        </div>
      );
    });

  return (
    <div
      className={`grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-4`}
    >
      <Cards />
    </div>
  );
}
