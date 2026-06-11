import { Metadata } from "next";

// =========================
// CURRENT WEEK DATE RANGE
// =========================
function getCurrentWeekRange() {
  const today = new Date();

  // Monday Start
  const currentDay = today.getDay(); // 0 = Sunday
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return {
    startDate: formatDate(monday),
    endDate: formatDate(sunday),
  };
}

const { startDate, endDate } = getCurrentWeekRange();

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `SATTA MATKA FREE WEEKLY JODI AND PANNA GUESSING BY SATTA MATKA MARKET`,
    description: `Weekly Jodi Panna Chart From ${startDate} To ${endDate} – Get this week's Satta Matka jodi & panna results. Explore complete weekly open, close and panel numbers updated every week.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com//chart/weekly-jodi-panna`,
    },
  };
}

export default function Home() {
  const panelChart = [
    { digit: 0, values: "235 460 118 334 668" },
    { digit: 1, values: "236 579 119 588 669" },
    { digit: 2, values: "147 570 228 688 200" },
    { digit: 3, values: "247 490 166 599 779" },
    { digit: 4, values: "149 356 220 455 699" },
    { digit: 5, values: "258 690 113 447 889" },
    { digit: 6, values: "178 790 277 880 600" },
    { digit: 7, values: "278 338 115 449 557" },
    { digit: 8, values: "134 378 224 477 990" },
    { digit: 9, values: "360 450 117 225 667" },
  ];

  const weeklyJodi = [
    "45 46 92 93",
    "74 75 21 28",
    "04 06 57 58",
    "14 15 62 68",
    "84 85 86 82",
    "15 16 62 68",
  ];

  const weeklyOpenClose = [
    { day: "Mon.", value: "3-5-7-9" },
    { day: "Tues.", value: "1-4-5-7" },
    { day: "Wed.", value: "2-4-5-8" },
    { day: "Thur.", value: "3-4-6-8" },
    { day: "Fri.", value: "2-4-5-7" },
    { day: "Sat.", value: "0-1-4-7" },
    { day: "Sun.", value: "2-5-7-9" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Main Branding Header */}
        <header className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 tracking-wider uppercase">
            Live Weekly Updates
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
            Satta Matka Weekly Jodi & Panna
          </h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
          <h2 className="text-sm md:text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Satta Weekly Jodi Guessing Forum
          </h2>
          <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
            Weekly jodi or panna, weekly jodi panna line, weekly jodi panna mumbai, matka guru weekly single jodi and panna, weekly jodi and panna in kalyan.
          </p>
        </header>

        {/* Section 1: Panel / Patti Chart */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 text-white">
            <h3 className="text-base md:text-lg font-bold tracking-wide">
              Weekly Panel / Patti Chart
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Valid From <span className="text-amber-400 font-semibold">{startDate}</span> To <span className="text-amber-400 font-semibold">{endDate}</span> for Kalyan, Milan, Night Markets, Time & Main Bazar.
            </p>
          </div>
          
          <div className="divide-y divide-slate-100">
            {panelChart.map((item) => (
              <div 
                key={item.digit} 
                className="flex items-stretch hover:bg-slate-50 transition-colors duration-150"
              >
                <div className="w-16 md:w-24 bg-slate-50/50 flex items-center justify-center border-r border-slate-100 font-bold text-lg md:text-xl text-slate-900 shrink-0">
                  {item.digit}
                </div>
                <div className="p-4 flex-1 font-mono tracking-wider font-semibold text-sm md:text-base text-indigo-600 flex items-center flex-wrap gap-2">
                  {item.values.split(" ").map((val, idx) => (
                    <span key={idx} className="bg-indigo-50/60 px-2.5 py-1 rounded border border-indigo-100/50">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Weekly Jodi Chart */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 text-white">
            <h3 className="text-base md:text-lg font-bold tracking-wide">
              Weekly Jodi Chart
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Active Jodi metrics tracked from {startDate} to {endDate}.
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {weeklyJodi.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-center hover:shadow-sm transition-all"
                >
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Set {index + 1}
                  </span>
                  <span className="font-mono text-lg font-bold text-emerald-700 tracking-widest">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Weekly Open Close */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 text-white">
            <h3 className="text-base md:text-lg font-bold tracking-wide">
              Weekly Open To Close Line
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Daily structural layouts mapped through {startDate} - {endDate}.
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {weeklyOpenClose.map((item) => (
                <div 
                  key={item.day} 
                  className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {item.day}
                  </span>
                  <div className="h-px w-6 bg-slate-200 my-1" />
                  <span className="font-mono font-extrabold text-base text-slate-800 tracking-wider mt-1">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Premium/VIP Booking Advertisement */}
        <section className="bg-gradient-to-br from-rose-50 via-white to-orange-50 border-2 border-rose-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/40 rounded-full blur-3xl -z-10" />
          
          <div className="space-y-2">
            <div className="inline-block animate-pulse bg-rose-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
              ☩ बुकिंग चालू है ☩
            </div>
            <h2 className="text-xl md:text-2xl font-black text-rose-950 leading-snug max-w-xl mx-auto">
              कल्याण बाजार बम्पर धमाका अचूक जोड़ी पर कमाओ लाखों 100% फिक्स गेम
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a 
              href="tel:1234567890" 
              className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-xl transition shadow-sm text-sm"
            >
              <span className="text-slate-400 font-medium">कॉल करें:</span> 1234567890
            </a>
            <a 
              href="tel:1234567890" 
              className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-xl transition shadow-sm text-sm"
            >
              <span className="text-slate-400 font-medium">कॉल करें:</span> 1234567890
            </a>
          </div>

          <div className="pt-2 border-t border-slate-200/80 max-w-xs mx-auto">
            <p className="text-xs text-rose-600 font-bold tracking-wide uppercase">
              Note: Don't Call For Trial Help
            </p>
          </div>
        </section>

        {/* Footer Design */}
        <footer className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden text-center">
          {/* Fast Quick Links */}
          <div className="bg-slate-50/80 border-b border-slate-200/60 py-4 px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-bold text-slate-600">
            <span className="hover:text-indigo-600 cursor-pointer transition">Home</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-indigo-600 cursor-pointer transition">Matka Guessing</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-indigo-600 cursor-pointer transition">Matka Chart</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-indigo-600 cursor-pointer transition">Matka Play</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-indigo-600 cursor-pointer transition">Tara Matka</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-indigo-600 cursor-pointer transition">Fix Matka</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-indigo-600 cursor-pointer transition">Sitemap</span>
          </div>

          {/* Legal / Admin Details */}
          <div className="p-6 md:p-8 space-y-4 text-xs md:text-sm font-medium text-slate-500">
            <p className="text-indigo-600 font-bold tracking-wide text-sm md:text-base">
              https://sattamatkadpbos.com/
            </p>
            
            <div className="space-y-1">
              <p className="text-slate-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">
                Site Owner & Administration
              </p>
              <p className="text-base md:text-lg font-black text-slate-800 tracking-wide uppercase">
                Fast Boss Sir
              </p>
              <p className="text-slate-700 font-mono font-bold">{`+91 1234567890`}</p>
            </div>

            <p className="text-[10px] md:text-xs text-slate-400 font-bold tracking-wider pt-4 border-t border-slate-100">
              © 2012 - 2026 ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}