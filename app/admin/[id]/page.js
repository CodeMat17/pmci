import LoadingUI from "@/app/loading";
import PageTitle from "@/components/PageTitle";
import DeleteProfile from "@/components/crud/DeleteProfile";
import UpdateMonthlyDues from "@/components/crud/UpdateMonthlyDues";
import UpdateProfile from "@/components/crud/UpdateProfile";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ImClubs } from "react-icons/im";
import { IoIosContact } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";

export const revalidate = 0;
const IDPage = async ({ params: { id } }) => {
  const supabase = createClientComponentClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select(
      "id, username, position, biz, biz2, monthlydues(id, dues_2020, dues_2021, dues_2022, dues_2023, dues_2024, dues_2025, dues_2026)"
    )
    .order("username", { ascending: false })
    .match({ id })
    .single();

  if (!profile) {
    notFound;
  }

  return (
    <div className='px-8 py-12 max-w-md mx-auto'>
      {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
      <PageTitle title='DATA' />
      <div className='py-8'>
        <h1 className='text-2xl font-medium text-purple-800'>Profile</h1>
        <div className='mt-2 space-y-2'>
          <div className='flex items-center leading-4 space-x-2'>
            <div>
              <IoIosContact className='text-blue-800' />
            </div>
            <h2 className='text-lg'>{profile.username}</h2>
          </div>

          <div className='flex items-center space-x-2'>
            <div>
              <ImClubs className='text-blue-800' />
            </div>
            <h3>{profile.position}</h3>
          </div>

          <div className='flex leading-4 space-x-2'>
            <div>
              <MdWorkspacePremium className='text-yellow-600' />
            </div>
            <p>{profile.biz}</p>
          </div>

          {profile.biz2 && (
            <div className='flex leading-4 space-x-2'>
              <div>
                <MdWorkspacePremium className='text-yellow-600' />
              </div>
              <p>{profile.biz2}</p>
            </div>
          )}
          <div className="flex gap-x-4">
            <DeleteProfile 
              id={profile.id}
              name={profile.username}
              positn={profile.position}
              bis={profile.biz}
              bis2={profile.biz2}
            />

            <UpdateProfile
              id={profile.id}
              name={profile.username}
              positn={profile.position}
              bis={profile.biz}
              bis2={profile.biz2}
            />
          </div>
        </div>
      </div>

      <div className='pt-8'>
        <h1 className='text-2xl font-medium text-purple-800'>Monthly Dues</h1>
        <div className='mt-2 grid grid-cols-3 gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2020</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full`}>
              <p>{profile.monthlydues.dues_2020}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2021</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full`}>
              <p>{profile.monthlydues.dues_2021}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2022</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full`}>
              <p>{profile.monthlydues.dues_2022}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2023</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full`}>
              <p>{profile.monthlydues.dues_2023}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2024</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full`}>
              <p>{profile.monthlydues.dues_2024}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2025</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full`}>
              <p>{profile.monthlydues.dues_2025}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg'>2026</p>
            <div
              className={`flex items-center justify-center space-x-2 text-blue-900 bg-blue-200  px-3 py-1 rounded-full `}>
              <p>{profile.monthlydues.dues_2026}</p>
              <p className='leading-3'>months</p>
            </div>
          </div>
        </div>
        <div className=' pt-6'>
          <Suspense fallback={<LoadingUI />}>
            <UpdateMonthlyDues
              user_id={profile.id}
              due_2020={profile.monthlydues.dues_2020}
              due_2021={profile.monthlydues.dues_2021}
              due_2022={profile.monthlydues.dues_2022}
              due_2023={profile.monthlydues.dues_2023}
              due_2024={profile.monthlydues.dues_2024}
              due_2025={profile.monthlydues.dues_2025}
              due_2026={profile.monthlydues.dues_2026}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default IDPage;
