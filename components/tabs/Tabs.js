"use client";

import LoadingUI from "@/app/loading";
import OtherLevies from "@/components/tabs/OtherLevies";
import WeddingLevies from "@/components/tabs/WeddingLevies";
import { Tab } from "@headlessui/react";
import { Fragment, Suspense } from "react";
import MembersMonthlyDues from "./MembersMonthlyDues";

const Tabs = ({ profiles, weddings, others }) => {
  return (
    <Tab.Group as='div' className='w-full'>
      <Tab.List className='text-sm flex justify-center space-x-2 sm:space-x-6 px-2 py-3 bg-gray-100 rounded-xl sm:rounded-full overflow-hidden'>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-full font-medium text-lg transition-all duration-700 outline-none ${
                selected
                  ? "bg-purple-300/40 text-purple-800 shadow-md border border-purple-300"
                  : "bg-gray-300 text-gray-500/60 border"
              }`}>
              Monthly Dues
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-full font-medium text-lg transition-all duration-700 outline-none ${
                selected
                  ? "bg-purple-300/40 text-purple-800 shadow-md border border-purple-300"
                  : "bg-gray-300 text-gray-500/60 border"
              }`}>
              Wedding Levies
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-full font-medium text-lg transition-all duration-700 outline-none ${
                selected
                  ? "bg-purple-300/40 text-purple-800 shadow-md border border-purple-300"
                  : "bg-gray-300 text-gray-500/60 border"
              }`}>
              Other Levies
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Suspense fallback={<LoadingUI />}>
            <MembersMonthlyDues profiles={profiles} />
          </Suspense>
        </Tab.Panel>
        <Tab.Panel>
          <Suspense fallback={<LoadingUI />}>
            <WeddingLevies weddings={weddings} />
          </Suspense>
        </Tab.Panel>
        <Tab.Panel>
          <Suspense fallback={<LoadingUI />}>
            <OtherLevies others={others} />
          </Suspense>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
