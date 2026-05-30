// app/jodi-chart/[slug]/page.tsx

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
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
    <div id="top" className="min-h-screen scroll-smooth bg-black py-4">
      <div className=" px-2">
        {/* Header */}
        <div className="overflow-hidden border-2 border-red-600">
          <div className="bg-gradient-to-b from-purple-900 to-purple-800 py-3 text-center">
            <h1 className="text-2xl font-bold italic uppercase text-white md:text-2xl">
              {formattedTitle}
            </h1>
          </div>

          <div className="border-t-2 border-red-600 bg-purple-900 py-2 text-center">
            <h2 className="text-xl font-bold italic text-white md:text-2xl">
              {formattedTitle}
            </h2>

            <p className="mt-1 px-2 text-xs font-semibold italic text-white md:text-sm">
              raja rani morning chart, raja rani morning day satta chart, day
              raja rani morning jodi chart record, raja rani morning jodi patti
              chart
            </p>
          </div>
        </div>

        {/* Result Section */}
        <div className="border-2 border-red-600 bg-yellow-300 py-4 text-center">
          <h2 className="text-1xl font-extrabold uppercase text-blue-700 md:text-1xl">
            {formattedTitle}
          </h2>

          <div className="text-3xl font-bold text-black md:text-1xl">
            267-58-350
          </div>

          <button className="rounded-full border border-yellow-700  from-yellow-300 to-yellow-700 px-1 py-2 text-lg font-bold italic text-black shadow-lg md:px-3 md:text-2xl">
            Refresh Result
          </button>
        </div>

        {/* Go Bottom Button */}
        <div className="my-4 flex justify-center">
          <a
            href="#bottom"
            className="rounded border-2 border-yellow-500 bg-white px-1 py-1 text-lg font-bold italic text-red-600 shadow transition hover:scale-105 md:px-1 md:text-1xl"
          >
            Go to Bottom
          </a>
        </div>

        {/* Chart Table */}
        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <div className="border-4 border-purple-600 bg-white p-2 shadow-2xl">
              <table className="border-collapse">
                <tbody>
                  {chartData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((num, colIndex) => (
                        <td
                          key={colIndex}
                          className={`h-12 w-12 border border-purple-400 text-center text-2xl font-bold italic md:h-11 md:w-11 md:text-1xl ${
                            redNumbers.includes(num)
                              ? "text-red-600"
                              : "text-black"
                          }`}
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
            className="rounded border-2 border-yellow-500 bg-white px-1 py-1 text-lg font-bold italic text-red-600 shadow transition hover:scale-105 md:px-1 md:text-1xl"
          >
            Go to Top
          </a>
        </div>

        {/* Slug Display */}
      </div>

      <div className="border-4 border-yellow-900 bg-yellow-300 text-center py-1">
        <h1 className="text-blue-700 text-1xl font-extrabold uppercase tracking-wide">
          {formattedTitle}
        </h1>

        <div className="text-1xl font-extrabold text-black">267-58-350</div>

        <button className="px-2 py-1 bg-yellow-600 rounded-full text-black font-bold shadow-lg hover:bg-yellow-500">
          Refresh Result
        </button>
      </div>

      {/* Whatsapp Banner */}
      <div className="flex justify-center mt-3">
        <div className="bg-green-700 text-white px-1 py-1 rounded-lg text-1xl font-bold shadow-lg">
          Join our WhatsApp channel for fast Result
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#ecec9c] border mt-4 py-3">
        <div className="flex flex-wrap justify-center gap-3 text-1xl font-bold">
          <a href="#" className="text-green-700 hover:underline ">
            Home
          </a>

          <span>|</span>

          <a href="#" className="text-pink-700 hover:underline text-1xl">
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

      {/* Main Content */}
      <div className="bg-[#ecec9c] border border-gray-400 text-center py-1">
        <h2 className="text-red-700 text-1xl font-bold italic">
          SattaMatkaDpboss.Mobi
        </h2>

        <div className=" text-1xl font-extrabold">
          ALL RIGHTS RESERVED (2012-2026)
        </div>

        <div className="text-1xl font-extrabold">SITE OWNER:-</div>

        <div className="text-1xl font-extrabold underline">
          PRO. BIG BOSS SIR
        </div>

        <div className="text-blue-700 text-1xl font-extrabold">08829959562</div>

        <div className="text-1xl font-bold ">https://sattamatkadpboss.mobi</div>
      </div>
    </div>
  );
}
