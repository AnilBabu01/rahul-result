"use client";

import Image from "next/image";
import download from "@/public/images/download.gif";
import { useGetMarketListQuery } from "../redux/api/apiClient";

/* =========================
   CURRENT WEEK DATE RANGE
========================= */
function getCurrentWeekRange() {
  const today = new Date();

  const currentDay = today.getDay();
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const startDate = new Date(today);
  startDate.setDate(today.getDate() + diffToMonday);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB").replace(/\//g, "-");
  };

  return `${formatDate(startDate)} To ${formatDate(endDate)}`;
}

const currentWeekRange = getCurrentWeekRange();

const panelChart = [
  "0 => 235 460 118 334 668",
  "1 => 236 579 119 588 669",
  "2 => 147 570 228 688 200",
  "3 => 247 490 166 599 779",
  "4 => 149 356 220 455 699",
  "5 => 258 690 113 447 889",
  "6 => 178 790 277 880 600",
  "7 => 278 338 115 449 557",
  "8 => 134 378 224 477 990",
  "9 => 360 450 117 225 667",
];

const jodiChart = [
  "45 46 92 93",
  "74 75 21 28",
  "04 06 57 58",
  "14 15 62 68",
  "84 85 86 82",
  "15 16 62 68",
];

const weeklyNumbers = [
  "Mon. => 3-5-7-9",
  "Tues. => 1-4-5-7",
  "Wed. => 2-4-5-8",
  "Thur. => 3-4-6-8",
  "Fri. => 2-4-5-7",
  "Sat. => 0-1-4-7",
  "Sun. => 2-5-7-9",
];

type ChartSectionProps = {
  title: string;
  data: string[];
};

function ChartSection({ title, data }: ChartSectionProps) {
  return (
    <div className="mb-6 overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#0b1220] shadow-[0_0_25px_rgba(6,182,212,0.25)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 px-4 py-4">
        <h2 className="text-center text-lg font-black italic tracking-wide text-white md:text-xl">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="grid gap-3 px-4 py-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cyan-400/20 bg-[#111827] px-4 py-3 text-center transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400"
          >
            <p className="text-sm font-black italic tracking-wide text-cyan-200 md:text-lg">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const markets = [
  {
    name: "KHAJANA",
    result: "470-1",
  },
  {
    name: "SUPREME DAY",
    result: "180-98-189",
  },
  {
    name: "MORNING SYNDICATE",
    result: "258-50-226",
  },
  {
    name: "MAHARASHTRA NIGHT",
    result: "***-**-***",
  },
];

export default function TaraMatkaChart() {
  const {
    data: marketResponse,
    isLoading,
    isError,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#07111f] to-black px-2 py-3 text-white">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#081120] shadow-[0_0_40px_rgba(6,182,212,0.2)]">
        {/* Header */}
        <div className="border-b border-cyan-500/30 bg-gradient-to-r from-cyan-800 via-blue-800 to-indigo-800 px-4 py-6 text-center">
          <h1 className="animate-pulse text-3xl font-black italic tracking-widest text-cyan-100 md:text-4xl">
            TARA MATKA PLAY
          </h1>

          <p className="mt-2 text-sm font-semibold tracking-wide text-cyan-200">
            Fast Result • Jodi Chart • Panel Chart
          </p>
        </div>

        {/* Description */}
        <div className="border-b border-cyan-500/20 bg-[#0b1220] px-4 py-5 text-center">
          <h2 className="text-2xl font-black italic text-cyan-300">
            Play TARA MATKA
          </h2>

          <p className="mx-auto mt-3 max-w-5xl text-[13px] leading-6 text-slate-300">
            MUMBAI DAY MATKA JODI CHART TARA In this satta matka chart
            page you get TARA MUMBAI DAY satta matka chart, panel chart,
            jodi chart, paper chart, open close record and weekly charts.
          </p>
        </div>

        {/* Current Week */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-3 py-4 text-center">
          <h2 className="text-xl font-black italic text-white md:text-2xl">
            Current Week : {currentWeekRange}
          </h2>
        </div>

        {/* Lucky Number */}
        <div className="grid gap-4 border-y border-cyan-500/30 bg-[#0f172a] px-4 py-5 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-500/30 bg-[#111827] p-5 text-center">
            <h3 className="text-xl font-black italic text-cyan-300">
              Ank (शुभांक)
            </h3>

            <p className="mt-3 text-5xl font-black tracking-wider text-white">
              2-5-7-8
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-[#111827] p-5 text-center">
            <h3 className="text-xl font-black italic text-blue-300">
              Final Ank
            </h3>

            <p className="mt-3 text-4xl font-black tracking-wide text-white">
              K-5, M-*
            </p>
          </div>
        </div>

        {/* Live Update */}
        <div className="m-3 overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0b1220]">
          <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 py-3">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-2xl font-black italic text-white animate-pulse">
                📡 LIVE UPDATE
              </h2>

              <Image src={download} alt="download" width={35} height={35} />
            </div>
          </div>

          <div className="grid gap-4 p-4 md:grid-cols-2">
            {markets.map((market, index) => (
              <div
                key={index}
                className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-4 shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-black italic tracking-wide text-cyan-200">
                      {market.name}
                    </h2>

                    <p className="mt-1 text-2xl font-black text-white">
                      {market.result}
                    </p>
                  </div>

                  <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-black text-white transition-all duration-300 hover:scale-105">
                    Refresh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="mt-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#081120]">
        <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 py-4 text-center">
          <h2 className="text-2xl font-black italic uppercase tracking-wide text-white">
            SATTA MATKA PLAY RESULT
          </h2>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {!isLoading &&
            !isError &&
            marketList
              ?.filter((item: any) =>
                [
                  "SRIDEVI",
                  "TIME BAZAR",
                  "MILAN DAY",
                  "RAJDHANI DAY",
                  "KALYAN",
                  "SRIDEVI NIGHT",
                  "MILAN NIGHT",
                  "RAJDHANI NIGHT",
                  "KALYAN NIGHT",
                  "MAIN BAZAR",
                ].includes(item?.name),
              )
              ?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 ${
                    item?.bg_yellow_status == 1
                      ? "border-yellow-400 bg-yellow-300/10"
                      : "border-cyan-500/20 bg-[#111827]"
                  }`}
                >
                  <h3 className={`text-2xl font-black italic ${item.color}`}>
                    {item.name}
                  </h3>

                  <p className="mt-2 text-3xl font-black text-white">
                    {item.result}
                  </p>

                  {index === 0 && (
                    <p className="mt-2 text-lg font-black italic text-cyan-300">
                      Jodi Panel
                    </p>
                  )}

                  <p className="mt-3 font-black italic text-slate-300">
                    {item.open_time} - {item.close_time}
                  </p>
                </div>
              ))}
        </div>
      </section>

      {/* Charts */}
      <section className="mt-6">
        <ChartSection
          title={`Weekly Panel Or Patti Chart From ${currentWeekRange}`}
          data={panelChart}
        />

        <ChartSection
          title={`Weekly Jodi Chart From ${currentWeekRange}`}
          data={jodiChart}
        />

        <ChartSection
          title={`Weekly Number Open To Close From ${currentWeekRange}`}
          data={weeklyNumbers}
        />
      </section>

      {/* Chart Links */}
      <div className="mt-6 rounded-t-3xl bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 px-4 py-4 text-center text-xl font-black italic text-white">
        TARA MATKA Play Jodi Charts
      </div>

      <section className="overflow-hidden rounded-b-3xl border border-cyan-500/30 bg-[#081120]">
        {isLoading && (
          <div className="py-6 text-center text-lg font-bold text-white">
            Loading...
          </div>
        )}

        {!isLoading &&
          !isError &&
          marketList?.slice(0, 20)?.map((item: any, index: number) => (
            <a
              key={index}
              href={`/jodi-chart/${item?.name
                ?.toLowerCase()
                .replace(/\s+/g, "-")}-chart`}
              className="block border-b border-cyan-500/10 px-4 py-4 text-center text-lg font-black text-cyan-200 transition-all duration-300 hover:bg-cyan-900/30 hover:text-white"
            >
              {item?.name}
            </a>
          ))}
      </section>

      {/* Fixed Buttons */}
      <div className="fixed bottom-3 left-2 z-50">
        <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-black italic text-white shadow-xl transition-all duration-300 hover:scale-105">
          TARA MATKA PLAY
        </button>
      </div>

      <div className="fixed bottom-3 right-2 z-50">
        <button className="rounded-2xl border border-cyan-300 bg-white px-5 py-3 font-black italic text-cyan-900 shadow-xl transition-all duration-300 hover:scale-105">
          Refresh
        </button>
      </div>
    </main>
  );
}