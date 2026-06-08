import { topGuessers2 } from "@/data/games";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Guessing Chart Result`,
    description: `Get Satta Matka Guessing satta matka chart, panel chart, jodi chart and daily result updates.`,
    alternates: {
      canonical: `https://sattamatkadpb.net/chart/satta-matka-guessing-forum`,
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
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#111827] to-black text-white">
      {/* Hero Section */}
      <section className="border-b-4 border-yellow-500 shadow-[0_0_25px_rgba(234,179,8,0.4)]">
        <div className="bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] py-8 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-wide text-white drop-shadow-lg">
            SATTA MATKA
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-bold text-yellow-300">
            Guessing Forum 2026
          </p>
        </div>

        {/* Welcome Box */}
        <div className="bg-[#111827] px-5 py-8 text-center border-t border-yellow-500">
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
            India's Trusted Guessing Forum
          </h2>

          <p className="max-w-5xl mx-auto mt-5 text-slate-300 leading-8 text-lg font-medium">
            Welcome Back To India's Best Matka Guessing Forum, Get Kalyan
            Guessing Free With Our Satta Matka Guessing Experts. Also Get Help
            In Milan Day, Milan Night, Rajdhani Day/Night And Other Matka Games
            Related To Madhur Matka and Indian Matka.
          </p>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-yellow-500">
          {["GO TO HOME", "100% DATE FIX ANK", "FREE FORUM CLICK HERE"].map(
            (item) => (
              <button
                key={item}
                className="bg-[#0f172a] hover:bg-[#1e293b] py-4 font-extrabold text-yellow-300 tracking-wide transition-all duration-300"
              >
                {item}
              </button>
            ),
          )}
        </div>
      </section>

      {/* Rules Section */}
      <section className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-[#111827] border border-yellow-500 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(234,179,8,0.2)]">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 py-4 text-center">
            <h2 className="text-2xl font-black text-black tracking-wide">
              FORUM RULES
            </h2>
          </div>

          {rules.map((rule, index) => (
            <div
              key={index}
              className="border-b border-slate-700 px-5 py-4 text-center text-sm md:text-base font-bold text-slate-200"
            >
              <span className="text-yellow-400 mr-2">
                {index + 1}.
              </span>
              {rule}
            </div>
          ))}
        </div>
      </section>

      {/* Post Box */}
      <section className="max-w-4xl mx-auto mt-10 px-4">
        <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#111827] border border-cyan-500 rounded-3xl p-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <h2 className="text-center text-3xl font-black text-cyan-400 mb-6">
            Post Your Guess
          </h2>

          <div className="flex flex-col items-center">
            <textarea
              className="w-full md:w-[500px] h-36 bg-black/40 border-2 border-cyan-500 rounded-2xl p-4 text-white outline-none focus:ring-4 focus:ring-cyan-500/30"
              placeholder="Write your message here..."
            />

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-95 transition-all duration-300 px-8 py-3 rounded-xl font-black shadow-lg">
                Submit
              </button>

              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-95 transition-all duration-300 px-8 py-3 rounded-xl font-black text-black shadow-lg">
                Refresh Forum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Guesser Header */}
      <section className="max-w-7xl mx-auto mt-10 px-4">
        <div className="bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] rounded-2xl border border-cyan-400 overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5">
            <div className="text-center md:text-left">
              <p className="text-yellow-300 font-black text-lg">
                RUDRA PENAL KING
              </p>

              <p className="text-slate-100 text-sm">
                30 May 08:10:44 pm
              </p>
            </div>

            <div className="text-2xl font-black text-white animate-pulse">
              ⭐ TOP GUESSER ⭐
            </div>

            <div className="bg-green-500/20 border border-green-400 px-4 py-2 rounded-full text-green-300 font-bold">
              ● Online
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
            SATTA MATKA GUESSING
          </h1>

          <p className="mt-4 text-xl font-bold text-cyan-300">
            DATE : 30_05_2026
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {topGuessers2.map((guesser) => (
            <div
              key={guesser.id}
              className="bg-[#111827] border border-slate-700 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-[0_0_18px_rgba(59,130,246,0.15)]"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 p-5 text-center">
                <h2 className="text-2xl font-black text-black">
                  {guesser.name}
                </h2>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-cyan-400">
                    📅 {guesser.date}
                  </span>

                  <span className="text-green-400">
                    📱 {guesser.phone}
                  </span>
                </div>

                {/* Quote */}
                <div className="mt-5 bg-black/40 border border-yellow-500 rounded-2xl p-4 text-center">
                  <p className="text-yellow-400 font-black text-lg">
                    Ek Mauka Badlega Aapki Zindagi
                  </p>

                  <p className="text-slate-300 text-sm mt-2">
                    Guaranty Fix Office Se Game Milega
                  </p>
                </div>

                {/* Games */}
                <div className="mt-6">
                  <h3 className="text-xl font-black text-pink-400 mb-4">
                    Active Games
                  </h3>

                  <div className="space-y-3">
                    {guesser.games.map((game, index) => (
                      <div
                        key={index}
                        className="bg-[#0f172a] border border-cyan-700 rounded-xl py-3 px-4 font-bold text-cyan-300 hover:border-yellow-400 transition-all duration-300"
                      >
                        🎯 {game}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl py-3 text-center font-black">
                  Paisa Aapka Vishwas Hamara
                </div>

                <button className="w-full mt-5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 transition-all duration-300 py-3 rounded-xl text-black font-black text-lg">
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}