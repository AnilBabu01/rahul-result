"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  useGetMarketResultQuery,
  useGetAppDataQuery,
} from "@/app/redux/api/apiClient";
import { games } from "@/data/games";

type Props = {
  slug: string;
};

type ApiItem = {
  id: number;
  name: string;
  result: string;
  date: string; // 06-06-2026
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
   MINI DIGITS (Optimized for light background readability)
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
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-1 text-[9px] sm:text-[10px] md:text-[11px] font-medium leading-none text-slate-400">
      <div className="flex justify-between">
        <span>{left[0]}</span>
        <span>{right[0]}</span>
      </div>
      <div className="flex justify-between">
        <span>{left[1]}</span>
        <span>{right[1]}</span>
      </div>
      <div className="flex justify-between">
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
   COMPONENT (MODERN LIGHT THEME RE-DESIGN)
========================================================= */
export default function PanelChartClient({ slug }: Props) {
  const formattedTitle = slug.replace(/-/g, " ").toUpperCase();

  const cleanTitle = formattedTitle
    .replace(/[_-]+/g, " ")
    .trim()
    .split(" ")
    .slice(0, -1)
    .join(" ");

  const today = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState("2026-06-01");
  const [toDate, setToDate] = useState(today);

  const { data, isLoading, isFetching, refetch } = useGetMarketResultQuery({
    name: cleanTitle,
    fromDate,
    toDate,
  });

  const apiData: ApiItem[] = [...(data?.data || [])].reverse();

  const chartDataPanel = useMemo(() => {
    return generateWeeklyChart(apiData);
  }, [apiData]);

  const { data: appData } = useGetAppDataQuery({});

  const latestResult =
    apiData?.length > 0 ? apiData[apiData.length - 1]?.result : "Loading...";

  return (
    <div id="top" className="min-h-screen bg-slate-50 py-6 text-slate-800 antialiased font-sans">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER SECTION */}
        <header className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-6">
          <div className="bg-slate-900 px-6 py-5 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
              {formattedTitle}
            </h1>
          </div>
          <div className="p-6 bg-white border-t border-slate-100 text-center">
            <h2 className="text-sm sm:text-base font-semibold text-indigo-600 mb-2 uppercase tracking-wider">
              Live Performance Tracker
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto capitalize">
              {formattedTitle} panel chart, dhan express night panel patti
              record chart, day {formattedTitle} matka panel chart,{" "}
              {formattedTitle} panel chart guessing, {formattedTitle} matka day
              night panel chart, {formattedTitle} chart panel, day dhan express
              penal chart record, {formattedTitle} panel chart result.
            </p>
          </div>
        </header>

        {/* HERO LATEST RESULT BAR */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 text-center mb-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
            Latest Result
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-700 uppercase mb-2">
            {formattedTitle}
          </h2>
          <div className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-indigo-600 my-2">
            {latestResult}
          </div>
          <button
            onClick={() => refetch()}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition active:scale-95"
          >
            {isFetching ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Updating Record...
              </>
            ) : (
              "Refresh Dashboard"
            )}
          </button>
        </section>

        {/* DATE CONTROLS */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col w-full sm:w-auto sm:min-w-[200px]">
              <label className="mb-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:min-w-[200px]">
              <label className="mb-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* ANCHOR LINK */}
        <div className="mb-6 flex justify-center">
          <a
            href="#bottom"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700 transition"
          >
            Scroll to Bottom ↓
          </a>
        </div>

        {/* MAIN CHART CONTAINER */}
        <main className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden mb-6">
          
          {/* HEADER ROW */}
          <div className="grid grid-cols-8 bg-slate-100 border-b border-slate-200 text-center font-bold text-[10px] sm:text-xs md:text-sm text-slate-600 uppercase tracking-wider py-3">
            <div className="flex items-center justify-center">Week Period</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>

          {/* LOADING STATE */}
          {isLoading && (
            <div className="text-center py-20 text-slate-400 font-medium text-base animate-pulse">
              Generating dynamic matrix data...
            </div>
          )}

          {/* GRID ROWS */}
          {!isLoading && (
            <div className="divide-y divide-slate-100">
              {chartDataPanel.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-8 transition hover:bg-slate-50/50"
                >
                  {/* TIME PERIOD COLUMN */}
                  <div className="flex flex-col items-center justify-center bg-slate-50/80 p-2 text-center border-r border-slate-100">
                    <span className="text-[7px] sm:text-[9px] md:text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {row.week.split(" To ")[0]}
                    </span>
                    <span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-slate-400 my-0.5 uppercase tracking-tighter">
                      to
                    </span>
                    <span className="text-[7px] sm:text-[9px] md:text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {row.week.split(" To ")[1]}
                    </span>
                  </div>

                  {/* VALUE ITEMS */}
                  {row.values.map((value, index) => (
                    <div
                      key={index}
                      className="relative flex h-11 sm:h-16 md:h-20 items-center justify-center border-r last:border-r-0 border-slate-100 bg-white"
                    >
                      {/* Mini Digits Background Layer */}
                      <MiniDigits value={row.results[index]} />

                      {/* Focal Value */}
                      <span
                        className={`relative z-10 text-xs sm:text-base md:text-2xl font-black tracking-tight ${
                          row.highlight.includes(index)
                            ? "text-rose-500 bg-rose-50 px-1 sm:px-2 py-0.5 rounded-lg"
                            : "text-slate-800"
                        }`}
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {value || "-"}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </main>

        {/* BOTTOM NAVIGATIONS & ADDITIONAL STATS */}
        <div id="bottom" className="mb-6 flex justify-center">
          <a
            href="#top"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700 transition"
          >
            Scroll to Top ↑
          </a>
        </div>

        {/* SUB FOOTER WIDGET */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 text-center mb-6">
          <h3 className="text-slate-700 text-sm font-bold uppercase tracking-wider mb-1">
            {formattedTitle} Summary Terminal
          </h3>
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-wide">
            {latestResult}
          </div>
          <button
            onClick={() => refetch()}
            className="mt-4 px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-slate-800 transition"
          >
            {isFetching ? "Syncing..." : "Manual Force Sync"}
          </button>
        </section>

        {/* WHATSAPP BANNER */}
        <div className="flex justify-center mb-6">
          <div
            onClick={() => {
              if (appData?.data?.WhatsAppchannel) {
                window.open(appData.data.WhatsAppchannel, "_blank");
              }
            }}
            className="w-full bg-emerald-600 text-white px-6 py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-sm text-center cursor-pointer hover:bg-emerald-700 transition duration-150 flex items-center justify-center gap-2"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.481 4.793 1.481 5.379 0 9.754-4.31 9.758-9.605.002-2.564-1.002-4.974-2.824-6.795C16.5 2.412 14.106 1.41 11.554 1.41c-5.388 0-9.762 4.312-9.765 9.608-.001 1.637.447 3.14 1.294 4.516l-.988 3.606 3.702-.959z" />
            </svg>
            Join our WhatsApp channel for instantaneous results
          </div>
        </div>

        {/* NAVIGATION PIPELINE */}
        <nav className="bg-white border border-slate-200/80 p-4 rounded-2xl mb-6 shadow-sm">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-slate-500">
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

        {/* SYSTEM FOOTER */}
        <footer className="bg-white border border-slate-200/80 text-center p-6 rounded-2xl shadow-sm">
          <h2 className="text-slate-800 text-lg font-bold tracking-tight">
            sattamatkadpb
          </h2>
          <div className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            All Rights Reserved © 2012 - 2026
          </div>
          <hr className="my-4 border-slate-100" />
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Site Executive Owner
          </div>
          <div className="mt-0.5 text-base font-black text-slate-700 tracking-wide uppercase">
            Fast Boss Sir
          </div>
          <div className="mt-2 inline-block bg-slate-50 text-indigo-600 font-mono font-bold text-sm px-4 py-1.5 rounded-xl border border-slate-200/60">
            {appData?.data?.whatsapp_number ?? "1234567890"}
          </div>
          <div className="mt-4 text-[11px] font-medium text-slate-400">
            https://sattamatkadpb.net/
          </div>
        </footer>

      </div>
    </div>
  );
}