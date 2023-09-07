"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

const VerificationModal = ({classnames}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [errorMsg, setErrorMsg] = useState(false);

  const handleOnChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const clearOTP = () => {
    setOtp([...otp.map((v) => "")]);
  };

  const submitOtp = () => {
    if (otp.join("") === "01910") {
      setErrorMsg(false);
      clearOTP();
      closeModal();
      router.push("/admin");
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <>
      <div>
        <button onClick={openModal} className={classnames}>
          Admin
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-40' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto z-50'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-[350px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl text-center font-medium leading-6 text-gray-900'>
                    Verify Status
                  </Dialog.Title>
                  <div className='mt-4 grid grid-cols-5 gap-5'>
                    {otp.map((data, index) => (
                      <input
                        // ref={index === activeOTPIndex ? inputRef : null}
                        type='password'
                        name='otp'
                        key={index}
                        maxLength={1}
                        placeholder='*'
                        value={data}
                        onChange={(e) => handleOnChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                        // onKeyDown={(e) => handleOnKeyDown(e, index)}
                        className='border py-2 rounded-xl flex justify-center items-center text-center text-2xl'
                      />
                    ))}
                  </div>

                  <div className='mt-6 flex items-center justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-5 py-3 text-sm tracking-wider font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>

                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-5 py-3 text-sm tracking-wider font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={clearOTP}>
                      Clear
                    </button>

                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-5 py-3 text-sm tracking-wider font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={submitOtp}>
                      Verify
                    </button>
                  </div>
                  {errorMsg && (
                    <p className='mt-3 text leading-4 text-center text-red-500'>
                      😈 WRONG! If you are not an Admin, stop trying.
                    </p>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VerificationModal;
