// app/page.js
"use client";
import {useState} from 'react';
export default function Home() {

   const [open, setOpen] = useState<number | null>(0);

  const liveData = [
    {
      title: "MILAN DAY",
      result: "Loading...",
    },
    {
      title: "RAJDHANI DAY",
      result: "Loading...",
    },
    {
      title: "PRABHAT",
      result: "590-46-367",
    },
    {
      title: "DIAMOND",
      result: "278-71-579",
    },
  ];

  const liveData2 = [
    {
      title: "RAJA-RANI MORNING",
      result: "267-58-350",
      time: "(09:40 - 10:40)",
      color: "text-green-700",
      bg: "bg-[#efefef]",
    },
    {
      title: "RATAN MORNING",
      result: "230-52-147",
      time: "(10:00 - 11:00)",
      color: "text-fuchsia-700",
      bg: "bg-[#efefef]",
    },
    {
      title: "KARNATAKA DAY",
      result: "290-19-360",
      time: "(10:00 - 11:00)",
      color: "text-orange-700",
      bg: "bg-[#efefef]",
    },
    {
      title: "KALYAN MORNING",
      result: "229-37-179",
      time: "(11:40 - 12:40 PM)",
      color: "text-blue-700",
      bg: "bg-yellow-400",
    },
    {
      title: "MINI MILAN",
      result: "223-79-667",
      time: "(11:35 - 12:35)",
      color: "text-red-600",
      bg: "bg-[#efefef]",
    },
    {
      title: "DHAN EXPRESS",
      result: "990-84-130",
      time: "(11:00 - 01:00)",
      color: "text-green-700",
      bg: "bg-[#efefef]",
    },
  ];

  const forumLinks = [
    "Satta Matka Guessing Forum",
    "Join Telegram Channel",
    "FREE Daily 3 Ank Open To Close All Games",
    "Weekly Jodi & Panna",
    "FREE All Matka Charts",
    "FREE Satta 220 Patti Favourite Panna Chart",
  ];


  const chartData = [
    {
      title: "Kalyan",
      subtitle: "MEMBERSHIP KE LIYE",
      phone: "08829959562",
      bg: "bg-red-600",
    },
    {
      title: "MAIN BAZAR",
      subtitle: "BOOKING KE LIYE",
      phone: "08829959562",
      bg: "bg-green-700",
    },
    {
      title: "PRABHAT",
      number: "5-6-7-8",
      result: "54-59-65-60-73-78-81-86",
      bg: "bg-red-700",
    },
    {
      title: "PRABHAT NIGHT",
      number: "3-5-7-9",
      result: "32-37-54-59-75-70-98-93",
      bg: "bg-gray-500",
    },
  ];

  const topGuessers = [
    "1. BHAI",
    "2. RUDRA PENAL KING",
    "3. KING",
    "4. DANISH BHAI",
  ];

  const fastResult = [
    "1. ADMIN SIR",
    "2. CO-ADMIN SIR",
    "3. S.KUMAR SIR",
    "4. VIP BHAI",
  ];


  const charts = [
  "Kalyan Chart",
  "Main Bazar Chart",
  "Main Ratan Chart",
  "Main Mumbai Chart",
  "Time Bazar Chart",
  "Sridevi Satta Chart",
  "Sridevi Night Chart",
  "Kalyan Night Chart",
  "Kalyan Morning Chart",
  "Madhur Morning Chart",
  "Milan Day Chart",
  "Milan Night Chart",
  "Madhur Day Chart",
  "Madhur Night Chart",
  "Supreme Day Chart",
  "Supreme Night Chart",
  "Rajdhani Day Chart",
  "Rajdhani Night Chart",
];

const faqs = [
  {
    question: "What is DPBoss and why do millions of players visit it every day?",
    answer:
      "DPBoss provides chart records, market updates and result information for multiple Matka markets.",
  },
  {
    question: "What is Kalyan Matka and when does its result come?",
    answer:
      "Kalyan is one of the most popular markets. Result timings vary depending on the market schedule.",
  },
  {
    question: "What is Satta Matka and how does it work?",
    answer:
      "Historically, Satta Matka is a number-based gambling game. Laws differ by location.",
  },
  {
    question: "What is the difference between Jodi, Panna and Single?",
    answer:
      "These terms refer to different number combinations used within Matka systems.",
  },
];


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

          <h1 className="text-red-600 text-4xl md:text-5xl italic font-bold mt-2">
            Satta Matka
          </h1>

          <h2 className="text-blue-700 text-2xl md:text-3xl italic font-bold mt-2">
            SattaMatkaDpboss.Mobi
          </h2>
        </div>

        {/* Description */}
        <div className="border-b-4 border-pink-500 bg-white px-3 py-4 text-center">
          <p className="text-[13px] md:text-[15px] italic leading-6 text-gray-800">
            SattaMatkaDpboss.Mobi is India's fastest and most trusted platform
            for DPBoss Satta Matka result — Kalyan Matka, Milan Day Night,
            Rajdhani Day Night, Main Bazaar, Time Bazaar and 50+ markets.
            Updated daily with lightning speed and accurate results.
          </p>
        </div>

        {/* Lucky Number Section */}
        <div className="border-y-4 border-yellow-500 bg-[#dfe4e1]">
          <div className="bg-white text-center border-b border-yellow-500 py-2">
            <h2 className="text-2xl md:text-4xl italic font-bold">
              Today Satta Matka Lucky Number
            </h2>
          </div>

          <div className="grid grid-cols-2 text-center py-4 px-2 gap-4">
            <div>
              <h3 className="text-red-600 text-xl md:text-3xl italic font-bold">
                Ank (शुभांक)
              </h3>

              <p className="text-2xl md:text-4xl font-bold mt-2">2-5-7-8</p>
            </div>

            <div>
              <h3 className="text-red-600 text-xl md:text-3xl italic font-bold">
                Final Ank
              </h3>

              <p className="text-2xl md:text-4xl font-bold mt-2">K-5, M-*</p>
            </div>
          </div>
        </div>

        {/* Live Update */}
        <div className="mt-3 border-2 border-yellow-500">
          <div className="bg-yellow-400 py-3 text-center border-b border-orange-500">
            <h2 className="text-3xl md:text-5xl font-black italic">
              📡 LIVE UPDATE 🆕
            </h2>
          </div>

          <div className="bg-[#dfe4e1]">
            {liveData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-400 py-5 text-center"
              >
                <h3 className="text-red-600 text-2xl md:text-4xl font-bold italic">
                  {item.title}
                </h3>

                <p className="text-blue-700 text-3xl md:text-5xl font-bold mt-2">
                  {item.result}
                </p>

                <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-b from-purple-900 to-black text-white font-bold shadow-lg">
                  Refresh
                </button>
              </div>
            ))}
          </div>
        </div>

       
      </div>

      <div className="max-w-[1600px] mx-auto border-2 border-yellow-500 rounded-md overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#0d5b91] text-center py-6 px-3 border-b-4 border-black">
          <p className="text-white text-xl md:text-3xl font-bold italic leading-relaxed">
            अब मटका खेलना हुआ आसान ! घर बैठे मटका खेलो अब मोबाइल एप्लीकेशन पे और
            जीतो ढेर सारी धनराशि। अभी डाउनलोड करो।
          </p>

          <button className="mt-4 bg-gradient-to-b from-pink-400 to-orange-300 text-white px-8 py-2 rounded-full text-2xl italic font-bold shadow-lg border border-white">
            Play Online Matka
          </button>

          <p className="text-yellow-300 text-xl md:text-2xl font-bold italic mt-3">
            India's Biggest & Most Trusted
          </p>
        </div>

        {/* Live Result Header */}
        <div className="bg-gradient-to-b from-yellow-300 to-orange-400 border-y-4 border-black text-center py-3">
          <h2 className="text-3xl md:text-5xl font-black italic text-black">
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
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 text-white text-sm md:text-lg px-3 py-1 rounded-md font-bold shadow">
                Jodi
              </button>

              {/* Center Content */}
              <div className="text-center">
                <h3
                  className={`${item.color} text-2xl md:text-5xl font-black italic drop-shadow`}
                >
                  {item.title}
                </h3>

                <p className="text-black text-2xl md:text-5xl font-black mt-1">
                  {item.result}
                </p>

                <p className="text-red-600 text-sm md:text-xl font-bold italic mt-1">
                  {item.time}
                </p>
              </div>

              {/* Right Button */}
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white text-sm md:text-lg px-3 py-1 rounded-md font-bold shadow">
                Panel
              </button>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-4 border-2 border-cyan-500">
          <div className="bg-red-600 text-center py-4">
            <h2 className="text-white text-2xl md:text-4xl italic font-bold">
              Contact For Any Support And Queries
            </h2>
          </div>

          <div className="bg-black text-center py-4">
            <p className="text-white text-lg md:text-2xl italic font-semibold">
              Email us, and we will get back to you shortly.
            </p>
          </div>

          <div className="bg-[#efefef] flex justify-center py-6">
            <div className="bg-green-400 px-8 py-4 rounded-full shadow-xl">
              <p className="text-black text-xl md:text-4xl font-black italic">
                support@sattamatkadpboss.mobi
              </p>
            </div>
          </div>
        </div>

        {/* Forum Section */}
        <div className="mt-4 border-2 border-pink-600">
          <div className="bg-gradient-to-b from-pink-600 to-red-500 py-4 text-center">
            <h2 className="text-white text-2xl md:text-4xl font-black italic">
              MEMBER'S FORUM AND FREE SATTA MATKA ZONE
            </h2>
          </div>

          <div className="bg-[#efefef] p-2 space-y-3">
            {forumLinks.map((item, index) => (
              <div
                key={index}
                className="border-2 border-pink-600 bg-white text-center py-4 px-2"
              >
                <p className="text-black text-lg md:text-4xl font-black italic">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fixed Buttons */}
        <div className="fixed bottom-3 left-2 z-50 flex flex-col gap-2">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-lg font-bold shadow-lg">
            Fast Result
          </button>

          <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm md:text-lg font-bold shadow-lg">
            Matka Play
          </button>
        </div>

        {/* Refresh Button */}
        <div className="fixed bottom-4 right-3 z-50">
          <button className="bg-white border-4 border-blue-700 text-blue-700 px-5 py-2 rounded-2xl text-2xl md:text-4xl italic font-black shadow-2xl">
            Refresh
          </button>
        </div>
      </div>

      <div className="border-2 border-red-700">
        <div className="bg-purple-800 text-yellow-300 font-bold italic text-lg md:text-3xl px-3 py-2 border-b-2 border-red-700">
          ⇒ OPEN TO CLOSE FREE GAME ZONE
        </div>

        {/* DATE */}
        <div className="bg-yellow-300 text-center text-2xl md:text-4xl italic font-bold py-2 border-b-4 border-blue-700">
          Date : 30-05-2026
        </div>

        {/* CARDS */}
        <div className="bg-[#ece6be]">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="border-b-4 border-blue-700 py-6 text-center"
            >
              <div
                className={`${item.bg} inline-block px-4 py-1 text-white text-2xl md:text-5xl italic font-extrabold shadow-lg`}
              >
                {item.title}
              </div>

              {item.subtitle && (
                <>
                  <h2 className="text-blue-700 text-2xl md:text-5xl font-extrabold italic mt-3">
                    {item.subtitle}
                  </h2>

                  <h3 className="text-black text-xl md:text-4xl font-bold italic mt-2">
                    CALL KARE
                  </h3>

                  <p className="text-red-600 text-2xl md:text-5xl font-extrabold italic mt-2">
                    {item.phone}
                  </p>
                </>
              )}

              {item.number && (
                <>
                  <h2 className="text-blue-700 text-2xl md:text-5xl font-extrabold italic mt-3">
                    {item.number}
                  </h2>

                  <h3 className="text-black text-2xl md:text-5xl font-bold italic mt-2">
                    {item.number}
                  </h3>

                  <p className="text-red-600 text-xl md:text-4xl font-extrabold italic mt-2 px-2">
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
            <div className="bg-blue-900 text-white text-2xl md:text-4xl font-extrabold italic px-3 py-2 border-b-2 border-black">
              TOP GUSSER
            </div>

            {topGuessers.map((item, index) => (
              <div
                key={index}
                className="bg-green-600 text-white text-lg md:text-3xl font-bold italic border-b-2 border-black px-3 py-2"
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-blue-900 text-white text-2xl md:text-4xl font-extrabold italic px-3 py-2 border-b-2 border-black">
              FAST RESULT
            </div>

            {fastResult.map((item, index) => (
              <div
                key={index}
                className="bg-blue-700 text-white text-lg md:text-3xl font-bold italic border-b-2 border-black px-3 py-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* REFRESH BUTTON */}
        <div className="flex justify-end bg-black p-3">
          <button className="bg-white text-blue-700 border-4 border-red-600 rounded-2xl px-6 py-2 text-xl md:text-3xl font-extrabold italic shadow-lg hover:scale-105 transition-all duration-300">
            Refresh
          </button>
        </div>
      </div>



       {/* Header */}
      <div className="bg-purple-900 border-y-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-yellow-300 font-bold italic text-3xl">
            ⚡ SATTA MATKA JODI CHART RECORDS
          </h1>
        </div>
      </div>

      {/* Chart Section */}
      <section className="bg-white">
        {charts.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block text-center py-4 text-2xl font-bold
              text-blue-700 border-2 border-red-600
              hover:bg-gray-100 transition"
          >
            {item}
          </a>
        ))}
      </section>

      {/* FAQ Top Accordion */}
      <section className="max-w-7xl mx-auto p-4 space-y-3 mt-6">
        {[
          "What are the primary mechanics and rules of the classic Matka game?",
          "How do participants select digits and calculate card combinations?",
          "What crucial parameters should you evaluate before exploring online markets?",
          "How do numbered slips and draw outcomes determine a winner?",
          "Can expert guessing forums guarantee consistent victories?",
          "How does community engagement influence digital search variations?",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-200 text-black font-semibold italic p-5 rounded"
          >
            • {item}
          </div>
        ))}
      </section>

      {/* FAQ Title */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-950 text-center py-3 text-white font-bold italic border border-red-500">
          FREQUENTLY ASKED QUESTIONS — SATTA MATKA DPBOSS
        </div>
      </div>

      {/* FAQ Items */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-600 bg-gray-100 text-black"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full p-6 text-center text-3xl font-bold italic text-pink-700"
            >
              Q{index + 1}. {faq.question}
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Disclaimer Section */}
      <section className="max-w-4xl mx-auto px-4 space-y-4">
        <div className="bg-white text-black rounded-lg p-6 border-2 border-blue-700">
          <h3 className="text-center text-red-600 font-bold text-2xl mb-4">
            !! DISCLAIMER !!
          </h3>

          <p className="text-gray-700">
            This website is intended for informational and educational
            purposes only. Users should comply with local laws and regulations.
          </p>
        </div>

        <div className="bg-yellow-300 text-black rounded-lg p-6">
          <h3 className="font-bold text-center text-red-700 text-xl">
            Satta Matka DPBoss: Fast Live Updates
          </h3>

          <p className="mt-3">
            Market updates and chart information are displayed for educational
            reference.
          </p>
        </div>
      </section>

      {/* Footer Links */}
      <section className="max-w-7xl mx-auto mt-8 px-4">
        <div className="bg-amber-950 rounded-md p-8">
          <div className="flex flex-wrap justify-center gap-8 font-bold">
            <a href="#">SATTA MATKA CHART</a>
            <a href="#">TARA MATKA</a>
            <a href="#">FIX MATKA</a>
            <a href="#">SITEMAP</a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-bold mt-6">
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">DISCLAIMER</a>
          </div>
        </div>
      </section>

      {/* Rating Card */}
      <section className="flex justify-center mt-10 px-4">
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl p-10 max-w-xl w-full text-center">
          <h3 className="text-4xl font-bold">
            DPBoss User Reviews & Ratings
          </h3>

          <div className="text-yellow-400 text-4xl mt-4">
            ★★★★★
          </div>

          <div className="text-3xl font-bold mt-2">
            4.9 / 5
          </div>

          <p className="text-gray-400 mt-4">
            Based on thousands of votes
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="flex justify-center py-10 px-4">
        <div className="bg-white text-black rounded-xl max-w-md w-full text-center p-8">
          <h3 className="text-red-600 text-4xl font-bold">
            SattaMatkaDpboss.Mobi
          </h3>

          <p className="mt-4 text-gray-600">
            ALL RIGHTS RESERVED (2012-2026)
          </p>

          <div className="mt-6">
            <p className="font-semibold">SITE OWNER</p>

            <h4 className="text-blue-700 text-3xl font-bold mt-2">
              PRO. BIG BOSS SIR
            </h4>

            <p className="text-blue-600 text-4xl mt-4">
              08829959562
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
