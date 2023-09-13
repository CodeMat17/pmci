import supabase from "@/utils/supabase";

import MonthlyDuesCard from "@/components/MonthlyDuesCard";
import PageTitle from "@/components/PageTitle";
import { notFound } from "next/navigation";
import { IoMdContact } from "react-icons/io";

export const revalidate = 0;

const MemberStatus = async ({ params: { id } }) => {
  const { data: profile } = await supabase
    .from("profiles")
    .select(
      "id, username, position, monthlydues(id, dues_2020, dues_2021, dues_2022, dues_2023, dues_2024, dues_2025, dues_2026)"
    )
    .order("username", { ascending: false })
    .match({ id })
    .single();

  if (!profile) {
    notFound;
  }

  return (
    <div className='px-4 py-12 max-w-xl mx-auto'>
      <PageTitle title='Financial Status' />

    {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}

      <div className='pt-6 space-y-6 divide-y divide-dashed divide-gray-300'>
        <div>
          <IoMdContact size={60} className='text-purple-950' />
          <h1 className='text-xl uppercase truncate text-purple-800'>{profile.username}</h1>
          <p className='capitalize text-lg text-purple-800/70'>{profile.position}</p>
        </div>
        <div className='pt-6'>
          <h2 className='text-center text-2xl text-purple-950'>Monthly Dues</h2>         

          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8 py-6'>
            <MonthlyDuesCard year='2020' dues={profile.monthlydues.dues_2020} />
            <MonthlyDuesCard year='2021' dues={profile.monthlydues.dues_2021} />
            <MonthlyDuesCard year='2022' dues={profile.monthlydues.dues_2022} />
            <MonthlyDuesCard year='2023' dues={profile.monthlydues.dues_2023} />
            <MonthlyDuesCard year='2024' dues={profile.monthlydues.dues_2024} />
            <MonthlyDuesCard year='2025' dues={profile.monthlydues.dues_2025} />
            <MonthlyDuesCard year='2026' dues={profile.monthlydues.dues_2026} />
          </div>
        </div>      

      </div>
    </div>
  );
};

export default MemberStatus;
