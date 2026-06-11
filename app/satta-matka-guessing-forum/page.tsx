import { topGuessers2 } from "@/data/games";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Guessing Chart Result`,
    description: `Get Satta Matka Guessing satta matka chart, panel chart, jodi chart and daily result updates.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com//chart/satta-matka-guessing-forum`,
    },
  };
}

export default function Page() {
  const rules = [
    "DO NOT USE BAD WORDS OR ABUSIVE LANGUAGE IN FORUM.",
    "DONT POST YOUR PHONE NUMBERS OR SITE LINKS.",
    "DONT POST GUESSING AT RESULT TIME",
    "DONT POST WRONG RESULT",
    "IF YOU DONT FOLLOW SITE RULES THAN, YOUR *IP* WILL BE BLOCKED PERMENTLY.",
    "NOTICE :- GAME PASS HONE PAR GUESSER KO WISH KARE THIS IS LAST WARNING TO ALL MEMBERS",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Banner / Announcement */}
      <div className="bg-amber-500 text-slate-950 font-bold py-2 text-center text-xs md:text-sm tracking-wide px-4">
        🔥 SATTA MATKA GUESSING FORUM &bull; DATE: <span className="underline">30_05_2026</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Grid Wrapper to organize layout cleanly on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT/CENTER COLUMN: Forum Controls & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Section */}
            <header className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-2">
                Premium Community
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                Matka Guessing Forum
              </h1>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Welcome back to India's best Matka Guessing Forum. Get Kalyan Guessing free with our 
                Satta Matka guessing experts. Also find professional assistance for Milan Day, Milan Night, 
                Rajdhani Day/Night, and other Matka games related to Madhur Matka and Indian Matka 
                in the Satta Matka Guessing 143 Forum.
              </p>
            </header>

            {/* Quick Actions Navigation Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "GO TO HOME", style: "bg-slate-900 text-white hover:bg-slate-800" },
                { label: "100% DATE FIX ANK", style: "bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold" },
                { label: "FREE FORUM CLICK HERE", style: "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50/50" }
              ].map((item) => (
                <button
                  key={item.label}
                  className={`${item.style} transition-all duration-200 py-3.5 px-4 rounded-xl text-xs md:text-sm font-bold shadow-sm hover:shadow active:scale-[0.98]`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Post/Submission Box */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                Share Your Guess
              </h3>
              <div className="space-y-4">
                <textarea
                  className="w-full h-32 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 placeholder:text-slate-400 transition-all resize-none text-sm"
                  placeholder="Write your system calculation or message here..."
                />
                <div className="flex flex-wrap gap-3">
                  <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm shadow-indigo-200">
                    Submit Post
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700">
                    Refresh Feed
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Interactive Rules Dashboard */}
          <aside className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl lg:sticky lg:top-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h2 className="font-bold text-lg tracking-tight text-white">Forum Guidelines</h2>
              <span className="bg-rose-500/10 text-rose-400 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-black border border-rose-500/20">
                Strict
              </span>
            </div>
            <div className="space-y-3.5">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60"
                >
                  <span className="text-amber-400 font-mono font-bold text-sm bg-slate-800 px-2 py-0.5 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs leading-relaxed font-medium text-slate-300 uppercase tracking-wide">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </aside>

        </div>

        {/* SECTION: Featured Live Ticker Box */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl border border-slate-800 mt-10 shadow-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 gap-4">
            <div className="text-center sm:text-left">
              <div className="text-xs uppercase tracking-wider font-bold text-indigo-300">Active Champion</div>
              <div className="text-lg font-black text-white">RUDRA PENAL KING</div>
            </div>
            <div className="flex items-center gap-2 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black tracking-wider shadow animate-pulse">
              🏆 TOP GUESSER
            </div>
            <div className="text-center sm:text-right text-xs">
              <div className="text-emerald-400 font-bold flex items-center justify-center sm:justify-end gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                [Online Now]
              </div>
              <div className="text-slate-400 mt-0.5 font-medium">30 May &bull; 08:10:44 pm</div>
            </div>
          </div>
        </div>

        {/* SECTION: Top Guessers Grid Cards */}
        <section className="mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Verified Expert Panels</h2>
              <p className="text-sm text-slate-500 font-medium">Direct live calculations from highly trusted community members</p>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-200/60 px-3 py-1 rounded-full w-max">
              Showing {topGuessers2.length} Experts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topGuessers2.map((guesser) => (
              <div
                key={guesser.id}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Branding */}
                <div>
                  <div className="p-5 border-b border-slate-100 bg-slate-50/70 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {guesser.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">📅 Updates: {guesser.date}</p>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                      ★
                    </span>
                  </div>

                  {/* Card Content Segment */}
                  <div className="p-5 space-y-4">
                    {/* Fixed Promo Badge */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center">
                      <p className="font-bold text-emerald-800 text-sm">
                        Ek Mauka Badlega Aapki Zindagi
                      </p>
                      <p className="text-xs text-emerald-600 mt-0.5 font-medium">
                        Guaranty Fix Office Se Game Milega
                      </p>
                    </div>

                    {/* Active Games Sublist */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                        Active Markets Today
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {guesser.games.map((game, index) => (
                          <li
                            key={index}
                            className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 flex items-center gap-2"
                          >
                            <span className="text-indigo-500 font-bold">✓</span>
                            {game}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Segment */}
                <div className="p-5 pt-0 mt-auto">
                  <div className="bg-slate-100 rounded-xl p-2.5 text-center text-xs font-bold text-slate-600 mb-3 tracking-wide">
                    🤝 Paisa Aapka Vishwas Hamara
                  </div>
                  
                  <a 
                    href={`tel:${guesser.phone}`}
                    className="w-full bg-slate-900 hover:bg-indigo-600 text-white text-center transition-all duration-200 py-3 rounded-xl font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-sm"
                  >
                    📞 CONNECT VIA PHONE
                  </a>
                </div>

              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}