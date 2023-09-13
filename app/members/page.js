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

      <div className='pt-12 space-y-6'>
        {profiles.map((profile) => (
          <Suspense fallback={<LoadingUI />} key={profile.id}>
            <MembersCard {...profile} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
