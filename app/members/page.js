import MembersCard from "@/components/MembersCard";
import PageTitle from "@/components/PageTitle";
import supabase from "@/utils/supabase";
import { Suspense } from "react";
import LoadingUI from "../loading";

export const revalidate = 0;
const MembersList = async () => {
  const { data: profiles } = await supabase
    .from("profiles")
    .select(`id, username, position, biz, biz2`)
    .order("username", { ascending: true });

  return (
    <div className='py-12 px-4 max-w-lg mx-auto'>
      <PageTitle title='Members List' />

      {/* <pre>{JSON.stringify(profiles, null, 2)}</pre> */}

      {profiles === null ? <div className="text-center py-12">Database is asleep after inactivity for a while. Contact the developer to wake me up.</div> :

        <div className='pt-12 space-y-6'>
          {profiles && profiles.length < 1 ? (
            <p className="text-center pb-32">No data found or database has gone to sleep. Contact the developer to wake it up.</p>
          ) : (
            profiles && profiles.map((profile) => (
              <Suspense fallback={<LoadingUI />} key={profile.id}>
                <MembersCard {...profile} />
              </Suspense>
            ))
          )}
        </div>
      }
    </div>
  );
};

export default MembersList;
