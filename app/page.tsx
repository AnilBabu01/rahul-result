// app/page.js
"use client";

import { useState } from "react";

export default function Home() {
 const [open, setOpen] = useState<number | null>(0);

  const markets = [
    {
      title: "KALYAN MORNING",
      result: "229-37-179",
      time: "11:40 AM - 12:40 PM",
      color: "from-pink-500 to-red-500",
    },
    {
      title: "MILAN DAY",
      result: "590-46-367",
      time: "03:00 PM - 05:00 PM",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "RAJDHANI DAY",
      result: "220-44-680",
      time: "01:00 PM - 03:00 PM",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "DIAMOND",
      result: "278-71-579",
      time: "08:00 PM - 10:00 PM",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const charts = [
    "Kalyan Chart",
    "Main Bazar Chart",
    "Milan Day Chart",
    "Milan Night Chart",
    "Rajdhani Day Chart",
    "Rajdhani Night Chart",
    "Time Bazar Chart",
    "Madhur Day Chart",
  ];

  const faqs = [
    {
      question: "What is Satta Matka?",
      answer:
        "Satta Matka is a number-based gambling format historically popular in India.",
    },
    {
      question: "What is DPBoss?",
      answer:
        "DPBoss is known for providing Matka chart records and result updates.",
    },
    {
      question: "How often are results updated?",
      answer:
        "Results are updated market-wise according to scheduled timings.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-950 opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-yellow-400 font-bold tracking-[6px] uppercase text-sm md:text-lg">
              India's Fastest Result Platform
            </p>

            <h1 className="text-5xl md:text-8xl font-black mt-6 bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 bg-clip-text text-transparent">
              SATTA MATKA
            </h1>

            <h2 className="text-2xl md:text-5xl font-bold mt-4 text-white">
              DPBOSS LIVE RESULTS
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg md:text-2xl leading-8">
              Fast Live Result • Kalyan • Milan • Rajdhani • Main Bazar •
              Time Bazar • Daily Charts & Updates
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                🎯 LIVE RESULT
              </button>

              <button className="bg-white text-black px-8 py-4 rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-all">
                📊 CHART RECORD
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {[
            { label: "Markets", value: "50+" },
            { label: "Daily Users", value: "1M+" },
            { label: "Fast Updates", value: "24/7" },
            { label: "Years Online", value: "14+" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black text-yellow-400">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-300 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE RESULT CARDS */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-6xl font-black">
            🔥 LIVE MATKA RESULT
          </h2>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold">
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {markets.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} rounded-[30px] p-1 shadow-2xl`}
            >
              <div className="bg-black rounded-[28px] p-8 h-full">
                <div className="flex justify-between items-center">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    LIVE
                  </span>

                  <span className="text-green-400 text-sm font-bold animate-pulse">
                    ● ONLINE
                  </span>
                </div>

                <h3 className="mt-6 text-3xl md:text-5xl font-black">
                  {item.title}
                </h3>

                <div className="mt-8 text-center">
                  <p className="text-5xl md:text-7xl font-black text-yellow-300 tracking-wider">
                    {item.result}
                  </p>

                  <p className="mt-4 text-lg text-gray-300">{item.time}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <button className="bg-red-500 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                    Jodi
                  </button>

                  <button className="bg-blue-600 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                    Panel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LUCKY NUMBER */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-[35px] p-1">
          <div className="bg-black rounded-[32px] p-8 md:p-14">
            <div className="text-center">
              <h2 className="text-4xl md:text-7xl font-black text-yellow-400">
                🎲 TODAY LUCKY NUMBER
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-700">
                  <p className="text-gray-400 text-xl">Lucky Ank</p>

                  <h3 className="text-6xl md:text-8xl font-black text-white mt-4">
                    2-5-7-8
                  </h3>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-700">
                  <p className="text-gray-400 text-xl">Final Ank</p>

                  <h3 className="text-6xl md:text-8xl font-black text-red-500 mt-4">
                    K-5
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHART SECTION */}
      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
            📊 SATTA CHART RECORDS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {charts.map((item, index) => (
              <a
                key={index}
                href="#"
                className="group bg-black border border-zinc-700 rounded-3xl p-8 text-center hover:border-red-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-4">📈</div>

                <h3 className="text-xl font-bold group-hover:text-red-400">
                  {item}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-[35px] p-1">
          <div className="bg-zinc-950 rounded-[32px] p-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black">
              📞 SUPPORT CENTER
            </h2>

            <p className="text-gray-300 text-xl mt-6">
              Contact us for support, updates and market queries
            </p>

            <div className="mt-10 inline-block bg-green-500 text-black px-8 py-5 rounded-full text-2xl md:text-4xl font-black">
              support@sattamatka.com
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black">
            ❓ FAQ SECTION
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center"
              >
                <span className="text-lg md:text-2xl font-bold">
                  {faq.question}
                </span>

                <span className="text-3xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 md:px-8 pb-8 text-gray-300 text-lg leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-yellow-400 text-black rounded-[30px] p-10">
          <h2 className="text-4xl font-black text-center">
            ⚠ DISCLAIMER
          </h2>

          <p className="mt-6 text-lg leading-8 text-center">
            This website is intended for informational purposes only. Users
            should follow local laws and regulations regarding online gaming
            and betting activities.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-4xl font-black text-red-500">
                SATTA MATKA
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                Fast live result updates, chart records and market information.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-5">Quick Links</h4>

              <div className="space-y-3 text-gray-400">
                <p>• Kalyan Result</p>
                <p>• Main Bazar</p>
                <p>• Milan Day</p>
                <p>• Rajdhani Night</p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-5">Contact</h4>

              <div className="space-y-3 text-gray-400">
                <p>📧 support@sattamatka.com</p>
                <p>📱 +91 8829959562</p>
                <p>🌐 DPBoss Live Market</p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-10 pt-8 text-center text-gray-500">
            © 2026 SATTA MATKA DPBOSS • ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>

      {/* FIXED BUTTON */}
      <div className="fixed bottom-5 right-5 z-50">
        <button className="bg-gradient-to-r from-red-500 to-pink-600 w-16 h-16 rounded-full text-3xl shadow-2xl hover:scale-110 transition-all">
          ↻
        </button>
      </div>
    </main>
  );
}