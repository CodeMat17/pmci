"use client";

import { Menu, Transition } from "@headlessui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import VerificationModal from "./VerificationModal";

const links = [
  { href: "/", label: "HOME" },
  { href: "/members", label: "MEMBERS" },
  { href: "/wedding-levies", label: "WEDDING LEVIES" },
  { href: "/other-levies", label: "OTHER LEVIES" },
  { href: "/executives", label: "EXECUTIVES" },
  { href: "/absenteeism", label: "ABSENTEEISM" },
  { href: "/lateness", label: "LATENESS" },
];

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Menu as='div' className='relative'>
        {({ open }) => (
          <>
            <Menu.Button
              aria-label='toggle mobile menu'
              className={`text-4xl transition transform duration-500 ${
                open ? "rotate-[360deg] text-red-600" : "text-white"
              }`}>
              {open ? (
                <MdOutlineClose
                  aria-hidden='true'
                  aria-label='mobile close button'
                  className=''
                />
              ) : (
                <BiMenuAltRight
                  aria-hidden='true'
                  aria-label='mobile close button'
                  className=''
                />
              )}
            </Menu.Button>

            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'>
              <Menu.Items
                as='section'
                static
                className='origin-top-right absolute right-0 transition-all duration-500 flex flex-col mt-2 rounded-lg w-72 overflow-hidden shadow-2xl ring-1 ring-black ring-opacity-5 focus:ontline-none bg-slate-500'>
                {links.map((link) => (
                  <Menu.Item
                    as='a'
                    key={link.href}
                    href={link.href}
                    className='px-4 py-3 text-2xl font-medium tracking-wider transition duration-500 hover:bg-purple-300 hover:text-purple-900'>
                    {link.label}
                  </Menu.Item>
                ))}
               
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default MobileMenu;
