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

  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#dfe4e1] py-2 px-2">
      <div className="max-w-[1600px] mx-auto border-2 border-black">
        {/* Header */}
        <div className="border-b-4 border-pink-500 bg-[#dfe4e1] text-center py-5 px-2">
          <p className="text-[15px] italic leading-5">
            विश्व की पहली
            <br />
            भरोसेमंद वेबसाइट
          </p>

          <h1 className="text-red-600 md:text-1xl md:text-2xl italic font-bold">
            Satta Matka
          </h1>

          <h2 className="text-blue-700 text-1xl md:text-2xl italic font-bold">
            SattaMatkaDpboss.Mobi
          </h2>
        </div>

        {/* Description */}
        <div className="border-b-4 border-pink-500 bg-white px-3 py-4 text-center">
          <p className="text-[12px] md:text-[11px] italic leading-4 text-gray-800">
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
        <div className="border-y-4 border-yellow-500 bg-[#dfe4e1]">
          <div className="bg-white text-center border-b border-yellow-500 py-2">
            <h2 className="text-2xl md:md:text-1xl italic font-bold">
              Today Satta Matka Lucky Number
            </h2>
          </div>

          <div className="grid grid-cols-2 text-center py-1 px-1 gap-4">
            <div>
              <h3 className="text-red-600 text-xl md:text-1xl italic font-bold">
                Ank (शुभांक)
              </h3>

              <p className="text-2xl md:md:text-1xl font-bold">2-5-7-8</p>
            </div>

            <div>
              <h3 className="text-red-600 text-xl md:text-1xl italic font-bold">
                Final Ank
              </h3>

              <p className="text-1xl md:md:text-1xl font-bold">K-5, M-*</p>
            </div>
          </div>
        </div>

        {/* Live Update */}
        <div className="mt-3 border-2 border-yellow-500">
          <div className="bg-yellow-400 py-2 text-center border-b border-orange-500 animate-blink">
            <h2 className="text-1xl md:text-1xl font-black italic">
              📡 LIVE UPDATE 🆕
            </h2>
          </div>

          <div className="bg-[#dfe4e1]">
            {liveData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-400 py-5 text-center"
              >
                <h3 className="text-red-600 text-1xl md:md:text-1xl font-bold italic">
                  {item.title}
                </h3>

                <p className="text-blue-700 text-1xl md:text-1xl font-bold ">
                  {item.result}
                </p>

                <button className="mt-1 px-6 py-2 rounded-full bg-gradient-to-b from-purple-900 to-black text-white font-bold shadow-lg">
                  Refresh
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" mx-auto border-2 border-yellow-500 rounded-md overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#0d5b91] text-center py-2 px-2 border-b-4 border-black">
          <p className="text-white text-xl md:text-1xl font-bold italic leading-relaxed">
            अब मटका खेलना हुआ आसान ! घर बैठे मटका खेलो अब मोबाइल एप्लीकेशन पे और
            जीतो ढेर सारी धनराशि। अभी डाउनलोड करो।
          </p>

          <button className="mt-1  from-pink-400 to-orange-300 text-white px-4 py-1 rounded-full text-1xl italic font-bold shadow-lg border border-white">
            Play Online Matka
          </button>

          <p className="text-yellow-300 text-xl md:text-21xl font-bold italic mt-1">
            India's Biggest & Most Trusted
          </p>
        </div>

        {/* Live Result Header */}
        <div className="bg-gradient-to-b from-yellow-300 to-orange-400 border-y-4 border-black text-center py-1">
          <h2 className="text-1xl md:text-1xl font-black italic text-black">
            📶 LIVE MATKA RESULT
          </h2>
        </div>

        {/* Result List */}
        <div className="bg-white">
          {liveData2.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} border-b border-gray-400 relative py-4 px-2`}
            >
              {/* Left Button */}
              <Link href={`/jodi-chart/${item?.jodi}`}>
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 text-white text-sm md:text-lg px-3 py-1 rounded-md font-bold shadow">
                  Jodi
                </button>
              </Link>

              {/* Center Content */}
              <div className="text-center">
                <h3
                  className={`${item.color} text-1xl md:text-1xl font-black italic drop-shadow`}
                >
                  {item.title}
                </h3>

                <p className="text-black text-1xl md:text-1xl font-black mt-1">
                  {item.result}
                </p>

                <p className="text-red-600 text-sm md:text-xl font-bold italic mt-1">
                  {item.time}
                </p>
              </div>

              {/* Right Button */}
              <Link href={`/panel-chart/${item?.panel}`}>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white text-sm md:text-lg px-3 py-1 rounded-md font-bold shadow">
                  Panel
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-4 border-2 border-cyan-500">
          <div className="bg-red-600 text-center py-2">
            <h2 className="text-white text-1xl md:md:text-1xl italic font-bold">
              Contact For Any Support And Queries
            </h2>
          </div>

          <div className="bg-black text-center py-2">
            <p className="text-white text-lg md:text-1xl italic font-semibold">
              Email us, and we will get back to you shortly.
            </p>
          </div>

          <div className="bg-[#efefef] flex justify-center py-4">
            <div className="bg-green-400 px-2 py-2 rounded-full shadow-xl">
              <p className="text-black text-xl md:md:text-1xl font-black italic">
                support@sattamatkadpboss.mobi
              </p>
            </div>
          </div>
        </div>

        {/* Forum Section */}
        <div className="mt-4 border-2 border-pink-600">
          <div className="bg-gradient-to-b from-pink-600 to-red-500 py-2 text-center">
            <h2 className="text-white text-1xl md:md:text-1xl font-black italic">
              MEMBER'S FORUM AND FREE SATTA MATKA ZONE
            </h2>
          </div>

          <div className="bg-[#efefef] p-2 space-y-3">
            {forumLinks.map((item, index) => (
              <div
                key={index}
                className="border-2 border-pink-600 bg-white text-center py-1 px-2"
              >
                <p className="text-black text-lg md:md:text-1xl font-black italic">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fixed Buttons */}
        <div className="fixed bottom-3 left-2 z-50 flex flex-col gap-2">
          <button className="bg-red-600 text-white px-1 py-1 rounded-md text-1xl md:md:text-1xl font-bold shadow-lg">
            Fast Result
          </button>

          <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-1xl md:md:text-1xl font-bold shadow-lg">
            Matka Play
          </button>
        </div>

        {/* Refresh Button */}
        <div className="fixed bottom-4 right-3 z-50">
          <button className="bg-white border-4 border-blue-700 text-blue-700 px-1 py-1 rounded-2xl text-1xl md:md:text-1xl italic font-black shadow-2xl">
            Refresh
          </button>
        </div>
      </div>

      <div className="border-2 border-red-700">
        <div className="bg-purple-800 text-yellow-300 font-bold italic text-lg md:text-1xl px-2 py-1 border-b-2 border-red-700">
          ⇒ OPEN TO CLOSE FREE GAME ZONE
        </div>

        {/* DATE */}
        <div className="bg-yellow-300 text-center text-1xl md:md:text-1xl italic font-bold py-2 border-b-4 border-blue-700">
          Date : 30-05-2026
        </div>

        {/* CARDS */}
        <div className="bg-[#ece6be]">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="border-b-4 border-blue-700 py-4 text-center"
            >
              <div
                className={`${item.bg} inline-block px-2 py-1 text-white text-1xl md:text-1xl italic font-extrabold shadow-lg`}
              >
                {item.title}
              </div>

              {item.subtitle && (
                <>
                  <h2 className="text-blue-700 text-1xl md:text-1xl font-extrabold italic">
                    {item.subtitle}
                  </h2>

                  <h3 className="text-black text-xl md:md:text-1xl font-bold italic">
                    CALL KARE
                  </h3>

                  <p className="text-red-600 text-1xl md:text-1xl font-extrabold italic">
                    {item.phone}
                  </p>
                </>
              )}

              {item.number && (
                <>
                  <h2 className="text-blue-700 text-2xl md:text-3xl font-extrabold italic">
                    {item.number}
                  </h2>

                  <h3 className="text-black text-1xl md:text-1xl font-bold italic">
                    {item.number}
                  </h3>

                  <p className="text-red-600 text-xl md:md:text-1xl font-extrabold italic  px-2">
                    {item.result}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div className="border-r-2 border-black">
            <div className="bg-blue-900 text-white text-1xl md:md:text-1xl font-extrabold italic px-1 py-1  border-black">
              TOP GUSSER
            </div>

            {topGuessers.map((item, index) => (
              <div
                key={index}
                className="bg-green-600 text-white text-lg md:text-1xl font-bold italic  border-black px-1 py-1"
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-blue-900 text-white text-1xl md:md:text-1xl font-extrabold italic px-1 py-1 border-black">
              FAST RESULT
            </div>

            {fastResult.map((item, index) => (
              <div
                key={index}
                className="bg-blue-700 text-white text-lg md:text-1xl font-bold italic  border-black px-1 py-1"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}

      <div className="bg-purple-800 text-yellow-300 font-bold italic text-lg md:text-1xl px-2 py-1 border-b-2 border-red-700">
        ⇒ SATTA MATKA JODI CHART RECORDS
      </div>

      {/* Chart Section */}
      <section className="bg-white">
        {charts.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block text-center py-1 text-1xl font-bold
              text-blue-700 border-2 border-red-600
              hover:bg-gray-100 transition"
          >
            {item}
          </a>
        ))}
      </section>

      {/* FAQ Title */}
      <div className=" ">
        <div className="bg-blue-950 text-center py-3 text-white font-bold italic border border-red-500">
          FREQUENTLY ASKED QUESTIONS — SATTA MATKA DPBOSS
        </div>
      </div>

      <section className=" pb-2">
        <div className="w-full">
          {faqData2.map((item, index) => (
            <div
              key={index}
              className=" overflow-hidden border-2 border-[#518C6A]"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center  bg-[#FFFFFF] px-1 py-1 text-left"
              >
                <span className="flex-1 text-[16px] text-center font-bold italic text-[#E91E63]">
                  {item.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white px-1 py-1 text-[13px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Items */}
      <section className=" pb-10">
        <div className="w-full">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-2 overflow-hidden border-2 border-black"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center gap-3 bg-gray-200 px-1 py-1 text-left"
              >
                <span className="text-xl">•</span>

                <span className="flex-1 text-[16px] font-bold italic">
                  {item.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white px-1 py-1 text-[13px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="max-w-4xl mx-auto px-4 space-y-4">
        <div className="bg-white text-black rounded-lg p-6 border-2 border-blue-700">
          <h3 className="text-center text-red-600 font-bold text-2xl mb-4">
            !! DISCLAIMER !!
          </h3>

          <p className="text-gray-700">
            यह वेबसाइट (SattaMatkaDpboss.Mobi) केवल मनोरंजन और सूचना के उद्देश्य
            के लिए है। हम किसी भी अवैध सट्टा मटका व्यवसाय से नहीं जुड़े हैं।
            यहाँ दिखाए गए सभी परिणाम इंटरनेट पर उपलब्ध डेटा पर आधारित हैं। हम
            जुए या सट्टा खेलने का समर्थन नहीं करते हैं। कृपया अपने देश के
            कानूनों का पालन करें। किसी भी लाभ या हानि के लिए आप स्वयं जिम्मेदार
            होंगे।
          </p>
        </div>

        <div className="bg-yellow-300 text-black rounded-lg p-6">
          <h3 className="font-bold text-center text-red-700 text-xl">
            Satta Matka DPBoss: सबसे तेज़ लाइव अपडेट
          </h3>

          <p className="mt-3">
            यदि आप इंटरनेट पर सबसे तेज़ कल्याण मटका रिजल्ट और DPBoss गेसिंग खोज
            रहे हैं, तो आप सही जगह पर हैं। हमारी वेबसाइट आपको मिलन डे, मिलन
            नाइट, राजधानी, और मेन बाजार जैसे सभी मार्केट के परिणाम बिना किसी
            देरी के प्रदान करती है।
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        {/* Navigation Section */}
        <div className="bg-[#4b2203] border border-[#b96b12] rounded-lg py-6 px-4">
          <div className="flex flex-wrap justify-center gap-8 text-white font-bold text-lg uppercase">
            <a href="#">Satta Matka Chart</a>
            <a href="#">Tara Matka</a>
            <a href="#">Fix Matka</a>
            <a href="#">Sitemap</a>
          </div>

          <div className="border-t border-[#8f4f10] my-4"></div>

          <div className="flex flex-wrap justify-center gap-8 text-white font-bold text-lg uppercase">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>

        {/* Rating Card */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-xl bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] border-2 border-yellow-500 rounded-3xl p-8 text-center shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            <h2 className="text-white md:text-2xl font-bold mb-6">
              DPBoss User Reviews & Ratings
            </h2>

            <div className="flex items-center justify-center gap-3 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 md:text-2xl">
                  ★
                </span>
              ))}
              <span className="text-yellow-400 md:text-2xl font-bold">
                4.9 / 5
              </span>
            </div>

            <p className="text-gray-400 italic text-lg">
              (Based on 14,850 votes)
            </p>

            <p className="text-gray-300 mt-8 text-xl leading-relaxed">
              Fastest Satta Matka Results and Accurate Charts trusted by
              thousands of users daily.
            </p>
          </div>
        </div>

        {/* Footer Card */}
        <div className="flex justify-center mt-12">
          <div className="bg-[#f5f5f5] rounded-3xl shadow-lg w-full max-w-md text-center p-8">
            <h3 className="text-red-600 text-5xl font-bold italic">
              SattaMatkaDpboss.Mobi
            </h3>

            <p className="text-gray-700 mt-4 font-semibold">
              ALL RIGHTS RESERVED (2012-2026)
            </p>

            <hr className="my-6 border-gray-300" />

            <p className="text-gray-600 uppercase font-semibold">Site Owner:</p>

            <h4 className="text-blue-900 md:text-2xl font-bold mt-4">
              PRO. BIG BOSS SIR
            </h4>

            <p className="text-blue-600 text-5xl italic mt-6">08829959562</p>
          </div>
        </div>
      </div>
    </main>
  );
}
