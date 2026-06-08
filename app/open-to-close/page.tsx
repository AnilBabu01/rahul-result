import { Metadata } from "next";
import OpenToCloseClient from "./OpenToCloseClient";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Satta Matka Open To Close | Satta Matka Fix 3 Ank | 3ank Open | 3ank Close Satta Matka`,
    description: `Get daily Satta Matka Open To Close Fix 3 Ank on DPBoss covering all major markets. Accurate 3 Ank Open and Close numbers updated twice daily, completely free.`,
    alternates: {
      canonical: `https://sattamatkadpb.net/chart/open-to-close`,
    },
  };
}

export default function Page() {
  return <OpenToCloseClient />;
}
