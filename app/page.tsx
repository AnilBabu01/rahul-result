// app/page.js
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

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    console.log("click");
    setActive(active === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-2 px-2">
      <div className="max-w-[1600px] mx-auto border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.4)] overflow-hidden rounded-xl">
        {/* Header */}
        <div className="border-b-4 border-cyan-400 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-center py-5 px-2">
          <p className="text-[15px] italic leading-5 text-cyan-200">
            विश्व की पहली
            <br />
            भरोसेमंद वेबसाइट
          </p>

          <h1 className="text-cyan-300 text-3xl italic font-black tracking-wide">
            Satta Matka
          </h1>

          <h2 className="text-pink-400 text-2xl italic font-bold mt-1">
            SattaMatkaDpboss.Mobi
          </h2>
        </div>

        {/* Description */}
        <div className="border-b-4 border-cyan-500 bg-slate-900 px-3 py-4 text-center">
          <p className="text-[12px] italic leading-5 text-slate-200">
            SattaMatkaDpboss.Mobi is India's fastest and most trusted platform
            for DPBoss Satta Matka result — Kalyan Matka, Milan Day Night,
            Rajdhani Day Night, Main Bazar, Time Bazar and 50+ markets — all
            updated daily at lightning speed, 100% free. Get live Kalyan Matka
            result, DPBoss 143 guessing, free Matka Guessing Forum, complete
            Jodi Chart and Panel Chart records from 1974 to 2026, Morning
            Syndicate result, Syndicate Night result, Date Fix Matka and weekly
            jodi predictions — everything in one place. No login. No payment.
            Always free. India's most complete Satta Matka platform — 50+
            markets, 68+ chart records, active guessing forum and expert fix
            jodi tips. We also provide Morning Syndicate and Matka Bazar
            Syndicate Night results directly from the Matka industry. Receive
            weekly game updates, Date Fix information and a free Matka Number
            Guessing Formula. Visit us daily for the fastest Matka tips and
            tricks. Bookmark this site for easy access. Thank you!
          </p>
        </div>

        {/* Lucky Number Section */}
        <div className="border-y-4 border-cyan-500 bg-gradient-to-r from-slate-900 to-cyan-950">
          <div className="bg-slate-950 text-center border-b border-cyan-500 py-2">
            <h2 className="text-2xl italic font-black text-cyan-300">
              Today Satta Matka Lucky Number
            </h2>
          </div>

          <div className="grid grid-cols-2 text-center py-3 px-1 gap-4">
            <div>
              <h3 className="text-pink-400 text-xl italic font-black">
                Ank (शुभांक)
              </h3>

              <p className="text-3xl font-black text-white">2-5-7-8</p>
            </div>

            <div>
              <h3 className="text-pink-400 text-xl italic font-black">
                Final Ank
              </h3>

              <p className="text-2xl font-black text-white">K-5, M-*</p>
            </div>
          </div>
        </div>

        {/* Live Update */}
        <div className="mt-3 border-2 border-cyan-500 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-700 py-2 text-center animate-pulse">
            <h2 className="text-xl font-black italic text-white">
              📡 LIVE UPDATE 🆕
            </h2>
          </div>

          <div className="bg-slate-900">
            {liveData.map((item, index) => (
              <div
                key={index}
                className="border-b border-slate-700 py-5 text-center"
              >
                <h3 className="text-cyan-300 text-2xl font-black italic">
                  {item.title}
                </h3>

                <p className="text-pink-400 text-2xl font-black mt-1">
                  {item.result}
                </p>

                <button className="mt-3 px-8 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition">
                  Refresh
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-4 mx-auto border-2 border-cyan-500 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.25)]">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-cyan-700 via-blue-900 to-slate-950 text-center py-3 px-2 border-b-4 border-cyan-400">
          <p className="text-white text-xl font-black italic leading-relaxed">
            अब मटका खेलना हुआ आसान ! घर बैठे मटका खेलो अब मोबाइल एप्लीकेशन पे और
            जीतो ढेर सारी धनराशि।
          </p>

          <button className="mt-3 bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-2 rounded-full text-lg italic font-bold shadow-lg">
            Play Online Matka
          </button>

          <p className="text-cyan-300 text-xl font-bold italic mt-3">
            India's Biggest & Most Trusted
          </p>
        </div>

        {/* Live Result Header */}
        <div className="bg-gradient-to-r from-pink-500 to-cyan-500 border-y-4 border-slate-950 text-center py-2">
          <h2 className="text-xl font-black italic text-white">
            📶 LIVE MATKA RESULT
          </h2>
        </div>

        {/* Result List */}
        <div className="bg-slate-900">
          {liveData2.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-700 relative py-5 px-2"
            >
              {/* Left Button */}
              <Link href={`/jodi-chart/${item?.jodi}`}>
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-cyan-500 text-black text-sm md:text-lg px-3 py-1 rounded-md font-black shadow">
                  Jodi
                </button>
              </Link>

              {/* Center Content */}
              <div className="text-center">
                <h3 className="text-pink-400 text-2xl font-black italic">
                  {item.title}
                </h3>

                <p className="text-white text-2xl font-black mt-1">
                  {item.result}
                </p>

                <p className="text-cyan-300 text-lg font-bold italic mt-1">
                  {item.time}
                </p>
              </div>

              {/* Right Button */}
              <Link href={`/panel-chart/${item?.panel}`}>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white text-sm md:text-lg px-3 py-1 rounded-md font-black shadow">
                  Panel
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-4 border-2 border-cyan-500">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-700 text-center py-3">
            <h2 className="text-white text-xl italic font-black">
              Contact For Any Support And Queries
            </h2>
          </div>

          <div className="bg-slate-950 text-center py-3">
            <p className="text-cyan-200 text-lg italic font-semibold">
              Email us, and we will get back to you shortly.
            </p>
          </div>

          <div className="bg-slate-900 flex justify-center py-5">
            <div className="bg-gradient-to-r from-cyan-500 to-pink-500 px-5 py-3 rounded-full shadow-xl">
              <p className="text-black text-xl font-black italic">
                support@sattamatkadpboss.mobi
              </p>
            </div>
          </div>
        </div>

        {/* Forum Section */}
        <div className="mt-4 border-2 border-pink-500">
          <div className="bg-gradient-to-r from-pink-600 to-cyan-600 py-3 text-center">
            <h2 className="text-white text-xl font-black italic">
              MEMBER'S FORUM AND FREE SATTA MATKA ZONE
            </h2>
          </div>

          <div className="bg-slate-900 p-3 space-y-3">
            {forumLinks.map((item, index) => (
              <div
                key={index}
                className="border-2 border-cyan-500 bg-slate-950 text-center py-2 px-2 rounded-lg"
              >
                <p className="text-cyan-300 text-lg font-black italic">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fixed Buttons */}
        <div className="fixed bottom-3 left-2 z-50 flex flex-col gap-2">
          <button className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-3 py-2 rounded-md text-lg font-bold shadow-lg">
            Fast Result
          </button>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold shadow-lg">
            Matka Play
          </button>
        </div>

        {/* Refresh Button */}
        <div className="fixed bottom-4 right-3 z-50">
          <button className="bg-slate-950 border-4 border-cyan-400 text-cyan-300 px-3 py-2 rounded-2xl text-lg italic font-black shadow-2xl">
            Refresh
          </button>
        </div>
      </div>

      {/* Open Close Zone */}
      <div className="mt-4 border-2 border-cyan-500 rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-700 to-blue-900 text-white font-black italic text-lg px-3 py-2">
          ⇒ OPEN TO CLOSE FREE GAME ZONE
        </div>

        <div className="bg-pink-500 text-center text-xl italic font-black py-3 border-b-4 border-cyan-500 text-white">
          Date : 30-05-2026
        </div>

        <div className="bg-slate-900">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="border-b-2 border-cyan-500 py-5 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-700 inline-block px-4 py-2 text-white text-xl italic font-black rounded-lg shadow-lg">
                {item.title}
              </div>

              {item.subtitle && (
                <>
                  <h2 className="text-cyan-300 text-2xl font-black italic mt-2">
                    {item.subtitle}
                  </h2>

                  <h3 className="text-white text-xl font-bold italic">
                    CALL KARE
                  </h3>

                  <p className="text-pink-400 text-2xl font-black italic">
                    {item.phone}
                  </p>
                </>
              )}

              {item.number && (
                <>
                  <h2 className="text-cyan-300 text-4xl font-black italic mt-2">
                    {item.number}
                  </h2>

                  <p className="text-pink-400 text-2xl font-black italic px-2 mt-2">
                    {item.result}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div className="border-r border-cyan-500">
            <div className="bg-cyan-700 text-white text-xl font-black italic px-3 py-2">
              TOP GUSSER
            </div>

            {topGuessers.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 text-cyan-300 text-lg font-bold italic border-b border-slate-700 px-3 py-2"
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-pink-600 text-white text-xl font-black italic px-3 py-2">
              FAST RESULT
            </div>

            {fastResult.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 text-pink-300 text-lg font-bold italic border-b border-slate-700 px-3 py-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Records */}
      <div className="mt-4 bg-gradient-to-r from-cyan-700 to-blue-900 text-white font-black italic text-lg px-3 py-2 rounded-t-xl">
        ⇒ SATTA MATKA JODI CHART RECORDS
      </div>

      <section className="bg-slate-900 rounded-b-xl overflow-hidden border border-cyan-500">
        {charts.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block text-center py-3 text-xl font-bold text-cyan-300 border-b border-slate-700 hover:bg-slate-800 transition"
          >
            {item}
          </a>
        ))}
      </section>

      {/* FAQ */}
      <div className="mt-6 bg-gradient-to-r from-pink-600 to-cyan-600 text-center py-3 text-white font-black italic rounded-xl">
        FREQUENTLY ASKED QUESTIONS — SATTA MATKA DPBOSS
      </div>

      <section className="py-4">
        <div className="w-full">
          {faqData2.map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="mb-3 cursor-pointer overflow-hidden rounded-lg border-2 border-cyan-500"
            >
              <div className="flex w-full items-center bg-slate-900 px-3 py-3 text-left">
                <span className="flex-1 text-center text-[16px] font-black italic text-pink-400">
                  {item.question}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-slate-800 px-3 py-3 text-[13px] leading-relaxed text-slate-200">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-2 space-y-4">
        <div className="bg-slate-900 text-white rounded-xl p-6 border-2 border-cyan-500">
          <h3 className="text-center text-pink-400 font-black text-3xl mb-4">
            !! DISCLAIMER !!
          </h3>

          <p className="text-slate-300 leading-7">
            यह वेबसाइट केवल मनोरंजन और सूचना के उद्देश्य के लिए है।
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-cyan-600 text-white rounded-xl p-6">
          <h3 className="font-black text-center text-2xl">
            Satta Matka DPBoss: सबसे तेज़ लाइव अपडेट
          </h3>

          <p className="mt-3 leading-7">
            यदि आप इंटरनेट पर सबसे तेज़ कल्याण मटका रिजल्ट और DPBoss गेसिंग खोज
            रहे हैं, तो आप सही जगह पर हैं।
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-950 border border-cyan-500 rounded-xl py-6 px-4">
          <div className="flex flex-wrap justify-center gap-8 text-cyan-300 font-bold text-lg uppercase">
            <a href="#">Satta Matka Chart</a>
            <a href="#">Tara Matka</a>
            <a href="#">Fix Matka</a>
            <a href="#">Sitemap</a>
          </div>

          <div className="border-t border-cyan-700 my-4"></div>

          <div className="flex flex-wrap justify-center gap-8 text-pink-300 font-bold text-lg uppercase">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>

        {/* Rating Card */}
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-xl bg-gradient-to-b from-slate-900 to-black border-2 border-cyan-500 rounded-3xl p-8 text-center shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <h2 className="text-cyan-300 text-3xl font-black mb-6">
              DPBoss User Reviews & Ratings
            </h2>

            <div className="flex items-center justify-center gap-3 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-pink-400 text-3xl">
                  ★
                </span>
              ))}

              <span className="text-cyan-300 text-3xl font-black">4.9 / 5</span>
            </div>

            <p className="text-slate-400 italic text-lg">
              (Based on 14,850 votes)
            </p>

            <p className="text-slate-300 mt-8 text-xl leading-relaxed">
              Fastest Satta Matka Results and Accurate Charts trusted by
              thousands of users daily.
            </p>
          </div>
        </div>

        {/* Footer Card */}
        <div className="flex justify-center mt-10 mb-10">
          <div className="bg-slate-900 border border-cyan-500 rounded-3xl shadow-lg w-full max-w-md text-center p-8">
            <h3 className="text-cyan-300 text-2xl font-black italic">
              SattaMatkaDpboss.Mobi
            </h3>

            <p className="text-slate-300 mt-4 font-semibold">
              ALL RIGHTS RESERVED (2012-2026)
            </p>

            <hr className="my-6 border-slate-700" />

            <p className="text-pink-400 uppercase font-semibold">Site Owner:</p>

            <h4 className="text-white text-3xl font-black mt-4">
              PRO. BIG BOSS SIR
            </h4>

            <p className="text-cyan-300 text-xl italic mt-6">08829959562</p>
          </div>
        </div>
      </div>
    </main>
  );
}
