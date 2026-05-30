import { markets } from "@/data/games";

export default function Page() {
  return (
    <main className="min-h-screen bg-black p-2 md:p-4">
      <div className="border-2 border-white">
        {/* HEADER */}
        <div className="bg-purple-900 text-white text-center py-5 border-b border-white">
          <h1 className="italic font-bold text-3xl md:text-2xl">
            Satta Matka Open To Close - Fix 3 Ank Daily
          </h1>

          <h2 className="italic font-bold text-1xl md:text-1xl mt-2">
            FIX 3 ANK OPEN TO CLOSE FOR ALL MARKETS
          </h2>

          <div className="border-t border-white mt-4 pt-4">
            <p className="italic font-bold text-2xl">!! Game Update Time !!</p>

            <p className="italic font-bold text-1xl">!! Day 02.00 pm !!</p>

            <p className="italic font-bold text-1xl">!! Night 08.00 pm !!</p>
          </div>
        </div>

        {/* DATE */}
        <div className="bg-yellow-400 text-center border-y-4 border-black">
          <h3 className="text-1xl font-bold italic">Date : 30-05-2026</h3>
        </div>

        {/* MARKET ROWS */}
        {markets.map((market, index) => (
          <div
            key={index}
            className="bg-[#efe9c8] border-2 border-blue-700 text-center py-1"
          >
            <span
              className={`${market.color} text-white px-2 font-bold italic text-1xl`}
            >
              {market.name}
            </span>

            {"title" in market ? (
              <>
                <div className="text-blue-700 text-1xl font-bold italic ">
                  {market.title}
                </div>

                <div className="text-black text-1xl font-bold italic">
                  CALL KARE
                </div>

                <div className="text-red-600 text-1xl font-bold italic">
                  {market.phone}
                </div>
              </>
            ) : (
              <>
                <div className="text-blue-700 text-1xl italic font-bold">
                  ({market.open})
                </div>

                <div className="text-black text-1xl italic font-bold">
                  {market.close}
                </div>

                <div className="text-red-600 text-1xl italic font-bold">
                  {market.result}
                </div>
              </>
            )}
          </div>
        ))}

        {/* INFO BOX */}
        <div className="bg-black py-8 flex justify-center">
          <div className="bg-white rounded-md shadow-lg max-w-3xl w-full p-6">
            <h3 className="font-bold text-xl mb-4">
              📄 What is Satta Matka Open To Close?
            </h3>

            <p className="text-center text-lg leading-8">
              Open To Close (OTC) is one of the most important concepts in Satta
              Matka. It refers to the relationship between the opening number
              and closing number declared in each Matka market session.
            </p>

            <div className="mt-5 bg-gray-100 border-l-4 border-gray-500 p-4">
              <p className="text-center font-semibold">
                Example: If Open is 5 and Close is 0 — the Jodi becomes 50 and
                the Panna is derived from this combination.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black py-8 flex justify-center">
          <div className="bg-white rounded-md shadow-lg max-w-3xl w-full p-6">
            <h3 className="font-bold text-xl mb-4">📄What is Fix 3 Ank?</h3>

            <p className="text-center text-lg leading-8">
              Fix 3 Ank means three specific digits predicted by experts that
              are most likely to appear as Open or Close in a particular Matka
              market on a given day.
            </p>

            <div className="mt-5 bg-gray-100 border-l-4 border-gray-500 p-4">
              <p className="text-center font-semibold">
                Players use these 3 Ank numbers to narrow down their guessing
                range and make smarter decisions — instead of guessing from all
                10 digits (0–9), you focus on just 3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
