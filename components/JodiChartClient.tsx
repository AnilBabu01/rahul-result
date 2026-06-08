// app/jodi-chart/[slug]/JodiChartClient.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
        `https://sattamatkadpbos.com/apis/client_cron_market.php?action=get_results&name=${encodeURIComponent(
          cleanTitle,
        )}&from_date=${fromDate}&to_date=${toDate}`,
        {
          cache: "no-store",
        },
      );

      const data = await response.json();

      if (data?.data && Array.isArray(data.data)) {
        const reverseData = [...data.data].reverse();

        const rows: string[][] = [];

        for (let i = 0; i < reverseData.length; i += 7) {
          rows.push(
            reverseData
              .slice(i, i + 7)
              .map((item: any) => item.result || "--"),
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
    "05",
    "72",
    "16",
    "44",
    "00",
    "66",
    "94",
    "49",
    "22",
    "77",
    "61",
    "50",
    "88",
    "38",
  ];

  const latestResult = chartData.flat().slice(-1)[0] || "";

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#111827] to-black text-white py-4"
    >
      <div className="max-w-7xl mx-auto px-2">
        {/* HEADER */}
        <div className="rounded-2xl overflow-hidden border border-yellow-500 shadow-2xl shadow-yellow-500/10">
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 py-5 text-center">
            <h1 className="md:text-1xl md:text-1xl font-black italic tracking-wider text-black drop-shadow-lg">
              {formattedTitle}
            </h1>
          </div>

          <div className="bg-[#111827] border-t border-yellow-500 px-3 py-5 text-center">
            <h2 className="text-lg md:text-1xl font-black text-yellow-400 italic">
              {formattedTitle} Jodi Chart
            </h2>

            <p className="mt-3 text-[11px] sm:text-sm text-slate-300 leading-relaxed lowercase">
              {formattedTitle} chart, {formattedTitle} result satta chart,{" "}
              {formattedTitle} result matka chart, {formattedTitle} jodi chart
              record, day night {formattedTitle} matka chart result,{" "}
              {formattedTitle} jodi penal chart, {formattedTitle} bazar
              guessing, dhan express chart ank, satta matka {formattedTitle},
              results of dhan express, {formattedTitle} satta matka,{" "}
              {formattedTitle} chart dpboss
            </p>
          </div>
        </div>

        {/* LIVE RESULT */}
        <div className="mt-4 rounded-2xl border border-emerald-500 bg-[#111827] p-5 text-center shadow-lg">
          <div className="inline-block rounded-full bg-emerald-500/20 px-4 py-1 text-xs md:text-sm font-bold text-emerald-400 border border-emerald-500">
            LIVE RESULT
          </div>

          <h2 className="mt-3 text-xl md:text-1xl font-black text-white uppercase">
            {formattedTitle}
          </h2>

          <div className="mt-4 text-2xl md:text-3xl font-black tracking-[6px] text-yellow-400 drop-shadow-lg">
            {latestResult}
          </div>

          <button
            onClick={fetchChartData}
            className="mt-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm md:text-lg font-black text-black transition hover:scale-105"
          >
            {loading ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>

        {/* DATE FILTER */}
        <div className="mt-5 rounded-2xl border border-cyan-500 bg-[#111827] p-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="w-full md:w-auto">
              <label className="block mb-2 text-sm font-bold text-cyan-400">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full rounded-xl border border-cyan-500 bg-slate-900 px-4 py-3 text-white outline-none"
              />
            </div>

            <div className="w-full md:w-auto">
              <label className="block mb-2 text-sm font-bold text-pink-400">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full rounded-xl border border-pink-500 bg-slate-900 px-4 py-3 text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* GO BOTTOM */}
        <div className="flex justify-center mt-5">
          <a
            href="#bottom"
            className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 text-sm md:text-lg font-black text-black transition hover:scale-105"
          >
            Go to Bottom ↓
          </a>
        </div>

        {/* TABLE */}
        <div className="mt-5 overflow-x-auto">
          <div className="min-w-max rounded-2xl border border-yellow-500 bg-[#111827] p-3 shadow-2xl">
            <table className="border-collapse mx-auto">
              <tbody>
                {chartData.length > 0 ? (
                  chartData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((num, colIndex) => (
                        <td
                          key={colIndex}
                          className={`h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 border border-slate-700 text-center text-xl md:text-1xl font-black italic transition-all duration-200 hover:bg-slate-800 ${
                            redNumbers.includes(num)
                              ? "text-red-400"
                              : "text-white"
                          }`}
                          style={{
                            fontFamily: "Georgia, serif",
                            textShadow:
                              "0px 0px 12px rgba(250,204,21,0.5)",
                          }}
                        >
                          {typeof num === "string" && num.includes("-")
                            ? num.split("-")[1]
                            : num}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-10 text-center text-lg font-bold text-cyan-300"
                    >
                      {loading ? "Loading Chart..." : "No Data Found"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* GO TOP */}
        <div id="bottom" className="flex justify-center mt-5">
          <a
            href="#top"
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-3 text-sm md:text-lg font-black text-white transition hover:scale-105"
          >
            ↑ Go to Top
          </a>
        </div>

        {/* FOOTER RESULT */}
        <div className="mt-5 rounded-2xl border border-emerald-500 bg-[#111827] py-5 text-center">
          <h2 className="text-xl md:text-1xl font-black text-emerald-400 uppercase">
            {formattedTitle}
          </h2>

          <div className="mt-3 text-1xl md:text-3xl font-black tracking-[5px] text-yellow-400">
            {latestResult}
          </div>

          <button
            onClick={fetchChartData}
            className="mt-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-sm md:text-lg font-black text-black transition hover:scale-105"
          >
            {loading ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>

        {/* WHATSAPP */}
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-700 p-4 text-center shadow-2xl">
          <div className="text-sm md:text-xl font-black text-white">
            Join our WhatsApp channel for Fast Result
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="mt-5 rounded-2xl border border-cyan-500 bg-[#111827] p-4">
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base font-bold">
            <Link href="/" className="text-cyan-400 hover:text-white">
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="text-pink-400 hover:text-white"
            >
              Matka Guessing
            </Link>

            <Link
              href="/satta-matka-chart"
              className="text-yellow-400 hover:text-white"
            >
              Matka Chart
            </Link>

            <Link
              href="/online-matka-play"
              className="text-blue-400 hover:text-white"
            >
              Matka Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="text-green-400 hover:text-white"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="text-orange-400 hover:text-white"
            >
              Fix Matka
            </Link>

            <Link
              href="/sitemap.xml"
              className="text-purple-400 hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="mt-5 rounded-2xl border border-yellow-500 bg-[#111827] px-4 py-6 text-center shadow-2xl">
          <h2 className="md:text-1xl md:text-2xl font-black italic text-yellow-400">
            sattamatkadp
          </h2>

          <div className="mt-4 text-sm md:text-xl font-black text-cyan-300">
            ALL RIGHTS RESERVED (2012-2026)
          </div>

          <div className="mt-3 text-sm md:text-lg font-black text-white">
            SITE OWNER :-
          </div>

          <div className="mt-2 text-lg md:md:text-1xl font-black underline text-pink-400">
            FAST BOSS SIR
          </div>

          <div className="mt-3 text-cyan-300 text-lg md:md:text-1xl font-black">
            1234567890
          </div>

          <div className="mt-4 break-all text-xs md:text-base font-bold text-slate-400">
            https://sattamatkadpb.net
          </div>
        </div>
      </div>
    </div>
  );
}