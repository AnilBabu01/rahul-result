import TaraMatkaChart from "./TaraMatkaChart";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `TARA MATKA | TARA NIGHT | TARA MUMBAI DAY - SATTA MATKA`,
    description: `Play Tara Matka on DPBoss – Get Tara Mumbai Day Matka result, jodi chart, panel chart & paper chart. India's most trusted platform for Tara Mumbai Day Satta Matka records.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com/chart/weekly-jodi-panna`,
    },
  };
}

export default function Home() {
  return <TaraMatkaChart />;
}
