// app/page.js
"use client";

import { useState } from "react";
import { forumLinks, faqData2 } from "@/data/games";

import Link from "next/link";
import Image from "next/image";
import download from "@/public/images/download.gif";

import { useGetMarketListQuery } from "./redux/api/apiClient";

export default function Home() {
  const [active, setActive] = useState<number | null>(null);
  const [refreshingIndex, setRefreshingIndex] = useState<number | null>(null);

  const {
    data: marketResponse,
    isLoading,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const marketList = marketResponse?.data || [];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  const filteredMarkets = marketList?.filter((item: any) =>
    [
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
    ].includes(item?.name),
  );

  return (
    <main className="min-h-screen bg-[#060816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 py-3">
        {/* HEADER */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#111827] via-[#1e1b4b] to-[#111827] shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]"></div>

          <div className="relative px-4 py-8 text-center">
            <p className="text-cyan-300 text-sm italic leading-6">
              विश्व की पहली भरोसेमंद वेबसाइट
            </p>

            <h1 className="mt-3 text-1xl md:text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              SATTA MATKA
            </h1>

            <p className="mt-3 text-fuchsia-400 text-2xl font-black italic">
              sattamatkadp
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm md:text-base font-black shadow-lg hover:scale-105 transition">
                🎯 LIVE RESULT
              </button>

              <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-600 px-6 py-3 text-sm md:text-base font-black shadow-lg hover:scale-105 transition">
                🚀 PLAY ONLINE
              </button>
            </div>
          </div>
        </div>

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-4">
            {/* DESCRIPTION */}
            <div className="rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-md p-5 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center text-2xl">
                  ⚡
                </div>

                <div>
                  <h2 className="text-2xl font-black text-cyan-300">
                    India's Fastest Result Platform
                  </h2>

                  <p className="text-slate-400 text-sm">
                    Live DPBoss Satta Matka Result
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-8 text-[15px]">
                sattamatkadp is India's fastest and trusted platform for live
                Satta Matka results, DPBoss guessing, Jodi charts, Panel charts,
                Kalyan Matka, Milan Day Night, Rajdhani, Main Bazar and many
                more markets updated daily with ultra-fast speed.
              </p>
            </div>

            {/* DO NOT REMOVE - LIVE UPDATE SECTION */}
            <div className="mt-3 border-2 border-cyan-500 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-700 py-3">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-1xl italic text-white font-black">
                    📡 LIVE UPDATE
                  </h2>

                  <Image src={download} alt="Image" width={35} height={35} />
                </div>
              </div>

              <div className="bg-[#0f172a]">
                {/* LOADER */}
                {isLoading && (
                  <div className="py-10 text-center">
                    <p className="text-cyan-300 text-2xl font-black animate-pulse">
                      Loading Market Data...
                    </p>
                  </div>
                )}

                {/* ERROR */}
                {isError && (
                  <div className="py-10 text-center">
                    <p className="text-red-400 text-xl font-bold">
                      Failed To Load Market Data
                    </p>

                    <button
                      onClick={() => refetch()}
                      className="mt-4 px-6 py-2 rounded-lg bg-pink-500 text-white font-bold"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {/* MARKET LIST */}
                {!isLoading &&
                  !isError &&
                  filteredMarkets
                    ?.filter((item: any) => {
                      if (item.result === "Loading...") {
                        return false;
                      }

                      const now = new Date();

                      const convertToDate = (timeString: string) => {
                        if (!timeString) return null;

                        const [time, modifier] = timeString.split(" ");

                        let [hours, minutes] = time.split(":").map(Number);

                        if (modifier === "PM" && hours !== 12) {
                          hours += 12;
                        }

                        if (modifier === "AM" && hours === 12) {
                          hours = 0;
                        }

                        const date = new Date();

                        date.setHours(hours);
                        date.setMinutes(minutes);
                        date.setSeconds(0);

                        return date;
                      };

                      const openTime = convertToDate(item.open_time);
                      const closeTime = convertToDate(item.close_time);

                      if (!openTime || !closeTime) {
                        return false;
                      }

                      closeTime.setMinutes(closeTime.getMinutes() + 10);

                      return now >= openTime && now <= closeTime;
                    })

                    .map((item: any, index: number) => (
                      <div
                        key={index}
                        className="border-b border-slate-700/60 p-5 text-center hover:bg-white/5 transition"
                      >
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 mb-3">
                          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

                          <span className="text-cyan-300 text-sm font-bold">
                            LIVE
                          </span>
                        </div>

                        <h3 className="text-cyan-300 text-1xl font-black italic tracking-wide">
                          {item.name}
                        </h3>

                        <p className="text-fuchsia-400 text-4xl font-black mt-3 tracking-wider">
                          {item.result}
                        </p>

                        <button
                          onClick={async () => {
                            setRefreshingIndex(index);

                            await refetch();

                            setRefreshingIndex(null);
                          }}
                          disabled={refreshingIndex === index}
                          className={`mt-5 px-8 py-3 rounded-full text-white font-black shadow-lg transition duration-300
                          
                          ${
                            refreshingIndex === index
                              ? "bg-gray-500 cursor-not-allowed"
                              : "bg-gradient-to-r from-cyan-500 to-blue-700 hover:scale-105"
                          }`}
                        >
                          {refreshingIndex === index
                            ? "Refreshing..."
                            : "Refresh"}
                        </button>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-4">
            {/* LUCKY NUMBER */}
            <div className="rounded-3xl border border-fuchsia-500/30 bg-gradient-to-b from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-md p-5">
              <h2 className="text-center text-2xl font-black text-fuchsia-400">
                🎯 Lucky Number
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/30 p-4 text-center">
                  <p className="text-cyan-300 font-bold">शुभ अंक</p>

                  <h3 className="mt-2 text-1xl font-black">2-5-7-8</h3>
                </div>

                <div className="rounded-2xl bg-black/30 p-4 text-center">
                  <p className="text-cyan-300 font-bold">Final</p>

                  <h3 className="mt-2 text-1xl font-black">K-5</h3>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-md p-5">
              <h2 className="text-2xl font-black text-cyan-300 text-center">
                🔥 Quick Links
              </h2>

              <div className="mt-5 space-y-3">
                {forumLinks.slice(0, 5).map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 hover:border-cyan-400 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={28}
                        height={28}
                      />

                      <span className="text-sm font-bold text-slate-200">
                        {item.title}
                      </span>
                    </div>

                    <span className="text-cyan-300">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LIVE RESULT CARD */}
        <div className="mt-5 rounded-3xl overflow-hidden border border-cyan-500/30 bg-white/5 backdrop-blur-md">
          <div className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 py-4 text-center">
            <h2 className="text-1xl font-black italic">📶 LIVE MATKA RESULT</h2>
          </div>

          <div className="p-3 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {!isLoading &&
              !isError &&
              filteredMarkets?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl border border-slate-700 bg-[#111827] p-5 hover:border-cyan-400 transition"
                >
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl"></div>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/jodi-chart/${item?.name
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}-chart`}
                        className="rounded-full bg-cyan-500 px-4 py-1 text-black text-sm font-black"
                      >
                        Jodi
                      </Link>

                      <Link
                        href={`/panel-chart/${item?.name
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}-chart`}
                        className="rounded-full bg-fuchsia-500 px-4 py-1 text-white text-sm font-black"
                      >
                        Panel
                      </Link>
                    </div>

                    <div className="text-center mt-6">
                      <h3 className="text-1xl font-black text-fuchsia-400">
                        {item?.name}
                      </h3>

                      <p className="mt-4 text-1xl font-black text-white tracking-widest">
                        {item?.result}
                      </p>

                      <div className="mt-5 rounded-2xl bg-black/30 p-3">
                        <p className="text-cyan-300 font-bold text-sm">
                          Open {item?.open_time}
                        </p>

                        <p className="text-fuchsia-300 font-bold text-sm mt-1">
                          Close {item?.close_time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-6 rounded-3xl overflow-hidden border border-cyan-500/30 bg-white/5 backdrop-blur-md">
          <div className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 py-4 text-center">
            <h2 className="text-1xl font-black italic">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="p-4">
            {faqData2.map((item, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="mb-3 cursor-pointer overflow-hidden rounded-2xl border border-slate-700 bg-[#111827]"
              >
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="font-black text-fuchsia-400">
                    {item.question}
                  </span>

                  <span className="text-cyan-300 text-xl">
                    {active === index ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    active === index
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-700 px-4 py-4 text-slate-300 leading-7">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#111827] via-[#1e293b] to-[#111827] p-6 text-center">
          <h2 className="text-1xl font-black text-cyan-300">sattamatkadp</h2>

          <p className="mt-4 text-slate-300">
            Fastest Satta Matka Results & Charts Platform
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Home
            </a>
            <a
              href="/satta-matka-guessing-forum"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Matka Guessing
            </a>
            <a
              href="/satta-matka-chart"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Matka Chart
            </a>
            <a
              href="/online-matka-play"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Matka Play
            </a>

            <a
              href="/tara-matka-mumbai"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Tara Matka
            </a>

            <a
              href="/fix-matka-number"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Tara Matka
            </a>

            <a
              href="/about-us"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              About
            </a>

            <a
              href="/contact"
              className="rounded-full border border-fuchsia-400 px-5 py-2 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white transition"
            >
              Contact
            </a>

            <a
              href="/privacy-policy"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Privacy
            </a>
            <a
              href="/sitemap.xml"
              className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
            >
              Sitemap
            </a>
          </div>

          <p className="mt-8 text-slate-500 text-sm">
            ALL RIGHTS RESERVED © 2012-2026
          </p>
        </div>
      </div>
    </main>
  );
}
