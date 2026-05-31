import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <header className="bg-slate-950 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto py-8 flex justify-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-xl">
              <span className="text-1xl font-black text-black">$</span>
            </div>

            <div>
              <h1 className="text-1xl font-black text-yellow-400">
                Satta Matka
              </h1>

              <p className="text-1xl font-bold text-cyan-400">
                Premium Boss
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Top Divider */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

      {/* Content Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-yellow-500/20 rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-amber-600" />

              <h2 className="text-1xl md:text-1xl font-black text-yellow-400">
                डिस्क्लेमर (Disclaimer)
              </h2>
            </div>

            {/* Warning Box */}
            <div className="mb-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
              <p className="text-1xl md:text-1xl font-bold text-yellow-300">
                कृपया ध्यान दें: यह वेबसाइट केवल शैक्षिक और जानकारी
                प्रदान करने के उद्देश्य से बनाई गई है।
              </p>
            </div>

            {/* Disclaimer Text */}
            <div className="space-y-8 text-slate-300 text-lg md:text-xl leading-10">
              <p>
                <span className="font-bold text-yellow-400">
                  Satta Matka Premium Boss
                </span>{" "}
                किसी भी प्रकार के जुए, सट्टेबाजी या अवैध गतिविधि को
                बढ़ावा नहीं देता है। इस वेबसाइट पर उपलब्ध सामग्री केवल
                सार्वजनिक स्रोतों और सामान्य जानकारी के आधार पर प्रस्तुत
                की जाती है।
              </p>

              <p>
                कुछ क्षेत्रों में सट्टा या जुआ कानूनन प्रतिबंधित हो सकता
                है। यदि आप इस वेबसाइट का उपयोग करते हैं, तो यह आपकी स्वयं
                की जिम्मेदारी होगी कि आप अपने देश या राज्य के नियमों और
                कानूनों का पालन करें।
              </p>

              <p>
                वेबसाइट के मालिक, एडमिन या टीम किसी भी प्रकार के आर्थिक,
                कानूनी या व्यक्तिगत नुकसान के लिए जिम्मेदार नहीं होंगे।
                उपयोगकर्ता द्वारा लिया गया प्रत्येक निर्णय उसकी स्वयं की
                जिम्मेदारी पर आधारित होगा।
              </p>

              <p>
                हम सभी देशों और राज्यों के कानूनों का सम्मान करते हैं।
                यदि आप हमारी शर्तों से सहमत नहीं हैं, तो कृपया इस वेबसाइट
                का उपयोग न करें।
              </p>
            </div>

            {/* Important Notice */}
            <div className="mt-10 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
              <h3 className="text-xl font-bold text-red-400 mb-3">
                महत्वपूर्ण सूचना
              </h3>

              <p className="text-slate-300 leading-8">
                किसी भी प्रकार की वित्तीय गतिविधि में जोखिम शामिल होता
                है। कृपया जिम्मेदारी के साथ निर्णय लें और स्थानीय कानूनों
                का पालन करें।
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