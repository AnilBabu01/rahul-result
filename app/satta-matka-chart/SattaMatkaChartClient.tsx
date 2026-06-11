"use client";

import Link from "next/link";
import { useGetMarketListQuery } from "../redux/api/apiClient";

export default function SattaMatkaChartClient() {
  const {
    data: marketResponse,
    isLoading,
    isError,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  // Allowed markets to display
  const allowedMarkets = [
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
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER CARD */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            📊 Live Dashboard
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Satta Matka Chart 2026
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            Real-time Jodi & Panel Charts for all major markets updated instantly.
          </p>
        </div>

        {/* MARKETS SECTION */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-5 bg-indigo-600 rounded-full"></span>
            Select Market Chart
          </h2>

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 space-y-3">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-slate-500 font-medium">Fetching market list...</p>
            </div>
          )}

          {isError && (
            <div className="text-center py-8 text-red-500 font-medium bg-red-50 rounded-xl border border-red-100">
              Failed to load markets. Please refresh or try again later.
            </div>
          )}

          {!isLoading && !isError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketList
                ?.filter((item: any) => allowedMarkets.includes(item?.name?.toUpperCase()))
                ?.map((item: any, index: number) => {
                  const chartSlug = item?.name
                    ?.toLowerCase()
                    ?.replace(/\s+/g, "-");

                  return (
                    <Link
                      key={index}
                      href={`/jodi-chart/${chartSlug}-chart`}
                      className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-500 hover:shadow-md transition-all duration-200"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Market</span>
                        <p className="font-bold text-slate-900 text-base md:text-lg group-hover:text-indigo-600 transition-colors">
                          {item?.name}
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-all">
                        →
                      </span>
                    </Link>
                  );
                })}
            </div>
          )}
        </section>

        {/* MODERN FOOTER */}
        <footer className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {/* Quick Links Nav */}
          <div className="p-6 bg-slate-50 border-b border-slate-100">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
              <Link href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/satta-matka-guessing-forum" className="text-slate-600 hover:text-indigo-600 transition-colors">Matka Guessing</Link>
              <Link href="/satta-matka-chart" className="text-slate-600 hover:text-indigo-600 transition-colors">Matka Chart</Link>
              <Link href="/online-matka-play" className="text-slate-600 hover:text-indigo-600 transition-colors">Matka Play</Link>
              <Link href="/tara-matka-mumbai" className="text-slate-600 hover:text-indigo-600 transition-colors">Tara Matka</Link>
              <Link href="/fix-matka-number" className="text-slate-600 hover:text-indigo-600 transition-colors">Fix Matka</Link>
              <Link href="/sitemap.xml" className="text-slate-600 hover:text-indigo-600 transition-colors">Sitemap</Link>
            </nav>
          </div>

          {/* Owner Info & Copyright */}
          <div className="p-8 text-center space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Site Owner</span>
                <span className="text-lg font-extrabold text-slate-900 tracking-wide">FAST BOSS SIR</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Contact Support</span>
                <span className="text-lg font-extrabold text-indigo-600 tracking-wide">1234567890</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Official Domain</span>
                <span className="text-sm font-bold text-slate-700 truncate block">sattamatkadpbos.com</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-slate-400 gap-2">
              <p>© 2012-2026 All Rights Reserved.</p>
              <p className="hover:underline cursor-pointer">Privacy Policy & Terms</p>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}