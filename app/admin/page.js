// "use client";

import PageTitle from "@/components/PageTitle";
import SignOut from "@/components/buttons/SignOut";
import AddAbsentLog from "@/components/crud/AddAbsentLog";
import AddLatenessLog from "@/components/crud/AddLatenessLog";
import AddMember from "@/components/crud/AddMember";
import AddOtherLevy from "@/components/crud/AddOtherLevy";
import AddWeddingLevy from "@/components/crud/AddWeddingLevy";
import Tabs from "@/components/tabs/Tabs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic"; // import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";

const AdminPage = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user_id = session.user.id;

  if (session.user.id !== process.env.NEXT_PUBLIC_USER_ID) {
    return (
      <div className='px-8 flex items-center justify-center min-h-[70vh] text-center'>
        You do not have the permission to be here.
      </div>
    );
  }

  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, username")
    .order("username", { ascending: true })
  .order('created_at', {ascending: true})

  const { data: weddings } = await supabase
    .from("weddinglevies")
    .select("id, username, created_at, beneficiary, amount")
    .order("beneficiary", { ascending: true });

  const { data: others } = await supabase
    .from("others")
    .select("*")
    .order("title", { ascending: true });

   const { data: absent } = await supabase
     .from("absenteeism")
     .select("*")
     .order("created_at", { ascending: false });
  
   const { data: lateness } = await supabase
     .from("lateness")
     .select("*")
     .order("created_at", { ascending: false });
  
  return (
    <div className='min-h-[90vh] px-4 py-16'>
      <div className='relative max-w-2xl mx-auto'>
        {/* <pre>{JSON.stringify(absent, null, 2)}</pre> */}

        <PageTitle title='Admin Dashboard' />

        <div className='pb-6 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-3'>
          <AddMember />
          <AddWeddingLevy />
          <AddOtherLevy />
          <AddAbsentLog />
          <AddLatenessLog />
        </div>

        <p className='mt-2 text-2xl font-normal text-center text-purple-900'>
          Manage Members Contributions
        </p>

        <div className='py-8 '>
          <Tabs profiles={profiles} weddings={weddings} others={others} absent={absent} lateness={lateness} />
        </div>

        <div className='absolute -top-12 right-0'>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
