import Link from "next/link";

import { Metadata } from "next";
import {
  Info,
  BarChart3,
  Pin,
  Flame,
  Sparkles,
  Crown,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `SATTA MATKA 220 PATTI PANNA CHART RECORD - SATTA MATKA`,
    description: `Satta Matka All Panna Record — complete 220 Patti chart grouped by digit family 0 to 9. Find every hot panna, single pana and weekly patti list free on one page.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/all-panna-record`,
    },
  };
}

const pannaData = [
  {
    number: 1,
    color: "from-pink-500 to-rose-500",
    values: [
      "137__128__146__236__245__290",
      "380__470__489__560__678__579",
      "119__155__227__335__344__399",
      "588__669__777__100",
    ],
  },
  {
    number: 2,
    color: "from-violet-500 to-indigo-500",
    values: [
      "129__138__147__156__237__246",
      "345__390__480__570__589__679",
      "110__228__255__336__499__660",
      "688__778__200__444",
    ],
  },
  {
    number: 3,
    color: "from-cyan-500 to-sky-500",
    values: [
      "120__139__148__157__238__247",
      "256__346__490__580__670__689",
      "166__229__337__355__445__599",
      "779__788__300__111",
    ],
  },
  {
    number: 4,
    color: "from-blue-500 to-cyan-500",
    values: [
      "130__149__158__167__239__248",
      "257__347__356__590__680__789",
      "112__220__266__338__446__455",
      "699___770___400___888",
    ],
  },
  {
    number: 5,
    color: "from-emerald-500 to-green-500",
    values: [
      "140__159__168__230__249__258",
      "267__348__357__456__690__780",
      "113__122__177__339__366__447",
      "799___889___500___555",
    ],
  },
  {
    number: 6,
    color: "from-teal-500 to-emerald-500",
    values: [
      "123__150__169__178__240__259",
      "268__349__358__367__457__790",
      "114__277__330__448__466__556",
      "880___899___600___222",
    ],
  },
  {
    number: 7,
    color: "from-indigo-500 to-violet-500",
    values: [
      "124__160__179__250__269__278",
      "340__359__368__458__467__890",
      "115__133__188__223__377__449",
      "557___566___700___999",
    ],
  },
  {
    number: 8,
    color: "from-fuchsia-500 to-pink-500",
    values: [
      "125__134__170__189__260__279",
      "350__369__378__459__468__567",
      "116__224__233__288__440__477",
      "558___990___800___666",
    ],
  },
  {
    number: 9,
    color: "from-rose-500 to-red-500",
    values: [
      "126__135__180__234__270__289",
      "360__379__450__469__478__568",
      "117__144__199__225__388__559",
      "577___667___900___333",
    ],
  },
  {
    number: 0,
    color: "from-amber-400 to-orange-500",
    values: [
      "127__136__145__190__235__280",
      "370__389__460__479__569__578",
      "118__226__244__299__334__488",
      "668___677___000___550",
    ],
  },
];

const hotPannaData = [
  {
    title: "100-[ 1 ]-777",
    rows: [
      "128-137-146-236-245-290-380-470-489-560",
      "678-579-119-155-227-335-344-399-588-669",
    ],
    highlights: ["146", "119", "669"],
  },
  {
    title: "200-[ 2 ]-444",
    rows: [
      "129-138-147-156-237-246-345-390-480-570",
      "679-589-110-228-255-336-499-660-688-778",
    ],
    highlights: ["237", "228", "778"],
  },
  {
    title: "300-[ 3 ]-111",
    rows: [
      "120-139-148-157-238-247-256-346-490-580",
      "670-689-166-229-337-355-445-599-779-788",
    ],
    highlights: ["238", "337", "788"],
  },
  {
    title: "400-[ 4 ]-888",
    rows: [
      "130-149-158-167-239-248-257-347-356-590",
      "680-789-112-220-266-338-446-455-699-770",
    ],
    highlights: ["149", "446", "699"],
  },
  {
    title: "500-[[ 5 ]]-555",
    rows: [
      "140-159-168-230-249-258-267-348-357-456",
      "690-780-113-122-177-339-366-447-799-889",
    ],
    highlights: ["168", "447", "889"],
  },
  {
    title: "600-[[ 6 ]]-222",
    rows: [
      "123-150-169-178-240-259-268-349-358-457",
      "367-790-114-277-330-448-466-556-880-899",
    ],
    highlights: ["169", "448", "899"],
  },
  {
    title: "700-[[ 7 ]]-999",
    rows: [
      "124-160-179-250-269-278-340-359-368-458",
      "467-890-115-133-188-223-377-449-557-566",
    ],
    highlights: ["179", "377", "566"],
  },
  {
    title: "800[[ 8 ]]-666",
    rows: [
      "125-134-170-189-260-279-350-369-378-459",
      "567-468-116-224-233-288-440-477-558-990",
    ],
    highlights: ["170", "477", "990"],
  },
  {
    title: "900[[ 9 ]]-333",
    rows: [
      "126-135-180-234-270-289-360-379-450-469",
      "117-478-568-144-199-225-388-559-577-667",
    ],
    highlights: ["180", "559", "667"],
  },
  {
    title: "550-[[ 0 ]]-000",
    rows: [
      "127-136-190-235-280-279-370-479-460-569",
      "118-578-668-244-299-226-488-550-677-389",
    ],
    highlights: ["190", "668", "550"],
  },
];

function HighlightText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  const parts = text.split("-");

  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          <span
            className={
              highlights.includes(part)
                ? "text-yellow-300 font-black"
                : "text-slate-200"
            }
          >
            {part}
          </span>

          {index !== parts.length - 1 && (
            <span className="text-emerald-400">-</span>
          )}
        </span>
      ))}
    </>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-3 pt-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1220] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />

          <div className="relative px-4 py-10 md:px-10">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2">
                <Sparkles className="text-emerald-300" size={18} />
                <span className="font-bold tracking-wide text-emerald-300">
                  PREMIUM MATKA RECORD
                </span>
              </div>
            </div>

            <h1 className="mt-6 text-center text-4xl md:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                ALL PANNA
              </span>
              <br />
              <span className="text-white">220 PATTI CHART</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-8 text-slate-300">
              Complete Satta Matka 220 Patti Record with hot panna list,
              single pana, double pana and triple pana chart.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4">
                <p className="text-sm font-bold text-emerald-300">
                  TOTAL PATTI
                </p>

                <h3 className="mt-1 text-3xl font-black text-white">220</h3>
              </div>

              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4">
                <p className="text-sm font-bold text-cyan-300">
                  HOT NUMBERS
                </p>

                <h3 className="mt-1 text-3xl font-black text-white">
                  DAILY
                </h3>
              </div>

              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-6 py-4">
                <p className="text-sm font-bold text-blue-300">
                  PATTI GROUP
                </p>

                <h3 className="mt-1 text-3xl font-black text-white">0-9</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PANNA RECORD */}
      <section className="mx-auto mt-10 max-w-7xl px-3">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Crown className="text-yellow-400" size={30} />

          <h2 className="text-center text-3xl md:text-5xl font-black">
            PANNA RECORD CHART
          </h2>
        </div>

        <div className="space-y-10">
          {pannaData.map((item) => (
            <div
              key={item.number}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] shadow-2xl"
            >
              <div className="grid lg:grid-cols-[220px_1fr]">
                {/* LEFT */}
                <div
                  className={`bg-gradient-to-br ${item.color} flex flex-col items-center justify-center py-10`}
                >
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white/20 bg-black/20 text-6xl font-black text-white shadow-2xl">
                    {item.number}
                  </div>

                  <p className="mt-5 text-xl font-black tracking-[5px] text-white">
                    PATTI
                  </p>
                </div>

                {/* RIGHT */}
                <div className="p-4 md:p-8">
                  <div className="grid gap-4">
                    {item.values.map((row, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-[#111827] px-4 py-5 text-center text-base md:text-xl font-black tracking-wide text-slate-200 shadow-lg"
                      >
                        {row}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOT PANNA */}
      <section className="mx-auto mt-16 max-w-7xl px-3">
        <div className="rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 p-5">
          <h2 className="text-center text-3xl md:text-5xl font-black text-white">
            🔥 HOT PANNA RECORD
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {hotPannaData.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-[#0b1220] p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-black text-yellow-300">
                  {item.title}
                </h3>

                <div className="rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-bold text-yellow-300">
                  HOT
                </div>
              </div>

              <div className="space-y-4">
                {item.rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="rounded-2xl border border-white/10 bg-[#111827] p-4 text-base md:text-lg font-bold leading-9"
                  >
                    <HighlightText
                      text={row}
                      highlights={item.highlights}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="mx-auto mt-16 max-w-7xl px-3 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <Info className="text-cyan-300" size={28} />
              </div>

              <h2 className="text-2xl font-black text-white">
                What is 220 Patti?
              </h2>
            </div>

            <p className="leading-9 text-slate-300">
              In Satta Matka there are total 220 valid Patti numbers. These
              are divided according to their final ank and used for guessing
              and market analysis.
            </p>

            <div className="mt-6 grid gap-4">
              {[
                "128 → 1+2+8 = 11 → Final Ank 1",
                "236 → 2+3+6 = 11 → Final Ank 1",
                "137 → 1+3+7 = 11 → Final Ank 1",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 font-bold text-cyan-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-pink-500/10 p-4">
                <BarChart3 className="text-pink-300" size={28} />
              </div>

              <h2 className="text-2xl font-black text-white">
                Patti Types
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "SINGLE PANA",
                  desc: "123, 456, 789",
                },
                {
                  title: "DOUBLE PANA",
                  desc: "112, 224, 338",
                },
                {
                  title: "TRIPLE PANA",
                  desc: "111, 222, 999",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#111827] p-5"
                >
                  <h3 className="text-lg font-black text-pink-300">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-500/10 p-4">
                <Pin className="text-emerald-300" size={28} />
              </div>

              <h2 className="text-2xl font-black text-white">
                How To Use?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Find your final ank",
                "Open that panna group",
                "Check recent repeating numbers",
                "Compare with weekly chart",
                "Select high-frequency panna",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111827] p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-lg font-black text-white">
                    {index + 1}
                  </div>

                  <p className="font-semibold text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CARD */}
          <div className="rounded-[30px] border border-white/10 bg-[#0b1220] p-8 shadow-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-yellow-500/10 p-4">
                <Flame className="text-yellow-300" size={28} />
              </div>

              <h2 className="text-2xl font-black text-white">
                Hot Panna Numbers
              </h2>
            </div>

            <p className="leading-9 text-slate-300">
              Hot Panna are numbers that repeat frequently in specific markets.
              These numbers are tracked by players for guessing trends and
              pattern analysis.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["146", "228", "337", "447", "566", "668"].map((num) => (
                <div
                  key={num}
                  className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 font-black text-yellow-300"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060b16] px-3 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-bold">
            <Link
              href="/"
              className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-300 transition hover:bg-cyan-500/20"
            >
              Home
            </Link>

            <Link
              href="/satta-matka-guessing-forum"
              className="rounded-full bg-pink-500/10 px-5 py-2 text-pink-300 transition hover:bg-pink-500/20"
            >
              Guessing Forum
            </Link>

            <Link
              href="/satta-matka-chart"
              className="rounded-full bg-yellow-500/10 px-5 py-2 text-yellow-300 transition hover:bg-yellow-500/20"
            >
              Matka Chart
            </Link>

            <Link
              href="/online-matka-play"
              className="rounded-full bg-blue-500/10 px-5 py-2 text-blue-300 transition hover:bg-blue-500/20"
            >
              Matka Play
            </Link>

            <Link
              href="/tara-matka-mumbai"
              className="rounded-full bg-green-500/10 px-5 py-2 text-green-300 transition hover:bg-green-500/20"
            >
              Tara Matka
            </Link>

            <Link
              href="/fix-matka-number"
              className="rounded-full bg-orange-500/10 px-5 py-2 text-orange-300 transition hover:bg-orange-500/20"
            >
              Fix Matka
            </Link>
          </div>

          <div className="mt-10 rounded-[30px] border border-white/10 bg-[#0b1220] p-8 text-center">
            <h3 className="text-2xl font-black text-emerald-300">
              sattamatkadpbos.com
            </h3>

            <p className="mt-4 text-lg font-black text-white">
              ALL RIGHTS RESERVED (2012-2026)
            </p>

            <div className="mt-6 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3">
              <span className="font-black tracking-widest text-yellow-300">
                FAST BOSS SIR
              </span>
            </div>

            <p className="mt-6 text-xl font-black text-cyan-300">
              1234567890
            </p>

            <p className="mt-4 text-slate-500">
              https://sattamatkadpbos.com
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}