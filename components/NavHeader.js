import DesktopMenu from "./DesktopMenu";
import LogoComponent from "./LogoComponent";
import MobileMenu from "./MobileMenu";

const NavHeader = () => {
  return (
    <div className='sticky top-0 z-50 px-4 py-2 bg-purple-900 text-white font-semibold text-lg'>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <LogoComponent />
        <div className="flex items-center">
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
