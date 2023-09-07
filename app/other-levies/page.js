import OtherLeviesCard from "@/components/OtherLeviesCard";
import PageTitle from "@/components/PageTitle";
import supabase from "@/utils/supabase";

export const revalidate = 0;
const OtherLevies = async () => {
  const { data: others } = await supabase
    .from("others")
    .select(`id, created_at, title, amount, desc, paid_by`)
    // .not("beneficiary", "is", null)
    .order("title", { ascending: true });

  return (
    <div className='min-h-[85vh] py-12 px-4 max-w-lg mx-auto'>
      <PageTitle title='Other Levies' />

      {/* <pre>{JSON.stringify(others, null, 2)}</pre> */}

      <div className='pt-12 space-y-4'>
        {others.length === 0 ? (
          <p className='text-center'>No collection recorded yet</p>
        ) : (
          <div className="space-y-8">
            {others.map((other) => (
              <OtherLeviesCard key={other.id} {...other} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherLevies;
