import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";

const icon_size = 20;

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <BsIcons.BsColumnsGap size={icon_size} />,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <BsIcons.BsClipboardData size={icon_size} />,
  },
  {
    title: "Storage",
    path: "/storage",
    icon: <FiIcons.FiBox size={icon_size} />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <VscIcons.VscAccount size={icon_size} />,
  },
];

export const AdminSidebarData = [
  {
    title: "God View",
    path: "/god_view",
    icon: <GiIcons.GiEyeTarget size={icon_size} />,
  },
];

export const DevSidebarData = [
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineLogin size={icon_size} />,
  },
  {
    title: "Select Store",
    path: "/select_store",
    icon: <FaIcons.FaStoreAlt size={icon_size} />,
  },
  {
    title: "Reset",
    path: "/reset",
    icon: <VscIcons.VscKey size={icon_size} />,
  },
  {
    title: "Build Analytics",
    path: "/build-analytics",
    icon: <BsIcons.BsTools size={icon_size} />,
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: <BsIcons.BsBarChart size={icon_size} />,
  },
];
