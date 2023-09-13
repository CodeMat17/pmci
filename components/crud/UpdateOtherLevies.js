"use client";

import { Dialog, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";

export const revalidate = 0;

const UpdateOtherLevies = ({ user_id, descp, titlee, amnt, name }) => {
  const supabase = createClientComponentClient();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const [id, setID] = useState(user_id);
  const [paid_by, setPaidBy] = useState(name);
  const [title, setTitle] = useState(titlee);
  const [amount, setAmount] = useState(amnt);
  const [desc, setDesc] = useState(descp);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const updateOthers = async () => {
    setErrorMsg(null);
    setLoading(true);
    try {
      const { error } = await supabase
        .from("others")
        .update({
          paid_by,
          title,
          desc,
          amount,
        })
        .eq("id", id)
        .select();

      if (error) {
        setErrorMsg(error.message);
      }
      if (!error) {
        toast.success("Data updated successfully!", {
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
      <div>
        <button
          onClick={openModal}
          className='text-2xl text-purple-800 bg-purple-100 rounded-full shadow-sm border p-2'>
          <FaUserEdit className='' />
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
                    Update Levy
                  </Dialog.Title>

                  {errorMsg && (
                    <p className='text-red-600 bg-red-100 px-4 py-1 mt-4 rounded-xl text-center'>
                      {errorMsg}
                    </p>
                  )}
                  <div className='mt-6 w-full space-y-2'>
                    <div className=''>
                      <label className=''>Paid by:</label>
                      <input
                        type='text'
                        value={paid_by}
                        onChange={(e) => setPaidBy(e.target.value)}
                        className='border text-gray-500 bg-gray-100 shadow-md w-full px-3 py-2 rounded-xl'
                      />
                    </div>
                    <div className=''>
                      <label className=''>Title:</label>
                      <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border text-gray-500 bg-gray-100 shadow-md w-full px-3 py-2 rounded-xl'
                      />
                    </div>
                    <div className=''>
                      <label className=''>Desc:</label>
                      <input
                        type='text'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className='border text-gray-500 bg-gray-100 shadow-md w-full px-3 py-2 rounded-xl'
                      />
                    </div>
                    <div className=''>
                      <label className=''>Amount(₦)</label>
                      <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='border text-gray-500 bg-gray-100 shadow-md w-full px-3 py-2 rounded-xl'
                      />
                    </div>
                    <div className='pt-4 flex items-center justify-between'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-xl border border-transparent bg-red-100 px-5 py-3 tracking-wider font-medium text-red-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                        onClick={closeModal}>
                        Close
                      </button>

                      <button
                        type='button'
                        className='inline-flex justify-center rounded-xl border border-transparent bg-blue-100 px-5 py-3 tracking-wider font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                        onClick={updateOthers}>
                        {loading ? "Updating..." : "Update"}
                      </button>
                    </div>
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

export default UpdateOtherLevies;
