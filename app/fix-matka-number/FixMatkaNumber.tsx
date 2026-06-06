"use client";

import { useMemo } from "react";
import Image from "next/image";
import download from "@/public/images/download.gif";
import { useGetMarketListQuery } from "../redux/api/apiClient";

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

type ChartSectionProps = {
  title: string;
  data: string[];
};

function ChartSection({ title, data }: ChartSectionProps) {
  return (
    <div className="mb-4 rounded-2xl overflow-hidden border border-cyan-500/40 bg-[#0f172a] shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 py-4 px-3">
        <h2 className="text-center text-lg md:text-xl italic font-black text-white">
          {title}
        </h2>
      </div>

      {/* CONTENT NOT CHANGED */}
      <div className="bg-gradient-to-b from-zinc-950 via-neutral-900 to-black py-5">
        <div className="flex flex-col items-center gap-2">
          {data.map((item, index) => (
            <p
              key={index}
              className="text-lg md:text-xl font-black italic text-yellow-300 leading-tight"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FixMatkaNumber() {
  const {
    data: marketResponse,
    isLoading,
    isError,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  // =========================
  // CURRENT WEEK DATE RANGE
  // =========================
  const weekRange = useMemo(() => {
    const today = new Date();

    const currentDay = today.getDay();
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    };

    return {
      startDate: formatDate(monday),
      endDate: formatDate(sunday),
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 py-3">
        {/* HERO HEADER */}
        <section className="rounded-3xl overflow-hidden border border-cyan-400/30 bg-[#0f172a]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.2)]">
          <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 py-8 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-widest text-white drop-shadow-lg">
              FIX MATKA
            </h1>

            <p className="mt-3 text-sm md:text-base font-bold text-cyan-100">
              LIVE SATTA MATKA • WEEKLY CHARTS • FAST RESULTS
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#0f172a]">
            <div className="rounded-2xl border border-cyan-500/30 bg-[#111827] p-5 text-center">
              <h2 className="text-cyan-300 text-lg font-black uppercase">
                शुभ अंक
              </h2>

              <p className="text-5xl mt-3 font-black text-white tracking-widest">
                2-5-7-8
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-500/30 bg-[#111827] p-5 text-center">
              <h2 className="text-indigo-300 text-lg font-black uppercase">
                Final Ank
              </h2>

              <p className="text-4xl mt-4 font-black text-white">
                K-5, M-*
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-[#111827] p-5 text-center">
              <h2 className="text-emerald-300 text-lg font-black uppercase">
                Weekly Range
              </h2>

              <p className="text-sm md:text-base mt-4 font-black text-white leading-6">
                {weekRange.startDate}
                <br />
                TO
                <br />
                {weekRange.endDate}
              </p>
            </div>
          </div>
        </section>

        {/* LIVE UPDATE */}
        <section className="mt-5 rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#0f172a] shadow-[0_0_35px_rgba(6,182,212,0.15)]">
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 py-4 px-4">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-2xl font-black tracking-wide text-white animate-pulse">
                LIVE UPDATE
              </h2>

              <Image src={download} alt="Live" width={38} height={38} />
            </div>
          </div>

          <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {markets.map((market, index) => (
              <div
                key={index}
                className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-4 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-cyan-300 text-sm md:text-lg font-black uppercase">
                      {market.name}
                    </h2>

                    <p className="text-white text-xl md:text-2xl font-black mt-2">
                      {market.result}
                    </p>
                  </div>

                  <button className="bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 rounded-xl text-white font-black shadow-lg hover:scale-105 transition-all">
                    Refresh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PLAY RESULT */}
        <section className="mt-5 rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#0f172a]">
          <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 py-4 text-center">
            <h2 className="text-2xl font-black tracking-wider text-white">
              SATTA MATKA PLAY RESULT
            </h2>
          </div>

          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {!isLoading &&
              !isError &&
              marketList?.slice(0, 30)?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    item?.bg_yellow_status == 1
                      ? "bg-yellow-300 border-yellow-400"
                      : "bg-[#111827] border-cyan-500/20"
                  }`}
                >
                  <h3
                    className={`text-xl font-black uppercase ${
                      item?.bg_yellow_status == 1
                        ? "text-black"
                        : "text-cyan-300"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-3xl mt-3 font-black tracking-wide ${
                      item?.bg_yellow_status == 1
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {item.result}
                  </p>

                  <div
                    className={`mt-4 text-sm font-bold ${
                      item?.bg_yellow_status == 1
                        ? "text-black"
                        : "text-slate-300"
                    }`}
                  >
                    {item.open_time} - {item.close_time}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CHARTS */}
        <section className="mt-5">
          <ChartSection
            title={`Weekly Panel Or Patti Chart From ${weekRange.startDate} To ${weekRange.endDate}`}
            data={panelChart}
          />

          <ChartSection
            title={`Weekly Jodi Chart From ${weekRange.startDate} To ${weekRange.endDate}`}
            data={jodiChart}
          />

          <ChartSection
            title={`Weekly Number Open To Close From ${weekRange.startDate} To ${weekRange.endDate}`}
            data={weeklyNumbers}
          />
        </section>

        {/* JODI LINKS */}
        <section className="mt-5 rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#0f172a]">
          <div className="bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 py-4 text-center">
            <h2 className="text-2xl font-black text-white tracking-wider">
              TARA MATKA PLAY JODI CHARTS
            </h2>
          </div>

          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {isLoading && (
              <div className="text-center text-white py-5 col-span-full">
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
                  className="rounded-2xl border border-cyan-500/20 bg-[#111827] py-4 px-3 text-center text-cyan-300 text-lg font-black uppercase hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  {item?.name}
                </a>
              ))}
          </div>
        </section>
      </div>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-4 left-3 z-50">
        <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-5 py-3 rounded-2xl font-black shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all">
          TARA MATKA PLAY
        </button>
      </div>

      <div className="fixed bottom-4 right-3 z-50">
        <button className="bg-white text-black px-5 py-3 rounded-2xl font-black border-2 border-cyan-400 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
          Refresh
        </button>
      </div>
    </main>
  );
}