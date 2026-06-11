"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetAppDataQuery } from "@/app/redux/api/apiClient";

type Props = {
  slug: string;
};

export default function JodiChartClient({ slug }: Props) {
  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();

  // =========================
  // DATE STATES
  // =========================
  const today = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState("2026-06-01");
  const [toDate, setToDate] = useState(today);

  // =========================
  // API DATA STATES
  // =========================
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState<string[][]>([]);

  // =========================
  // FETCH DATA AUTOMATICALLY
  // =========================
  const {
    data: appData,
    isLoading: appLoading,
    error: appError,
  } = useGetAppDataQuery({});

  useEffect(() => {
    fetchChartData();
  }, [fromDate, toDate, formattedTitle]);

  const fetchChartData = async () => {
    try {
      setLoading(true);

      const cleanTitle = formattedTitle
        .replace(/[_-]+/g, " ")
        .trim()
        .split(" ")
        .slice(0, -1)
        .join(" ");

      const response = await fetch(
        `https://sattamatkadpbos.com///apis/client_cron_market.php?action=get_results&name=${encodeURIComponent(
          cleanTitle,
        )}&from_date=${fromDate}&to_date=${toDate}`,
        { cache: "no-store" },
      );

      const data = await response.json();

      if (data?.data && Array.isArray(data.data)) {
        const rows: string[][] = [];
        // Note: data.data.reverse() modifies the array in-place inside the loop, 
        // using standard assignment beforehand ensures stable chunking
        const totalItems = [...data.data].reverse();

        for (let i = 0; i < totalItems.length; i += 7) {
          rows.push(
            totalItems.slice(i, i + 7).map((item: any) => item.result || "--")
          );
        }
        setChartData(rows);
      } else {
        setChartData([]);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      setChartData([]);
    } finally {
      setLoading(false);
    }
  };

  const redNumbers = [
    "05", "72", "16", "44", "00", "66", "94", "49", "22", "77", "61", "50", "88", "38",
  ];

  const latestResult = chartData.flat().slice(-1)[0] || "--";

  const renderCellData = (num: string) => {
    if (!num || num === "Loading..") return "--";
    if (typeof num === "string" && num.includes("-")) {
      return num.split("-")[1] || "--";
    }
    return num;
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased scroll-smooth py-6">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Section */}
        <header className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-6 px-4 text-center">
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {formattedTitle}
            </h1>
          </div>
          
          <div className="p-5 text-center bg-slate-50/50 border-t border-slate-100">
            <h2 className="text-md sm:text-lg font-bold text-slate-700 mb-2">
              Live Jodi Records Online
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed lowercase">
              {formattedTitle} chart, {formattedTitle} result satta chart,{" "}
              {formattedTitle} result matka chart, {formattedTitle} jodi chart
              record, day night {formattedTitle} matka chart result,{" "}
              {formattedTitle} jodi penal chart, {formattedTitle} bazar
              guessing, dhan express chart ank, satta matka {formattedTitle},
              results of dhan express, {formattedTitle} satta matka,{" "}
              {formattedTitle} chart dpboss
            </p>
          </div>
        </header>

        {/* Highlighted Result Panel */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm mb-6">
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Latest Result Update</span>
          <h2 className="text-lg md:text-xl font-bold text-slate-700 mt-1 uppercase">
            {formattedTitle}
          </h2>
          <div className="my-3 text-4xl md:text-5xl font-black text-indigo-600 tracking-normal">
            {latestResult}
          </div>
          <button
            onClick={fetchChartData}
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition active:scale-95"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Refreshing Chart...
              </>
            ) : (
              "Refresh Dashboard"
            )}
          </button>
        </section>

        {/* Date Filter Panel */}
        <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col w-full sm:w-auto">
              <label className="mb-1.5 text-slate-600 font-semibold text-xs uppercase tracking-wider">
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-slate-700 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>

            <div className="flex flex-col w-full sm:w-auto">
              <label className="mb-1.5 text-slate-600 font-semibold text-xs uppercase tracking-wider">
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-slate-700 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>
          </div>
        </section>

        {/* Fast Action Navigation Anchor */}
        <div className="mb-6 flex justify-center">
          <a
            href="#bottom"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-indigo-600"
          >
            ↓ Scroll to Bottom
          </a>
        </div>

        {/* Chart Viewport */}
        <section className="overflow-x-auto bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-6">
          <div className="min-w-max flex justify-center">
            <table className="border-collapse">
              <tbody>
                {chartData.length > 0 ? (
                  chartData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-slate-50/80 transition-colors">
                      {row.map((num, colIndex) => {
                        const parsedValue = renderCellData(num);
                        const isRed = redNumbers.includes(parsedValue);
                        return (
                          <td
                            key={colIndex}
                            className={`h-12 w-12 sm:h-16 sm:w-16 border border-slate-100 text-center text-lg sm:text-xl font-bold transition-all ${
                              isRed ? "text-rose-600 bg-rose-50/40" : "text-slate-800"
                            }`}
                            style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}
                          >
                            {parsedValue}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-slate-400 font-medium text-sm">
                      {loading ? "Syncing data matrix..." : "No records match selected timeline."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scroll Back Trigger Anchor */}
        <div id="bottom" className="mb-6 flex justify-center">
          <a
            href="#top"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-indigo-600"
          >
            ↑ Back to Top
          </a>
        </div>

        {/* Synchronized Footer Result Card */}
        <section className="bg-white border border-slate-200 text-center p-6 rounded-2xl shadow-sm mb-6">
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">
            Live Stream Snapshot
          </h3>
          <div className="mt-1 text-xl font-extrabold text-slate-800 uppercase">
            {formattedTitle}
          </div>
          <div className="my-2 text-3xl font-black text-rose-600">
            {latestResult}
          </div>
          <button
            onClick={fetchChartData}
            className="mt-2 text-xs px-4 py-2 border border-indigo-200 text-indigo-600 bg-indigo-50/50 hover:bg-indigo-50 rounded-xl font-semibold transition"
          >
            Refresh Summary
          </button>
        </section>

        {/* Community Channel Banner */}
        <section className="mb-8">
          <div
            onClick={() => {
              if (appData?.data?.WhatsAppchannel) {
                window.open(appData.data.WhatsAppchannel, "_blank");
              }
            }}
            className="bg-emerald-600 text-white px-6 py-4 rounded-2xl font-bold text-center cursor-pointer hover:bg-emerald-700 shadow-md transition transform active:scale-98 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.615-5.34 11.962-11.91 11.962l-5.705-.001L0 24zm6.59-4.846c1.62.963 3.245 1.472 4.798 1.475 5.532 0 10.033-4.505 10.036-10.042.002-2.684-1.038-5.207-2.93-7.101-1.892-1.893-4.41-2.932-7.093-2.933-5.534 0-10.036 4.508-10.039 10.045-.001 1.865.51 3.691 1.48 5.305L1.766 22.22l4.881-1.281z" />
            </svg>
            Join our WhatsApp channel for fast updates
          </div>
        </section>

        {/* Global Directory Footer Navigation */}
        <nav className="bg-white border border-slate-200 rounded-2xl p-5 mb-6 shadow-sm">
          <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-slate-500">
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
        </nav>

        {/* Compliance Footer Attribution */}
        <footer className="bg-white border border-slate-200 text-center p-6 rounded-2xl shadow-sm">
          <h4 className="text-slate-800 font-extrabold tracking-tight text-lg">
            sattamatkadpb
          </h4>
          <p className="mt-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
            All Rights Reserved © 2012 - 2026
          </p>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
            <div className="text-slate-500 font-medium">
              Site Owner: <span className="font-bold text-slate-700 underline decoration-indigo-500 underline-offset-4">FAST BOSS SIR</span>
            </div>
            <div className="font-mono bg-slate-50 border border-slate-200 text-indigo-600 font-bold px-3 py-1 rounded-lg text-xs sm:text-sm">
              {appData?.data?.whatsapp_number ?? "1234567890"}
            </div>
          </div>
          
          <div className="mt-4 text-xs text-slate-400 break-all bg-slate-50 py-2 px-3 rounded-xl border border-slate-100">
            https://sattamatkadpb.net/
          </div>
        </footer>

      </div>
    </div>
  );
}