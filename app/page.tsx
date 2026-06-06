// app/page.tsx
"use client";

import { useState } from "react";
import {
  liveData,
  liveData2,
  forumLinks,
  chartData,
  topGuessers,
  fastResult,
  charts,
  faqData,
  faqData2,
} from "@/data/games";

import Link from "next/link";
import Image from "next/image";
import download from "@/public/images/download.gif";

import { useGetMarketListQuery } from "./redux/api/apiClient";

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [active, setActive] = useState<number | null>(null);
  const [refreshingIndex, setRefreshingIndex] = useState<number | null>(null);

  /*
  |--------------------------------------------------------------------------
  | RTK QUERY API CALL
  |--------------------------------------------------------------------------
  */

  const {
    data: marketResponse,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  /*
  |--------------------------------------------------------------------------
  | MARKET DATA
  |--------------------------------------------------------------------------
  */

  const marketList = marketResponse?.data || [];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  const currentDate = new Date()
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  return (
    <main className="min-h-screen bg-[#0b1020] text-white overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 py-4">
        {/* HEADER */}
        <section className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-cyan-700 px-5 py-10 text-center">
            <p className="text-sm md:text-base text-white/90 font-medium tracking-wide">
              India's Most Trusted Live Result Platform
            </p>

            <h1 className="mt-3 text-5xl md:text-7xl font-black tracking-wide">
              SATTA MATKA
            </h1>

            <p className="mt-4 text-xl md:text-2xl font-bold text-cyan-100">
              Fast • Live • Trusted • Updated
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-full font-black hover:scale-105 transition">
                LIVE RESULT
              </button>

              <button className="bg-black/40 border border-white/20 px-6 py-3 rounded-full font-black hover:bg-black/60 transition">
                PLAY ONLINE
              </button>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="px-4 py-5 bg-[#10172b]">
            <p className="text-slate-300 leading-8 text-center text-[14px] md:text-[15px]">
              sattamatkadp is India's fastest and most trusted platform for
              DPBoss Satta Matka Result, Kalyan Matka, Milan Day Night,
              Rajdhani Night, Main Bazar, Time Bazar, Jodi Chart, Panel Chart,
              Guessing Forum and live market updates. Get fast results, weekly
              guessing, open-close tips, and historical chart records from 1974
              to 2026 completely free.
            </p>
          </div>
        </section>

        {/* LUCKY NUMBER */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-[1px]">
            <div className="rounded-3xl bg-[#111827] h-full p-6 text-center">
              <h2 className="text-2xl font-black text-cyan-300">
                शुभ अंक (Lucky Ank)
              </h2>

              <p className="mt-4 text-5xl font-black tracking-widest text-white">
                2 • 5 • 7 • 8
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-fuchsia-500 to-pink-700 p-[1px]">
            <div className="rounded-3xl bg-[#111827] h-full p-6 text-center">
              <h2 className="text-2xl font-black text-pink-300">
                Final Ank
              </h2>

              <p className="mt-4 text-5xl font-black tracking-widest text-white">
                K-5
              </p>

              <p className="mt-2 text-2xl text-slate-300 font-bold">M-*</p>
            </div>
          </div>
        </section>

        {/* LIVE UPDATE */}
        <section className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-4 flex items-center justify-center gap-3">
            <Image src={download} alt="download" width={35} height={35} />

            <h2 className="text-2xl font-black tracking-wide">
              LIVE UPDATE
            </h2>

            <Image src={download} alt="download" width={35} height={35} />
          </div>

          {/* LOADING */}
          {isLoading && (
            <div className="py-16 text-center">
              <p className="text-3xl font-black text-cyan-300 animate-pulse">
                Loading Market Data...
              </p>
            </div>
          )}

          {/* ERROR */}
          {isError && (
            <div className="py-16 text-center">
              <p className="text-2xl font-black text-red-400">
                Failed To Load Market Data
              </p>

              <button
                onClick={() => refetch()}
                className="mt-5 bg-red-500 hover:bg-red-600 transition px-8 py-3 rounded-full font-black"
              >
                Retry
              </button>
            </div>
          )}

          {/* LIVE RUNNING MARKET */}
          {!isLoading &&
            !isError &&
            marketList
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
                  className="border-b border-white/10 px-5 py-6"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-black text-cyan-300">
                        {item.name}
                      </h3>

                      <p className="text-4xl font-black text-white mt-2">
                        {item.result}
                      </p>
                    </div>

                    <button
                      onClick={async () => {
                        setRefreshingIndex(index);

                        await refetch();

                        setRefreshingIndex(null);
                      }}
                      disabled={refreshingIndex === index}
                      className={`px-8 py-3 rounded-2xl font-black transition-all duration-300
                      ${
                        refreshingIndex === index
                          ? "bg-slate-600 cursor-not-allowed"
                          : "bg-gradient-to-r from-fuchsia-500 to-pink-600 hover:scale-105"
                      }`}
                    >
                      {refreshingIndex === index
                        ? "Refreshing..."
                        : "Refresh"}
                    </button>
                  </div>
                </div>
              ))}
        </section>

        {/* MARKET LIST */}
        <section className="mt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h2 className="text-3xl font-black">
              📊 LIVE MATKA RESULT
            </h2>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-black">
              Play Online Matka
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {!isLoading &&
              !isError &&
              marketList?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1
                  ${
                    item?.bg_yellow_status == 1
                      ? "bg-gradient-to-br from-yellow-300 to-yellow-500 border-yellow-200 text-black"
                      : "bg-[#121a2f] border-white/10"
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={`/jodi-chart/${item?.name
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                      >
                        <button className="bg-cyan-500 text-black px-4 py-2 rounded-xl font-black">
                          Jodi
                        </button>
                      </Link>

                      <Link
                        href={`/panel-chart/${item?.name
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                      >
                        <button className="bg-fuchsia-500 text-white px-4 py-2 rounded-xl font-black">
                          Panel
                        </button>
                      </Link>
                    </div>

                    <div className="text-center mt-5">
                      <h3
                        className={`text-3xl font-black uppercase
                        ${
                          item?.bg_yellow_status == 1
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {item?.name}
                      </h3>

                      <p
                        className={`text-5xl font-black mt-4
                        ${
                          item?.bg_yellow_status == 1
                            ? "text-black"
                            : "text-cyan-300"
                        }`}
                      >
                        {item?.result}
                      </p>

                      <div
                        className={`mt-5 rounded-2xl px-4 py-3 text-lg font-bold
                        ${
                          item?.bg_yellow_status == 1
                            ? "bg-black/10"
                            : "bg-white/5"
                        }`}
                      >
                        Open : {item?.open_time} <br />
                        Close : {item?.close_time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* FORUM */}
        <section className="mt-8 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 py-4 text-center">
            <h2 className="text-2xl font-black">
              MEMBER'S FORUM & FREE ZONE
            </h2>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {forumLinks.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="rounded-2xl border border-white/10 bg-[#111827] hover:bg-[#162038] transition p-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt="forum"
                    width={40}
                    height={40}
                  />

                  <h3 className="font-black text-cyan-300 text-lg">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* OPEN CLOSE ZONE */}
        <section className="mt-8 rounded-3xl overflow-hidden border border-white/10">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-4">
            <h2 className="text-2xl font-black">
              OPEN TO CLOSE FREE GAME ZONE
            </h2>

            <p className="mt-1 text-cyan-100">
              Date : {currentDate}
            </p>
          </div>

          <div className="bg-[#111827]">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/10 px-4 py-6 text-center"
              >
                <div className="inline-block bg-gradient-to-r from-fuchsia-500 to-pink-600 px-6 py-3 rounded-2xl font-black text-xl">
                  {item.title}
                </div>

                {item.subtitle && (
                  <>
                    <h2 className="mt-5 text-3xl font-black text-cyan-300">
                      {item.subtitle}
                    </h2>

                    <p className="mt-2 text-slate-300 font-bold">
                      CALL KARE
                    </p>

                    <p className="mt-2 text-3xl font-black text-pink-400">
                      {item.phone}
                    </p>
                  </>
                )}

                {item.number && (
                  <>
                    <h2 className="mt-5 text-5xl font-black text-cyan-300">
                      {item.number}
                    </h2>

                    <p className="mt-4 text-2xl font-black text-pink-400">
                      {item.result}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          {faqData2.map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
            >
              <div className="px-5 py-5 flex items-center justify-between">
                <h3 className="font-black text-lg text-cyan-300">
                  {item.question}
                </h3>

                <span className="text-2xl font-black">
                  {active === index ? "-" : "+"}
                </span>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden
                ${
                  active === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-slate-300 leading-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* DISCLAIMER */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
            <h2 className="text-3xl font-black text-red-300 text-center">
              DISCLAIMER
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              यह वेबसाइट केवल मनोरंजन और सूचना उद्देश्य के लिए है। हम किसी भी
              अवैध गतिविधि को बढ़ावा नहीं देते। कृपया अपने क्षेत्र के कानूनों का
              पालन करें।
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">
            <h2 className="text-3xl font-black text-cyan-300 text-center">
              FASTEST LIVE UPDATE
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              Get the fastest Kalyan Matka, Milan Night, Rajdhani and Main
              Bazar results with accurate charts and daily guessing updates.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 mb-8 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="p-6">
            <div className="flex flex-wrap justify-center gap-5 text-lg font-bold">
              <a href="/about-us">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6 text-center">
              <h3 className="text-3xl font-black text-cyan-300">
                sattamatkadp
              </h3>

              <p className="mt-3 text-slate-400 font-semibold">
                ALL RIGHTS RESERVED (2012-2026)
              </p>

              <p className="mt-5 text-pink-400 font-black uppercase">
                Site Owner
              </p>

              <h4 className="mt-3 text-4xl font-black text-white">
                FAST BOSS SIR
              </h4>

              <p className="mt-5 text-cyan-300 text-2xl font-black">
                1234567890
              </p>
            </div>
          </div>
        </footer>

        {/* FIXED BUTTONS */}
        <div className="fixed bottom-5 left-3 z-50 flex flex-col gap-3">
          <button className="bg-gradient-to-r from-fuchsia-500 to-pink-600 px-5 py-3 rounded-2xl font-black shadow-2xl">
            Fast Result
          </button>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-700 px-5 py-3 rounded-2xl font-black shadow-2xl">
            Matka Play
          </button>
        </div>

        <div className="fixed bottom-5 right-3 z-50">
          <button
            onClick={() => refetch()}
            className="bg-[#111827] border border-cyan-400 text-cyan-300 px-6 py-3 rounded-2xl font-black shadow-2xl"
          >
            Refresh
          </button>
        </div>
      </div>
    </main>
  );
}