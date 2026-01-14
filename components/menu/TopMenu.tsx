"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export type IconLink = {
  icon: StaticImageData;
  label: string;
  href: string;
  showOn?: "all" | "md";
};

type NavItem = {
  label: string;
  href: string;
};

type TopMenuProps = {
  navItems: NavItem[];
  iconLinks: IconLink[];
  hamburgerIcon: StaticImageData;
  logo: StaticImageData;
  closeIcon: StaticImageData;
};

const TopMenu: React.FC<TopMenuProps> = ({
  navItems,
  iconLinks,
  hamburgerIcon,
  logo,
  closeIcon,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative">
      {/* Top bar */}
      <div className="bg-red text-white sticky top-0 z-50">
        <div className="container flex items-center">
          {/* Hamburger Button */}
          <button
            className="border-l border-gray-dark last:border-r py-4 px-3 cursor-pointer"
            onClick={toggleMenu}
          >
            <Image src={hamburgerIcon} alt="hamburger icon" width={24} height={24} />
          </button>

          {/* Nav Items */}
          <nav className="flex-1 border-l border-gray-dark last:border-r py-4 pl-6 overflow-x-scroll scrollbar-hide">
            <ul className="inline-flex gap-3 min-w-190">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icon Links */}
          {iconLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`flex border-l border-gray-dark py-4 px-3 gap-2 ${
                link.showOn === "md" ? "hidden md:flex" : ""
              }`}
            >
              <div>
                <Image src={link.icon} alt={link.label} width={24} height={24} />
              </div>
              <span className="font-inter">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Mega Menu Overlay */}
      {menuOpen && (
        <div className="bg-white absolute top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-y-auto">
          {/* Header */}
          <div className="border-b border-gray py-6">
            <div className="max-w-360 mx-auto overflow-hidden">
              <div className="container flex items-center justify-between">
                <div>
                  <Image src={logo} alt="Logo" width={100} height={64} />
                </div>
                <button onClick={toggleMenu}>
                  <Image src={closeIcon} alt="Close Icon" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="bg-white max-w-360 mx-auto overflow-hidden">
            <div className="container py-6">
              <p className="text-center text-gray-600">এখানে তুমি mega menu এর content রাখতে পারো</p>
              {/* চাইলে এখানে তোমার search, category, social links, login buttons ইত্যাদি add করতে পারো */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopMenu;
