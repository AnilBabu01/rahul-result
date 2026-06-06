"use client";

import Link from "next/link";
import { useGetMarketListQuery } from "../redux/api/apiClient";

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
      "early access gives you more time to analyze and cross-reference with chart history.",
  },
  {
    title: "Compare with previous day results",
    description:
      "patterns often repeat on specific days of the week. Weekly comparison is key.",
  },
  {
    title: "Use chart history for pattern analysis",
    description:
      "combine OTC data with jodi and panel chart records for a complete picture.",
  },
  {
    title: "Never rely on a single number",
    description:
      "always use the full 3 Ank range to maximize your chances of covering the right digit.",
  },
];

export default function OpenToCloseClient() {
  const {
    data: marketResponse,
    isLoading,
    isError,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-[#060816] text-white overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-3 py-4 md:px-5 md:py-6">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* TOP GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10" />

          <div className="relative z-10 px-4 py-8 md:px-10 md:py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* LEFT */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 font-bold text-sm">
                  🔥 DAILY OTC UPDATE
                </div>

                <h1 className="mt-5 text-3xl md:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Satta Matka
                  </span>
                  <br />
                  Open To Close
                </h1>

                <p className="mt-5 text-slate-300 text-base md:text-xl leading-8 max-w-3xl">
                  Get daily Fix 3 Ank, Open To Close numbers, market timing,
                  chart updates, and premium guessing insights for all major
                  Matka markets.
                </p>

                {/* TIMING */}
                <div className="grid grid-cols-2 gap-4 mt-8 max-w-xl">
                  <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                    <div className="text-4xl">☀️</div>

                    <div className="mt-3 text-yellow-300 font-black uppercase tracking-wider">
                      Day Update
                    </div>

                    <div className="text-3xl md:text-4xl font-black mt-2">
                      02:00 PM
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
                    <div className="text-4xl">🌙</div>

                    <div className="mt-3 text-cyan-300 font-black uppercase tracking-wider">
                      Night Update
                    </div>

                    <div className="text-3xl md:text-4xl font-black mt-2">
                      08:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT DATE CARD */}
              <div className="w-full lg:w-[320px]">
                <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 text-center">
                  <div className="text-slate-400 uppercase tracking-[4px] text-sm">
                    Today's Date
                  </div>

                  <div className="mt-4 text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    {new Date()
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="text-fuchsia-300 text-lg font-black">
                      FIX 3 ANK
                    </div>

                    <div className="mt-2 text-slate-300 text-sm leading-7">
                      Premium OTC guessing updates for all major Matka markets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKET LIST */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl md:text-4xl font-black">
              Live Market Updates
            </h2>

            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 font-bold">
              ● Live
            </div>
          </div>

          {isLoading && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-xl font-bold">
              Loading Market Data...
            </div>
          )}

          {!isLoading && !isError && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {marketList?.slice(0, 20)?.map(
                (market: any, index: number) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0f172a] p-5 hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10" />

                    <div className="relative z-10">
                      {/* HEADER */}
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={`${market.color} px-4 py-2 rounded-xl text-sm md:text-base font-black italic text-white shadow-lg`}
                        >
                          {market.name}
                        </div>

                        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                      </div>

                      {"title" in market ? (
                        <div className="mt-6">
                          <div className="text-fuchsia-300 text-2xl font-black">
                            {market.title}
                          </div>

                          <div className="mt-3 text-slate-300 font-bold tracking-wide">
                            CALL KARE
                          </div>

                          <div className="mt-3 text-3xl md:text-4xl font-black text-cyan-300 break-all">
                            {market.phone}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-6">
                          <div className="flex items-center justify-between text-sm text-slate-400">
                            <span>OPEN</span>
                            <span>CLOSE</span>
                          </div>

                          <div className="mt-2 flex items-center justify-between text-lg font-bold">
                            <span className="text-fuchsia-300">
                              {market.open_time}
                            </span>

                            <span className="text-cyan-300">
                              {market.close_time}
                            </span>
                          </div>

                          <div className="mt-6 rounded-2xl bg-black/30 border border-white/10 p-5 text-center">
                            <div className="text-slate-400 uppercase text-sm tracking-[3px]">
                              Result
                            </div>

                            <div className="mt-3 text-4xl md:text-5xl font-black tracking-widest bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                              {market.result}
                            </div>

                            <div className="mt-4 text-slate-400 text-sm">
                              {market.close}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        {/* INFO SECTION */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BOX 1 */}
          <div className="rounded-[30px] border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-6 md:p-8">
            <div className="text-5xl">📘</div>

            <h3 className="mt-5 text-3xl font-black text-cyan-300">
              What is Open To Close?
            </h3>

            <p className="mt-5 text-slate-300 leading-8 text-base md:text-lg">
              Open To Close (OTC) is one of the most important concepts in Satta
              Matka. It refers to the relationship between the opening number
              and closing number declared in each market session.
            </p>

            <div className="mt-6 rounded-2xl bg-black/30 border border-cyan-500/20 p-5">
              <p className="text-slate-200 leading-7">
                Example: If Open is 5 and Close is 0, then the Jodi becomes 50
                and the Panna is derived from that combination.
              </p>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="rounded-[30px] border border-fuchsia-500/20 bg-fuchsia-500/5 backdrop-blur-xl p-6 md:p-8">
            <div className="text-5xl">🎯</div>

            <h3 className="mt-5 text-3xl font-black text-fuchsia-300">
              What is Fix 3 Ank?
            </h3>

            <p className="mt-5 text-slate-300 leading-8 text-base md:text-lg">
              Fix 3 Ank means three specific digits predicted by experts that
              are most likely to appear as Open or Close in a Matka market on a
              given day.
            </p>

            <div className="mt-6 rounded-2xl bg-black/30 border border-fuchsia-500/20 p-5">
              <p className="text-slate-200 leading-7">
                Instead of selecting from all 10 digits, players focus only on
                3 strong numbers for smarter analysis.
              </p>
            </div>
          </div>
        </section>

        {/* MARKETS COVERED */}
        <section className="mt-10 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black">
              Markets Covered
            </h2>

            <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
              Daily OTC updates available for all popular Matka markets.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {markets2.map((market) => (
              <div
                key={market}
                className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 text-white font-bold hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                {market}
              </div>
            ))}
          </div>
        </section>

        {/* STRATEGY */}
        <section className="mt-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              OTC Strategy Tips
            </h2>

            <p className="mt-4 text-slate-400">
              Improve your guessing strategy with these expert tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#131c2f] to-[#0b1220] p-6"
              >
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center text-2xl font-black shrink-0">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      {tip.title}
                    </h3>

                    <p className="mt-3 text-slate-400 leading-7">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 px-5 py-6 text-sm md:text-base font-bold">
            <Link href="/" className="text-cyan-300 hover:text-cyan-200">
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="text-fuchsia-300 hover:text-fuchsia-200"
            >
              Matka Guessing
            </Link>

            <Link
              href="/satta-matka-chart"
              className="text-yellow-300 hover:text-yellow-200"
            >
              Matka Chart
            </Link>

            <Link
              href="/online-matka-play"
              className="text-blue-300 hover:text-blue-200"
            >
              Matka Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="text-green-300 hover:text-green-200"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="text-orange-300 hover:text-orange-200"
            >
              Fix Matka
            </Link>

            <Link
              href="/sitemap.xml"
              className="text-pink-300 hover:text-pink-200"
            >
              Sitemap
            </Link>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-white/10 px-5 py-8 text-center">
            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent break-all">
              https://sattamatkadpbos.com
            </div>

            <div className="mt-5 text-white font-black text-lg">
              ALL RIGHTS RESERVED (2012-2026)
            </div>

            <div className="mt-4 text-slate-400 font-bold">
              SITE OWNER
            </div>

            <div className="mt-2 text-yellow-300 text-2xl font-black underline">
              FAST BOSS SIR
            </div>

            <div className="mt-4 text-cyan-300 font-black text-xl">
              1234567890
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}