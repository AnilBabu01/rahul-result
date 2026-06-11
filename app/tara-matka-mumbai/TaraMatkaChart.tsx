"use client";

import Image from "next/image";
import download from "@/public/images/download.gif";
import { useGetMarketListQuery } from "../redux/api/apiClient";

/* =========================
   CURRENT WEEK DATE RANGE
========================= */
function getCurrentWeekRange() {
  const today = new Date();

  // Monday = start of week
  const currentDay = today.getDay(); // 0 = Sunday
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
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 px-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <div className="space-y-3">
          {data.map((item, index) => {
            // Split prefix (e.g., "0 => ") and numbers if applicable for cleaner presentation
            const hasDelimiter = item.includes("=>");
            const parts = hasDelimiter ? item.split("=>") : [item];

            return (
              <div 
                key={index} 
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50/60 hover:bg-slate-50 transition-colors"
              >
                {hasDelimiter ? (
                  <>
                    <span className="font-bold text-indigo-600 text-sm bg-indigo-50 px-2.5 py-1 rounded-md">
                      {parts[0].trim()}
                    </span>
                    <span className="font-mono text-base font-semibold tracking-loose text-slate-800">
                      {parts[1].trim()}
                    </span>
                  </>
                ) : (
                  <span className="w-full text-center font-mono text-base font-semibold text-slate-800">
                    {item}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const markets = [
  { name: "KHAJANA", result: "470-1" },
  { name: "SUPREME DAY", result: "180-98-189" },
  { name: "MORNING SYNDICATE", result: "258-50-226" },
  { name: "MAHARASHTRA NIGHT", result: "***-**-***" },
];

export default function TaraMatkaChart() {
  const {
    data: marketResponse,
    isLoading,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic Modern Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              TARA MATKA PLAY
            </h1>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest hidden sm:block">
              Premium Dashboard
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Server
            </span>
            <button 
              onClick={() => refetch()} 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl shadow-sm hover:bg-slate-50 focus:outline-none transition-all"
            >
              Sync Data
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Welcome & Info Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-100/40 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="relative max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              Platform Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Play TARA MATKA with Analytics
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mt-3">
              MUMBAI DAY MATKA JODI CHART TARA. Access lightning-fast live analytical metrics including Mumbai Day Matka records, real-time metrics, Jodi structural layouts, panel visualizations, paper archives, and precise structural data.
            </p>
          </div>
        </section>

        {/* Date Context & Lucky Numbers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeframe Card */}
          <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between min-h-[180px]">
            <div>
              <p className="text-xs font-bold tracking-widest text-indigo-300 uppercase">Active Timeframe</p>
              <h3 className="text-xl font-bold mt-1">Current Analytics Cycle</h3>
            </div>
            <div>
              <p className="text-2xl font-mono font-bold text-white tracking-tight">
                {currentWeekRange}
              </p>
            </div>
          </div>

          {/* Lucky Numbers Metrics Cards */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Ank (शुभांक)</h4>
              <p className="text-4xl font-mono font-black text-slate-800 tracking-wider mt-2">2-5-7-8</p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Final Ank</h4>
              <p className="text-3xl font-mono font-black text-indigo-900 tracking-wide mt-2">K-5, M-*</p>
            </div>
          </div>
        </div>

        {/* Live Feeds Layout */}
        <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                <Image src={download} alt="Live Signal" width={24} height={24} className="mix-blend-multiply" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Live Fast Feed</h3>
                <p className="text-xs text-slate-400">Instant updates over secure sockets</p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {markets.map((market, index) => (
              <div key={index} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="font-bold text-sm text-slate-700 tracking-wide uppercase">{market.name}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-6">
                  <span className="font-mono text-base font-bold text-slate-900 tracking-wider bg-slate-100 px-4 py-1.5 rounded-xl">
                    {market.result}
                  </span>
                  <button 
                    onClick={() => refetch()} 
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-all"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Aggregated Matrix Records Table */}
        <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-slate-800 uppercase tracking-wider text-sm">
              Satta Matka Play Dashboard Results
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                  <th className="px-6 py-4">Market Identity</th>
                  <th className="px-6 py-4 text-center">Outcome Metric</th>
                  <th className="px-6 py-4">Timeline Span</th>
                  <th className="px-6 py-4 text-right">Attributes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {!isLoading && !isError &&
                  marketList
                    ?.filter((item: any) =>
                      [
                        "SRIDEVI", "TIME BAZAR", "MILAN DAY", "RAJDHANI DAY", "KALYAN",
                        "SRIDEVI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"
                      ].includes(item?.name)
                    )
                    ?.map((item: any, index: number) => (
                      <tr 
                        key={index} 
                        className={`transition-colors hover:bg-slate-50/70 ${
                          item?.bg_yellow_status == 1 ? "bg-amber-50/60" : ""
                        }`}
                      >
                        <td className="px-6 py-5">
                          <span className="font-extrabold text-slate-800 tracking-tight block">
                            {item.name}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="inline-block font-mono font-black text-lg tracking-wider bg-slate-900 text-white px-4 py-1 rounded-xl shadow-inner">
                            {item.result}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-500">
                          {item.open_time} - {item.close_time}
                        </td>
                        <td className="px-6 py-5 text-right">
                          {index === 0 ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                              Jodi Panel
                            </span>
                          ) : (
                            <span className="text-xs text-slate-300">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Matrix Grid Visualization Maps (Charts) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChartSection
            title="Weekly Panel / Patti Map"
            data={panelChart}
          />
          <ChartSection
            title="Weekly Jodi Struct Map"
            data={jodiChart}
          />
          <ChartSection
            title="Weekly Structural Directives"
            data={weeklyNumbers}
          />
        </section>

        {/* Index Navigation Directory Area */}
        <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wider">
              TARA MATKA Play Jodi Quick Charts Index
            </h3>
          </div>
          
          {isLoading ? (
            <div className="p-8 text-center text-sm text-slate-400">Querying directory structures...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-2">
              {marketList?.slice(0, 20)?.map((item: any, index: number) => (
                <a
                  key={index}
                  href={`/jodi-chart/${item?.name?.toLowerCase().replace(/\s+/g, "-")}-chart`}
                  className="px-4 py-3 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-center border border-slate-100 hover:border-indigo-600 hover:shadow-md"
                >
                  {item?.name}
                </a>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Floating Actions Strip */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-2xl px-4 py-3 rounded-2xl flex items-center gap-3 w-[92%] max-w-md transition-transform hover:scale-[1.01]">
        <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-200 transition-all text-center">
          TARA MATKA Play
        </button>
        <button 
          onClick={() => refetch()} 
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
        >
          Refresh
        </button>
      </div>
      
    </main>
  );
}