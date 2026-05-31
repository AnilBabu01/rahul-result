// app/jodi-chart/[slug]/page.tsx

import { chartDataPanel } from "@/data/games";
import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const formattedSlug = slug.replace(/-/g, " ");

  return {
    title: `${formattedSlug} Chart Result`,
    description: `Get ${formattedSlug} satta matka chart, panel chart, jodi chart and daily result updates.`,
    alternates: {
      canonical: `https://yourdomain.com/jodi-chart/${slug}`,
    },
  };
}

function MiniDigits() {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[9px] sm:text-[10px] md:text-[11px] font-extrabold leading-none text-cyan-300">
      <div className="flex justify-between p-[1px]">
        <span>1</span>
        <span>6</span>
      </div>

      <div className="flex justify-between p-[1px]">
        <span>2</span>
        <span>4</span>
      </div>

      <div className="flex justify-between p-[1px]">
        <span>4</span>
        <span>4</span>
      </div>
    </div>
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const formattedTitle = slug.replace(/-/g, " ");

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black py-2 text-white"
    >
      <div className="w-full px-1 sm:px-2">
        {/* Header */}
        <div className="overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/20">
          <div className="bg-gradient-to-r from-cyan-700 to-blue-900 py-3 text-center">
            <h1 className="text-sm sm:text-lg md:text-3xl font-black italic uppercase text-cyan-300 tracking-wide">
              {formattedTitle}
            </h1>
          </div>

          <div className="border-t-2 border-pink-500 bg-slate-900 py-3 text-center">
            <h2 className="text-xs sm:text-base md:text-2xl font-black italic text-pink-400">
              {formattedTitle}
            </h2>

            <p className="mt-2 px-2 text-[8px] sm:text-[10px] md:text-sm font-semibold italic text-slate-300 leading-tight">
              raja rani morning chart, raja rani morning day satta chart,
              day raja rani morning jodi chart record, raja rani morning
              jodi patti chart
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="border-2 border-cyan-500 bg-slate-900 py-3 text-center mt-2">
          <h2 className="text-xs sm:text-sm md:text-xl font-extrabold uppercase text-cyan-300">
            {formattedTitle}
          </h2>

          <div className="text-lg sm:text-3xl md:text-5xl font-black text-pink-400 mt-1">
            267-58-350
          </div>

          <button className="mt-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-2 text-[10px] sm:text-sm md:text-lg font-black italic text-white shadow-lg hover:scale-105 transition">
            Refresh Result
          </button>
        </div>

        {/* Go Bottom */}
        <div className="my-3 flex justify-center">
          <a
            href="#bottom"
            className="rounded border border-cyan-400 bg-slate-900 px-3 py-2 text-[10px] sm:text-xs md:text-sm font-bold italic text-cyan-300 shadow-lg hover:bg-slate-800 transition"
          >
            Go to Bottom
          </a>
        </div>

        {/* Chart Table */}
        <div className="w-full border-[2px] sm:border-[3px] border-cyan-500 bg-slate-900 shadow-2xl overflow-hidden">
          {chartDataPanel.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-8 border-b border-slate-700"
            >
              {/* Date Cell */}
              <div className="flex flex-col items-center justify-center border-r border-slate-700 bg-slate-800 py-[2px]">
                <div
                  className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none text-cyan-300"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {row.week.split(" To ")[0]}
                </div>

                <div
                  className="text-[6px] sm:text-[9px] md:text-[14px] font-black italic leading-none text-pink-400"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  To
                </div>

                <div
                  className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none text-cyan-300"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {row.week.split(" To ")[1]}
                </div>
              </div>

              {/* Number Cells */}
              {row.values.map((value, index) => (
                <div
                  key={index}
                  className="relative flex h-[34px] sm:h-[45px] md:h-[65px] items-center justify-center border-r border-slate-700 bg-slate-950"
                >
                  <MiniDigits />

                  <span
                    className={`relative z-10 text-[10px] sm:text-[12px] md:text-[22px] font-black italic leading-none ${
                      row.highlight.includes(index)
                        ? "text-pink-400"
                        : "text-white"
                    }`}
                    style={{
                      fontFamily: "Georgia, serif",
                      textShadow: "0px 0px 10px rgba(34,211,238,0.8)",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div id="bottom" className="my-3 flex justify-center">
          <a
            href="#top"
            className="rounded border border-pink-400 bg-slate-900 px-3 py-2 text-[10px] sm:text-xs md:text-sm font-bold italic text-pink-400 shadow-lg hover:bg-slate-800 transition"
          >
            Go to Top
          </a>
        </div>
      </div>

      {/* Footer Result */}
      <div className="border-2 border-cyan-500 bg-slate-900 text-center py-3 mt-3 mx-1">
        <h1 className="text-cyan-300 text-xs sm:text-sm md:text-xl font-black uppercase tracking-wide">
          {formattedTitle}
        </h1>

        <div className="text-lg sm:text-2xl md:text-4xl font-black text-pink-400 mt-1">
          267-58-350
        </div>

        <button className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white text-[10px] sm:text-xs md:text-base font-black shadow-lg hover:scale-105 transition">
          Refresh Result
        </button>
      </div>

      {/* WhatsApp Banner */}
      <div className="flex justify-center mt-4 px-1">
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-4 py-2 rounded-xl text-[9px] sm:text-xs md:text-base font-black shadow-2xl text-center">
          Join our WhatsApp channel for fast Result
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-900 border border-cyan-500 mt-4 py-3 mx-1 rounded-lg">
        <div className="flex flex-wrap justify-center gap-1 text-[8px] sm:text-[10px] md:text-sm font-bold">
          <a href="#" className="text-cyan-300 hover:underline">
            Home
          </a>

          <span className="text-slate-500">|</span>

          <a href="#" className="text-pink-400 hover:underline">
            Matka Guessing
          </a>

          <span className="text-slate-500">|</span>

          <a href="#" className="text-yellow-300 hover:underline">
            Matka Chart
          </a>

          <span className="text-slate-500">|</span>

          <a href="#" className="text-cyan-400 hover:underline">
            Matka Play
          </a>

          <span className="text-slate-500">|</span>

          <a href="#" className="text-green-400 hover:underline">
            Tara Matka
          </a>

          <span className="text-slate-500">|</span>

          <a href="#" className="text-orange-300 hover:underline">
            Fix Matka
          </a>

          <span className="text-slate-500">|</span>

          <a href="#" className="text-red-400 hover:underline">
            Sitemap
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 border border-cyan-500 text-center py-4 mt-4 mx-1 rounded-xl shadow-lg">
        <h2 className="text-pink-400 text-xs sm:text-sm md:text-2xl font-black italic">
          yourDomainName
        </h2>

        <div className="text-[8px] sm:text-[10px] md:text-base font-black text-cyan-300 mt-2">
          ALL RIGHTS RESERVED (2012-2026)
        </div>

        <div className="text-[8px] sm:text-[10px] md:text-base font-black text-white mt-1">
          SITE OWNER:-
        </div>

        <div className="text-[8px] sm:text-[10px] md:text-lg font-black underline text-pink-400 mt-1">
          FAST BOSS SIR
        </div>

        <div className="text-cyan-300 text-[8px] sm:text-[10px] md:text-lg font-black mt-1">
          1234567890
        </div>

        <div className="text-[7px] sm:text-[9px] md:text-sm font-bold break-all px-1 text-slate-400 mt-2">
          https://yourdomain.com
        </div>
      </div>
    </div>
  );
}