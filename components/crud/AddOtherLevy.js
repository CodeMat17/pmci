"use client";

import { Dialog, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddOtherLevy = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [paid_by, setPaidBy] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const addWeddingLevy = async () => {
    setErrorMsg(null);
    setLoading(true);

    if (!paid_by || !title || !amount || !desc) {
      setErrorMsg("All fields are required.");
      setLoading(false);
    } else if (paid_by.length < 4) {
      setErrorMsg("Name cannot be less than 4 characters");
      setLoading(false);
    } else if (paid_by.length > 3 || title || amount || desc) {
      try {
        const { data, error } = await supabase
          .from("others")
          .insert([{ paid_by, title, amount, desc }])
          .select();

        if (data) {
          toast.success(`Record added successfully`, {
            duration: 5000,
            position: "top-center",
            // Styling
            style: {},
            className: "",
          });
          router.refresh();
          setPaidBy("");
          setTitle("");
          setAmount("");
          setDesc("");
          setIsOpen(false);
        }
        if (error) {
          setErrorMsg(error.message);
        }
      } catch (error) {
        console.log("Error Msg:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrorMsg("Something went wrong! Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className='flex justify-center w-full'>
        <button
          onClick={openModal}
          className='w-full font-medium text-purple-900 transition-colors duration-500 bg-purple-200 hover:bg-purple-300 px-5 py-3 rounded-full tracking-wider'>
          ADD OTHER LEVY
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
                    Add OTHER LEVY
                  </Dialog.Title>

                  {errorMsg && (
                    <p className='text-red-600 bg-red-100 px-4 py-1 mt-4 rounded-xl text-center'>
                      {errorMsg}
                    </p>
                  )}
                  <div className='mt-6 w-full space-y-4'>
                    <input
                      value={paid_by}
                      onChange={(e) => setPaidBy(e.target.value)}
                      placeholder="Enter payer's name"
                      className='capitalize border w-full p-3 rounded-xl'
                    />
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter title"
                      className='border w-full p-3 rounded-xl'
                    />
                    <input
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Enter description"
                      className='border w-full p-3 rounded-xl'
                    />
                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder='Enter amount'
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
                      onClick={addWeddingLevy}>
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

export default AddOtherLevy;
