import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <header className="bg-slate-950 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex justify-center items-center gap-4">
            {/* Logo */}
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-xl">
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

      {/* Golden Divider */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

      {/* Contact Form */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-yellow-500/30 rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Title */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-16 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />

              <h2 className="text-3xl md:text-5xl font-black text-yellow-400">
                हमसे संपर्क करें
              </h2>
            </div>

            <form className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-xl font-bold text-slate-200 mb-3">
                  आपका नाम
                </label>

                <input
                  type="text"
                  placeholder="अपना नाम लिखें"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xl font-bold text-slate-200 mb-3">
                  ईमेल पता
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xl font-bold text-slate-200 mb-3">
                  संदेश
                </label>

                <textarea
                  rows={6}
                  placeholder="अपना संदेश लिखें..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 py-4 text-xl font-black text-black shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                संदेश भेजें
              </button>
            </form>

            {/* Extra Contact Box */}
            <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-slate-800 p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                अन्य संपर्क जानकारी
              </h3>

              <div className="space-y-3 text-slate-300">
                <p>📧 support@example.com</p>
                <p>📱 +91 1234567890</p>
                <p>🕒 24×7 Customer Support</p>
              </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-center mt-10">
              <Link
                href="/"
                className="rounded-xl border border-yellow-500 px-8 py-3 text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition"
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