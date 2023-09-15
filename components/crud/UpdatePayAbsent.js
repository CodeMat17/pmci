"use client";

import { Dialog, Switch, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { FaAmazonPay } from "react-icons/fa";

export const revalidate = 0;

const UpdatePayAbsent = ({ user_id, paid }) => {
  const supabase = createClientComponentClient();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(paid);
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const [id, setID] = useState(user_id);
  const [has_paid, setHasPaid] = useState(paid);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const updatePayAbsenteeism = async () => {
    setErrorMsg(null);
    setLoading(true);
    try {
      const { error } = await supabase
        .from("absenteeism")
        .update({
          has_paid,
        })
        .eq("id", id)
        .select();

      if (error) {
        setErrorMsg(error.message);
      }
      if (!error) {
        toast.success("Payment status updated successfully!", {
          duration: 5000,
          position: "top-center",
        });
        setLoading(false);
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
          <FaAmazonPay />
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
                    Confirm / Unconfirm Payment
                  </Dialog.Title>

                  {errorMsg && (
                    <p className='text-red-600 bg-red-100 px-4 py-1 mt-4 rounded-xl text-center'>
                      {errorMsg}
                    </p>
                  )}
                  <div className='mt-6 w-full space-y-2'>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                      <p>Payment status: {has_paid ? "Paid" : "Not Paid"}</p>
                      <Switch
                        checked={has_paid}
                        onChange={setHasPaid}
                        className={`${has_paid ? "bg-green-500" : "bg-gray-400"}
          relative inline-flex h-[28px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                        <span className='sr-only'>Use setting</span>
                        <span
                          aria-hidden='true'
                          className={`flex items-center justify-center ${
                            has_paid ? "translate-x-5" : "translate-x-0"
                          }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}>
                          {loading ? (
                            <AiOutlineLoading className='text-lg font-bold text-yellow-500 animate-spin' />
                          ) : (
                            <BiCheck
                              className={`text-xl ${
                                has_paid ? "text-green-500" : "text-gray-300"
                              }`}
                            />
                          )}
                        </span>
                      </Switch>
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
                        onClick={updatePayAbsenteeism}>
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

export default UpdatePayAbsent;
