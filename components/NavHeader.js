import Image from "next/image";
import LogoComponent from "./LogoComponent";
import MobileMenu from "./MobileMenu";

const NavHeader = () => {
  return (
    <div className='sticky top-0 z-50 px-4 py-2 bg-blue-950 text-white font-semibold text-lg'>
      <div className="flex items-center justify-between">
        <LogoComponent />
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavHeader;
