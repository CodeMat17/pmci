"use client";

import Link from "next/link";

const links = [
  { id: 1, href: "/", label: "HOME" },
  { id: 2, href: "/members", label: "MEMBERS" },
  { id: 3, href: "/wedding-levies", label: "WEDDING LEVIES" },
  { id: 4, href: "/other-levies", label: "OTHER LEVIES" },
  { id: 4, href: "/absenteeism", label: "ABSENTEEISM" },
  { id: 4, href: "/lateness", label: "LATENESS" },
];

const DesktopMenu = () => {
  return (
    <div className='hidden lg:flex space-x-1'>
      {links.map((link) => (
        <div
          key={link.id}
          className='transition-colors duration-700 text-sm tracking-wider text-white font-medium hover:bg-purple-800 hover:text-white p-2 rounded-xl whitespace-nowrap'>
          <Link href={link.href}>{link.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;
