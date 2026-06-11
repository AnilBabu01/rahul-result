import Link from "next/link";
import { Metadata } from "next";
import { Info, BarChart3, Pin, Flame, HelpCircle } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `SATTA MATKA 220 PATTI PANNA CHART RECORD - SATTA MATKA`,
    description: `Satta Matka All Panna Record — complete 220 Patti chart grouped by digit family 0 to 9. Find every hot panna, single pana and weekly patti list free on one page.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com//chart/all-panna-record`,
    },
  };
}

const pannaData = [
  { number: 1, color: "bg-indigo-600 border-indigo-200 text-indigo-700", values: ["137__128__146__236__245__290", "380__470__489__560__678__579", "119__155__227__335__344__399", "588__669__777__100"] },
  { number: 2, color: "bg-violet-600 border-violet-200 text-violet-700", values: ["129__138__147__156__237__246", "345__390__480__570__589__679", "110__228__255__336__499__660", "688__778__200__444"] },
  { number: 3, color: "bg-purple-600 border-purple-200 text-purple-700", values: ["120__139__148__157__238__247", "256__346__490__580__670__689", "166__229__337__355__445__599", "779__788__300__111"] },
  { number: 4, color: "bg-pink-600 border-pink-200 text-pink-700", values: ["130__149__158__167__239__248", "257__347__356__590__680__789", "112__220__266__338__446__455", "699___770___400___888"] },
  { number: 5, color: "bg-rose-600 border-rose-200 text-rose-700", values: ["140__159__168__230__249__258", "267__348__357__456__690__780", "113__122__177__339__366__447", "799___889___500___555"] },
  { number: 6, color: "bg-amber-600 border-amber-200 text-amber-700", values: ["123__150__169__178__240__259", "268__349__358__367__457__790", "114__277__330__448__466__556", "880___899___600___222"] },
  { number: 7, color: "bg-emerald-600 border-emerald-200 text-emerald-700", values: ["124__160__179__250__269__278", "340__359__368__458__467__890", "115__133__188__223__377__449", "557___566___700___999"] },
  { number: 8, color: "bg-teal-600 border-teal-200 text-teal-700", values: ["125__134__170__189__260__279", "350__369__378__459__468__567", "116__224__233__288__440__477", "558___990___800___666"] },
  { number: 9, color: "bg-cyan-600 border-cyan-200 text-cyan-700", values: ["126__135__180__234__270__289", "360__379__450__469__478__568", "117__144__199__225__388__559", "577___667___900___333"] },
  { number: 0, color: "bg-blue-600 border-blue-200 text-blue-700", values: ["127__136__145__190__235__280", "370__389__460__479__569__578", "118__226__244__299__334__488", "668___677___000___550"] },
];

const hotPannaData = [
  { title: "100-[ 1 ]-777", rows: ["128-137-146-236-245-290-380-470-489-560", "678-579-119-155-227-335-344-399-588-669"], highlights: ["146", "119", "669"] },
  { title: "200-[ 2 ]-444", rows: ["129-138-147-156-237-246-345-390-480-570", "679-589-110-228-255-336-499-660-688-778"], highlights: ["237", "228", "778"] },
  { title: "300-[ 3 ]-111", rows: ["120-139-148-157-238-247-256-346-490-580", "670-689-166-229-337-355-445-599-779-788"], highlights: ["238", "337", "788"] },
  { title: "400-[ 4 ]-888", rows: ["130-149-158-167-239-248-257-347-356-590", "680-789-112-220-266-338-446-455-699-770"], highlights: ["149", "446", "699"] },
  { title: "500-[[ 5 ]]-555", rows: ["140-159-168-230-249-258-267-348-357-456", "690-780-113-122-177-339-366-447-799-889"], highlights: ["168", "447", "889"] },
  { title: "600-[[ 6 ]]-222", rows: ["123-150-169-178-240-259-268-349-358-457", "367-790-114-277-330-448-466-556-880-899"], highlights: ["169", "448", "899"] },
  { title: "700-[[ 7 ]]-999", rows: ["124-160-179-250-269-278-340-359-368-458", "467-890-115-133-188-223-377-449-557-566"], highlights: ["179", "377", "566"] },
  { title: "800[[ 8 ]]-666", rows: ["125-134-170-189-260-279-350-369-378-459", "567-468-116-224-233-288-440-477-558-990"], highlights: ["170", "477", "990"] },
  { title: "900[[ 9 ]]-333", rows: ["126-135-180-234-270-289-360-379-450-469", "117-478-568-144-199-225-388-559-577-667"], highlights: ["180", "559", "667"] },
  { title: "550-[[ 0 ]]-000", rows: ["127-136-190-235-280-279-370-479-460-569", "118-578-668-244-299-226-488-550-677-389"], highlights: ["190", "668", "550"] },
];

function HighlightText({ text, highlights }: { text: string; highlights: string[] }) {
  const parts = text.split("-");
  return (
    <span className="inline-flex flex-wrap items-center justify-center gap-1 text-sm md:text-base font-semibold">
      {parts.map((part, index) => (
        <span key={index} className="inline-flex items-center">
          <span className={highlights.includes(part) ? "bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-300 font-extrabold" : "text-slate-700"}>
            {part}
          </span>
          {index !== parts.length - 1 && <span className="text-slate-300 mx-1">•</span>}
        </span>
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* HEADER SECTION */}
      <header className="bg-white border-b border-slate-200 py-8 px-4 text-center shadow-sm">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
            Live Records &amp; Updates
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            All Panna Record Chart
          </h1>
          <div className="mt-4 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-3">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
              Satta Matka Weekly Patti Chart
            </h2>
            <p className="mt-1 text-xs text-slate-500 italic">
              matka 220 patti, matka 220 patti chart, matka satta bazar 220 patti, 220 patti guessing, matka patti formula
            </p>
          </div>
        </div>
      </header>

      {/* PANNA DATA GRAPHICS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
            All Panna Record Directory
          </h2>
          <span className="text-sm text-slate-500 font-medium">Digits 0 - 9</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {pannaData.map((item) => (
            <div key={item.number} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col sm:flex-row">
              {/* Digit Left Badge */}
              <div className="sm:w-24 bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200 flex flex-col items-center justify-center p-4 min-h-[80px]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Digit</span>
                <span className="text-4xl font-black text-slate-800">{item.number}</span>
              </div>
              {/* Values Right list */}
              <div className="p-5 flex-1 flex flex-col justify-center space-y-2 bg-white font-mono text-sm tracking-wide text-slate-600">
                {item.values.map((row, index) => (
                  <div key={index} className="p-2 bg-slate-50/60 rounded-lg border border-slate-100 text-center sm:text-left">
                    {row.replaceAll("___", "  ").replaceAll("__", "  ")}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOT PANNA TABLES */}
      <section className="bg-white border-t border-b border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3 border border-amber-200">
              <Flame size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">All Hot Panna (Patti)</h2>
            <p className="text-sm text-slate-500 mt-1">
              High frequency selected variations highlighted for real-time tracking analysis.
            </p>
          </div>

          <div className="space-y-4">
            {hotPannaData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base font-mono">{item.title}</h3>
                  <span className="text-xs bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded border border-amber-200">Hot Pool</span>
                </div>
                <div className="p-4 bg-white space-y-3 text-center">
                  {item.rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="py-1">
                      <HighlightText text={row} highlights={item.highlights} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORICAL GUIDE / INFO SECTIONS */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="bg-gradient-to-tr from-indigo-50 via-white to-slate-50 border border-indigo-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
            <HelpCircle className="text-indigo-600" size={22} />
            What is All Panna Record in Satta Matka?
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            The All Panna Record is a structural mathematical reference ledger of all 220 valid three-digit combinations used strictly inside structural traditional analytics. These configurations are broadly recognized alternatively as Panna, Patti, or Panel.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Box 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-600 border border-indigo-100">
                <Info size={20} />
              </div>
              <h4 className="font-bold text-slate-900">What is 220 Patti?</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Across the calculation matrices, there are exactly 220 accepted outcome sets. The configuration works via sum reductions:
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between"><span>128 → 1+2+8 = 11</span> <span className="font-bold text-indigo-600">Final Ank → 1</span></div>
              <div className="flex justify-between"><span>236 → 2+3+6 = 11</span> <span className="font-bold text-indigo-600">Final Ank → 1</span></div>
              <div className="flex justify-between"><span>137 → 1+3+7 = 11</span> <span className="font-bold text-indigo-600">Final Ank → 1</span></div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-600 border border-emerald-100">
                <BarChart3 size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Panna Classifications</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-start border-b border-slate-100 pb-2">
                <div>
                  <p className="font-bold text-slate-800 text-xs">SINGLE PANA</p>
                  <p className="text-xs text-slate-500">All three digits unique</p>
                </div>
                <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">123, 456</span>
              </div>
              <div className="flex justify-between items-start border-b border-slate-100 pb-2">
                <div>
                  <p className="font-bold text-slate-800 text-xs">DOUBLE PANA</p>
                  <p className="text-xs text-slate-500">Two matching digits</p>
                </div>
                <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">112, 224</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-slate-800 text-xs">TRIPLE PANA</p>
                  <p className="text-xs text-slate-500">All three digits identical</p>
                </div>
                <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">111, 222</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology List */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-50 p-2.5 rounded-xl text-purple-600 border border-purple-100">
              <Pin size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Usage Analytics Strategy</h4>
          </div>
          <ol className="space-y-4">
            {[
              "Locate your evaluated predicted final ank integer (0 through 9).",
              "Isolate that numeric family row block structure on the dashboard directory chart.",
              "Observe metrics regarding historical output densities relative to contemporary records.",
              "Cross-index information values against the global Hot Weekly Pool index configurations."
            ].map((step, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-xs">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-600 pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Quick links directory */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold border-b border-slate-800 pb-8 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-700">|</span>
            <Link href="/satta-matka-guessing-forum" className="hover:text-white transition-colors">Matka Guessing</Link>
            <span className="text-slate-700">|</span>
            <Link href="/satta-matka-chart" className="hover:text-white transition-colors">Matka Chart</Link>
            <span className="text-slate-700">|</span>
            <Link href="/online-matka-play" className="hover:text-white transition-colors">Matka Play</Link>
            <span className="text-slate-700">|</span>
            <Link href="/tara-matka-mumbai" className="hover:text-white transition-colors">Tara Matka</Link>
            <span className="text-slate-700">|</span>
            <Link href="/fix-matka-number" className="hover:text-white transition-colors">Fix Matka</Link>
          </div>

          <div className="max-w-md mx-auto text-center space-y-4 text-xs tracking-wide">
            <p className="text-indigo-400 font-mono font-bold text-sm">https://sattamatkadpbos.com/</p>
            <p className="font-semibold text-slate-500 uppercase tracking-widest">All Rights Reserved © 2012 - 2026</p>
            
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60 mt-4 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600 block">Site Administration</span>
              <p className="font-bold text-slate-300 text-sm">FAST BOSS SIR</p>
              <p className="text-amber-500 font-mono font-bold pt-1 text-xs">1234567890</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}