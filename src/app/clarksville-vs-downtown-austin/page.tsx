import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ComparisonView } from "@/components/ComparisonView";
import { getGuide } from "@/lib/content/guides";

const guide = getGuide("clarksville-vs-downtown-austin")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville vs Downtown Austin | House or High-Rise?",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function Page() {
  return <ComparisonView slug="clarksville-vs-downtown-austin" />;
}
