/// app/jodi-chart/[slug]/JodiChartClient.tsx

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

      const response = await fetch(
        `https://sattamatkadpbos.com/apis/client_cron_market.php?action=get_results&name=${encodeURIComponent(
          formattedTitle,
        )}&from_date=${fromDate}&to_date=${toDate}`,
        {
          cache: "no-store",
        },
      );

      const data = await response.json();

      if (data?.data && Array.isArray(data.data)) {
        const rows: string[][] = [];

        for (let i = 0; i < data.data.length; i += 7) {
          rows.push(
            data.data.slice(i, i + 7).map((item: any) => item.result || "--"),
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
      className="min-h-screen bg-[#060816] text-white overflow-hidden"
    >
      {/* TOP HERO */}
      <div className="relative border-b border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-fuchsia-900/20 to-cyan-900/40" />

        <div className="relative px-3 py-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.25)]">
              <div className="p-5 md:p-10 text-center">
                <div className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1 text-xs md:text-sm font-black tracking-[3px] text-fuchsia-300 uppercase">
                  Live Jodi Chart
                </div>

                <h1 className="mt-5 text-3xl sm:text-2xl md:text-2xl font-black uppercase tracking-wide">
                  <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 bg-clip-text text-transparent">
                    {formattedTitle}
                  </span>
                </h1>

                <p className="mt-5 max-w-4xl mx-auto text-xs sm:text-sm md:text-base leading-7 text-slate-300 font-medium">
                  {formattedTitle} chart, {formattedTitle} result satta
                  chart, {formattedTitle} result matka chart,{" "}
                  {formattedTitle} jodi chart record, day night{" "}
                  {formattedTitle} matka chart result,{" "}
                  {formattedTitle} jodi penal chart, bazar guessing,
                  dhan express chart ank and live result history.
                </p>

                {/* LIVE RESULT CARD */}
                <div className="mt-8 flex justify-center">
                  <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f172a] p-6 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                    <div className="text-sm md:text-base font-bold uppercase tracking-[4px] text-cyan-300">
                      Latest Result
                    </div>

                    <div className="mt-3 text-2xl md:text-2xl font-black tracking-[6px] text-white">
                      <span className="bg-gradient-to-r from-yellow-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                        {latestResult}
                      </span>
                    </div>

                    <button
                      onClick={fetchChartData}
                      className="mt-6 w-full rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 px-5 py-3 text-sm md:text-lg font-black uppercase tracking-wide text-white transition duration-300 hover:scale-[1.02]"
                    >
                      {loading ? "Refreshing..." : "Refresh Result"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FILTER SECTION */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-[#0f172a]/90 p-5 shadow-lg">
                <div className="text-cyan-300 text-sm font-black uppercase tracking-[2px] mb-3">
                  From Date
                </div>

                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full rounded-xl border border-cyan-500/30 bg-[#111827] px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div className="rounded-2xl border border-fuchsia-400/20 bg-[#0f172a]/90 p-5 shadow-lg">
                <div className="text-fuchsia-300 text-sm font-black uppercase tracking-[2px] mb-3">
                  To Date
                </div>

                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full rounded-xl border border-fuchsia-500/30 bg-[#111827] px-4 py-3 text-white outline-none focus:border-fuchsia-400"
                />
              </div>
            </div>

            {/* NAV BUTTONS */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#chartSection"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm md:text-base font-black uppercase tracking-wide text-white shadow-lg transition hover:scale-105"
              >
                View Chart
              </a>

              <a
                href="#bottom"
                className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-5 py-3 text-sm md:text-base font-black uppercase tracking-wide text-fuchsia-300 transition hover:scale-105"
              >
                Go Bottom
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CHART SECTION */}
      <div
        id="chartSection"
        className="px-2 py-6 md:py-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase">
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                {formattedTitle} Chart
              </span>
            </h2>

            <div className="mt-2 text-slate-400 text-sm md:text-base font-semibold">
              Weekly & Daily Result History
            </div>
          </div>

          {/* KEEPING CHART VIEW SAME */}
          <div className="overflow-x-auto">
            <div className="flex justify-center">
              <div className="rounded-3xl border border-cyan-500/30 bg-[#0f172a] p-3 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                <table className="border-collapse">
                  <tbody>
                    {chartData.length > 0 ? (
                      chartData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((num, colIndex) => (
                            <td
                              key={colIndex}
                              className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border border-slate-700 text-center text-lg sm:text-xl md:text-2xl font-black italic ${
                                redNumbers.includes(num)
                                  ? "text-pink-400"
                                  : "text-white"
                              }`}
                              style={{
                                fontFamily: "Georgia, serif",
                                textShadow:
                                  "0px 0px 10px rgba(34,211,238,0.7)",
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
                          className="py-10 text-center text-cyan-300 font-bold"
                        >
                          {loading
                            ? "Loading Chart..."
                            : "No Data Found"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RESULT FOOTER CARD */}
          <div className="mt-8 rounded-3xl border border-fuchsia-500/20 bg-gradient-to-br from-[#111827] to-[#0f172a] p-6 text-center shadow-[0_0_40px_rgba(217,70,239,0.2)]">
            <div className="text-sm md:text-lg font-black uppercase tracking-[4px] text-fuchsia-300">
              Current Live Result
            </div>

            <div className="mt-3 text-4xl md:text-2xl font-black text-white tracking-[5px]">
              {latestResult}
            </div>

            <button
              onClick={fetchChartData}
              className="mt-5 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-6 py-3 text-sm md:text-lg font-black uppercase tracking-wide text-white transition hover:scale-105"
            >
              {loading ? "Refreshing..." : "Refresh Result"}
            </button>
          </div>
        </div>
      </div>

      {/* WHATSAPP BANNER */}
      <div className="px-2">
        <div className="mx-auto max-w-5xl rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-600 to-emerald-700 px-5 py-5 text-center shadow-2xl">
          <div className="text-lg md:text-2xl font-black uppercase tracking-wide text-white">
            Join WhatsApp Channel For Fast Result
          </div>

          <div className="mt-2 text-sm md:text-base text-green-100 font-semibold">
            Get Instant Market Updates & Live Result Notification
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="px-2 mt-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0f172a] p-5">
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base font-black uppercase">
            <Link
              href="/"
              className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-300 hover:bg-cyan-500/20"
            >
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="rounded-xl bg-fuchsia-500/10 px-4 py-2 text-fuchsia-300 hover:bg-fuchsia-500/20"
            >
              Guessing
            </Link>

            <Link
              href="/satta-matka-chart"
              className="rounded-xl bg-yellow-500/10 px-4 py-2 text-yellow-300 hover:bg-yellow-500/20"
            >
              Charts
            </Link>

            <Link
              href="/online-matka-play"
              className="rounded-xl bg-blue-500/10 px-4 py-2 text-blue-300 hover:bg-blue-500/20"
            >
              Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="rounded-xl bg-green-500/10 px-4 py-2 text-green-300 hover:bg-green-500/20"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="rounded-xl bg-orange-500/10 px-4 py-2 text-orange-300 hover:bg-orange-500/20"
            >
              Fix Number
            </Link>

            <Link
              href="/sitemap.xml"
              className="rounded-xl bg-red-500/10 px-4 py-2 text-red-300 hover:bg-red-500/20"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        id="bottom"
        className="px-2 py-6"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#111827] to-black p-8 text-center shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <h2 className="text-2xl md:text-4xl font-black uppercase">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent">
              SATTAMATKADPBOS
            </span>
          </h2>

          <div className="mt-5 text-sm md:text-lg font-bold tracking-wide text-slate-300">
            ALL RIGHTS RESERVED (2012-2026)
          </div>

          <div className="mt-5 text-base md:text-xl font-black text-white">
            SITE OWNER
          </div>

          <div className="mt-2 text-xl md:text-3xl font-black text-fuchsia-400">
            FAST BOSS SIR
          </div>

          <div className="mt-3 text-lg md:text-2xl font-black text-cyan-300">
            1234567890
          </div>

          <div className="mt-5 text-xs md:text-base break-all text-slate-500">
            https://sattamatkadpbos.com
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="#top"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-sm md:text-base font-black uppercase tracking-wide text-white transition hover:scale-105"
            >
              Back To Top
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}