import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <header className="bg-slate-950 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto py-8 flex justify-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg">
              <span className="text-4xl font-black text-black">$</span>
            </div>

            <div>
              <h1 className="text-4xl font-black text-yellow-400">
                Satta Matka
              </h1>

              <p className="text-2xl font-bold text-purple-400">
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-yellow-500/30 rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-14 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />

              <h2 className="text-3xl md:text-5xl font-black text-yellow-400">
                हमारे बारे में (About Us)
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-8 text-slate-200 leading-10 text-lg md:text-2xl">
              <p>
                नमस्ते,
                <span className="font-bold text-yellow-400">
                  {" "}
                  Satta Matka Premium Boss
                </span>{" "}
                में आपका स्वागत है। हमारा उद्देश्य खिलाड़ियों तक तेज,
                भरोसेमंद और सटीक मटका जानकारी पहुँचाना है।
              </p>

              <p>
                हम
                <span className="font-bold text-purple-400">
                  {" "}
                  Kalyan, Milan, Rajdhani, Main Bazar
                </span>{" "}
                और अन्य लोकप्रिय बाजारों के चार्ट, रिजल्ट और अपडेट उपलब्ध
                कराते हैं ताकि उपयोगकर्ताओं को एक ही स्थान पर सम्पूर्ण
                जानकारी मिल सके।
              </p>

              <p>
                हमारी टीम आधुनिक तकनीक और बेहतर यूजर अनुभव पर काम करती है।
                वेबसाइट मोबाइल, टैबलेट और डेस्कटॉप सभी डिवाइस पर तेज़ और
                स्मूथ चलती है।
              </p>
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-slate-700" />

            {/* Notice */}
            <p className="text-slate-400 italic text-lg leading-8">
              नोट: यह वेबसाइट केवल सूचना एवं मनोरंजन उद्देश्य के लिए है।
              हम किसी भी प्रकार की अवैध गतिविधि या जुए को बढ़ावा नहीं देते।
            </p>

            {/* Button */}
            <div className="flex justify-center mt-12">
              <Link
                href="/"
                className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-black text-xl rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
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