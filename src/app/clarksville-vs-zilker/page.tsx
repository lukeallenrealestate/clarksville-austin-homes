import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ComparisonView } from "@/components/ComparisonView";
import { getGuide } from "@/lib/content/guides";

const guide = getGuide("clarksville-vs-zilker")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville vs Zilker | Historic Village or Park Life?",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function Page() {
  return <ComparisonView slug="clarksville-vs-zilker" />;
}
