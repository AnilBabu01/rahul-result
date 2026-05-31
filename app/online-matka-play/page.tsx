import {
  liveData,
  liveData2,
  forumLinks,
  chartData,
  topGuessers,
  fastResult,
  charts,
  faqData,
  faqData2,
} from "@/data/games";
import Link from "next/link";
import Image from "next/image";
import download from "@/public/images/download.gif";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `ONLINE MATKA PLAY - SATTA MATKA`,
    description: `Join India's most trusted Online Matka Play platform. Play Kalyan, Milan, Rajdhani & all markets at full rate. Fast withdrawals, live results & 100% trusted matka app.`,
    alternates: {
      canonical: `https://yourdomain.com/chart/weekly-jodi-panna`,
    },
  };
}

const results = [
  {
    title: "RAJA-RANI MORNING",
    result: "136-08-459",
    time: "(09:40 - 10:40)",
    color: "text-black",
  },
  {
    title: "KARNATAKA DAY",
    result: "588-10-118",
    time: "(10:00 - 11:00)",
    color: "text-red-600",
  },
  {
    title: "MADHUR MORNING",
    result: "255-27-179",
    time: "(11:35 - 12:35)",
    color: "text-purple-600",
  },
  {
    title: "SRIDEVI",
    result: "240-60-280",
    time: "(11:35 - 12:35)",
    color: "text-blue-700",
    highlight: true,
  },
  {
    title: "TIME BAZAR",
    result: "680-48-567",
    time: "(01:00 - 02:00)",
    color: "text-purple-700",
  },
  {
    title: "MADHUR DAY",
    result: "388-99-126",
    time: "(01:30 - 02:30)",
    color: "text-blue-700",
  },
  {
    title: "STAR DAY",
    result: "557-7",
    time: "(02:30 - 05:30)",
    color: "text-red-600",
  },
  {
    title: "NEW TIME BAZAR",
    result: "120-36-349",
    time: "(01:00 - 02:00)",
    color: "text-purple-700",
  },
  {
    title: "MILAN DAY",
    result: "188-75-159",
    time: "(03:00 - 05:00)",
    color: "text-green-600",
  },
];

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
    <div className="mb-3">
      {/* Header */}
      <div className="bg-[#f5c75f] border-y-2 border-orange-700 py-3 px-2">
        <h2 className="text-center text-lg md:text-2xl italic font-black text-black">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="bg-[#edf3f0] border-[4px] border-red-700 py-4">
        <div className="flex flex-col items-center">
          {data.map((item, index) => (
            <p
              key={index}
              className="text-xl md:text-3xl font-black italic text-black leading-tight"
            >
              {item}
            </p>
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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-2 px-2">
      <div className="max-w-[1600px] mx-auto border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.4)] overflow-hidden rounded-xl">
        {/* Header */}
        <div className="border-b-4 border-cyan-400 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-center py-5 px-2">
          <h1 className="text-cyan-300 text-3xl italic font-black tracking-wide">
            ONLINE MATKA PLAY
          </h1>
        </div>

        {/* Description */}
        <div className="border-b-4 border-cyan-500 bg-slate-900 px-3 py-4 text-center">
          <h1 className="text-cyan-300 text-1xl italic font-black tracking-wide">
            Play Online Satta Matka
          </h1>
          <p className="text-[12px] italic leading-5 text-slate-200">
            online matka play, online matka, matka play, kalyan online game,
            matka online,, matkaplay, kalyan online matka, online matka play
            full rate app, trusted online matka app, kalyan online matka app,
            best matka app in india, matka booking app, satta matka online,
            online matka games, all matka play, online matka boss, kalyan online
            matka app
          </p>
        </div>

        {/* Lucky Number Section */}
        <div className="border-y-4 border-cyan-500 bg-gradient-to-r from-slate-900 to-cyan-950">
          <div className="bg-slate-950 text-center border-b border-cyan-500 py-2">
            <h2 className="text-2xl italic font-black text-cyan-300">
              Today Satta Matka Lucky Number
            </h2>
          </div>

          <div className="grid grid-cols-2 text-center py-3 px-1 gap-4">
            <div>
              <h3 className="text-pink-400 text-xl italic font-black">
                Ank (शुभांक)
              </h3>

              <p className="text-3xl font-black text-white">2-5-7-8</p>
            </div>

            <div>
              <h3 className="text-pink-400 text-xl italic font-black">
                Final Ank
              </h3>

              <p className="text-2xl font-black text-white">K-5, M-*</p>
            </div>
          </div>
        </div>

        {/* Live Update */}
        <div className="mt-3 border-2 border-cyan-500 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-700 py-2 ">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl italic text-white">📡 LIVE UPDATE</h2>

              <Image src={download} alt="Image" width={35} height={35} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto p-2">
            {/* Header */}
            <div className="bg-pink-100 text-center py-2 border border-pink-200">
              <h1 className="text-1xl font-bold italic text-black">
                Play Online Matka
              </h1>

              <p className="mt-3 text-1xl font-semibold">
                #1 Most Trusted Matka Play Website Call Us :
                <span className="ml-2 bg-pink-300 px-4 py-1 rounded-full border border-pink-500">
                  07828798920
                </span>
              </p>
            </div>

            {/* Notice Board */}
            <div className="mt-2">
              <div className="bg-amber-700 text-white text-center py-1 font-bold italic text-1xl">
                Notice Board
              </div>

              <div className="space-y-[2px]">
                <div className="bg-stone-100 text-center py-1 text-1xl font-semibold">
                  Minimum Deposit : 500
                </div>

                <div className="bg-stone-100 text-center py-1 text-1xl font-semibold">
                  Minimum Withdrawal: 1000
                </div>

                <div className="bg-stone-100 text-center py-1 text-1xl font-semibold">
                  Maximum Withdrawal: No Limits
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="mt-3 border-2 border-pink-500 bg-gradient-to-r from-yellow-100 via-pink-200 to-pink-500 py-6 text-center">
              <h3 className="text-1xl md:text-1xl font-bold italic">
                अब सभी मटका बाजार खेलो ऑनलाइन ऐप पर रोज खेलो रोज कमाओ अभी
                डाउनलोड करो
              </h3>

              <button className="mt-4 px-8 py-2 bg-yellow-400 text-black text-1xl font-bold italic rounded-full shadow-lg border border-yellow-700">
                online matka play
              </button>

              <p className="mt-2 text-1xl font-bold italic text-lime-500">
                With 100% Trusted App
              </p>
            </div>

            {/* Matka Play Rate */}
            <div className="mt-3">
              <div className="bg-amber-700 text-white text-center py-1 font-bold italic text-1xl">
                Matka Play Rate
              </div>

              <div className="space-y-[2px]">
                {[
                  "SINGLE 10 KA 95",
                  "JODI 10 KA 950",
                  "SINGLE PATTI 10 KA 1400",
                  "DOUBLE PATTI 10 KA 2800",
                  "TRIPPLE PATTI 10 KA 7000",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-stone-100 text-center py-1 text-1xl font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Result Header */}
            <div className="mt-3 bg-gradient-to-r from-green-950 via-green-800 to-green-950 text-center py-3">
              <h2 className="text-white text-1xl italic font-bold">
                SATTA MATKA PLAY RESULT
              </h2>
            </div>

            {/* Fixed Buttons */}
            <div className="fixed bottom-4 left-4">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-bold shadow-lg">
                Online Matka Play
              </button>
            </div>

            <div className="fixed bottom-4 right-4">
              <button className="bg-white border-4 border-red-500 text-blue-700 px-4 py-2 rounded-xl font-bold shadow-lg">
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full mt-4 border-2 border-orange-500 rounded-md overflow-hidden bg-[#ececec]">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-950 via-green-900 to-green-950 py-3 text-center">
          <h2 className="text-white text-2xl md:text-3xl italic font-black uppercase">
            SATTA MATKA PLAY RESULT
          </h2>
        </div>

        {/* Rows */}
        <div>
          {results.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-300 text-center py-3 ${
                item.highlight ? "bg-yellow-400" : "bg-[#ececec]"
              }`}
            >
              <h3
                className={`text-xl md:text-2xl italic font-black drop-shadow-md ${item.color}`}
              >
                {item.title}
              </h3>

              <p className="text-black text-2xl md:text-3xl font-black">
                {item.result}
              </p>

              {index === 0 && (
                <p className="text-red-600 text-lg font-bold italic">
                  Jodi Panel
                </p>
              )}

              <p className="text-red-600 text-sm md:text-lg italic font-black mt-1">
                {item.time}
              </p>
            </div>
          ))}
        </div>

        {/* Fixed Buttons */}
        <div className="fixed bottom-3 left-2 z-50">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-bold italic shadow-lg border border-white">
            Online Matka Play
          </button>
        </div>

        <div className="fixed bottom-3 right-2 z-50">
          <button className="bg-white border-4 border-red-500 text-blue-700 px-5 py-1 rounded-2xl font-black italic shadow-lg">
            Refresh
          </button>
        </div>
      </section>

      <section className="w-full bg-white">
        <ChartSection
          title="Weekly Panel Or Patti Chart From 25-05-2026 To 31-05-2026 For Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market"
          data={panelChart}
        />

        <ChartSection
          title="Weekly Jodi Chart From 25-05-2026 To 31-05-2026 For Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market"
          data={jodiChart}
        />

        <ChartSection
          title="Weekly Number Open To Close From 25-05-2026 To 31-05-2026 For Kalyan, Milan, Kalyan Night, Rajdhani Night, Time Bazar, Main Bazar Market"
          data={weeklyNumbers}
        />

        {/* Fixed Buttons */}
        <button className="fixed bottom-3 left-2 z-50 bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold shadow-lg">
          Online Matka Play
        </button>

        <button className="fixed bottom-3 right-2 z-50 bg-white border-4 border-red-500 text-blue-700 px-5 py-1 rounded-2xl text-lg font-black italic shadow-lg">
          Refresh
        </button>
      </section>

      {/* Chart Records */}
      <div className="mt-4 bg-gradient-to-r from-cyan-700 to-blue-900 text-white text-center font-black italic text-lg px-3 py-2 rounded-t-xl">
        Online Matka Play Jodi Charts
      </div>

      <section className="bg-slate-900 rounded-b-xl overflow-hidden border border-cyan-500">
        {charts.map((item, index) => (
          <a
            key={index}
            href={`/jodi-chart/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block text-center py-3 text-xl font-bold text-cyan-300 border-b border-slate-700 hover:bg-slate-800 transition"
          >
            {item}
          </a>
        ))}
      </section>
    </main>
  );
}
