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
    <main className="min-h-screen bg-gradient-to-b from-[#09090f] via-[#111827] to-[#020617] p-3 md:p-5">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#0f172a] shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 px-4 py-5">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

            <h1 className="relative text-center text-xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
              ✨ Satta Matka Chart 2026 ✨
            </h1>

            <p className="relative mt-2 text-center text-sm md:text-base font-semibold text-cyan-100">
              Jodi Chart • Panel Chart • All Market Records
            </p>
          </div>

          {/* MARKET LIST */}
          <section className="p-3 md:p-5 bg-[#0b1120]">
            {isLoading && (
              <div className="py-10 text-center">
                <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
                <p className="mt-3 text-lg font-bold text-cyan-300">
                  Loading Market Charts...
                </p>
              </div>
            )}

            {isError && (
              <div className="rounded-2xl border border-red-500 bg-red-500/10 py-6 text-center">
                <p className="text-lg font-bold text-red-400">
                  Failed to load market data
                </p>

                <button
                  onClick={() => refetch()}
                  className="mt-4 rounded-xl bg-red-500 px-5 py-2 font-bold text-white transition hover:bg-red-600"
                >
                  Retry
                </button>
              </div>
            )}

            {!isLoading && !isError && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {marketList?.slice(0, 20)?.map(
                  (item: any, index: number) => (
                    <a
                      key={index}
                      href={`/jodi-chart/${item?.name
                        ?.toLowerCase()
                        ?.replace(/\s+/g, "-")}-chart`}
                      className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#111827] to-[#172554] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />

                      <div className="relative flex items-center justify-between">
                        <h2 className="text-lg md:text-xl font-black uppercase tracking-wide text-cyan-200 group-hover:text-white">
                          {item?.name}
                        </h2>

                        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-bold text-cyan-300">
                          View
                        </span>
                      </div>
                    </a>
                  )
                )}
              </div>
            )}
          </section>
        </div>

        {/* FOOTER */}
        <footer className="mt-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0f172a] shadow-[0_0_25px_rgba(34,211,238,0.15)]">
          {/* LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-cyan-500/20 bg-gradient-to-r from-[#111827] to-[#172554] px-4 py-4 text-sm md:text-base font-bold">
            <Link
              href="/"
              className="rounded-lg bg-cyan-500/10 px-3 py-2 text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="rounded-lg bg-pink-500/10 px-3 py-2 text-pink-300 transition hover:bg-pink-500 hover:text-white"
            >
              Guessing Forum
            </Link>

            <Link
              href="/satta-matka-chart"
              className="rounded-lg bg-yellow-500/10 px-3 py-2 text-yellow-300 transition hover:bg-yellow-500 hover:text-black"
            >
              Matka Chart
            </Link>

            <Link
              href="/online-matka-play"
              className="rounded-lg bg-blue-500/10 px-3 py-2 text-blue-300 transition hover:bg-blue-500 hover:text-white"
            >
              Matka Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="rounded-lg bg-green-500/10 px-3 py-2 text-green-300 transition hover:bg-green-500 hover:text-white"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="rounded-lg bg-orange-500/10 px-3 py-2 text-orange-300 transition hover:bg-orange-500 hover:text-white"
            >
              Fix Matka
            </Link>

            <Link
              href="/sitemap.xml"
              className="rounded-lg bg-purple-500/10 px-3 py-2 text-purple-300 transition hover:bg-purple-500 hover:text-white"
            >
              Sitemap
            </Link>
          </div>

          {/* FOOTER CONTENT */}
          <div className="space-y-3 px-4 py-6 text-center">
            <h3 className="text-lg md:text-2xl font-black tracking-wide text-cyan-300 break-all">
              https://sattamatkadpb.net
            </h3>

            <p className="text-base md:text-xl font-extrabold text-white">
              ALL RIGHTS RESERVED © 2012 - 2026
            </p>

            <div className="mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <p className="text-lg font-bold text-slate-300">
              SITE OWNER
            </p>

            <p className="animate-pulse text-2xl md:text-4xl font-black tracking-wider text-yellow-300">
              FAST BOSS SIR
            </p>

            <p className="text-lg md:text-2xl font-bold text-cyan-400">
              1234567890
            </p>

            <p className="pt-2 text-sm md:text-base font-semibold text-slate-400 break-all">
              https://sattamatkadpb.net
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}