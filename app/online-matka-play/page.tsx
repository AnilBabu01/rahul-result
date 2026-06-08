import {
  charts,
} from "@/data/games";

import Image from "next/image";
import download from "@/public/images/download.gif";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `ONLINE MATKA PLAY - SATTA MATKA`,
    description: `Join India's most trusted Online Matka Play platform. Play Kalyan, Milan, Rajdhani & all markets at full rate. Fast withdrawals, live results & 100% trusted matka app.`,
    alternates: {
      canonical: `https://sattamatkadpb.net/chart/weekly-jodi-panna`,
    },
  };
}

const results = [
  {
    title: "RAJA-RANI MORNING",
    result: "136-08-459",
    time: "(09:40 - 10:40)",
    color: "text-cyan-300",
  },
  {
    title: "KARNATAKA DAY",
    result: "588-10-118",
    time: "(10:00 - 11:00)",
    color: "text-pink-300",
  },
  {
    title: "MADHUR MORNING",
    result: "255-27-179",
    time: "(11:35 - 12:35)",
    color: "text-violet-300",
  },
  {
    title: "SRIDEVI",
    result: "240-60-280",
    time: "(11:35 - 12:35)",
    color: "text-yellow-300",
    highlight: true,
  },
  {
    title: "TIME BAZAR",
    result: "680-48-567",
    time: "(01:00 - 02:00)",
    color: "text-green-300",
  },
];

const panelChart = [
  "0 => 235 460 118 334 668",
  "1 => 236 579 119 588 669",
  "2 => 147 570 228 688 200",
  "3 => 247 490 166 599 779",
  "4 => 149 356 220 455 699",
];

const jodiChart = [
  "45 46 92 93",
  "74 75 21 28",
  "04 06 57 58",
  "14 15 62 68",
  "84 85 86 82",
];

const weeklyNumbers = [
  "Mon. => 3-5-7-9",
  "Tues. => 1-4-5-7",
  "Wed. => 2-4-5-8",
  "Thur. => 3-4-6-8",
  "Fri. => 2-4-5-7",
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
    <div className="mb-5 overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#111827] shadow-[0_0_25px_rgba(6,182,212,0.25)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-4 py-4">
        <h2 className="text-center text-lg font-black italic text-white md:text-2xl">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="bg-[#0f172a] px-4 py-6">
        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-cyan-500/20 bg-[#111827] px-3 py-3 text-center"
            >
              <p className="text-lg font-bold text-cyan-300 md:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const currentDate = new Date()
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  return (
    <main className="min-h-screen bg-[#020617] px-2 py-3 text-white">
      {/* Main Wrapper */}
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0f172a] shadow-[0_0_35px_rgba(6,182,212,0.25)]">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-800 px-3 py-6 text-center">
          <h1 className="animate-pulse text-3xl font-black italic tracking-wide text-white md:text-5xl">
            ONLINE MATKA PLAY
          </h1>

          <p className="mt-3 text-sm font-semibold text-cyan-100 md:text-lg">
            India's Trusted Online Matka Platform
          </p>
        </div>

        {/* Description */}
        <div className="border-b border-cyan-500/20 bg-[#111827] px-4 py-5 text-center">
          <h2 className="text-2xl font-black italic text-cyan-300">
            Play Online Satta Matka
          </h2>

          <p className="mx-auto mt-3 max-w-5xl text-[13px] leading-6 text-slate-300">
            online matka play, online matka, matka play, kalyan online game,
            matka online, trusted online matka app, best matka app in india,
            satta matka online, online matka games, online matka boss.
          </p>
        </div>

        {/* Lucky Number Section */}
        <div className="grid gap-4 border-b border-cyan-500/20 bg-[#0b1120] px-3 py-5 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-5 text-center">
            <h3 className="text-xl font-black italic text-cyan-300">
              Lucky Ank
            </h3>

            <p className="mt-3 text-5xl font-black tracking-wider text-white">
              2-5-7-8
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-500/20 bg-[#111827] p-5 text-center">
            <h3 className="text-xl font-black italic text-indigo-300">
              Final Ank
            </h3>

            <p className="mt-3 text-4xl font-black text-white">
              K-5, M-*
            </p>
          </div>
        </div>

        {/* Live Update */}
        <div className="p-3">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/30">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-3 py-3">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-xl font-black italic text-white">
                  📡 LIVE UPDATE
                </h2>

                <Image src={download} alt="Download" width={35} height={35} />
              </div>
            </div>

            {/* Markets */}
            <div className="bg-[#111827] p-3">
              <div className="grid gap-3 md:grid-cols-2">
                {markets.map((market, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-cyan-500/20 bg-[#0f172a] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h2 className="text-sm font-black uppercase tracking-wide text-cyan-300 md:text-lg">
                          {market.name}
                        </h2>

                        <p className="mt-1 text-xl font-black text-white">
                          {market.result}
                        </p>
                      </div>

                      <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                        Refresh
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-cyan-500/20 bg-[#0b1120] p-4 text-center">
              <h2 className="text-2xl font-black italic text-cyan-300">
                Play Online Matka
              </h2>

              <p className="mt-2 text-slate-300">
                #1 Most Trusted Matka Play Website
              </p>

              <div className="mt-4 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-lg font-black text-white">
                07828798920
              </div>
            </div>
          </div>
        </div>

        {/* Notice Board */}
        <div className="px-3 pb-4">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/30">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-3 text-center text-2xl font-black italic text-white">
              Notice Board
            </div>

            <div className="bg-[#111827]">
              {[
                "Minimum Deposit : 500",
                "Minimum Withdrawal : 1000",
                "Maximum Withdrawal : No Limits",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-b border-cyan-500/10 py-4 text-center text-lg font-bold text-cyan-200 last:border-none"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rates */}
        <div className="px-3 pb-5">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/30">
            <div className="bg-gradient-to-r from-indigo-700 to-cyan-700 py-3 text-center text-2xl font-black italic text-white">
              Matka Play Rate
            </div>

            <div className="grid bg-[#111827] md:grid-cols-2">
              {[
                "SINGLE 10 KA 95",
                "JODI 10 KA 950",
                "SINGLE PATTI 10 KA 1400",
                "DOUBLE PATTI 10 KA 2800",
                "TRIPPLE PATTI 10 KA 7000",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-cyan-500/10 px-3 py-4 text-center text-lg font-black text-cyan-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="mt-5 overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0f172a]">
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-4 text-center">
          <h2 className="text-2xl font-black italic text-white md:text-3xl">
            SATTA MATKA PLAY RESULT
          </h2>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-2">
          {results.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-5 text-center ${
                item.highlight
                  ? "border-yellow-400 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                  : "border-cyan-500/20 bg-[#111827]"
              }`}
            >
              <h3
                className={`text-2xl font-black italic tracking-wide ${item.color}`}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-4xl font-black text-white">
                {item.result}
              </p>

              <p className="mt-3 text-sm font-bold text-slate-300">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="mt-5">
        <ChartSection
          title="Weekly Panel Or Patti Chart From 25-05-2026 To 31-05-2026"
          data={panelChart}
        />

        <ChartSection
          title="Weekly Jodi Chart From 25-05-2026 To 31-05-2026"
          data={jodiChart}
        />

        <ChartSection
          title="Weekly Number Open To Close From 25-05-2026 To 31-05-2026"
          data={weeklyNumbers}
        />
      </section>

      {/* Chart Links */}
      <section className="mt-5 overflow-hidden rounded-3xl border border-cyan-500/30">
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 py-4 text-center">
          <h2 className="text-2xl font-black italic text-white">
            Online Matka Play Jodi Charts
          </h2>
        </div>

        <div className="bg-[#111827]">
          {charts.map((item, index) => (
            <a
              key={index}
              href={`/jodi-chart/${item
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="block border-b border-cyan-500/10 py-4 text-center text-lg font-black text-cyan-300 transition hover:bg-cyan-900/20"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Fixed Buttons */}
      <div className="fixed bottom-4 left-3 z-50">
        <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-black italic text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] transition hover:scale-105">
          Online Matka Play
        </button>
      </div>

      <div className="fixed bottom-4 right-3 z-50">
        <button className="rounded-2xl border border-cyan-400 bg-[#111827] px-5 py-3 text-sm font-black italic text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition hover:scale-105">
          Refresh
        </button>
      </div>
    </main>
  );
}