import FormatedCurrency from "@/components/FormatedCurrency";
import PageTitle from "@/components/PageTitle";
import WeddingLevyCard from "@/components/WeddingLevyCard";
import supabase from "@/utils/supabase";
import dayjs from "dayjs";

export const revalidate = 0;
const WeddingLevies = async () => {
  const { data: levies } = await supabase
    .from("weddinglevies")
    .select(`id, created_at, username, beneficiary, amount`)
    // .not("beneficiary", "is", null)
    // .order("created_at", { ascending: true })
    .order("beneficiary", { ascending: true });

  return (
    <div className='min-h-[85vh] py-12 px-4 max-w-lg mx-auto'>
      <PageTitle title='Wedding Levies' />

      {/* <pre>{JSON.stringify(levies, null, 2)}</pre> */}

      <div className='pt-12 space-y-8'>
        {levies.length === 0 ? (
          <p className='text-center'>No wedding levies recorded yet</p>
        ) : (
          <>
            {levies.map((levy) => (
              <WeddingLevyCard  key={levy.id} {...levy} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default WeddingLevies;
