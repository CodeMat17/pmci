import supabase from "@/utils/supabase";

const WeddingLevies = async ({ id }) => {
  const { data: weddingLevies } = await supabase
    .from("weddinglevies")
    .select("id, user_id, username, beneficiary, amount")
    .order("username", { ascending: true })
    .match({user_id: id });

  return (
    <div className='pt-4 flex items-center justify-center'>
      <table className='table-auto w-full rounded-lg overflow-hidden border'>
        <thead className='bg-blue-900 text-white'>
          <tr className='text-left uppercase'>
            <th className='p-3 font-normal tracking-wider'>Beneficiary</th>
            <th className='p-3 font-normal text-right tracking-wider'>
              Amount
            </th>
          </tr>
        </thead>
        <tbody className='mt-3 text-blue-950'>
          {weddingLevies.map((wedding) => (
            <tr key={wedding.id} className='odd:bg-blue-100'>
              {wedding.beneficiary === null ? (
                <>
                  <td className='p-3'>Empty</td>
                  <td className='p-3 text-right'>₦0.00</td>
                </>
              ) : (
                <>
                  <td className='p-3'>{wedding.beneficiary}</td>
                  <td className='p-3 text-right'>₦{wedding.amount}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeddingLevies;
