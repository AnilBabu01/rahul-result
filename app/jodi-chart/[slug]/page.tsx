// app/jodi-chart/[slug]/page.tsx
import Link from "next/link";
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

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const formattedTitle = slug.replace(/-/g, " ");

  // Sample chart data
  const chartData = [
    ["91", "58", "24", "09", "60", "09", "71"],
    ["54", "89", "54", "71", "59", "03", "10"],
    ["59", "05", "12", "72", "16", "72", "44"],
    ["51", "02", "42", "42", "84", "08", "45"],
    ["20", "30", "00", "80", "08", "09", "79"],
    ["96", "98", "66", "89", "39", "94", "23"],
    ["84", "72", "49", "72", "22", "20", "54"],
    ["77", "46", "61", "72", "23", "50", "22"],
    ["70", "78", "21", "81", "60", "88", "00"],
    ["38", "23", "28", "82", "60", "93", "21"],
  ];

  const redNumbers = [
    "05",
    "72",
    "16",
    "44",
    "00",
    "66",
    "94",
    "49",
    "22",
    "77",
    "61",
    "50",
    "88",
    "38",
  ];

  return (
    <div
      id="top"
      className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-950 via-slate-900 to-black py-4 text-white"
    >
      <div className="px-2">
        {/* Header */}
        <div className="overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 rounded-lg">
          <div className="bg-gradient-to-r from-cyan-700 to-blue-900 py-4 text-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black italic uppercase text-cyan-300 tracking-wide">
              {formattedTitle}
            </h1>
          </div>

          <div className="border-t-2 border-pink-500 bg-slate-900 py-4 text-center">
            <h2 className="text-lg sm:text-xl md:text-3xl font-black italic text-pink-400">
              {formattedTitle}
            </h2>

            <p className="mt-2 px-3 text-[11px] sm:text-xs md:text-sm font-semibold italic text-slate-300 leading-relaxed">
              raja rani morning chart, raja rani morning day satta chart, day
              raja rani morning jodi chart record, raja rani morning jodi patti
              chart
            </p>
          </div>
        </div>

        {/* Result Section */}
        <div className="mt-3 border-2 border-cyan-500 bg-slate-900 py-5 text-center rounded-lg">
          <h2 className="text-lg md:text-2xl font-black uppercase text-cyan-300">
            {formattedTitle}
          </h2>

          <div className="mt-2 text-3xl md:text-5xl font-black text-pink-400 tracking-wider">
            267-58-350
          </div>

          <button className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-5 py-2 text-sm md:text-xl font-black italic text-white shadow-xl hover:scale-105 transition">
            Refresh Result
          </button>
        </div>

        {/* Go Bottom Button */}
        <div className="my-4 flex justify-center">
          <a
            href="#bottom"
            className="rounded-lg border border-cyan-400 bg-slate-900 px-4 py-2 text-sm md:text-lg font-bold italic text-cyan-300 shadow-lg transition hover:bg-slate-800 hover:scale-105"
          >
            Go to Bottom
          </a>
        </div>

        {/* Chart Table */}
        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <div className="border-2 border-cyan-500 bg-slate-900 p-2 shadow-2xl rounded-xl">
              <table className="border-collapse">
                <tbody>
                  {chartData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((num, colIndex) => (
                        <td
                          key={colIndex}
                          className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border border-slate-700 text-center text-lg sm:text-xl md:text-2xl font-black italic ${
                            redNumbers.includes(num)
                              ? "text-pink-400"
                              : "text-white"
                          }`}
                          style={{
                            fontFamily: "Georgia, serif",
                            textShadow: "0px 0px 10px rgba(34,211,238,0.7)",
                          }}
                        >
                          {num}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div id="bottom" className="my-4 flex justify-center">
          <a
            href="#top"
            className="rounded-lg border border-pink-400 bg-slate-900 px-4 py-2 text-sm md:text-lg font-bold italic text-pink-400 shadow-lg transition hover:bg-slate-800 hover:scale-105"
          >
            Go to Top
          </a>
        </div>
      </div>

      {/* Footer Result */}
      <div className="mx-2 border-2 border-cyan-500 bg-slate-900 text-center py-4 rounded-xl">
        <h1 className="text-cyan-300 text-lg md:text-2xl font-black uppercase tracking-wide">
          {formattedTitle}
        </h1>

        <div className="mt-2 text-2xl md:text-4xl font-black text-pink-400">
          267-58-350
        </div>

        <button className="mt-3 px-5 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full text-white font-black shadow-lg hover:scale-105 transition">
          Refresh Result
        </button>
      </div>

      {/* Whatsapp Banner */}
      <div className="flex justify-center mt-4 px-2">
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-5 py-3 rounded-xl text-sm md:text-lg font-black shadow-2xl text-center">
          Join our WhatsApp channel for fast Result
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-900 border border-cyan-500 mt-5 py-4 mx-2 rounded-xl">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs sm:text-sm md:text-lg font-bold">
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
          <Link href="/tara-matka-mumbai" className="text-green-400">
            Tara Matka
          </Link>
          {" | "}
          <Link href="/fix-matka-number" className="text-orange-400">
            Fix Matka
          </Link>
          {" | "}
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 border border-cyan-500 text-center py-5 mt-4 mx-2 rounded-xl shadow-lg">
        <h2 className="text-pink-400 text-lg md:text-2xl font-black italic">
          yourDomainName
        </h2>

        <div className="mt-3 text-sm md:text-lg font-black text-cyan-300">
          ALL RIGHTS RESERVED (2012-2026)
        </div>

        <div className="mt-2 text-sm md:text-lg font-black text-white">
          SITE OWNER:-
        </div>

        <div className="mt-2 text-sm md:text-xl font-black underline text-pink-400">
          FAST BOSS SIR
        </div>

        <div className="mt-2 text-cyan-300 text-sm md:text-xl font-black">
          1234567890
        </div>

        <div className="mt-3 text-xs md:text-base font-bold text-slate-400 break-all px-2">
          https://yourdomain.com
        </div>
      </div>
    </div>
  );
}
