/**
 * Renders a JSON-LD structured-data script. The `<` escaping prevents any stray
 * markup in the data from breaking out of the script tag (XSS guard), per the
 * Next.js JSON-LD guidance.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
