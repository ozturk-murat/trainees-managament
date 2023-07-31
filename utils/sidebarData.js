import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { LuSquareEqual } from "react-icons/lu";

export const PAGE_SIZE = 5;

const sidebarData = [
  { id: 1, name: "Home", path: "/", icon: AiOutlineHome },
  { id: 2, name: "Course", path: "/course", icon: BsBookmark },  {
    id: 3,
    name: "Students",
    path: `/students?limit=${PAGE_SIZE}`, // Include the pageSize query parameter
    icon: PiGraduationCap,
  },
  { id: 4, name: "Payment", path: "/payment", icon: RiMoneyDollarBoxLine },
  { id: 5, name: "Report", path: "/report", icon: HiOutlineDocumentDownload },
  { id: 6, name: "Settings", path: "/settings", icon: LuSquareEqual },
];

export { sidebarData };
