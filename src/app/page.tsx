"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/authContext";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { LuSquareEqual } from "react-icons/lu";
import dashboardData from "../../utils/dashboardData";

export default function Home() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // Kullanıcı oturumu kontrolü
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // Login sayfasına yönlendir
    }
  }, [router]);

  // if (!sessionStorage.getItem("isLoggedIn")) {
  //   return null; // Görüntülenme durduruldu
  // }

  const Cards = () => dashboardData.map((item) => {
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
        className={`p-4 h-60 rounded-lg flex shadow-sm ${colorVariants[item.color]}`}
      >
        <div className="flex w-full p-5 justify-between">
          <div className="flex flex-col justify-start">
            <IconComponent color={item.iconColor} size={42} />
            <div
              className={`font-medium pt-4 text-sm text-neutral-500  ${
                item.type === "users" ? "text-white" : " text-neutral-500"
              }`}
            >
              {item.name}
            </div>
          </div>
          <div
            className={`flex justify-end items-end text-black text-[30px] font-bold uppercase`}
          >
            {item.total}
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
      <Cards />
    </div>
  );
}
