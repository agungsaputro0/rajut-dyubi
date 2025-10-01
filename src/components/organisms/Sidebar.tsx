import React, { useState } from "react";
import { Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { FaAtlas, FaBook, FaMapMarkedAlt } from "react-icons/fa";

const { Sider } = Layout;

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: { key: string; label: string; path: string }[];
};

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [openKeys, setOpenKeys] = useState<string | null>(null);
  const { userAuth } = useAuth();
  const navigate = useNavigate();

  const handleRedirect = (path: string) => navigate(path);

  const menuItems: MenuItem[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <HomeOutlined />,
      path: userAuth?.includes(1) ? "/Home" : "/Portal",
    },
    {
      key: "apbn",
      label: "APBN",
      icon: <FaAtlas />,
      children: [
        { key: "apbn-pendapatan", label: "Pendapatan", path: "/apbn/pendapatan" },
        { key: "apbn-pengeluaran", label: "Pengeluaran", path: "/apbn/pengeluaran" },
      ],
    },
    {
      key: "apbd",
      label: "APBD",
      icon: <FaBook />,
      children: [
        { key: "apbd-pendapatan", label: "Pendapatan", path: "/apbd/pendapatan" },
        { key: "apbd-pengeluaran", label: "Pengeluaran", path: "/apbd/pengeluaran" },
        { key: "apbd-pembiayaan", label: "Pembiayaan", path: "/apbd/pembiayaan" },
      ],
    },
    {
      key: "ekonomi",
      label: "Ekonomi Regional",
      icon: <FaMapMarkedAlt />,
      children: [
        { key: "pdrb", label: "PDRB", path: "/ekonomi/pdrb" },
        { key: "inflasi", label: "Inflasi", path: "/ekonomi/inflasi" },
        { key: "tpt", label: "TPT", path: "/ekonomi/tpt" },
        { key: "ntp", label: "NTP", path: "/ekonomi/ntp" },
      ],
    },
  ];

  return (
    <Sider
      width={expanded ? 210 : 80}
      collapsedWidth={80}
      className={`transition-all duration-300 ease-in-out sidebar bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-lg ring-1 ring-white/10 ${
        expanded ? "sidebar-expanded" : ""
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setOpenKeys(null);
      }}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/portal")}
        className="flex items-center mt-4 px-4 ml-[3px] h-12 overflow-hidden cursor-pointer"
      >
        <img src="/assets/img/rce-logo.png" alt="RCE Logo" className="h-10 w-10" />
        {expanded && (
          <span className="ml-2 font-semibold text-white whitespace-nowrap text-[1.2em] transition-all duration-200 align-middle">
            <span className="border-l border-kemenkeuyellow"></span>&nbsp;RCE-Kemenkeu
          </span>
        )}
      </div>

      {/* Menu */}
      <div className="mt-6">
        {menuItems.map((item) => (
          <div key={item.key} className="text-white">
            <div
              className={`flex items-center h-12 ml-2 mr-2 rounded-lg cursor-pointer sidebar-menu-item transition-all duration-300 hover:bg-white/20 ${
                expanded ? "px-4 justify-start" : "justify-center"
              }`}
              onClick={() =>
                item.children
                  ? setOpenKeys(openKeys === item.key ? null : item.key)
                  : item.path && handleRedirect(item.path)
              }
            >
              <div className="text-white text-xl">{item.icon}</div>
              {expanded && <span className="ml-3 text-white whitespace-nowrap">{item.label}</span>}
            </div>

            {/* Submenu */}
            {item.children && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openKeys === item.key && expanded ? "max-h-96" : "max-h-0"
                }`}
              >
                {item.children.map((child) => (
                  <div
                    key={child.key}
                    onClick={() => handleRedirect(child.path)}
                    className="mx-2 h-12 flex items-center cursor-pointer rounded-lg hover:bg-white/20"
                  >
                    {/* Label dengan margin-left khusus */}
                    <span className="ml-[52px] text-sm text-white/90 hover:text-white hover:font-bold whitespace-nowrap">
                      {child.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Sider>
  );
};

export default Sidebar;
