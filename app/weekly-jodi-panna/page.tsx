import { Metadata } from "next";

// =========================
// CURRENT WEEK DATE RANGE
// =========================
function getCurrentWeekRange() {
  const today = new Date();

  // Monday Start
  const currentDay = today.getDay();
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
      canonical: `https://sattamatkadpbos.com/chart/weekly-jodi-panna`,
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
    <main className="min-h-screen bg-[#060816] text-white overflow-hidden">
      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-purple-700/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-2 py-4">
        {/* MAIN WRAPPER */}
        <div className="rounded-[30px] border border-white/10 bg-[#0c1023]/90 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.7)]">
          
          {/* HERO HEADER */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 via-violet-700 to-cyan-600" />

            <div className="relative px-4 py-10 text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 border border-white/20 text-sm md:text-base font-bold tracking-widest uppercase mb-5">
                Weekly Satta Matka
              </div>

              <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                Weekly Jodi <br />
                <span className="text-cyan-200">& Panna Chart</span>
              </h1>

              <p className="max-w-4xl mx-auto mt-5 text-sm md:text-lg text-slate-100 leading-8 font-semibold">
                Weekly Jodi Panna Line • Kalyan • Milan • Rajdhani Night •
                Main Bazar • Time Bazar • Kalyan Night
              </p>

              <div className="mt-6 inline-flex items-center gap-3 bg-black/30 border border-white/10 rounded-2xl px-5 py-3">
                <span className="text-cyan-300 font-black text-lg">
                  {startDate}
                </span>

                <span className="text-white/60 font-bold">TO</span>

                <span className="text-pink-300 font-black text-lg">
                  {endDate}
                </span>
              </div>
            </div>
          </section>

          {/* PANEL CHART TITLE */}
          <section className="bg-[#121933] border-y border-white/10 px-4 py-5">
            <h2 className="text-center text-xl md:text-3xl font-black uppercase">
              <span className="text-yellow-300">
                Weekly Panel / Patti Chart
              </span>
            </h2>

            <p className="text-center mt-3 text-slate-300 font-semibold text-sm md:text-base">
              Kalyan • Milan • Rajdhani Night • Main Bazar • Time Bazar
            </p>
          </section>

          {/* PANEL CHART */}
          {/* CHART VIEW NOT CHANGED */}
          <section className="bg-[#090d1f] py-8 px-3">
            <div className="space-y-3 text-center">
              {panelChart.map((item) => (
                <div
                  key={item.digit}
                  className="text-lg md:text-2xl font-black italic leading-relaxed"
                >
                  <span className="text-pink-400">{item.digit}</span>

                  <span className="text-slate-400 mx-2">=&gt;</span>

                  <span className="text-cyan-300 tracking-wider">
                    {item.values}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* WEEKLY JODI */}
          <section className="bg-gradient-to-r from-indigo-950 to-[#111827] border-y border-white/10">
            <div className="px-4 py-5">
              <h2 className="text-center text-xl md:text-3xl font-black uppercase text-green-300">
                Weekly Jodi Chart
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {weeklyJodi.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-green-500/20 bg-green-500/10 py-5 text-center shadow-lg"
                  >
                    <p className="text-2xl md:text-3xl font-black tracking-widest text-green-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* OPEN CLOSE */}
          <section className="bg-[#090d1f] border-y border-white/10">
            <div className="px-4 py-6">
              <h2 className="text-center text-xl md:text-3xl font-black uppercase text-orange-300">
                Weekly Open To Close
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {weeklyOpenClose.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4"
                  >
                    <span className="text-lg md:text-xl font-black text-pink-300">
                      {item.day}
                    </span>

                    <span className="text-lg md:text-xl font-black text-cyan-300 tracking-wider">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ADVERTISEMENT */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-pink-700 to-orange-600 opacity-90" />

            <div className="relative px-4 py-10 text-center">
              <div className="inline-block bg-black/30 border border-white/10 rounded-full px-6 py-2">
                <h2 className="text-2xl md:text-4xl font-black text-yellow-300 animate-pulse">
                  ☩ BOOKING OPEN ☩
                </h2>
              </div>

              <p className="mt-6 text-lg md:text-3xl font-black leading-relaxed text-white">
                कल्याण बाजार बम्पर धमाका <br />
                <span className="text-yellow-300">
                  अचूक जोड़ी पर कमाओ लाखों
                </span>
              </p>

              <div className="mt-8 flex flex-col gap-4 items-center">
                <div className="bg-black/30 border border-white/10 rounded-2xl px-6 py-4">
                  <p className="text-sm text-slate-300 font-bold">
                    CALL NOW
                  </p>

                  <p className="text-2xl md:text-3xl font-black text-cyan-300 tracking-widest">
                    1234567890
                  </p>
                </div>

                <div className="bg-black/30 border border-white/10 rounded-2xl px-6 py-4">
                  <p className="text-sm text-slate-300 font-bold">
                    WHATSAPP
                  </p>

                  <p className="text-2xl md:text-3xl font-black text-green-300 tracking-widest">
                    1234567890
                  </p>
                </div>
              </div>

              <div className="mt-8 inline-block border border-red-300/30 bg-red-500/10 rounded-xl px-5 py-3">
                <p className="text-red-200 font-black text-sm md:text-lg">
                  NOTE : DON'T CALL FOR TRAIL HELP
                </p>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-[#050816]">
            {/* MENU */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 px-4 py-6 border-b border-white/10">
              {[
                "Home",
                "Matka Guessing",
                "Matka Chart",
                "Matka Play",
                "Tara Matka",
                "Fix Matka",
                "Sitemap",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-bold text-slate-200 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* COPYRIGHT */}
            <div className="px-4 py-10 text-center">
              <h3 className="text-cyan-300 text-xl md:text-2xl font-black break-all">
                https://sattamatkadpbos.com
              </h3>

              <p className="mt-4 text-white font-black text-lg md:text-xl">
                ALL RIGHTS RESERVED (2012-2026)
              </p>

              <p className="mt-6 text-slate-400 font-bold uppercase tracking-widest">
                Site Owner
              </p>

              <h2 className="mt-2 text-yellow-300 text-3xl md:text-4xl font-black uppercase">
                FAST BOSS SIR
              </h2>

              <p className="mt-5 text-cyan-300 text-xl md:text-2xl font-black tracking-widest">
                1234567890
              </p>

              <p className="mt-6 text-slate-500 font-semibold break-all">
                https://sattamatkadpbos.com
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}