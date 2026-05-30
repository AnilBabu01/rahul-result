// app/jodi-chart/[slug]/page.tsx

import { chartDataPanel } from "@/data/games";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function MiniDigits() {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between  text-[9px] sm:text-[10px] md:text-[11px] font-extrabold leading-none">
      <div className="flex justify-between p-[1px]">
        <span>1</span>
        <span>6</span>
      </div>

      <div className="flex justify-between p-[1px] ">
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

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const formattedTitle = slug.replace(/-/g, " ");

  return (
    <div id="top" className="min-h-screen bg-black py-2">
      <div className="w-full px-1 sm:px-2">
        {/* Header */}
        <div className="overflow-hidden border-2 border-red-600">
          <div className="bg-purple-900 py-2 text-center">
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold italic uppercase text-white">
              {formattedTitle}
            </h1>
          </div>

          <div className="border-t-2 border-red-600 bg-purple-900 py-2 text-center">
            <h2 className="text-xs sm:text-base md:text-xl font-bold italic text-white">
              {formattedTitle}
            </h2>

            <p className="mt-1 px-1 text-[8px] sm:text-[10px] md:text-xs font-semibold italic text-white leading-tight">
              raja rani morning chart, raja rani morning day satta chart,
              day raja rani morning jodi chart record, raja rani morning
              jodi patti chart
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="border-2 border-red-600 bg-yellow-300 py-2 text-center">
          <h2 className="text-xs sm:text-sm md:text-lg font-extrabold uppercase text-blue-700">
            {formattedTitle}
          </h2>

          <div className="text-lg sm:text-2xl md:text-3xl font-bold text-black">
            267-58-350
          </div>

          <button className="mt-2 rounded-full border border-yellow-700 px-2 py-1 text-[10px] sm:text-sm md:text-lg font-bold italic text-black shadow-lg">
            Refresh Result
          </button>
        </div>

        {/* Go Bottom */}
        <div className="my-3 flex justify-center">
          <a
            href="#bottom"
            className="rounded border-2 border-yellow-500 bg-white px-2 py-1 text-[10px] sm:text-xs md:text-sm font-bold italic text-red-600 shadow"
          >
            Go to Bottom
          </a>
        </div>

        {/* Chart Table Responsive Without Scroll */}
        <div className="w-full border-[2px] sm:border-[3px] border-purple-700 bg-white shadow-lg">
          {chartDataPanel.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-8 border-b border-black"
            >
              {/* Date Cell */}
              <div className="flex flex-col items-center justify-center border-r border-black bg-[#fff8dd] py-[2px]">
                <div
                  className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {row.week.split(" To ")[0]}
                </div>

                <div
                  className="text-[6px] sm:text-[9px] md:text-[14px] font-black italic leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  To
                </div>

                <div
                  className="text-[5px] sm:text-[7px] md:text-[11px] font-black italic leading-none"
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
                  className="relative flex h-[34px] sm:h-[45px] md:h-[65px] items-center justify-center border-r border-black bg-white"
                >
                  <MiniDigits />

                  <span
                    className={`relative z-10 text-[10px] sm:text-[12px] md:text-[20px] font-black italic leading-none ${
                      row.highlight.includes(index)
                        ? "text-red-600"
                        : "text-black"
                    }`}
                    style={{
                      fontFamily: "Georgia, serif",
                      textShadow: "1px 1px 0px #caa000",
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
            className="rounded border-2 border-yellow-500 bg-white px-2 py-1 text-[10px] sm:text-xs md:text-sm font-bold italic text-red-600 shadow"
          >
            Go to Top
          </a>
        </div>
      </div>

      {/* Footer Result */}
      <div className="border-4 border-yellow-900 bg-yellow-300 text-center py-1 mt-3">
        <h1 className="text-blue-700 text-xs sm:text-sm md:text-lg font-extrabold uppercase tracking-wide">
          {formattedTitle}
        </h1>

        <div className="text-sm sm:text-lg md:text-2xl font-extrabold text-black">
          267-58-350
        </div>

        <button className="px-2 py-1 bg-yellow-600 rounded-full text-black text-[10px] sm:text-xs md:text-base font-bold shadow-lg hover:bg-yellow-500">
          Refresh Result
        </button>
      </div>

      {/* WhatsApp Banner */}
      <div className="flex justify-center mt-3 px-1">
        <div className="bg-green-700 text-white px-2 py-1 rounded-lg text-[9px] sm:text-xs md:text-base font-bold shadow-lg text-center">
          Join our WhatsApp channel for fast Result
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#ecec9c] border mt-4 py-2">
        <div className="flex flex-wrap justify-center gap-1 text-[8px] sm:text-[10px] md:text-sm font-bold">
          <a href="#" className="text-green-700 hover:underline">
            Home
          </a>

          <span>|</span>

          <a href="#" className="text-pink-700 hover:underline">
            Matka Guessing
          </a>

          <span>|</span>

          <a href="#" className="text-yellow-700 hover:underline">
            Matka Chart
          </a>

          <span>|</span>

          <a href="#" className="text-blue-700 hover:underline">
            Matka Play
          </a>

          <span>|</span>

          <a href="#" className="text-green-800 hover:underline">
            Tara Matka
          </a>

          <span>|</span>

          <a href="#" className="text-yellow-800 hover:underline">
            Fix Matka
          </a>

          <span>|</span>

          <a href="#" className="text-red-700 hover:underline">
            Sitemap
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#ecec9c] border border-gray-400 text-center py-2">
        <h2 className="text-red-700 text-xs sm:text-sm md:text-lg font-bold italic">
          SattaMatkaDpboss.Mobi
        </h2>

        <div className="text-[8px] sm:text-[10px] md:text-base font-extrabold">
          ALL RIGHTS RESERVED (2012-2026)
        </div>

        <div className="text-[8px] sm:text-[10px] md:text-base font-extrabold">
          SITE OWNER:-
        </div>

        <div className="text-[8px] sm:text-[10px] md:text-base font-extrabold underline">
          PRO. BIG BOSS SIR
        </div>

        <div className="text-blue-700 text-[8px] sm:text-[10px] md:text-base font-extrabold">
          08829959562
        </div>

        <div className="text-[7px] sm:text-[9px] md:text-sm font-bold break-all px-1">
          https://sattamatkadpboss.mobi
        </div>
      </div>
    </div>
  );
}