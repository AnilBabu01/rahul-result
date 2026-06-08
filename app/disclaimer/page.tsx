import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-950 to-black text-white">
      
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-md border-b border-indigo-500/30">
        <div className="max-w-7xl mx-auto py-8 flex justify-center">
          <div className="flex items-center gap-5">
            
            {/* Logo */}
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
              <span className="text-2xl font-black text-white">$</span>
            </div>

            <div>
              <h1 className="text-2xl font-black text-indigo-300 tracking-wide">
                Satta Matka
              </h1>
              <p className="text-lg font-semibold text-purple-300">
                Premium Boss
              </p>
            </div>

          </div>
        </div>
      </header>

      {/* Top Glow Line */}
      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white/5 backdrop-blur-lg border border-indigo-500/20 rounded-3xl shadow-2xl p-6 md:p-10">

            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-16 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500" />

              <h2 className="text-2xl md:text-3xl font-black text-indigo-300">
                डिस्क्लेमर (Disclaimer)
              </h2>
            </div>

            {/* Warning Box */}
            <div className="mb-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <p className="text-lg md:text-xl font-semibold text-yellow-300">
                कृपया ध्यान दें: यह वेबसाइट केवल शैक्षिक और जानकारी प्रदान करने के उद्देश्य से बनाई गई है।
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6 text-slate-300 text-lg leading-8">

              <p>
                <span className="font-bold text-indigo-300">
                  Satta Matka Premium Boss
                </span>{" "}
                किसी भी प्रकार के जुए, सट्टेबाजी या अवैध गतिविधि को बढ़ावा नहीं देता है। यह सामग्री केवल सामान्य जानकारी के लिए है।
              </p>

              <p>
                कुछ क्षेत्रों में सट्टा या जुआ कानूनन प्रतिबंधित हो सकता है। उपयोगकर्ता अपने स्थानीय कानूनों का पालन स्वयं सुनिश्चित करें।
              </p>

              <p>
                वेबसाइट के मालिक या टीम किसी भी आर्थिक या कानूनी नुकसान के लिए जिम्मेदार नहीं होंगे। सभी निर्णय उपयोगकर्ता की जिम्मेदारी पर होंगे।
              </p>

              <p>
                यदि आप हमारी शर्तों से सहमत नहीं हैं, तो कृपया इस वेबसाइट का उपयोग न करें।
              </p>

            </div>

            {/* Important Notice */}
            <div className="mt-10 rounded-2xl border border-red-400/30 bg-red-500/10 p-5">
              <h3 className="text-xl font-bold text-red-300 mb-2">
                महत्वपूर्ण सूचना
              </h3>
              <p className="text-slate-300 leading-7">
                किसी भी प्रकार की वित्तीय गतिविधि में जोखिम शामिल होता है। कृपया जिम्मेदारी से निर्णय लें।
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-12">
              <Link
                href="/"
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-all duration-300"
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