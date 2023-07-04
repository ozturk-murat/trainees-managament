import { AiOutlineUser } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const dashboardData = [
  {
    id: 1,
    type: "students",
    name: "Students",
    path: "/students",
    icon: PiGraduationCap,
    color: "sky",
    total: "243",
    iconColor: "#74C1ED",
  },
  {
    id: 2,
    type: "course",
    name: "Course",
    path: "/course",
    icon: BsBookmark,
    color: "fuchsia",
    total: "13",
    iconColor: "#EE95C5",
  },
  {
    id: 3,
    type: "payments",
    name: "Payments",
    path: "/payments",
    icon: RiMoneyDollarBoxLine,
    color: "amber",
    total: "556.000₺",
    iconColor: "#F6C762",
  },
  {
    id: 4,
    type: "users",
    name: "Users",
    path: "/users",
    icon: AiOutlineUser,
    color: "yellow-amber",
    total: "3",
    iconColor: "#FFFFFF",
  },
];

export default dashboardData;
