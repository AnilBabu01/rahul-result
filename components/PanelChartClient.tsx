// app/panel-chart/[slug]/page.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { useGetMarketResultQuery } from "@/app/redux/api/apiClient";
import { games } from "@/data/games";

type Props = {
  slug: string;
};

type ApiItem = {
  id: number;
  name: string;
  result: string;
  date: string;
};

type WeeklyRow = {
  week: string;
  values: string[];
  results: string[];
  highlight: number[];
};

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.split("/").pop(),
  }));
}

/* =========================================================
   MINI DIGITS
========================================================= */
function MiniDigits({ value }: { value: string }) {
  let left = ["-", "-", "-"];
  let right = ["-", "-", "-"];

  if (value) {
    const parts = value.split("-");

    if (parts.length === 2) {
      const first = parts[0] || "";

      left = [first[0] || "-", first[1] || "-", first[2] || "-"];
    }

    if (parts.length >= 3) {
      const first = parts[0] || "";
      const last = parts[2] || "";

      left = [first[0] || "-", first[1] || "-", first[2] || "-"];

      right = [last[0] || "-", last[1] || "-", last[2] || "-"];
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[9px] sm:text-[10px] md:text-[11px] font-bold leading-none text-amber-300/70">
      <div className="flex justify-between p-[1px]">
        <span>{left[0]}</span>
        <span>{right[0]}</span>
      </div>

      <div className="flex justify-between p-[1px]">
        <span>{left[1]}</span>
        <span>{right[1]}</span>
      </div>

      <div className="flex justify-between p-[1px]">
        <span>{left[2]}</span>
        <span>{right[2]}</span>
      </div>
    </div>
  );
}

/* =========================================================
   DATE HELPERS
========================================================= */

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

function apiDateToObj(dateStr: string) {
  const [dd, mm, yyyy] = dateStr.split("-");

  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
}

function getMonday(date: Date) {
  const d = new Date(date);

  const day = d.getDay();

  const diff = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diff);

  d.setHours(0, 0, 0, 0);

  return d;
}

function getWeekKey(start: Date, end: Date) {
  return `${formatDate(start)} To ${formatDate(end)}`;
}

/* =========================================================
   RESULT -> JODI
========================================================= */

function getJodi(result: string) {
  if (!result) return "";

  const parts = result.split("-");

  return parts[1] || "";
}

/* =========================================================
   PANEL LOGIC
========================================================= */

function generateWeeklyChart(data: ApiItem[]): WeeklyRow[] {
  if (!data || data.length === 0) return [];

  const sorted = [...data].sort((a, b) => {
    return apiDateToObj(a.date).getTime() - apiDateToObj(b.date).getTime();
  });

  const resultMap: Record<string, string> = {};
  const jodiMap: Record<string, string> = {};

  sorted.forEach((item) => {
    const dateObj = apiDateToObj(item.date);

    const key = formatDate(dateObj);

    resultMap[key] = item.result || "";

    jodiMap[key] = getJodi(item.result);
  });

  const firstDate = apiDateToObj(sorted[0].date);

  const lastDate = apiDateToObj(sorted[sorted.length - 1].date);

  let currentWeekStart = getMonday(firstDate);

  const rows: WeeklyRow[] = [];

  while (currentWeekStart <= lastDate) {
    const weekStart = new Date(currentWeekStart);

    const weekEnd = new Date(currentWeekStart);

    weekEnd.setDate(weekEnd.getDate() + 6);

    const values: string[] = [];

    const results: string[] = [];

    const highlight: number[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(weekStart);

      currentDate.setDate(currentDate.getDate() + i);

      const key = formatDate(currentDate);

      const fullResult = resultMap[key] || "";

      const jodi = jodiMap[key] || "";

      results.push(fullResult);

      values.push(jodi);

      if (jodi && jodi.length === 2 && jodi[0] === jodi[1]) {
        highlight.push(i);
      }
    }

    rows.push({
      week: getWeekKey(weekStart, weekEnd),
      results,
      values,
      highlight,
    });

    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return rows;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function PanelChartClient({ slug }: Props) {
  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();

  const today = new Date().toISOString().split("T")[0];

  const [fromDate, setFromDate] = useState("2026-06-01");

  const [toDate, setToDate] = useState(today);

  const { data, isLoading, isFetching, refetch } = useGetMarketResultQuery({
    name: formattedTitle,
    fromDate,
    toDate,
  });

  const apiData: ApiItem[] = data?.data || [];

  const chartDataPanel = useMemo(() => {
    return generateWeeklyChart(apiData);
  }, [apiData]);

  const latestResult =
    apiData?.length > 0 ? apiData[apiData.length - 1]?.result : "Loading...";

  return (
    <div
      id="top"
      className="min-h-screen bg-[#0b1020] text-white overflow-hidden"
    >
      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-b from-orange-500/20 via-yellow-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-2 sm:px-4 py-3">
        {/* HERO */}
        <div className="rounded-3xl overflow-hidden border border-yellow-500/30 bg-gradient-to-br from-[#121a31] to-[#0c1224] shadow-2xl shadow-yellow-500/10">
          <div className="px-4 py-6 md:py-10 text-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,184,0,0.15),transparent_40%)]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-yellow-300 uppercase">
                Live Panel Record Chart
              </div>

              <h1 className="mt-4 text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-wide text-white">
                {formattedTitle}
              </h1>

              <p className="mt-4 text-[11px] sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-5xl mx-auto">
                Weekly panel chart with daily jodi records, patti history,
                market panel data, guessing support and latest live results.
              </p>

              {/* LIVE RESULT CARD */}
              <div className="mt-6 flex justify-center">
                <div className="rounded-2xl border border-orange-400/40 bg-black/40 backdrop-blur-xl px-6 py-5 shadow-xl">
                  <div className="text-xs sm:text-sm uppercase tracking-[3px] text-yellow-300 font-bold">
                    Latest Result
                  </div>

                  <div className="mt-2 text-3xl sm:text-5xl md:text-6xl font-black text-orange-400 tracking-widest">
                    {latestResult}
                  </div>

                  <button
                    onClick={() => refetch()}
                    className="mt-5 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-black text-xs sm:text-sm md:text-base font-black shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {isFetching ? "Refreshing..." : "Refresh Result"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER SECTION */}
        <div className="mt-5 rounded-3xl border border-slate-700 bg-[#111827]/90 backdrop-blur-xl p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-center gap-5 justify-between">
            <div>
              <h2 className="text-lg md:text-2xl font-black text-yellow-400">
                Date Filter
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Select custom dates to load old panel chart records.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-orange-300 mb-2">
                  FROM DATE
                </label>

                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="bg-[#0b1020] border border-orange-500/30 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-yellow-300 mb-2">
                  TO DATE
                </label>

                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="bg-[#0b1020] border border-yellow-500/30 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* QUICK BUTTONS */}
        <div className="flex justify-center gap-3 mt-5 flex-wrap">
          <a
            href="#chart"
            className="rounded-full bg-yellow-500 text-black px-5 py-3 text-xs sm:text-sm font-black hover:scale-105 transition"
          >
            View Chart
          </a>

          <a
            href="#bottom"
            className="rounded-full border border-orange-400 text-orange-300 px-5 py-3 text-xs sm:text-sm font-black hover:bg-orange-500/10 transition"
          >
            Go Bottom
          </a>
        </div>

        {/* LOADER */}
        {isLoading && (
          <div className="py-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-yellow-500/30 bg-[#111827] px-6 py-4">
              <div className="h-4 w-4 rounded-full bg-yellow-400 animate-ping" />

              <span className="text-lg font-black text-yellow-300">
                Loading Chart...
              </span>
            </div>
          </div>
        )}

        {/* CHART */}
        {!isLoading && (
          <div
            id="chart"
            className="mt-6 rounded-3xl overflow-hidden border border-yellow-500/20 bg-[#111827] shadow-2xl"
          >
            {/* TOP BAR */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-3 flex items-center justify-between">
              <h2 className="text-black text-sm sm:text-lg md:text-2xl font-black uppercase">
                {formattedTitle} Weekly Panel Chart
              </h2>

              <div className="text-black text-[10px] sm:text-xs md:text-sm font-black">
                Total Weeks : {chartDataPanel.length}
              </div>
            </div>

            {/* CHART VIEW SAME */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[700px]">
                {chartDataPanel.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-8 border-b border-slate-700"
                  >
                    {/* DATE */}
                    <div className="flex flex-col items-center justify-center border-r border-slate-700 bg-[#1b243c] py-[2px]">
                      <div className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none text-yellow-300">
                        {row.week.split(" To ")[0]}
                      </div>

                      <div className="text-[6px] sm:text-[9px] md:text-[14px] font-black italic leading-none text-orange-400">
                        To
                      </div>

                      <div className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none text-yellow-300">
                        {row.week.split(" To ")[1]}
                      </div>
                    </div>

                    {/* VALUES */}
                    {row.values.map((value, index) => (
                      <div
                        key={index}
                        className="relative flex h-[34px] sm:h-[45px] md:h-[65px] items-center justify-center border-r border-slate-700 bg-[#0b1020]"
                      >
                        <MiniDigits value={row.results[index]} />

                        <span
                          className={`relative z-10 text-[10px] sm:text-[12px] md:text-[22px] font-black italic leading-none ${
                            row.highlight.includes(index)
                              ? "text-orange-400"
                              : "text-white"
                          }`}
                          style={{
                            fontFamily: "Georgia, serif",
                            textShadow:
                              "0px 0px 12px rgba(251,191,36,0.55)",
                          }}
                        >
                          {value || "-"}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM ACTION */}
        <div className="mt-6 flex justify-center">
          <a
            href="#top"
            className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-black text-xs sm:text-sm md:text-base font-black hover:scale-105 transition"
          >
            Back To Top
          </a>
        </div>

        {/* FOOTER RESULT */}
        <div className="mt-6 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-[#121a31] to-[#0b1020] p-6 text-center">
          <div className="text-xs sm:text-sm uppercase tracking-[4px] text-yellow-300 font-black">
            Current Live Result
          </div>

          <h2 className="mt-3 text-xl sm:text-3xl md:text-5xl font-black text-white uppercase">
            {formattedTitle}
          </h2>

          <div className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black text-orange-400">
            {latestResult}
          </div>

          <button
            onClick={() => refetch()}
            className="mt-5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-black text-xs sm:text-sm md:text-base font-black hover:scale-105 transition"
          >
            {isFetching ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>

        {/* WHATSAPP */}
        <div className="mt-6 rounded-3xl overflow-hidden bg-gradient-to-r from-green-500 to-emerald-700 p-[1px] shadow-2xl">
          <div className="rounded-3xl bg-[#0b1020] px-5 py-5 text-center">
            <div className="text-lg md:text-2xl font-black text-green-400">
              Join WhatsApp Channel
            </div>

            <div className="mt-2 text-sm md:text-lg font-bold text-white">
              Fast Result • Daily Fix • Live Update
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="mt-6 rounded-3xl border border-slate-700 bg-[#111827] p-5">
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base font-black">
            <Link
              href="/"
              className="rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-yellow-300 hover:bg-yellow-500/20 transition"
            >
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-orange-300 hover:bg-orange-500/20 transition"
            >
              Matka Guessing
            </Link>

            <Link
              href="/satta-matka-chart"
              className="rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-blue-300 hover:bg-blue-500/20 transition"
            >
              Matka Chart
            </Link>

            <Link
              href="/online-matka-play"
              className="rounded-full bg-pink-500/10 border border-pink-500/20 px-4 py-2 text-pink-300 hover:bg-pink-500/20 transition"
            >
              Matka Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-green-300 hover:bg-green-500/20 transition"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-2 text-red-300 hover:bg-red-500/20 transition"
            >
              Fix Matka
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <div
          id="bottom"
          className="mt-6 rounded-3xl overflow-hidden border border-yellow-500/20 bg-gradient-to-br from-[#121a31] via-[#0f172a] to-[#0b1020]"
        >
          <div className="px-5 py-8 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase">
              sattamatkadp
            </h2>

            <div className="mt-4 text-sm md:text-xl font-black text-white">
              ALL RIGHTS RESERVED (2012-2026)
            </div>

            <div className="mt-4 text-orange-400 text-lg md:text-2xl font-black">
              FAST BOSS SIR
            </div>

            <div className="mt-3 text-yellow-300 text-lg md:text-3xl font-black tracking-widest">
              1234567890
            </div>

            <div className="mt-4 text-slate-400 text-xs md:text-base break-all">
              https://sattamatkadpbos.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}