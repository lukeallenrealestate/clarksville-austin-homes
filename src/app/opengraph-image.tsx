import { ImageResponse } from "next/og";

/**
 * Site-wide Open Graph / Twitter card image, generated at the edge. Warm
 * Historic Luxury palette so shared links look on-brand. Per-page metadata
 * supplies the title/description text; this image is the consistent backdrop.
 */
export const runtime = "edge";
export const alt = "Clarksville Austin Homes, historic Old West Austin real estate (78703)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #2e3d30 0%, #1e1b16 100%)",
          color: "#fbf8f1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#b08d57",
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#b08d57",
            }}
          >
            Historic Old West Austin &middot; 78703
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "82px", lineHeight: 1.02, color: "#fbf8f1" }}>
            Clarksville Austin Homes
          </div>
          <div style={{ fontSize: "32px", marginTop: "20px", color: "#d8cfba", maxWidth: "900px" }}>
            Live MLS listings and original neighborhood expertise for Austin&rsquo;s oldest
            walk-to-everything neighborhood.
          </div>
        </div>

        <div style={{ fontSize: "26px", color: "#d8cfba" }}>
          Luke Allen &middot; Licensed Texas REALTOR &middot; Austin Marketing + Development Group
        </div>
      </div>
    ),
    size,
  );
}
