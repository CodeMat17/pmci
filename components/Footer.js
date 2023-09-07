import Link from "next/link";
import LogoComponent from "./LogoComponent";
import VerificationModal from "./VerificationModal";

const Footer = () => {
  return (
    <div className='bg-blue-950 px-4 py-8'>
      <div className='max-w-5xl mx-auto'>
        <LogoComponent />
        <div className='pt-6 sm:pl-16'>
          <p className='text-xl font-semibold text-blue-300'>Tabs</p>
          <div className='py-1 flex flex-col space-y-1 text-blue-400'>
            <div>
              <Link href='/' className='hover:text-gray-300'>
                Home
              </Link>
            </div>

            <div>
              <Link href='/members' className='hover:text-gray-300'>
                Members
              </Link>
            </div>

            <div>
              <Link href='/wedding-levies' className='hover:text-gray-300'>
                Wedding Levies
              </Link>
            </div>

            <div>
              <Link href='/other-levies' className='hover:text-gray-300'>
                Other Levies
              </Link>
            </div>

            <div>
              <Link href='/executives' className=' hover:text-gray-300'>
                Executies
              </Link>
            </div>

            <VerificationModal classnames='hover:text-gray-300' />
          </div>
        </div>
        <p className='mt-8 text-gray-400 text-center text-sm'>
          This application is developed by{" "}
          <Link
            href='https://matthewchukwu.com.ng'
            target='_blank'
            className='text-blue-500 border-b border-blue-500'>
            codeMat.
          </Link>{" "}
          Contact us for a{" "}
          <a
            href='mailto:codemat.biz@gmail.com'
            className='text-blue-500 border-b border-blue-500'>
            business talk
          </a>
          .
        </p>
        <p className='text-center text-white mt-4 border-t border-dashed border-gray-600 pt-4'>
          {" "}
          &copy; PMCI 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
