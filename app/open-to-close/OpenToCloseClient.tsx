"use client";
import { markets } from "@/data/games";
import Link from "next/link";
import {
  useGetMarketListQuery,
  useGetAppDataQuery,
} from "../redux/api/apiClient";

const markets2 = [
  "Kalyan",
  "Main Bazar",
  "Milan Day",
  "Milan Night",
  "Rajdhani Day",
  "Rajdhani Night",
  "Time Bazar",
  "Madhur Day",
  "Madhur Night",
  "+ More",
];

const tips = [
  {
    title: "Always check 3 Ank before market opens",
    description:
      "Early access gives you more time to analyze and cross-reference with chart history.",
  },
  {
    title: "Compare with previous day results",
    description:
      "Patterns often repeat on specific days of the week. Weekly comparison is key.",
  },
  {
    title: "Use chart history for pattern analysis",
    description:
      "Combine OTC data with jodi and panel chart records for a complete picture.",
  },
  {
    title: "Never rely on a single number",
    description:
      "Always use the full 3 Ank range to maximize your chances of covering the right digit.",
  },
];

export default function OpenToCloseClient() {
  const {
    data: marketResponse,
    isLoading,
    isError,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  const {
    data: appData,
    isLoading: appLoading,
    error: appError,
  } = useGetAppDataQuery({});

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* HEADER SECTION */}
        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-10 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Satta Matka Open To Close
          </h1>
          <p className="text-blue-200 font-medium tracking-wide text-sm md:text-lg mt-2 uppercase">
            Fix 3 Ank Daily For All Major Markets
          </p>

          <div className="mt-8 max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <p className="font-bold text-amber-400 text-sm tracking-wider uppercase">
              🕒 Game Update Schedule
            </p>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm md:text-base font-semibold">
              <div className="bg-white/5 py-2 rounded-lg border border-white/5">
                ☀️ Day: <span className="text-amber-300">02:00 PM</span>
              </div>
              <div className="bg-white/5 py-2 rounded-lg border border-white/5">
                🌙 Night: <span className="text-sky-300">08:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* DATE STRIP */}
        <div className="bg-amber-50 border-b border-amber-200 text-center py-3">
          <p className="text-amber-800 font-bold text-sm md:text-base tracking-wider">
            📅 DATE: {new Date().toLocaleDateString("en-GB").replace(/\//g, "-")}
          </p>
        </div>

        {/* MARKET LIVE CARDS */}
        <div className="p-4 md:p-8 bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900 mb-4 px-1 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Market Updates
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {isLoading && (
              <div className="col-span-full text-center py-12 text-slate-500 font-medium">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-3"></div>
                Fetching live updates...
              </div>
            )}

            {!isLoading && !isError && marketList
              ?.filter((item: any) =>
                [
                  "SRIDEVI", "TIME BAZAR", "MILAN DAY", "RAJDHANI DAY", "KALYAN",
                  "SRIDEVI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR",
                ].includes(item?.name),
              )
              ?.map((market: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-bold text-slate-900 tracking-wide text-base md:text-lg">
                      {market.name}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                      Active
                    </span>
                  </div>

                  {"title" in market ? (
                    <div className="mt-4 space-y-2 text-center bg-rose-50/50 border border-rose-100 rounded-lg p-3">
                      <div className="text-rose-700 font-bold text-sm uppercase tracking-wider">
                        {market.title}
                      </div>
                      <div className="text-slate-500 text-xs font-medium">CONTACT DETAILS</div>
                      <div className="text-rose-600 text-xl font-extrabold tracking-wide break-all">
                        {market.phone}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                      <div className="col-span-2 text-slate-500 font-medium text-xs tracking-wide bg-slate-50 py-1 rounded">
                        🕒 {market.open_time} - {market.close_time}
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2 mt-1">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Close status</div>
                        <div className="text-slate-800 font-bold text-sm md:text-base mt-0.5">{market.close}</div>
                      </div>
                      <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-2 mt-1">
                        <div className="text-[10px] font-bold text-indigo-500 uppercase">Result</div>
                        <div className="text-indigo-600 font-extrabold text-base md:text-lg mt-0.5">{market.result}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* INFORMATION CONTENT SECTION */}
        <div className="border-t border-slate-200 p-6 md:p-10 space-y-12 bg-white">
          
          {/* INFO BOX 1 */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-indigo-600">▪</span> What is Satta Matka Open To Close?
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Open To Close (OTC) is one of the most vital concepts in Satta Matka. It explicitly refers to the numerical relationship between the opening session digit and the closing session digit declared across various market variants.
            </p>
            <div className="mt-4 bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg text-xs md:text-sm text-slate-600 font-medium">
              <span className="font-bold text-slate-800">Example Matrix:</span> If the Open draw is 5 and the Close draw is 0, the complete Jodi solidifies as 50, which sets up the baseline for the derived Panna combinations.
            </div>
          </div>

          {/* INFO BOX 2 */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-indigo-600">▪</span> What is Fix 3 Ank?
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Fix 3 Ank consists of three strategic mathematical digits calculated by seasoned analytical frameworks. These numbers possess the statistical highest probability of appearing in either session on a given calendar day.
            </p>
            <div className="mt-4 bg-indigo-50/50 border-l-4 border-indigo-500 p-4 rounded-r-lg text-xs md:text-sm text-slate-700 font-medium">
              Instead of scattering approaches blindly across all ten single digits (0–9), analytical minds rely on the 3 Ank calculation parameters to heavily narrow downs risk boundaries.
            </div>
          </div>

          {/* HOW TO USE GUIDE */}
          <section className="max-w-3xl mx-auto border border-slate-200 rounded-xl p-6 bg-slate-50/50">
            <h2 className="font-bold text-xl md:text-2xl text-slate-900 mb-2">
              📌 Operational Guide: DPBoss Platform
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              The DPBoss algorithmic console deploys updated Fix 3 Ank configurations twice across standard operating schedules:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-center">
                <span className="text-2xl">☀️</span>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Day Segment Markets</div>
                <div className="text-2xl font-black text-slate-900 mt-1">2:00 PM</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">● Daily Standard Sync</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-center">
                <span className="text-2xl">🌙</span>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Night Segment Markets</div>
                <div className="text-2xl font-black text-slate-900 mt-1">8:00 PM</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">● Daily Standard Sync</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center mb-3">
                Covered Market Matrices
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {markets2.map((market) => (
                  <span
                    key={market}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium text-xs md:text-sm shadow-2xs"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* STRATEGY TIPS */}
          <section className="max-w-3xl mx-auto">
            <h2 className="font-bold text-xl md:text-2xl text-slate-900 mb-6">
              💡 Technical Strategies & Insights
            </h2>

            <div className="grid gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white rounded-xl p-4 border border-slate-200 shadow-2xs"
                >
                  <div className="h-8 w-8 min-w-[32px] rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm">
                    {index + 1}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{tip.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* REFINED WHITE FOOTER */}
      <footer className="max-w-5xl mx-auto mt-8 bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-2xs">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm font-semibold text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <span className="text-slate-300">|</span>
          <Link href="/satta-matka-guessing-forum" className="hover:text-indigo-600 transition">Matka Guessing</Link>
          <span className="text-slate-300">|</span>
          <Link href="/satta-matka-chart" className="hover:text-indigo-600 transition">Matka Chart</Link>
          <span className="text-slate-300">|</span>
          <Link href="/online-matka-play" className="hover:text-indigo-600 transition">Matka Play</Link>
          <span className="text-slate-300">|</span>
          <Link href="/tara-matka-mumbai" className="hover:text-indigo-600 transition">Tara Matka</Link>
          <span className="text-slate-300">|</span>
          <Link href="/fix-matka-number" className="hover:text-indigo-600 transition">Fix Matka</Link>
          <span className="text-slate-300">|</span>
          <Link href="/sitemap.xml" className="hover:text-indigo-600 transition">Sitemap</Link>
        </div>

        <div className="my-6 border-t border-slate-100" />

        <div className="space-y-2 text-xs md:text-sm text-slate-500">
          <h3 className="text-indigo-600 font-bold text-base tracking-wide">
            https://sattamatkadpbos.com/
          </h3>
          <p className="font-medium">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED (2012-2026)
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-slate-600 font-medium">
            <div>
              <span className="text-slate-400 text-xs block sm:inline mr-1">SITE OWNER:</span>
              <span className="font-bold text-slate-900">FAST BOSS SIR</span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div>
              <span className="text-slate-400 text-xs block sm:inline mr-1">WHATSAPP:</span>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                {appData?.data?.whatsapp_number ?? "1234567890"}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}