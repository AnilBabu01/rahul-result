import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#07111f] via-[#0f172a] to-black">
      {/* Top Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <header className="relative border-b border-cyan-500/30 bg-[#081120]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center gap-5">
            {/* Logo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-40" />

              <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl border-4 border-cyan-300/30">
                <span className="text-4xl font-black text-white">$</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-wide text-cyan-400">
                Satta Matka
              </h1>

              <p className="text-xl md:text-2xl font-bold text-purple-400">
                Premium Boss
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="h-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />

      {/* Contact Section */}
      <section className="relative py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Info Card */}
            <div className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur p-8 shadow-2xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
                  <span className="text-3xl">💬</span>
                </div>

                <h2 className="text-3xl font-black text-cyan-400 leading-tight">
                  हमसे संपर्क करें
                </h2>

                <p className="mt-4 text-slate-300 leading-7">
                  किसी भी सहायता, सुझाव या जानकारी के लिए हमसे संपर्क करें।
                  हमारी टीम आपकी मदद के लिए हमेशा उपलब्ध है।
                </p>

                {/* Contact Info */}
                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">ईमेल</p>

                    <p className="text-cyan-300 font-semibold">
                      support@example.com
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">मोबाइल</p>

                    <p className="text-cyan-300 font-semibold">
                      +91 1234567890
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">सपोर्ट टाइम</p>

                    <p className="text-cyan-300 font-semibold">
                      24×7 Customer Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur shadow-2xl p-6 md:p-10">
                {/* Heading */}
                <div className="mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-14 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />

                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-white">
                        संपर्क फॉर्म
                      </h3>

                      <p className="text-slate-400 mt-1">
                        नीचे दिया गया फॉर्म भरें
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-7">
                  {/* Name */}
                  <div>
                    <label className="block text-lg font-bold text-slate-200 mb-3">
                      आपका नाम
                    </label>

                    <input
                      type="text"
                      placeholder="अपना नाम लिखें"
                      className="w-full rounded-2xl border border-slate-700 bg-[#111827] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-lg font-bold text-slate-200 mb-3">
                      ईमेल पता
                    </label>

                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full rounded-2xl border border-slate-700 bg-[#111827] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-lg font-bold text-slate-200 mb-3">
                      संदेश
                    </label>

                    <textarea
                      rows={6}
                      placeholder="अपना संदेश लिखें..."
                      className="w-full rounded-2xl border border-slate-700 bg-[#111827] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 text-xl font-black text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="relative z-10">संदेश भेजें</span>

                    <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                  </button>
                </form>

                {/* Back Button */}
                <div className="flex justify-center mt-10">
                  <Link
                    href="/"
                    className="rounded-2xl border border-cyan-500/40 bg-slate-800 px-8 py-3 text-cyan-300 font-bold transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                  >
                    होम पेज पर वापस जाएं
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}