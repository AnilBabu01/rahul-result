"use client";
import { useState } from "react";
import {
  liveData,
  liveData2,
  forumLinks,
  chartData,
  topGuessers,
  fastResult,
  charts,
  faqData,
  faqData2,
} from "@/data/games";
import Link from "next/link";
import Image from "next/image";
import download from "@/public/images/download.gif";

import {
  useGetMarketListQuery,
  useGetAllMatchQuery,
  useGetAppDataQuery,
} from "./redux/api/apiClient";

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [active, setActive] = useState<number | null>(null);
  const [refreshingIndex, setRefreshingIndex] = useState<number | null>(null);

  /*
  |--------------------------------------------------------------------------
  | RTK QUERY API CALL
  |--------------------------------------------------------------------------
  */
  const {
    data: marketResponse,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetMarketListQuery({});

  const { data, isLoading: marketLoading, error } = useGetAllMatchQuery({});

  const {
    data: appData,
    isLoading: appLoading,
    error: appError,
  } = useGetAppDataQuery({});

  const marketList = marketResponse?.data || [];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased py-6 px-4 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Block */}
        <header className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            विश्व की पहली भरोसेमंद वेबसाइट
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Satta Matka <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">dpb</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm mt-2">sattamatkadpb.com</p>
        </header>

        {/* Info Box */}
        <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Platform Overview</h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
            sattamatkadpb is India's fastest and most trusted platform for
            DPBoss Satta Matka result — Kalyan Matka, Milan Day Night, Rajdhani
            Day Night, Main Bazar, Time Bazar and 50+ markets — all updated
            daily at lightning speed, 100% free. Get live Kalyan Matka result,
            DPBoss 143 guessing, free Matka Guessing Forum, complete Jodi Chart
            and Panel Chart records from 1974 to 2026, Morning Syndicate result,
            Syndicate Night result, Date Fix Matka and weekly jodi predictions —
            everything in one place.
          </p>
        </section>

        {/* Lucky Numbers Widget */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Today's Lucky Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
              <div className="pt-4 sm:pt-0">
                <span className="text-xs font-medium text-slate-400 block uppercase tracking-wider mb-1">Ank (शुभांक)</span>
                <span className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {appData?.data?.Ank ?? "2-5-7-8"}
                </span>
              </div>
              <div className="pt-4 sm:pt-0 sm:pl-6">
                <span className="text-xs font-medium text-slate-400 block uppercase tracking-wider mb-1">Final Ank</span>
                <span className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {appData?.data?.FinalAnk ?? "K-5, M-*"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Download Strip */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">अब मटका खेलना हुआ आसान !</h3>
            <p className="text-sm text-slate-600 mt-1">घर बैठे खेलो मोबाइल एप्लीकेशन पे और जीतो ढेर सारी धनराशि।</p>
          </div>
          <button
            onClick={() => appData?.data?.apk_url && window.open(appData.data.apk_url, "_blank")}
            className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm whitespace-nowrap active:scale-98"
          >
            Play Online Matka
          </button>
        </section>

        {/* Main Feed Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Active Live Updates Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                📡 Live Feed
              </h2>
              <Image src={download} alt="Live Icon" width={24} height={24} className="opacity-70" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-100">
              {isLoading && (
                <div className="p-12 text-center text-slate-400 font-medium animate-pulse">
                  Fetching marketplace stream...
                </div>
              )}

              {isError && (
                <div className="p-8 text-center space-y-3">
                  <p className="text-slate-500 font-medium text-sm">Failed to sync feed updates</p>
                  <button onClick={() => refetch()} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-lg transition">
                    Retry Stream
                  </button>
                </div>
              )}

              {!isLoading && !isError && marketList
                ?.filter((item: any) => [
                  "SRIDEVI", "TIME BAZAR", "MILAN DAY", "RAJDHANI DAY", "KALYAN",
                  "SRIDEVI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"
                ].includes(item?.name))
                ?.filter((item: any) => {
                  if (item.result === "Loading...") return false;
                  const now = new Date();
                  const convertToDate = (timeString: string) => {
                    if (!timeString) return null;
                    const [time, modifier] = timeString.split(" ");
                    let [hours, minutes] = time.split(":").map(Number);
                    if (modifier === "PM" && hours !== 12) hours += 12;
                    if (modifier === "AM" && hours === 12) hours = 0;
                    const date = new Date();
                    date.setHours(hours, minutes, 0);
                    return date;
                  };
                  const openTime = convertToDate(item.open_time);
                  const closeTime = convertToDate(item.close_time);
                  if (!openTime || !closeTime) return false;
                  closeTime.setMinutes(closeTime.getMinutes() + 10);
                  return now >= openTime && now <= closeTime;
                })
                ?.map((item: any, index: number) => (
                  <div key={index} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                    <div className="text-center sm:text-left">
                      <h4 className="font-bold text-slate-900 tracking-tight text-lg">{item.name}</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{item.open_time} - {item.close_time}</p>
                    </div>
                    <span className="text-2xl font-black text-indigo-600 font-mono tracking-wider bg-indigo-50/50 px-4 py-1.5 rounded-xl border border-indigo-100/30">
                      {item.result}
                    </span>
                    <button
                      onClick={async () => {
                        setRefreshingIndex(index);
                        await refetch();
                        setRefreshingIndex(null);
                      }}
                      disabled={refreshingIndex === index}
                      className="w-full sm:w-auto text-xs bg-slate-100 hover:bg-slate-200 disabled:bg-slate-50 text-slate-700 font-semibold px-4 py-2.5 rounded-xl transition"
                    >
                      {refreshingIndex === index ? "Updating..." : "Refresh"}
                    </button>
                  </div>
                ))}
            </div>

            {/* Static Complete Stream */}
            <div className="mt-6">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight px-2 mb-4">📶 Live Board</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {!isLoading && !isError && marketList
                  ?.filter((item: any) => [
                    "SRIDEVI", "TIME BAZAR", "MILAN DAY", "RAJDHANI DAY", "KALYAN",
                    "SRIDEVI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"
                  ].includes(item?.name))
                  ?.map((item: any, index: number) => (
                    <div 
                      key={index} 
                      className={`p-5 rounded-2xl border transition-all shadow-sm ${
                        item?.bg_yellow_status == 1 
                          ? "bg-amber-50/70 border-amber-200/60" 
                          : "bg-white border-slate-100"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Market Board</span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">Live</span>
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-lg uppercase tracking-tight">{item?.name}</h4>
                      <div className="my-3 font-mono text-2xl font-black text-slate-800 tracking-widest">{item?.result}</div>
                      <p className="text-xs font-medium text-slate-400 mb-4">Open {item?.open_time} - Close {item?.close_time}</p>
                      
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                        <Link href={`/jodi-chart/${item?.name?.toLowerCase()?.replace(/\s+/g, "-")}-chart`} className="w-full">
                          <button className="w-full text-xs font-bold text-center bg-slate-50 hover:bg-indigo-50 text-indigo-600 py-2 rounded-xl transition">Jodi</button>
                        </Link>
                        <Link href={`/panel-chart/${item?.name?.toLowerCase()?.replace(/\s+/g, "-")}-chart`} className="w-full">
                          <button className="w-full text-xs font-bold text-center bg-slate-50 hover:bg-pink-50 text-pink-600 py-2 rounded-xl transition">Panel</button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Forum and Fast Channels */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">Community Channels</h3>
              <div className="space-y-2.5">
                {forumLinks.map((item, index) => {
                  const isTelegram = item.title === "Join Telegram Channel";
                  return (
                    <div key={index} className="group border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/20 rounded-xl p-3 transition-all">
                      <div className="flex items-center gap-3">
                        <Image src={item.image} alt="" width={24} height={24} className="rounded-lg object-contain" />
                        {isTelegram ? (
                          <a href={appData?.data?.telegram_channel || "#"} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                            {item?.title}
                          </a>
                        ) : (
                          <Link href={item.url} className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                            {item?.title}
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Chart Archive List */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-4">Historical Archives</h3>
              <div className="max-h-[340px] overflow-y-auto pr-1 space-y-1 scrollbar-thin">
                {!isLoading && !isError && marketList
                  ?.filter((item: any) => [
                    "SRIDEVI", "TIME BAZAR", "MILAN DAY", "RAJDHANI DAY", "KALYAN",
                    "SRIDEVI NIGHT", "MILAN NIGHT", "RAJDHANI NIGHT", "KALYAN NIGHT", "MAIN BAZAR"
                  ].includes(item?.name))
                  ?.map((item: any, index: number) => (
                    <a
                      key={index}
                      href={`/jodi-chart/${item?.name.toLowerCase().replace(/\s+/g, "-")}-chart`}
                      className="block text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 px-3 py-2.5 rounded-xl transition"
                    >
                      {item?.name} Record
                    </a>
                  ))}
              </div>
            </div>

            {/* Support Desk */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl p-6 shadow-md text-center">
              <h3 className="font-bold text-base mb-1">Helpdesk Support</h3>
              <p className="text-xs text-indigo-100 mb-4">Reach out to our platform managers directly</p>
              <div className="bg-white/10 backdrop-blur-md rounded-xl py-2.5 px-4 font-mono text-sm tracking-wide select-all border border-white/10">
                {appData?.data?.support_email}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Accordion Area */}
        <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-6">Frequently Answered Queries</h3>
          <div className="space-y-3">
            {faqData2.map((item, index) => (
              <div key={index} onClick={() => toggle(index)} className="border border-slate-100 rounded-xl overflow-hidden transition-all cursor-pointer bg-slate-50/50">
                <div className="flex items-center justify-between p-4 text-left select-none">
                  <span className="text-sm font-bold text-slate-800">{item.question}</span>
                  <span className={`text-slate-400 transition-transform duration-200 ${active === index ? 'rotate-180' : ''}`}>▼</span>
                </div>
                <div className={`transition-all duration-300 ${active === index ? "max-h-[300px] border-t border-slate-100" : "max-h-0 opacity-0"}`}>
                  <p className="p-4 text-xs sm:text-sm text-slate-500 leading-relaxed bg-white">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer Area */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white border border-slate-200/70 text-slate-500 rounded-2xl p-6 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Legal Disclaimer</h4>
            <p className="leading-relaxed">
              यह वेबसाइट (sattamatkadpb) केवल मनोरंजन और सूचना के उद्देश्य के लिए है। हम किसी भी अवैध व्यवसाय से नहीं जुड़े हैं। यहाँ दिखाए गए सभी परिणाम इंटरनेट पर उपलब्ध डेटा पर आधारित हैं।
            </p>
          </div>
          <div className="bg-white border border-slate-200/70 text-slate-500 rounded-2xl p-6 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Live Stream Tracker</h4>
            <p className="leading-relaxed">
              यदि आप इंटरनेट पर सबसे तेज़ कल्याण मटका रिजल्ट और DPBoss गेसिंग खोज रहे हैं, तो आप सही जगह पर हैं। हमारी वेबसाइट आपको मिलन डे, मिलन नाइट परिणाम बिना किसी देरी के प्रदान करती है।
            </p>
          </div>
        </section>

        {/* Professional Footer Structure */}
        <footer className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-lg">sattamatkadpb</h3>
              <p className="text-xs text-slate-400 font-medium">Platform Infrastructure Governance &copy; 2012 - 2026</p>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-0.5">Technical Operator</span>
              <span className="font-bold text-slate-800 text-base">FAST BOSS SIR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-500">
            <a href="/satta-matka-chart" className="hover:text-indigo-600 transition">Satta Matka Chart</a>
            <a href="/tara-matka-mumbai" className="hover:text-indigo-600 transition">Tara Matka</a>
            <a href="/fix-matka-number" className="hover:text-indigo-600 transition">Fix Matka</a>
            <a href="/about-us" className="hover:text-indigo-600 transition">About Us</a>
            <a href="/privacy-policy" className="hover:text-indigo-600 transition">Privacy Policy</a>
            <a href="/disclaimer" className="hover:text-indigo-600 transition">Disclaimer</a>
            <a href="/contact" className="hover:text-indigo-600 transition">Contact Us</a>
            <span className="text-slate-700 font-mono select-all bg-slate-50 px-2 py-1 rounded border border-slate-100 text-center">
              {appData?.data?.whatsapp_number ?? "1234567890"}
            </span>
          </div>

          {/* Quality Rating Matrix */}
          <div className="bg-slate-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-800">4.9</span>
              <div className="text-amber-400 tracking-tighter text-sm">★★★★★</div>
              <span className="text-xs text-slate-400 font-medium">(Based on 14,850 regular votes)</span>
            </div>
            <p className="text-xs text-slate-400 font-medium text-center sm:text-right">Fastest Results and Accurate Charts trusted by thousands daily.</p>
          </div>
        </footer>
      </div>

      {/* Floating Action Bars */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-xl shadow-lg border border-slate-200/50">
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-lg text-xs font-bold transition">
          Fast Result
        </button>
        <button
          onClick={() => appData?.data?.apk_url && window.open(appData.data.apk_url, "_blank")}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-lg text-xs font-bold transition"
        >
          Matka Play
        </button>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => refetch()}
          className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold shadow-md transition"
        >
          Refresh Stream
        </button>
      </div>
    </main>
  );
}