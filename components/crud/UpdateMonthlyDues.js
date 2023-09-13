"use client";

import { Dialog, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiMessageSquareEdit } from "react-icons/bi";

export const revalidate = 0;

const UpdateMonthlyDues = ({
  user_id,
  due_2020,
  due_2021,
  due_2022,
  due_2023,
  due_2024,
  due_2025,
  due_2026,
}) => {
  const supabase = createClientComponentClient();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [id, setID] = useState(user_id)
  const [dues_2020, setDues2020] = useState(due_2020);
  const [dues_2021, setDues2021] = useState(due_2021);
  const [dues_2022, setDues2022] = useState(due_2022);
  const [dues_2023, setDues2023] = useState(due_2023);
  const [dues_2024, setDues2024] = useState(due_2024);
  const [dues_2025, setDues2025] = useState(due_2025);
  const [dues_2026, setDues2026] = useState(due_2026);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const updateMonthlyDues = async () => {
    setErrorMsg(null);
    setLoading(true);
    try {
      const { error } = await supabase
        .from("monthlydues")
        .update({
          dues_2020,
          dues_2021,
          dues_2022,
          dues_2023,
          dues_2024,
          dues_2025,
          dues_2026,
        })
        .eq("id", id)
        .select();

      if (error) {
        setErrorMsg(error.message);
      }
      if (!error) {
        toast.success("Dues updated successfully!", {
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

  return (
    <>
      <Toaster />
      <div className=' py-2 '>
        <button
          onClick={openModal}
          className='w-full flex items-center justify-center space-x-2 text-white transition-colors duration-500 bg-purple-800 hover:bg-purple-700 px-6 py-3 rounded-xl tracking-wider'>
          <BiMessageSquareEdit /> <span>Update Monthly Dues</span>
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
                    Update Monthly Dues
                  </Dialog.Title>

                  {errorMsg && (
                    <p className='text-red-600 bg-red-100 px-4 py-1 mt-4 rounded-xl text-center'>
                      {errorMsg}
                    </p>
                  )}
                  <div className='mt-6 w-full space-y-4'>
                    <div className='grid grid-cols-4 gap-4'>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2020</label>
                        <input
                          type='number'
                          value={dues_2020}
                          onChange={(e) => setDues2020(e.target.value)}
                          //   placeholder="Enter member's name here"
                          className='border capitalize text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2021</label>
                        <input
                          type='number'
                          value={dues_2021}
                          onChange={(e) => setDues2021(e.target.value)}
                          //   placeholder="Enter member's name here"
                          className='border text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2022</label>
                        <input
                          type='number'
                          value={dues_2022}
                          onChange={(e) => setDues2022(e.target.value)}
                          //   placeholder="Enter member's name here"
                          className='border text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2023</label>
                        <input
                          type='number'
                          value={dues_2023}
                          onChange={(e) => setDues2023(e.target.value)}
                          //   placeholder="Enter member's name here"
                          className='border text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2024</label>
                        <input
                          type='number'
                          value={dues_2024}
                          onChange={(e) => setDues2024(e.target.value)}
                          //   placeholder="Enter member's name here"
                          className='border text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2025</label>
                        <input
                          type='number'
                          value={dues_2025}
                          onChange={(e) => setDues2025(e.target.value)}
                          //   placeholder="Enter member's name here"
                          className='border text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <label className=''>2026</label>
                        <input
                          type='number'
                          value={dues_2026}
                          onChange={(e) => setDues2026(e.target.value)}
                          // placeholder="2026"
                          className='border text-center text-gray-500 bg-gray-100 shadow-md w-full p-3 rounded-xl'
                        />
                      </div>
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
                      onClick={updateMonthlyDues}>
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

export default UpdateMonthlyDues;
