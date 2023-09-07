import DashboardButtn from "@/components/buttons/DashboardButtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-4rem)] flex justify-center px-4 pt-12 pb-12'>
      <div className='space-y-4 flex flex-col items-center'>
        <div className='relative shadow-xl rounded-full flex items-center justify-center'>
          <div className='border  relative z-30 w-[270px] h-[270px] animate-spin-slow rounded-full overflow-hidden'>
            <Image alt='logo' fill priority src='/pmci_text.png' />
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='relative w-[190px] h-[190px] border rounded-full overflow-hidden p-2'>
              <Image alt='logo' fill priority src='/pmci_logo.png' />
            </div>
          </div>
        </div>

        <div className='text-center -mt-8'>
          <p className='text-lg'>Welcome to the</p>
          <p className='text-3xl'>Pioneer Members Club International</p>
          <p>Mottor: Unity, Peace and Love</p>
          <DashboardButtn />
        </div>
      </div>
    </main>
  );
}
