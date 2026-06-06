import { topGuessers2 } from "@/data/games";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Guessing Chart Result`,
    description: `Get Satta Matka Guessing satta matka chart, panel chart, jodi chart and daily result updates.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/satta-matka-guessing-forum`,
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
    <main className="min-h-screen bg-[#060816] text-white overflow-hidden">
      {/* TOP HERO */}
      <div className="relative border-b-4 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#1e3c72] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 py-10">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-6 text-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-wider text-black drop-shadow-lg">
                SATTA MATKA FORUM
              </h1>

              <p className="mt-3 text-black font-extrabold text-lg">
                India's Premium Guessing Community
              </p>
            </div>

            {/* Description */}
            <div className="p-6 md:p-8 bg-[#0f172a]">
              <h2 className="text-center text-3xl md:text-4xl font-black text-yellow-400">
                Daily Guessing Zone
              </h2>

              <p className="mt-5 text-center text-slate-300 leading-8 text-[16px] md:text-lg font-medium">
                Welcome Back To India's Best Matka Guessing Forum, Get
                Kalyan Guessing Free With Our Satta Matka Guessing Experts.
                Also Get Help In Milan Day, Milan Night, Rajdhani Day/Night
                And Other Matka Games Related To Madhur Matka and Indian
                Matka In Satta Matka Guessing 143 Forum.
              </p>

              {/* Menu Buttons */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {[
                  "GO TO HOME",
                  "100% DATE FIX ANK",
                  "FREE FORUM CLICK HERE",
                ].map((item) => (
                  <button
                    key={item}
                    className="
                      relative overflow-hidden rounded-2xl
                      bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600
                      text-black font-black py-4 text-lg
                      hover:scale-[0.98] duration-300 shadow-xl
                    "
                  >
                    <span className="relative z-10">{item}</span>

                    <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RULES SECTION */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-[#0f172a] rounded-3xl border border-yellow-500/30 overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 py-4 text-center">
            <h2 className="text-3xl font-black text-black">
              FORUM RULES
            </h2>
          </div>

          <div className="divide-y divide-slate-700">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4 px-5 py-5
                  hover:bg-slate-800/50 duration-200
                "
              >
                <div
                  className="
                    min-w-[42px] h-[42px]
                    rounded-full
                    bg-gradient-to-br from-yellow-400 to-orange-600
                    flex items-center justify-center
                    font-black text-black
                  "
                >
                  {index + 1}
                </div>

                <p className="font-bold text-slate-200 text-[15px] md:text-[16px]">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POST BOX */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div
          className="
            bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1e293b]
            rounded-3xl border border-orange-500/30
            p-8 shadow-2xl
          "
        >
          <div className="flex flex-col items-center">
            <div className="mb-5 text-center">
              <h2 className="text-3xl font-black text-yellow-400">
                Post Your Guess
              </h2>

              <p className="text-slate-400 mt-2">
                Share your daily guessing and market ideas
              </p>
            </div>

            <textarea
              className="
                w-full max-w-2xl h-40
                bg-black/40
                border-2 border-orange-500/40
                rounded-2xl p-5
                text-white font-semibold
                outline-none
                focus:border-yellow-400
                focus:ring-4 focus:ring-yellow-500/20
              "
              placeholder="Write your message..."
            />

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                className="
                  bg-gradient-to-r from-yellow-400 to-orange-500
                  text-black
                  font-black
                  px-8 py-3
                  rounded-2xl
                  shadow-xl
                  hover:scale-95 duration-200
                "
              >
                Submit
              </button>

              <button
                className="
                  bg-gradient-to-r from-pink-500 to-red-600
                  text-white
                  font-black
                  px-8 py-3
                  rounded-2xl
                  shadow-xl
                  hover:scale-95 duration-200
                "
              >
                Refresh Forum
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATUS BAR */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div
          className="
            bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1f2937]
            border border-yellow-500/30
            rounded-2xl
            px-5 py-4
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <div className="text-center md:text-left">
            <div className="text-yellow-400 font-black text-lg">
              RUDRA PENAL KING
            </div>

            <div className="text-slate-400 font-semibold text-sm">
              30 May 08:10:44 pm
            </div>
          </div>

          <div
            className="
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black
              px-6 py-2
              rounded-full
              font-black
              animate-pulse
            "
          >
            TOP GUESSER
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-400 animate-ping" />

            <span className="text-green-400 font-black">
              ONLINE
            </span>
          </div>
        </div>
      </div>

      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-4 text-center">
        <h1
          className="
            text-4xl md:text-6xl
            font-black
            bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
            bg-clip-text text-transparent
            drop-shadow-2xl
          "
        >
          SATTA MATKA GUESSING FORUM
        </h1>

        <p className="mt-5 inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-lg">
          DATE : 30_05_2026
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {topGuessers2.map((guesser) => (
            <div
              key={guesser.id}
              className="
                relative overflow-hidden rounded-3xl
                bg-gradient-to-br from-[#111827] to-[#0f172a]
                border border-orange-500/30
                shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                hover:-translate-y-1 duration-300
              "
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

              {/* Header */}
              <div
                className="
                  relative
                  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600
                  p-5 text-center
                "
              >
                <h2 className="text-3xl font-black text-black tracking-wide">
                  {guesser.name}
                </h2>
              </div>

              {/* Body */}
              <div className="relative p-6">
                {/* Date & Phone */}
                <div className="flex flex-col gap-4">
                  <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                    <p className="text-slate-400 text-sm font-bold">
                      DATE
                    </p>

                    <p className="text-yellow-400 text-xl font-black mt-1">
                      {guesser.date}
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                    <p className="text-slate-400 text-sm font-bold">
                      CONTACT
                    </p>

                    <p className="text-green-400 text-xl font-black mt-1">
                      {guesser.phone}
                    </p>
                  </div>
                </div>

                {/* Offer Box */}
                <div
                  className="
                    mt-6
                    bg-gradient-to-r from-orange-500/20 to-red-500/20
                    border border-orange-500/30
                    rounded-2xl
                    p-5 text-center
                  "
                >
                  <p className="text-2xl font-black text-yellow-400">
                    Ek Mauka Badlega Aapki Zindagi
                  </p>

                  <p className="text-slate-300 mt-2 font-semibold">
                    Guaranty Fix Office Se Game Milega
                  </p>
                </div>

                {/* Games */}
                <div className="mt-7">
                  <h3 className="text-2xl font-black text-orange-400 text-center">
                    Active Games
                  </h3>

                  <div className="grid grid-cols-1 gap-3 mt-5">
                    {guesser.games.map((game, index) => (
                      <div
                        key={index}
                        className="
                          bg-black/30
                          border border-orange-500/20
                          rounded-2xl
                          py-3 px-4
                          font-bold text-slate-200
                          hover:border-yellow-400/50
                          duration-200
                        "
                      >
                        🎯 {game}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="
                    mt-7
                    bg-gradient-to-r from-yellow-400 to-orange-500
                    text-black
                    text-center
                    py-4
                    rounded-2xl
                    font-black text-lg
                    shadow-lg
                  "
                >
                  Paisa Aapka Vishwas Hamara
                </div>

                {/* Button */}
                <button
                  className="
                    w-full mt-6
                    bg-gradient-to-r from-red-500 to-pink-600
                    text-white
                    py-4
                    rounded-2xl
                    font-black text-lg
                    shadow-xl
                    hover:scale-[0.98]
                    duration-200
                  "
                >
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}