import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ComparisonView } from "@/components/ComparisonView";
import { getGuide } from "@/lib/content/guides";

const guide = getGuide("clarksville-vs-west-lake-hills")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville vs West Lake Hills | Austin Comparison",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function Page() {
  return <ComparisonView slug="clarksville-vs-west-lake-hills" />;
}
