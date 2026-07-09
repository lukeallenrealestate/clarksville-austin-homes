import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getListingsByCategory, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Bungalows for Sale | Historic Austin 78703",
  description:
    "Craftsman bungalows and historic cottages for sale in Clarksville, Austin (78703). Deep porches, original details, and small walkable lots in a National Register district.",
  path: "/clarksville-bungalows-for-sale",
});

const FAQS = [
  {
    q: "Are there Craftsman bungalows in Clarksville, Austin?",
    a: "Yes. Clarksville's housing stock includes original and restored Craftsman bungalows and Victorian-era cottages, many dating to the late 1800s and early 1900s, alongside newer infill. These historic homes on small, walkable lots are a defining part of the neighborhood's character.",
  },
  {
    q: "How much do Clarksville bungalows cost?",
    a: "Restored Clarksville bungalows and cottages generally trade in the low-to-mid seven figures, with condition, lot, and location driving wide variation. Because inventory is scarce and many changes hands off-market, current availability is limited; contact Luke Allen for what is available now and what recently sold.",
  },
  {
    q: "Can I renovate or add on to a historic Clarksville bungalow?",
    a: "It depends on the specific address. A home with an individual City of Austin local historic landmark designation requires Historic Landmark Commission review for exterior changes, while a home with only National Register district status faces fewer binding restrictions. Always run a designation check before you buy a bungalow you plan to alter.",
  },
];

export default async function BungalowsPage() {
  const listings = await getListingsByCategory("bungalow");
  return (
    <ListingsView
      eyebrow="Bungalows & Cottages"
      title="Clarksville bungalows for sale"
      lead="Deep front porches, longleaf pine floors, and a century of stories. The historic cottages and Craftsman bungalows that give Clarksville its grain, on small, walkable lots."
      photo={PHOTOS.bungalow}
      listings={listings}
      lockedCategory="bungalow"
      asOf={DATA_AS_OF}
      crumbs={[
        { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
        { name: "Bungalows", path: "/clarksville-bungalows-for-sale" },
      ]}
      intro={
        <>
          <p>
            The bungalow is Clarksville&rsquo;s signature. When Charles Clark subdivided his land in
            1871 and sold parcels to other freedmen, the modest, human-scaled homes that followed set
            the grain of the streetscape that newer construction still has to respect. Today those
            surviving cottages and Craftsman bungalows, deep porches, board-and-batten siding,
            original pine floors, are among the most sought-after homes in central Austin.
          </p>
          <p>
            Buying one well takes more than a portal search. It takes a read on which homes carry a
            binding historic landmark designation versus only the honorific National Register status,
            because that single fact decides what you can change and what the home is worth to you.
            That designation check, and off-market access to bungalows before they list, is the work
            a Clarksville specialist does that a national site cannot.
          </p>
        </>
      }
      faqs={FAQS}
      related={[
        { href: "/clarksville-architecture", title: "Architecture & landmark rules", blurb: "Styles, and what you can and cannot change." },
        { href: "/insights/clarksville-historic-landmark-rules", title: "Historic landmark rules", blurb: "The designation check every buyer must run." },
        { href: "/clarksville-history", title: "The history of Clarksville", blurb: "Why these homes exist, and why they matter." },
      ]}
    />
  );
}
