import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <header className="bg-slate-950 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex justify-center items-center gap-4">
            {/* Logo */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-xl">
              <span className="text-4xl font-black text-black">$</span>
            </div>

            <div>
              <h1 className="text-4xl font-black text-yellow-400">
                Satta Matka
              </h1>

              <p className="text-2xl font-bold text-cyan-400">
                Premium Boss
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Top Divider */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

      {/* Content */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 border border-yellow-500/20 rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Title */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-amber-600" />

              <h2 className="text-3xl md:text-5xl font-black text-yellow-400">
                प्राइवेसी पॉलिसी (Privacy Policy)
              </h2>
            </div>

            {/* Intro */}
            <p className="text-slate-300 text-lg md:text-xl leading-10">
              हम आपकी गोपनीयता (Privacy) का सम्मान करते हैं।
              <span className="font-bold text-yellow-400">
                {" "}
                Satta Matka Premium Boss
              </span>{" "}
              पर आपकी जानकारी को सुरक्षित रखने का प्रयास किया जाता है।
              यह पेज हमारी प्राइवेसी पॉलिसी को समझाने के लिए बनाया गया है।
            </p>

            {/* Section 1 */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">
                1. डेटा सुरक्षा और गोपनीयता
              </h3>

              <div className="h-px bg-slate-700 mb-6" />

              <p className="text-slate-300 text-lg leading-9">
                हम अपने उपयोगकर्ताओं से किसी भी प्रकार की संवेदनशील निजी
                जानकारी जैसे बैंक खाता संख्या, आधार कार्ड, पैन कार्ड या
                अन्य व्यक्तिगत दस्तावेज़ नहीं मांगते हैं। हमारी वेबसाइट
                पर आने वाले विजिटर्स की जानकारी सुरक्षित रखने का प्रयास
                किया जाता है।
              </p>
            </div>

            {/* Section 2 */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">
                2. विज्ञापन और बाहरी लिंक
              </h3>

              <div className="h-px bg-slate-700 mb-6" />

              <p className="text-slate-300 text-lg leading-9">
                हमारी वेबसाइट पर कुछ तृतीय पक्ष विज्ञापन या बाहरी वेबसाइटों
                के लिंक हो सकते हैं। इन वेबसाइटों की सामग्री, सेवाओं और
                नीतियों के लिए हम जिम्मेदार नहीं हैं। किसी भी बाहरी लिंक
                का उपयोग करना उपयोगकर्ता की अपनी जिम्मेदारी होगी।
              </p>
            </div>

            {/* Section 3 */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">
                3. Cookies का उपयोग
              </h3>

              <div className="h-px bg-slate-700 mb-6" />

              <p className="text-slate-300 text-lg leading-9">
                बेहतर यूजर अनुभव प्रदान करने के लिए हमारी वेबसाइट Cookies
                का उपयोग कर सकती है। Cookies केवल वेबसाइट के प्रदर्शन और
                उपयोग को बेहतर बनाने के लिए उपयोग की जाती हैं।
              </p>
            </div>

            {/* Section 4 */}
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-4">
                4. नीति में परिवर्तन
              </h3>

              <div className="h-px bg-slate-700 mb-6" />

              <p className="text-slate-300 text-lg leading-9">
                समय-समय पर हमारी प्राइवेसी पॉलिसी में बदलाव किया जा सकता
                है। किसी भी अपडेट की जानकारी इसी पेज पर उपलब्ध कराई जाएगी।
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-slate-800 p-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">
                महत्वपूर्ण सूचना
              </h4>

              <p className="text-slate-300 leading-8">
                यह वेबसाइट केवल जानकारी प्रदान करने के उद्देश्य से बनाई
                गई है। हम किसी भी प्रकार की अवैध गतिविधि या जुए को बढ़ावा
                नहीं देते हैं।
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-12">
              <Link
                href="/"
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-black text-lg shadow-lg hover:scale-105 transition-all duration-300"
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