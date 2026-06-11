import { Metadata } from "next";
import SattaMatkaChartClient from "./SattaMatkaChartClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Chart 2026 – Jodi & Panel All Markets`,
    description: `Get complete Satta Matka Chart 2026 — Kalyan, Milan, Rajdhani, Main Bazar & 30+ markets.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com//chart/satta-matka-chart`,
    },
  };
}

export default function Page() {
  return <SattaMatkaChartClient />;
}