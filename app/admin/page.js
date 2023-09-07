// "use client";

import PageTitle from "@/components/PageTitle";
import SignOut from "@/components/buttons/SignOut";
import AddMember from "@/components/crud/AddMember";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export const dynamic = "force-dynamic";// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
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

  return (
    <div className='min-h-[90vh] px-4 py-16'>
      <div className='relative max-w-md mx-auto'>
        {/* <pre>{JSON.stringify(user_id, null, 2)}</pre> */}

        <PageTitle title='Admin Dashboard' />

        <AddMember />

        <p className='mt-2 text-2xl font-normal text-center'>
          Manage Members Contributions
        </p>

        <div className='py-8 '>
          <div className='border rounded-2xl shadow-md pl-4 flex items-center justify-between overflow-hidden'>
            {/* <div className='flex items-baseline'>
              <p className='pr-2 text-blue-600 text-sm'>1</p>
              <p className='truncate'>Matthew Chukwu Anthony Chijioke</p>
            </div> */}

            {/* <Link
              href={`/admin/${12}`}
              className='border border-blue-900 p-5 bg-blue-900 text-white'>
              Update
            </Link> */}
          </div>
        </div>

        <div className='absolute -top-12 right-0'>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
