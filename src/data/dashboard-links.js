import {
  VscAccount,
  VscDashboard,
  VscMortarBoard,
  VscSettingsGear,
  VscHeart,
} from "react-icons/vsc";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: VscAccount,
  },
  {
    id: 2,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    icon: VscMortarBoard,
  },
  {
    id: 3,
    name: "My Wishlist",
    path: "/dashboard/wishlist",
    icon: VscHeart,
  },

  {
    id: 5,
    name: "Settings",
    path: "/dashboard/settings",
    icon: VscSettingsGear,
  },
  {
    id: 6,
    name: "Dashboard",
    path: "/dashboard/performance",
    icon: VscDashboard,
  },
];