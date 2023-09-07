"use client";

import { Dialog, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Fragment, useState } from "react";

const AddMember = () => {
  const supabase = createClientComponentClient();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const [biz, setBiz] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const addMember = async () => {
    setErrorMsg(null);
    setLoading(true);

    if (!username || !position) {
      setErrorMsg("Name and position fields are required.");
      setLoading(false);
    } else if (username.length < 4) {
      setErrorMsg('Name cannot be less than 4 characters')
    } else if (username.length >= 4 || position) {
      
    }

    //  if (username || position) {
    //    setErrorMsg("filled");
    //    setLoading(false);
    //  }
    // const { data, error } = await supabase
    //   .from('profiles')
    //   .insert([
    //     { some_column: 'someValue', other_column: 'otherValue' },
    //   ])
    //   .select()
  };

  return (
    <>
      <div className='flex justify-center py-4'>
        <button
          onClick={openModal}
          className='text-white transition-colors duration-500 bg-blue-900 hover:bg-blue-600 px-5 py-3 rounded-full tracking-wider'>
          ADD MEMBER
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
                    className='text-2xl text-center font-medium leading-6 text-gray-900'>
                    Add A Member
                  </Dialog.Title>

                  {errorMsg && (
                    <p className='text-red-600 bg-red-100 px-4 py-1 mt-4 rounded-xl text-center'>
                      {errorMsg}
                    </p>
                  )}
                  <div className='mt-6 w-full space-y-4'>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter member's name here"
                      className='border w-full p-3 rounded-xl'
                    />
                    <input
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      placeholder="Enter member's position here"
                      className='border w-full p-3 rounded-xl'
                    />
                    <input
                      value={biz}
                      onChange={(e) => setBiz(e.target.value)}
                      placeholder="Enter member's biz title here"
                      className='border w-full p-3 rounded-xl'
                    />
                  </div>

                  <div className='mt-6 flex items-center justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-xl border border-transparent bg-red-100 px-5 py-3 tracking-wider font-medium text-red-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>

                    <button
                      type='button'
                      className='inline-flex justify-center rounded-xl border border-transparent bg-blue-100 px-5 py-3 tracking-wider font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={addMember}>
                      {loading ? "Adding..." : "Add"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddMember;
