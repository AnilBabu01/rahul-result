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
    <div className="mb-5 overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#07131f] shadow-[0_0_25px_rgba(0,255,255,0.15)]">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-4 py-4">
        <h2 className="text-center text-lg md:text-2xl font-black tracking-wide text-white">
          {title}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="bg-[#08111d] py-5">
        <div className="flex flex-col items-center gap-2">
          {data.map((item, index) => (
            <p
              key={index}
              className="text-cyan-300 text-lg md:text-xl font-extrabold tracking-wide"
            >
              {item}
            </p>
          ))}
        </div>
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
    isFetching,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-[#020617] text-white px-2 py-3">
      {/* =========================
          TOP WRAPPER
      ========================= */}
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[30px] border border-cyan-500/40 bg-[#06101b] shadow-[0_0_50px_rgba(0,255,255,0.08)]">
        {/* HEADER */}
        <div className="relative overflow-hidden border-b border-cyan-500/30 bg-gradient-to-r from-[#061c2f] via-[#0b2940] to-[#132d46] py-8">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.4),transparent_60%)]" />

          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-[4px] text-cyan-300">
              TARA MATKA PLAY
            </h1>

            <p className="mt-3 text-sm md:text-base font-semibold tracking-wide text-slate-300">
              Fast Result • Weekly Charts • Live Market Update
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="border-b border-cyan-500/20 bg-[#091420] px-4 py-6 text-center">
          <h2 className="text-2xl font-black uppercase tracking-wide text-cyan-300">
            Mumbai Day Matka Record
          </h2>

          <p className="mx-auto mt-4 max-w-6xl text-[13px] leading-7 text-slate-300">
            MUMBAI DAY MATKA JODI CHART TARA In this satta matka chart
            page you get - TARA MUMBAI DAY matka, TARA MUMBAI DAY satta,
            TARA MUMBAI DAY satta matka chart, TARA MUMBAI DAY matka chart,
            TARA MUMBAI DAY satta chart, TARA MUMBAI DAY matka chart,
            TARA MUMBAI DAY matka jodi chart, TARA MUMBAI DAY matka panel
            chart, TARA MUMBAI DAY matka record, TARA MUMBAI DAY paper
            chart.
          </p>
        </div>

        {/* WEEK RANGE */}
        <div className="border-b border-cyan-500/20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-3 py-4 text-center">
          <h2 className="text-xl md:text-3xl font-black tracking-wide text-white">
            CURRENT WEEK : {currentWeekRange}
          </h2>
        </div>

        {/* LUCKY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#07111d] p-4 border-b border-cyan-500/20">
          <div className="rounded-3xl border border-cyan-500/30 bg-[#0b1725] p-5 text-center shadow-lg">
            <h3 className="text-cyan-300 text-2xl font-black uppercase">
              शुभ अंक
            </h3>

            <p className="mt-4 text-5xl font-black tracking-[6px] text-white">
              2-5-7-8
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-500/30 bg-[#0c1526] p-5 text-center shadow-lg">
            <h3 className="text-indigo-300 text-2xl font-black uppercase">
              Final Ank
            </h3>

            <p className="mt-4 text-4xl font-black tracking-[4px] text-white">
              K-5, M-*
            </p>
          </div>
        </div>

        {/* LIVE UPDATE */}
        <div className="bg-[#08111d] p-4">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0b1725]">
            {/* TITLE */}
            <div className="flex items-center justify-center gap-3 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-4">
              <h2 className="text-2xl font-black tracking-wide text-white animate-pulse">
                LIVE MARKET UPDATE
              </h2>

              <Image src={download} alt="live" width={40} height={40} />
            </div>

            {/* DATA */}
            <div className="p-3">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className="mb-3 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-[#101d2b] px-4 py-4 last:mb-0"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-cyan-300">
                      {market.name}
                    </h3>

                    <p className="mt-1 text-xl md:text-2xl font-black tracking-[3px] text-white">
                      {market.result}
                    </p>
                  </div>

                  <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm md:text-base font-black uppercase tracking-wide text-white transition-all duration-300 hover:scale-105">
                    Refresh
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          RESULT SECTION
      ========================= */}
      <section className="mt-6 overflow-hidden rounded-[30px] border border-cyan-500/30 bg-[#06101b]">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-[3px] text-white">
            SATTA MATKA PLAY RESULT
          </h2>
        </div>

        {/* REFRESH BAR */}
        {isFetching && (
          <div className="bg-cyan-500 py-3 text-center text-black font-black animate-pulse">
            Refreshing Market Data...
          </div>
        )}

        {/* RESULTS */}
        <div className="p-2">
          {!isLoading &&
            !isError &&
            marketList?.slice(0, 30)?.map((item: any, index: number) => (
              <div
                key={index}
                className={`mb-3 rounded-2xl border p-4 text-center shadow-md transition-all duration-300 hover:scale-[1.01]
                  
                  ${
                    item?.bg_yellow_status == 1
                      ? "bg-yellow-300 border-yellow-500"
                      : "bg-[#0d1827] border-cyan-500/20"
                  }
                `}
              >
                <h3
                  className={`text-2xl font-black uppercase tracking-wide
                    ${
                      item?.bg_yellow_status == 1
                        ? "text-black"
                        : "text-cyan-300"
                    }
                  `}
                >
                  {item.name}
                </h3>

                <p
                  className={`mt-2 text-3xl font-black tracking-[4px]
                    ${
                      item?.bg_yellow_status == 1
                        ? "text-red-700"
                        : "text-white"
                    }
                  `}
                >
                  {item.result}
                </p>

                {index === 0 && (
                  <p
                    className={`mt-2 text-lg font-black uppercase
                      ${
                        item?.bg_yellow_status == 1
                          ? "text-black"
                          : "text-yellow-300"
                      }
                    `}
                  >
                    Jodi Panel
                  </p>
                )}

                <p
                  className={`mt-2 text-sm md:text-base font-bold
                    ${
                      item?.bg_yellow_status == 1
                        ? "text-black"
                        : "text-slate-300"
                    }
                  `}
                >
                  {item.open_time} - {item.close_time}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* =========================
          CHART SECTION
          (NOT CHANGED MUCH)
      ========================= */}
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

      {/* =========================
          JODI LINKS
      ========================= */}
      <div className="mt-6 rounded-t-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-4 py-4 text-center">
        <h2 className="text-2xl font-black uppercase tracking-[3px] text-white">
          Tara Matka Play Jodi Charts
        </h2>
      </div>

      <section className="overflow-hidden rounded-b-3xl border border-cyan-500/30 bg-[#06101b]">
        {isLoading && (
          <div className="py-6 text-center text-white text-xl font-bold">
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
                .replace(/\s+/g, "-")}`}
              className="block border-b border-cyan-500/10 px-4 py-5 text-center text-lg md:text-xl font-black uppercase tracking-wide text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-black"
            >
              {item?.name}
            </a>
          ))}
      </section>

      {/* FIXED BUTTONS */}
      <div className="fixed bottom-4 left-3 z-50">
        <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm md:text-base font-black uppercase tracking-wide text-white shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105">
          TARA MATKA PLAY
        </button>
      </div>

      <div className="fixed bottom-4 right-3 z-50">
        <button
          onClick={() => refetch()}
          className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 text-sm md:text-base font-black uppercase tracking-wide text-white shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
        >
          Refresh
        </button>
      </div>
    </main>
  );
}