"use client";

import LoadingUI from "@/app/loading";
import OtherLevies from "@/components/tabs/OtherLevies";
import WeddingLevies from "@/components/tabs/WeddingLevies";
import Absenteeism from "@/components/tabs/Absenteeism";
import Lateness from '@/components/tabs/Lateness'
import { Tab } from "@headlessui/react";
import { Fragment, Suspense } from "react";
import MembersMonthlyDues from "./MembersMonthlyDues";

const Tabs = ({ profiles, weddings, others, absent, lateness }) => {
  return (
    <Tab.Group as='div' className='w-full '>
      <Tab.List className='text-sm grid mx-auto grid-cols-3 sm:grid-cols-5 md:grid-cols-5 grid-flow-row gap-5 px-8 py-3 bg-gray-200 rounded-xl overflow-hidden'>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`w-20 h-14 rounded-xl transition-all duration-700 outline-none ${
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
              className={`w-20 h-14 rounded-xl transition-all duration-700 outline-none ${
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
              className={`w-20 h-14 rounded-xl transition-all duration-700 outline-none ${
                selected
                  ? "bg-purple-300/40 text-purple-800 shadow-md border border-purple-300"
                  : "bg-gray-300 text-gray-500/60 border"
              }`}>
              Other Levies
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`w-20 h-14 rounded-xl transition-all duration-700 outline-none ${
                selected
                  ? "bg-purple-300/40 text-purple-800 shadow-md border border-purple-300"
                  : "bg-gray-300 text-gray-500/60 border"
              }`}>
              Absent
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`w-20 h-14 rounded-xl transition-all duration-700 outline-none ${
                selected
                  ? "bg-purple-300/40 text-purple-800 shadow-md border border-purple-300"
                  : "bg-gray-300 text-gray-500/60 border"
              }`}>
              Lateness
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
        <Tab.Panel>
          <Absenteeism absent={absent} />
        </Tab.Panel>
        <Tab.Panel>
          <Lateness lateness={lateness} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
