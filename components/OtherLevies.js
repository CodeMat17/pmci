import supabase from "@/utils/supabase";

const OtherLevies = async ({ id }) => {
  const { data: others } = await supabase
    .from("others")
    .select("id, user_id, username, title, amount")
    .order("created_at", { ascending: true })
    .match({ user_id: id });
  console.log(others);
  return (
    <div>
      {others &&
        others.map((other, index) => (
          <div
            key={other.id}
            className='flex justify-between items-center p-3 odd:bg-blue-100 border'>
            <div className='flex items-center space-x-4 w-[80%] '>
              <p>{index + 1}</p>
              <div className='leading-3 w-[95%]'>
                <h1 className='text-lg truncate'>{other.title} </h1>
                <p className='text-sm italic text-gray-400'>
                  {other.created_at}
                </p>
              </div>
            </div>
            <p>₦{other.amount}</p>
          </div>
        ))}
    </div>
  );
};

export default OtherLevies;
