"use client";

import { Dialog, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiMessageSquareEdit } from "react-icons/bi";

export const revalidate = 0;

const UpdateProfile = ({ id, name, positn, bis, bis2 }) => {
  const supabase = createClientComponentClient();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [username, setUsername] = useState(name);
  const [position, setPosition] = useState(positn);
  const [biz, setBiz] = useState(bis);
  const [biz2, setBiz2] = useState(bis2);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const updateProfile = async () => {
    setErrorMsg(null);
    setLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ username, position, biz, biz2 })
        .eq("id", id)
        .select();

      if (error) {
        setErrorMsg(error.message);
      }
      if (!error) {
        toast.success("Profile data updated successfully!", {
          duration: 5000,
          position: "top-center",
        });
        setIsOpen(false);
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {})

  return (
    <>
      <Toaster />
      <div className=' py-2'>
        <button
          onClick={openModal}
          className='flex items-center  space-x-2 text-white transition-colors duration-500 bg-purple-900 hover:bg-purple-800 px-6 py-2 rounded-xl tracking-wider'>
          Update Profile
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
                    Update Profile Info
                  </Dialog.Title>

                  {errorMsg && (
                    <p className='text-red-600 bg-red-100 px-4 py-1 mt-4 rounded-xl text-center'>
                      {errorMsg}
                    </p>
                  )}
                  <div className='mt-6 w-full space-y-2'>
                    <div>
                      <label className='text-sm'>Username</label>
                      <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter member's name here"
                        className='border capitalize text-gray-500 w-full px-3 py-2 rounded-xl'
                      />
                    </div>
                    <div>
                      <label className='text-sm'>Position</label>
                      <input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Enter member's position here"
                        className='border capitalize text-gray-500 w-full px-3 py-2 rounded-xl'
                      />
                    </div>

                    <div>
                      <label className='text-sm'>Biz title 1 </label>
                      <input
                        value={biz}
                        onChange={(e) => setBiz(e.target.value)}
                        placeholder="Enter member's biz title here"
                        className='border text-gray-500 w-full px-3 py-2 rounded-xl'
                      />
                    </div>
                    <div>
                      <label className='text-sm'>Optional: Biz title 2</label>
                      <input
                        value={biz2}
                        onChange={(e) => setBiz2(e.target.value)}
                        placeholder="Enter member's 2nd biz title if any"
                        className='border text-gray-500 w-full px-3 py-2 rounded-xl'
                      />
                    </div>
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
                      onClick={updateProfile}>
                      {loading ? "Updating..." : "Update"}
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

export default UpdateProfile;
