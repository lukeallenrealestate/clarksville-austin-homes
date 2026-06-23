import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ComparisonView } from "@/components/ComparisonView";
import { getGuide } from "@/lib/content/guides";

const guide = getGuide("clarksville-vs-pemberton-heights")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville vs Pemberton Heights | Austin Comparison (78703)",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function Page() {
  return <ComparisonView slug="clarksville-vs-pemberton-heights" />;
}
