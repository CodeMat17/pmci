import Image from "next/image";
import Link from "next/link";

const LogoComponent = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Link
        href='/'
        className='relative bg-white rounded-full flex items-center justify-center'>
        <div className='relative z-30 w-[60px] h-[60px] animate-spin-slow rounded-full overflow-hidden'>
          <Image alt='logo' fill priority src='/pmci_text.png' />
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='relative w-[40px] h-[40px] rounded-full overflow-hidden p-2'>
            <Image alt='logo' fill priority src='/pmci_logo.png' />
          </div>
        </div>
      </Link>
      <Link href='/' className='leading-3 text-white'>
        <p className="text-2xl">PMCI</p>
        <p className='hidden sm:block text-sm font-light'>Unity, Peace And Love</p>
      </Link>
    </div>
  );
};

export default LogoComponent;
