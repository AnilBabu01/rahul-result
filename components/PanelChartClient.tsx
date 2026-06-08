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
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[9px] sm:text-[10px] md:text-[11px] font-extrabold leading-none text-yellow-300">
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

  const cleanTitle = formattedTitle
    .replace(/[_-]+/g, " ")
    .trim()
    .split(" ")
    .slice(0, -1)
    .join(" ");

  const today = new Date().toISOString().split("T")[0];

  const [fromDate, setFromDate] = useState("2026-06-01");

  const [toDate, setToDate] = useState(today);

  const { data, isLoading, isFetching, refetch } =
    useGetMarketResultQuery({
      name: cleanTitle,
      fromDate,
      toDate,
    });

  const apiData: ApiItem[] = [...(data?.data || [])].reverse();

  const chartDataPanel = useMemo(() => {
    return generateWeeklyChart(apiData);
  }, [apiData]);

  const latestResult =
    apiData?.length > 0
      ? apiData[apiData.length - 1]?.result
      : "Loading...";

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-[#14001f] via-[#0f172a] to-black text-white py-2"
    >
      <div className="w-full px-1 sm:px-2">
        {/* HEADER */}
        <div className="overflow-hidden rounded-2xl border border-yellow-500 shadow-2xl shadow-yellow-500/10">
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 py-4 text-center">
            <h1 className="text-sm sm:text-xl md:text-4xl font-black italic uppercase tracking-wider text-black">
              {formattedTitle}
            </h1>
          </div>

          <div className="bg-[#111827] px-3 py-4 text-center border-t border-yellow-500">
            <h2 className="text-xs sm:text-lg md:text-2xl font-black text-yellow-400">
              {formattedTitle} PANEL CHART
            </h2>

            <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
              {formattedTitle} panel chart, matka panel record chart,
              guessing panel chart, day and night panel chart results,
              weekly panel history and live market updates.
            </p>
          </div>
        </div>

        {/* RESULT CARD */}
        <div className="mt-3 rounded-2xl border border-orange-500 bg-[#111827] py-5 text-center shadow-xl">
          <h2 className="text-xs sm:text-sm md:text-xl font-extrabold uppercase text-yellow-300">
            LIVE RESULT
          </h2>

          <div className="mt-2 text-2xl sm:text-4xl md:text-6xl font-black tracking-widest text-orange-400">
            {latestResult}
          </div>

          <button
            onClick={() => refetch()}
            className="mt-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 px-5 py-2 text-[11px] sm:text-sm md:text-lg font-black text-black transition hover:scale-105"
          >
            {isFetching ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>

        {/* DATE FILTER */}
        <div className="mt-4 rounded-2xl border border-yellow-500 bg-[#111827] p-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-col w-full md:w-auto">
              <label className="mb-1 text-yellow-400 font-bold text-sm">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="rounded-xl border border-yellow-500 bg-black px-4 py-2 text-white outline-none"
              />
            </div>

            <div className="flex flex-col w-full md:w-auto">
              <label className="mb-1 text-orange-400 font-bold text-sm">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="rounded-xl border border-orange-500 bg-black px-4 py-2 text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* GO BOTTOM */}
        <div className="my-4 flex justify-center">
          <a
            href="#bottom"
            className="rounded-full border border-yellow-500 bg-[#111827] px-4 py-2 text-[10px] sm:text-xs md:text-sm font-bold text-yellow-300 hover:bg-black transition"
          >
            Go to Bottom ↓
          </a>
        </div>

        {/* LOADING */}
        {isLoading && (
          <div className="py-10 text-center text-2xl font-black text-yellow-400">
            Loading Chart...
          </div>
        )}

        {/* CHART */}
        {!isLoading && (
          <div className="overflow-hidden rounded-2xl border-2 border-yellow-500 bg-[#111827] shadow-2xl">
            {chartDataPanel.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-8 border-b border-slate-700"
              >
                {/* DATE */}
                <div className="flex flex-col items-center justify-center border-r border-slate-700 bg-black py-[4px]">
                  <div className="text-[5px] sm:text-[7px] md:text-[11px] font-black text-yellow-300">
                    {row.week.split(" To ")[0]}
                  </div>

                  <div className="text-[6px] sm:text-[9px] md:text-[14px] font-black text-orange-400">
                    TO
                  </div>

                  <div className="text-[5px] sm:text-[7px] md:text-[11px] font-black text-yellow-300">
                    {row.week.split(" To ")[1]}
                  </div>
                </div>

                {/* VALUES */}
                {row.values.map((value, index) => (
                  <div
                    key={index}
                    className="relative flex h-[38px] sm:h-[50px] md:h-[70px] items-center justify-center border-r border-slate-700 bg-[#1e293b]"
                  >
                    <MiniDigits value={row.results[index]} />

                    <span
                      className={`relative z-10 text-[10px] sm:text-[14px] md:text-[24px] font-black italic ${
                        row.highlight.includes(index)
                          ? "text-red-400"
                          : "text-white"
                      }`}
                      style={{
                        fontFamily: "Georgia, serif",
                        textShadow:
                          "0px 0px 12px rgba(251,191,36,0.8)",
                      }}
                    >
                      {value || "-"}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* GO TOP */}
        <div
          id="bottom"
          className="my-4 flex justify-center"
        >
          <a
            href="#top"
            className="rounded-full border border-orange-500 bg-[#111827] px-4 py-2 text-[10px] sm:text-xs md:text-sm font-bold text-orange-400 hover:bg-black transition"
          >
            ↑ Go to Top
          </a>
        </div>

        {/* FOOTER RESULT */}
        <div className="mx-1 mt-3 rounded-2xl border border-yellow-500 bg-[#111827] py-5 text-center shadow-xl">
          <h1 className="text-xs sm:text-sm md:text-xl font-black uppercase tracking-wide text-yellow-300">
            {formattedTitle}
          </h1>

          <div className="mt-2 text-lg sm:text-3xl md:text-5xl font-black text-orange-400">
            {latestResult}
          </div>

          <button
            onClick={() => refetch()}
            className="mt-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-2 text-[10px] sm:text-xs md:text-base font-black text-black transition hover:scale-105"
          >
            {isFetching ? "Refreshing..." : "Refresh Result"}
          </button>
        </div>
      </div>

      {/* Whatsapp Banner */}
      <div className="mt-5 flex justify-center px-2">
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-700 px-5 py-4 text-center text-sm md:text-lg font-black text-white shadow-2xl">
          Join our WhatsApp channel for Fast Result Updates
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-2 mt-5 rounded-2xl border border-yellow-500 bg-[#111827] py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs sm:text-sm md:text-lg font-bold">
          <Link href="/" className="text-yellow-400">
            Home
          </Link>

          {" | "}

          <Link
            href="/satta-matka-guessing-forum"
            className="text-orange-400"
          >
            Matka Guessing
          </Link>

          {" | "}

          <Link
            href="/satta-matka-chart"
            className="text-red-400"
          >
            Matka Chart
          </Link>

          {" | "}

          <Link
            href="/online-matka-play"
            className="text-green-400"
          >
            Matka Play
          </Link>

          {" | "}

          <Link
            href="/tara-matka-mumbai"
            className="text-cyan-400"
          >
            Tara Matka
          </Link>

          {" | "}

          <Link
            href="/fix-matka-number"
            className="text-pink-400"
          >
            Fix Matka
          </Link>

          {" | "}

          <Link
            href="/sitemap.xml"
            className="text-blue-400"
          >
            Sitemap
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-2 mt-4 rounded-2xl border border-yellow-500 bg-[#111827] py-6 text-center shadow-xl">
        <h2 className="text-2xl font-black italic text-yellow-400">
          sattamatkadp
        </h2>

        <div className="mt-3 text-sm md:text-lg font-black text-orange-400">
          ALL RIGHTS RESERVED (2012-2026)
        </div>

        <div className="mt-2 text-sm md:text-lg font-black text-white">
          SITE OWNER :-
        </div>

        <div className="mt-2 text-sm md:text-xl font-black underline text-yellow-300">
          FAST BOSS SIR
        </div>

        <div className="mt-2 text-sm md:text-xl font-black text-cyan-300">
          1234567890
        </div>

        <div className="mt-3 break-all px-2 text-xs md:text-base font-bold text-slate-400">
          https://sattamatkadpb.net
        </div>
      </div>
    </div>
  );
}