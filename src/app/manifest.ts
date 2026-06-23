import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Clarksville Homes",
    description:
      "A buyer and seller guide to Clarksville, the historic neighborhood in Austin, Texas (78703), with live MLS listings and original local expertise.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#2e3d30",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
