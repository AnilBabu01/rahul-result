import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Chart 2026 – Jodi & Panel All Markets`,
    description: `Get complete Satta Matka Chart 2026 — Kalyan, Milan, Rajdhani, Main Bazar & 30+ markets. Free jodi & panel chart updated daily.Bookmark SattaMatkaDpboss.Mobi now!`,
    alternates: {
      canonical: `https://yourdomain.com/chart/satta-matka-chart`,
    },
  };
}

export default function Page() {
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
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#140021] via-[#22003a] to-black p-2">
      <div className="overflow-hidden rounded-2xl border-2 border-fuchsia-500 bg-[#12001f] shadow-[0_0_25px_rgba(217,70,239,0.4)]">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-700 border-b-2 border-fuchsia-400 py-3 px-2">
          <h1 className="text-center text-xl md:text-2xl font-black italic text-white drop-shadow-lg">
            ✨ Satta Matka Chart 2026 – Jodi & Panel Chart All Markets ✨
          </h1>
        </div>

        {/* Intro Content */}
        <div className="border-b border-fuchsia-500 px-4 py-4 text-center bg-[#1d0030]">
          <p className="font-bold italic text-lg text-pink-100 leading-relaxed">
            Welcome to SattaMatkaDpboss.Mobi — India's most trusted destination
            for Satta Matka Chart records. Get complete Kalyan Jodi Chart
            history from 1974 to 2026, Milan Day & Night Panel Chart, Rajdhani
            Day & Night Jodi Chart, Main Bazar Panel Chart, Main Mumbai Chart,
            Time Bazar Chart, Syndicate Night Panel Chart, Morning Syndicate
            Chart and 30+ more — all updated daily, all 100% free.
          </p>
        </div>

        <div className="border-b border-fuchsia-500 px-4 py-4 text-center bg-[#24003b]">
          <p className="font-bold italic text-lg text-cyan-100 leading-relaxed">
            Use our Satta Matka Jodi Chart to spot hot jodi pairs and overdue
            numbers. Use our Satta Matka Panel Chart to identify panna families,
            final ank patterns and double patti cycles. Both charts together
            give you the strongest possible prediction base for any market.
          </p>
        </div>

        <div className="border-b border-fuchsia-500 py-3 text-center bg-gradient-to-r from-purple-700 to-fuchsia-700">
          <p className="font-black italic text-lg text-yellow-300 animate-pulse">
            🚀 All Charts Updated Daily By Admin — No Login Required — Bookmark
            Now!
          </p>
        </div>

        {/* Chart Records */}
        <div className="mt-4 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 text-white font-black italic text-xl px-4 py-3 rounded-t-2xl text-center shadow-lg">
          ⇒ SATTA MATKA JODI CHART RECORDS
        </div>

        <section className="bg-[#170026] rounded-b-2xl overflow-hidden border border-fuchsia-500">
          {charts.map((item, index) => (
            <a
              key={index}
              href={`/jodi-chart/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-center py-4 text-lg md:text-xl font-black text-cyan-300 border-b border-fuchsia-900 hover:bg-fuchsia-700 hover:text-white transition-all duration-300"
            >
              ✦ {item}
            </a>
          ))}
        </section>
      </div>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl border border-fuchsia-500 bg-gradient-to-b from-[#1a002b] to-black shadow-[0_0_25px_rgba(217,70,239,0.35)]">
        <div className="text-center py-3 px-2 text-sm md:text-lg font-black leading-9 bg-[#210036]">
          <Link href="/" className="text-cyan-400">
            Home
          </Link>
          {" | "}
          <Link href="/satta-matka-guessing-forum" className="text-pink-400">
            Matka Guessing
          </Link>
          {" | "}
          <Link href="/satta-matka-chart" className="text-yellow-400">
            Matka Chart
          </Link>
          {" | "}
          <Link href="/online-matka-play" className="text-blue-400">
            Matka Play
          </Link>
          {" | "}
          <Link href="/tara-matka" className="text-green-400">
            Tara Matka
          </Link>
          {" | "}
          <Link href="/fix-matka" className="text-orange-400">
            Fix Matka
          </Link>
          {" | "}
        </div>

        <div className="border-t border-fuchsia-500" />

        <div className="text-center py-4 px-2 space-y-2">
          <h3 className="text-pink-400 text-lg md:text-xl font-black italic break-all">
            https://sattamatkadpboss.mobi
          </h3>

          <p className="font-black text-lg md:text-xl text-white">
            ALL RIGHTS RESERVED (2012-2026)
          </p>

          <p className="font-black text-lg md:text-xl text-cyan-300">
            SITE OWNER:-
          </p>

          <p className="font-black underline text-2xl md:text-3xl text-yellow-300 animate-pulse">
            PRO. BIG BOSS SIR
          </p>

          <p className="text-cyan-400 font-black text-lg md:text-xl mt-2 break-all">
            08829959562
          </p>

          <p className="font-bold text-base md:text-lg mt-4 text-slate-300 break-all">
            https://sattamatkadpboss.mobi
          </p>
        </div>
      </footer>
    </main>
  );
}
