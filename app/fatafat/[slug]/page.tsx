import { Metadata } from "next";
import { games } from "@/data/games";
import FatafatClient from "@/components/FatafatClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const formattedSlug = slug.replace(/-/g, " ");

  return {
    title: `${formattedSlug} Chart Result`,
    description: `Get ${formattedSlug} satta matka chart, panel chart, jodi chart and daily result updates.`,
    alternates: {
      canonical: `https://sattamatkadpbos.com//jodi-chart/${slug}-chart`,
    },
  };
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.split("/").pop(),
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <FatafatClient slug={slug} />;
}
