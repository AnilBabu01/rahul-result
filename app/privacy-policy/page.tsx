import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-900 to-black text-white">
      
      {/* Header */}
      <header className="bg-indigo-950/80 backdrop-blur border-b border-indigo-500/30">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex justify-center items-center gap-5">
            
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-xl rotate-3">
              <span className="text-2xl font-black text-black">$</span>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-black text-indigo-300">
                Satta Matka
              </h1>
              <p className="text-sm font-bold text-purple-300">
                Premium Boss
              </p>
            </div>

          </div>
        </div>
      </header>

      {/* Top Line */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Card */}
          <div className="bg-slate-900/70 backdrop-blur border border-indigo-500/20 rounded-3xl shadow-2xl p-6 md:p-10">

            {/* Title */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-14 rounded-full bg-gradient-to-b from-indigo-400 to-purple-600" />

              <h2 className="text-xl md:text-3xl font-black text-indigo-300">
                प्राइवेसी पॉलिसी (Privacy Policy)
              </h2>
            </div>

            {/* Intro */}
            <p className="text-slate-300 text-lg leading-8">
              हम आपकी गोपनीयता का सम्मान करते हैं।
              <span className="font-bold text-indigo-300">
                {" "} Satta Matka Premium Boss
              </span>{" "}
              पर आपकी जानकारी सुरक्षित रखने का पूरा प्रयास किया जाता है।
              यह पेज केवल जानकारी के लिए है।
            </p>

            {/* Section Box */}
            <div className="mt-10 space-y-8">

              {/* 1 */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-indigo-500/10">
                <h3 className="text-xl font-bold text-indigo-300 mb-3">
                  1. डेटा सुरक्षा और गोपनीयता
                </h3>
                <p className="text-slate-300 leading-7">
                  हम किसी भी प्रकार की निजी संवेदनशील जानकारी जैसे बैंक,
                  आधार, पैन आदि नहीं मांगते। आपकी सामान्य विज़िट जानकारी
                  सुरक्षित रखी जाती है।
                </p>
              </div>

              {/* 2 */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-indigo-500/10">
                <h3 className="text-xl font-bold text-indigo-300 mb-3">
                  2. विज्ञापन और बाहरी लिंक
                </h3>
                <p className="text-slate-300 leading-7">
                  वेबसाइट पर तृतीय पक्ष लिंक या विज्ञापन हो सकते हैं।
                  उनकी नीतियों के लिए हम जिम्मेदार नहीं हैं।
                </p>
              </div>

              {/* 3 */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-indigo-500/10">
                <h3 className="text-xl font-bold text-indigo-300 mb-3">
                  3. Cookies का उपयोग
                </h3>
                <p className="text-slate-300 leading-7">
                  बेहतर अनुभव के लिए Cookies का उपयोग किया जा सकता है,
                  जिससे वेबसाइट प्रदर्शन सुधरता है।
                </p>
              </div>

              {/* 4 */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-indigo-500/10">
                <h3 className="text-xl font-bold text-indigo-300 mb-3">
                  4. नीति में परिवर्तन
                </h3>
                <p className="text-slate-300 leading-7">
                  समय-समय पर पॉलिसी अपडेट की जा सकती है। सभी बदलाव इसी
                  पेज पर दिखाए जाएंगे।
                </p>
              </div>

            </div>

            {/* Disclaimer */}
            <div className="mt-10 rounded-2xl border border-purple-500/20 bg-slate-800/50 p-6">
              <h4 className="text-lg font-bold text-purple-300 mb-2">
                महत्वपूर्ण सूचना
              </h4>
              <p className="text-slate-300 leading-7">
                यह वेबसाइट केवल जानकारी प्रदान करती है। हम किसी भी अवैध
                गतिविधि या जुए को बढ़ावा नहीं देते।
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10">
              <Link
                href="/"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition"
              >
                होम पेज पर वापस जाएं
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}