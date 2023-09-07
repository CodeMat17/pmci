import ExecutiveCard from "@/components/ExecutiveCard";
import PageTitle from "@/components/PageTitle";

const executives = [
  {
    id: 1,
    name: "Okaranime Leonard Umekwe",
    position: "President",
    img: "/pmci-president.webp",
  },
  {
    id: 2,
    name: "Chika J. Diokpara",
    position: "Vice. President",
    img: "/pmci-vc.webp",
  },
  {
    id: 3,
    name: "Christopher Okechukwu Nwabuzor",
    position: "Secretay General",
    img: "/pmci-sec.webp",
  },
  {
    id: 4,
    name: "Anichebe Chuma Chris",
    position: "Financial Secretary",
    img: "/pmci-fin_sec.webp",
  },
  {
    id: 5,
    name: "Pastor Adiele Christopher",
    position: "Asst. Treasurer",
    img: "/pmci-asst_treasurer.webp",
  },
  {
    id: 6,
    name: "Hon. Moses Favour",
    position: "PRO",
    img: "/pmci-pro.webp",
  },
  {
    id: 7,
    name: "Mbaneho Innocent Ifeanyi",
    position: "Asst. PRO",
    img: "/pmci-asst_pro.webp",
  },
  {
    id: 8,
    name: "Nzeribe Kenneth Anyanwu",
    position: "B.O.T.",
    img: "/pmci-bot.webp",
  },
];

const ExecutivesPage = () => {
  return (
    <div className='min-h-screen w-full px-4 py-12'>
      <PageTitle title='The Executives' />

      <div className='py-12 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-12'>
        {executives.map((exec) => (
          <ExecutiveCard key={exec.id} {...exec} />
        ))}
      </div>
    </div>
  );
};

export default ExecutivesPage;
