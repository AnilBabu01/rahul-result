// app/jodi-chart/[slug]/JodiChartClient.tsx

"use client";

import { useMemo } from "react";
import { useGetResult30DaysQuery } from "@/app/redux/api/apiClient";

type Props = {
  slug: string;
};

type ResultItem = {
  id?: number;
  bazi_id: number;
  created_at: string;
  first_no: string;
  last_no: string;
};

type ApiResponse = {
  data: ResultItem[];
};

type TodayTableItem = {
  no: number;
  value: string;
  result: string;
};

type HistoryDataItem = {
  date: string;
  values: string[];
  results: string[];
};

export default function JodiChartClient({
  slug,
}: Props) {
  const formattedTitle = slug
    ?.replace(/-/g, " ")
    .toUpperCase();

  const cleanTitle = formattedTitle
    .replace(/[_-]+/g, " ")
    .trim()
    .split(" ")
    .slice(0, -1)
    .join(" ");

  const {
    data,
    isLoading,
    error,
  } = useGetResult30DaysQuery(
    cleanTitle
  ) as {
    data?: ApiResponse;
    isLoading: boolean;
    error: unknown;
  };

  const todayDisplay = new Date().toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  const todayDate = new Date()
    .toISOString()
    .split("T")[0];

  const results: ResultItem[] =
    data?.data || [];

  /* ==========================================
     TODAY DATA
  ========================================== */

  const todayTableData: TodayTableItem[] =
    useMemo(() => {
      return results
        .filter(
          (item) =>
            item.created_at === todayDate
        )
        .sort(
          (a, b) => a.bazi_id - b.bazi_id
        )
        .map((item, index) => ({
          no: index + 1,

          value:
            item.last_no &&
            item.last_no !== "XXX"
              ? item.last_no
              : "-",

          result:
            item.first_no &&
            item.first_no !== "X"
              ? item.first_no
              : "-",
        }));
    }, [results, todayDate]);

  /* ==========================================
     HISTORY DATA
  ========================================== */

  const historyData: HistoryDataItem[] =
    useMemo(() => {
      const historyGrouped = results
        .filter(
          (item) =>
            item.created_at !== todayDate
        )
        .reduce<
          Record<string, ResultItem[]>
        >((acc, item) => {
          if (!acc[item.created_at]) {
            acc[item.created_at] = [];
          }

          acc[item.created_at].push(item);

          return acc;
        }, {});

      return Object.keys(historyGrouped)
        .sort(
          (a, b) =>
            new Date(b).getTime() -
            new Date(a).getTime()
        )
        .map((date) => {
          const dayData =
            historyGrouped[date].sort(
              (a, b) =>
                a.bazi_id - b.bazi_id
            );

          return {
            date: new Date(
              date
            ).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),

            values: dayData.map((item) =>
              item.last_no === "XXX"
                ? "-"
                : item.last_no
            ),

            results: dayData.map((item) =>
              item.first_no === "X"
                ? "-"
                : item.first_no
            ),
          };
        });
    }, [results, todayDate]);

  /* ==========================================
     LOADING
  ========================================== */

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f4f4] px-4">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-xl">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

          <h2 className="text-lg font-bold text-gray-800">
            Loading Results...
          </h2>
        </div>
      </div>
    );
  }

  /* ==========================================
     ERROR
  ========================================== */

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f4f4] px-4">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-xl">
          <h2 className="text-xl font-black text-red-600">
            Failed to load data
          </h2>

          <button
            onClick={() =>
              window.location.reload()
            }
            className="mt-5 rounded-xl bg-red-600 px-5 py-2 text-sm font-bold text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main
      id="top"
      className="min-h-screen bg-[#ececf1] pb-24"
    >
      {/* HERO */}

      <section className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 px-3 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-block rounded-full bg-black px-3 py-1 text-[10px] font-bold tracking-widest text-yellow-400 sm:text-xs">
            SATTA MATKA RESULT
          </div>

          <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-black sm:text-4xl">
            {formattedTitle}
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-xs font-medium text-gray-800 sm:text-base">
            Fastest live jodi chart result,
            today result, old result history
            and latest updates.
          </p>

          <div className="mt-5 inline-flex rounded-xl bg-black px-4 py-2 text-xs font-bold text-yellow-400 shadow-xl sm:text-sm">
            📅 {todayDisplay}
          </div>
        </div>
      </section>

      {/* TODAY RESULT */}

      <section className="px-2 py-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border-2 border-yellow-400 bg-white shadow-xl">
          {/* HEADER */}

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-3 text-center">
            <h2 className="text-lg font-black uppercase text-black sm:text-2xl">
              Today Result
            </h2>

            <p className="mt-1 text-xs font-semibold text-black sm:text-sm">
              {todayDisplay}
            </p>
          </div>

          {/* TABLE */}

          <div className="w-full overflow-hidden">
            <table className="w-full table-fixed border-collapse text-center">
              <thead>
                <tr className="bg-[#111827] text-white">
                  {todayTableData.map(
                    (item) => (
                      <th
                        key={item.no}
                        className="border border-gray-300 px-1 py-2 text-[10px] font-bold sm:text-sm"
                      >
                        B{item.no}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white">
                  {todayTableData.map(
                    (item, index) => (
                      <td
                        key={index}
                        className="border border-gray-300 px-1 py-2 text-xs font-bold text-gray-800 sm:text-lg"
                      >
                        {item.value}
                      </td>
                    )
                  )}
                </tr>

                <tr className="bg-[#fff8e1]">
                  {todayTableData.map(
                    (item, index) => (
                      <td
                        key={index}
                        className="border border-gray-300 px-1 py-2 text-xs font-black text-red-600 sm:text-lg"
                      >
                        {item.result}
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>

          {/* ALERT */}

          <div className="bg-[#111827] px-3 py-5 text-center text-white">
            <h3 className="text-base font-black text-yellow-400 sm:text-xl">
              ⚠️ FRAUD ALERT ⚠️
            </h3>

            <p className="mt-2 text-xs font-semibold sm:text-sm">
              DON'T PAY MONEY TO ANYONE FOR
              TIPS
            </p>

            <p className="mt-2 text-xs font-semibold text-red-400 sm:text-sm">
              💰 सावधान रहें - टिप्स के लिए
              किसी को पैसे न दें 💰
            </p>

            <p className="mt-2 text-xs font-semibold text-red-400 sm:text-sm">
              🚫 जुआ वित्तीय जोखिम पैदा करता
              है 🚫
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:justify-center">
              <button className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white sm:text-sm">
                🔴 LIVE RESULT
              </button>

              <div className="rounded-lg bg-yellow-400 px-4 py-2 text-xs font-black text-black sm:text-sm">
                SABSE PAHLE RESULT
              </div>

              <button className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white sm:text-sm">
                🔴 LIVE UPDATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REFRESH */}

      <div className="px-3">
        <div className="mx-auto flex max-w-7xl justify-center">
          <button
            onClick={() =>
              window.location.reload()
            }
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-lg sm:text-sm"
          >
            ↻ Refresh Result
          </button>
        </div>
      </div>

      {/* LAST 30 DAYS */}

      <section className="px-2 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-black text-gray-800 sm:text-3xl">
              Last 30 Days Result
            </h2>

            <p className="mt-2 text-xs text-gray-600 sm:text-sm">
              Daily chart history and previous
              results
            </p>
          </div>

          <div className="space-y-5">
            {historyData.length === 0 && (
              <div className="rounded-2xl bg-white py-10 text-center text-sm font-bold shadow-xl">
                No historical data found
              </div>
            )}

            {historyData.map(
              (history, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border-2 border-yellow-400 bg-white shadow-xl"
                >
                  {/* DATE */}

                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-3 text-center">
                    <h3 className="text-sm font-black text-black sm:text-xl">
                      {history.date}
                    </h3>
                  </div>

                  {/* TABLE */}

                  <div className="w-full overflow-hidden">
                    <table className="w-full table-fixed border-collapse text-center">
                      <thead>
                        <tr className="bg-[#111827] text-white">
                          {history.values.map(
                            (_, idx) => (
                              <th
                                key={idx}
                                className="border border-gray-300 px-1 py-2 text-[9px] font-bold sm:text-sm"
                              >
                                B{idx + 1}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="bg-white">
                          {history.values.map(
                            (
                              value,
                              idx
                            ) => (
                              <td
                                key={idx}
                                className="border border-gray-300 px-1 py-2 text-[11px] font-bold text-gray-800 sm:text-lg"
                              >
                                {value}
                              </td>
                            )
                          )}
                        </tr>

                        <tr className="bg-[#fff8e1]">
                          {history.results.map(
                            (
                              value,
                              idx
                            ) => (
                              <td
                                key={idx}
                                className="border border-gray-300 px-1 py-2 text-[11px] font-black text-red-600 sm:text-lg"
                              >
                                {value}
                              </td>
                            )
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TOP BUTTON */}

      <a
        href="#top"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-xl font-black text-black shadow-2xl"
      >
        ↑
      </a>
    </main>
  );
}