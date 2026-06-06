"use client";

import Link from "next/link";
import { useGetMarketListQuery } from "../redux/api/apiClient";

export default function SattaMatkaChartClient() {
  const {
    data: marketResponse,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  return (
    <main className="min-h-screen bg-[#06131f] bg-[radial-gradient(circle_at_top,_#123456_0%,_#06131f_45%,_#02060d_100%)] px-3 py-4">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="overflow-hidden rounded-[30px] border border-cyan-400/30 bg-[#081521]/90 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-sm">
          {/* TOP TITLE */}
          <div className="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-5">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <h1 className="relative z-10 text-center text-xl font-black uppercase tracking-wide text-white md:text-3xl">
              SATTA MATKA CHART 2026
            </h1>

            <p className="relative z-10 mt-2 text-center text-sm font-bold tracking-widest text-cyan-100 md:text-base">
              JODI • PANEL • ALL MARKET RESULT CHART
            </p>
          </div>

          {/* LIVE STATUS */}
          <div className="flex items-center justify-between border-b border-cyan-400/10 bg-[#0c1d2c] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-bold tracking-wide text-green-300">
                LIVE MARKET STATUS
              </span>
            </div>

            {isFetching && (
              <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300 animate-pulse">
                Refreshing...
              </div>
            )}
          </div>

          {/* MARKET LIST */}
          <section className="grid grid-cols-1 gap-3 bg-[#081521] p-3 md:grid-cols-2">
            {isLoading && (
              <div className="col-span-full py-10 text-center">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#102638] px-6 py-4">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                  <span className="text-lg font-bold text-cyan-300">
                    Loading Market Charts...
                  </span>
                </div>
              </div>
            )}

            {!isLoading &&
              !isError &&
              marketList?.slice(0, 20)?.map((item: any, index: number) => (
                <a
                  key={index}
                  href={`/jodi-chart/${item?.name
                    ?.toLowerCase()
                    ?.replace(/\s+/g, "-")}`}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#0d2133] to-[#091723] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-sky-500/10" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[3px] text-cyan-400">
                        Market Chart
                      </p>

                      <h2 className="mt-2 text-lg font-black uppercase tracking-wide text-white md:text-xl">
                        {item?.name}
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xl text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
                      →
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between">
                    <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-300">
                      Active
                    </span>

                    <span className="text-sm font-bold text-slate-400 group-hover:text-cyan-300">
                      View Chart
                    </span>
                  </div>
                </a>
              ))}
          </section>
        </div>

        {/* FOOTER */}
        <footer className="mt-6 overflow-hidden rounded-[30px] border border-cyan-400/20 bg-[#081521] shadow-[0_0_30px_rgba(34,211,238,0.12)]">
          {/* FOOTER LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-cyan-400/10 bg-[#0c1d2c] px-4 py-5 text-center">
            <Link
              href="/"
              className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="rounded-full bg-pink-500/10 px-4 py-2 text-sm font-bold text-pink-300 transition-all duration-300 hover:bg-pink-500 hover:text-white"
            >
              Matka Guessing
            </Link>

            <Link
              href="/satta-matka-chart"
              className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-bold text-yellow-300 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Matka Chart
            </Link>

            <Link
              href="/online-matka-play"
              className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300 transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              Matka Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-bold text-green-300 transition-all duration-300 hover:bg-green-500 hover:text-black"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              Fix Matka
            </Link>

            <Link
              href="/sitemap.xml"
              className="rounded-full bg-purple-500/10 px-4 py-2 text-sm font-bold text-purple-300 transition-all duration-300 hover:bg-purple-500 hover:text-white"
            >
              Sitemap
            </Link>
          </div>

          {/* FOOTER INFO */}
          <div className="space-y-4 px-4 py-8 text-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">
                Official Website
              </p>

              <h3 className="mt-2 break-all text-xl font-black text-white md:text-2xl">
                sattamatkadpbos.com
              </h3>
            </div>

            <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <p className="text-lg font-black tracking-wide text-slate-200">
              ALL RIGHTS RESERVED © 2012 - 2026
            </p>

            <div>
              <p className="text-sm font-bold uppercase tracking-[4px] text-yellow-400">
                Site Owner
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase tracking-wider text-yellow-300">
                FAST BOSS SIR
              </h2>
            </div>

            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3">
              <p className="text-lg font-black tracking-[3px] text-cyan-300">
                1234567890
              </p>
            </div>

            <p className="break-all text-sm font-bold text-slate-400">
              https://sattamatkadpbos.com
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}