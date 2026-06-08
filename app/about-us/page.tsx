import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-cyan-500/40 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 py-8 flex justify-center">
          <div className="flex items-center gap-5">
            {/* Logo */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.45)]">
              <span className="text-4xl font-black text-white">$</span>
            </div>

            {/* Brand */}
            <div>
              <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Satta Matka
              </h1>

              <p className="text-2xl font-bold text-indigo-300">
                Premium Boss
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Top Line */}
      <div className="h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[32px] border border-cyan-500/20 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative p-6 md:p-12">
              {/* Title */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-3 h-16 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />

                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-cyan-300">
                    हमारे बारे में
                  </h2>

                  <p className="text-slate-400 mt-1 text-sm md:text-base">
                    About Our Platform
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 text-slate-200 leading-9 text-lg md:text-2xl">
                <p>
                  नमस्ते,
                  <span className="font-bold text-cyan-300">
                    {" "}
                    Satta Matka Premium Boss
                  </span>{" "}
                  में आपका स्वागत है। हमारा उद्देश्य खिलाड़ियों तक तेज,
                  भरोसेमंद और सटीक मटका जानकारी पहुँचाना है।
                </p>

                <p>
                  हम
                  <span className="font-bold text-indigo-300">
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

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-5">
                  <h3 className="text-cyan-300 text-xl font-bold mb-2">
                    Fast Updates
                  </h3>

                  <p className="text-slate-400 text-sm leading-7">
                    सभी मार्केट रिजल्ट और चार्ट तेज़ी से अपडेट किए जाते हैं।
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/60 p-5">
                  <h3 className="text-indigo-300 text-xl font-bold mb-2">
                    Responsive Design
                  </h3>

                  <p className="text-slate-400 text-sm leading-7">
                    मोबाइल, टैबलेट और डेस्कटॉप पर स्मूथ अनुभव।
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-5">
                  <h3 className="text-blue-300 text-xl font-bold mb-2">
                    Trusted Info
                  </h3>

                  <p className="text-slate-400 text-sm leading-7">
                    सटीक और भरोसेमंद जानकारी एक ही जगह पर।
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-slate-700/70" />

              {/* Notice */}
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-slate-300 italic text-base md:text-lg leading-8">
                  नोट: यह वेबसाइट केवल सूचना एवं मनोरंजन उद्देश्य के लिए है।
                  हम किसी भी प्रकार की अवैध गतिविधि या जुए को बढ़ावा नहीं
                  देते।
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-12">
                <Link
                  href="/"
                  className="group px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-black text-lg md:text-xl shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    ← होम पेज पर वापस जाएं
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}