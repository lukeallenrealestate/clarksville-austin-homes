/**
 * JSON-LD structured-data builders. Each returns a plain object that the
 * <JsonLd> component serializes into a script tag. Built to validate against
 * Google's Rich Results Test and the Schema Markup Validator. Nothing here
 * claims the site is the official neighborhood, developer, HOA, or city entity.
 *
 * Entity strategy: one consistent @id per real-world thing (agent, brokerage,
 * the Clarksville Place), reused across pages so engines resolve a single graph.
 */
import { AGENT, NEIGHBORHOOD, NEIGHBORHOOD_VARIANTS, SITE_NAME, SITE_URL } from "./site";
import type { Listing } from "./listings";
import {
  REVIEWS,
  REVIEW_AGG,
  GOOGLE_PROFILE_URL,
  CLARKSVILLE_PROJECT,
} from "./content/realtor";

const agentId = `${SITE_URL}/about#realestateagent`;
const brokerageId = `${SITE_URL}/#brokerage`;
const placeId = `${SITE_URL}/neighborhood#place`;

/** WebSite + Sitelinks Search Box for the home page. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": brokerageId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/clarksville-homes-for-sale?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** RealEstateAgent + Person for Luke, linked to the brokerage Organization. */
export function agentSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": agentId,
        name: `${AGENT.name}, ${AGENT.brokerage}`,
        image: `${SITE_URL}/images/luke-allen.jpg`,
        telephone: AGENT.phone,
        email: AGENT.email,
        url: `${SITE_URL}/about`,
        areaServed: [
          { "@type": "Place", name: "Clarksville, Austin, Texas" },
          { "@type": "PostalCodeSpecification", postalCode: NEIGHBORHOOD.zip },
          { "@type": "City", name: "Austin, Texas" },
        ],
        memberOf: { "@id": brokerageId },
        worksFor: { "@id": brokerageId },
        knowsAbout: [
          "Clarksville Austin real estate",
          "Old West Austin historic homes",
          "78703 condominiums",
          "Austin historic landmark designation",
        ],
        ...(AGENT.sameAs.length ? { sameAs: AGENT.sameAs } : {}),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "Texas Real Estate Commission (TREC)",
          },
          identifier: AGENT.trecLicense,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#person`,
        name: AGENT.name,
        jobTitle: AGENT.title,
        email: AGENT.email,
        telephone: AGENT.phone,
        worksFor: { "@id": brokerageId },
        ...(AGENT.sameAs.length ? { sameAs: AGENT.sameAs } : {}),
      },
      {
        "@type": ["RealEstateAgent", "Organization"],
        "@id": brokerageId,
        name: AGENT.brokerage,
        url: SITE_URL,
        telephone: AGENT.phone,
        email: AGENT.email,
        areaServed: { "@type": "Place", name: "Austin, Texas" },
      },
    ],
  };
}

/** The Clarksville neighborhood as a Place, tied to Austin / Travis County / TX. */
export function placeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": placeId,
    name: "Clarksville, Austin, Texas",
    alternateName: NEIGHBORHOOD_VARIANTS,
    description:
      "Clarksville is a historic neighborhood in Austin, Texas (ZIP 78703), founded in 1871 by freedman Charles Clark and listed on the National Register of Historic Places in 1976. It sits west of downtown within the Old West Austin Historic District.",
    url: `${SITE_URL}/neighborhood`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: NEIGHBORHOOD.geo.lat,
      longitude: NEIGHBORHOOD.geo.lng,
    },
    containedInPlace: {
      "@type": "City",
      name: "Austin",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Travis County, Texas",
      },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "ZIP Code", value: NEIGHBORHOOD.zip },
      { "@type": "PropertyValue", name: "Founded", value: String(NEIGHBORHOOD.founded) },
      {
        "@type": "PropertyValue",
        name: "National Register of Historic Places",
        value: String(NEIGHBORHOOD.nationalRegisterYear),
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList for spoke pages. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

export type Faq = { q: string; a: string };

/** FAQPage for pages that carry a Q&A block. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const propertySubType: Record<Listing["propertyType"], string> = {
  "single-family": "SingleFamilyResidence",
  condo: "Apartment",
  townhouse: "Residence",
};

/** RealEstateListing for an active listing, with a typed Residence object. */
export function listingSchema(listing: Listing) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: `${listing.address}${listing.unit ? `, ${listing.unit}` : ""}, Clarksville, Austin`,
    url: `${SITE_URL}/clarksville-homes-for-sale/${listing.slug}`,
    ...(listing.description ? { description: listing.description } : {}),
    ...(listing.photos?.length
      ? { image: listing.photos.slice(0, 8).map((p) => `${SITE_URL}${p.src}`) }
      : {}),
    datePosted: listing.listDate,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    object: {
      "@type": propertySubType[listing.propertyType],
      numberOfBedrooms: listing.beds,
      numberOfBathroomsTotal: listing.baths,
      ...(listing.yearBuilt ? { yearBuilt: listing.yearBuilt } : {}),
      floorSize: {
        "@type": "QuantitativeValue",
        value: listing.sqft,
        unitCode: "FTK",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: listing.address,
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: NEIGHBORHOOD.zip,
        addressCountry: "US",
      },
    },
  };
}

/**
 * Rich profile schema for /clarksville-realtor: a ProfilePage whose mainEntity
 * is the enriched RealEstateAgent (same @id as the sitewide agent node, so
 * engines merge them) carrying AggregateRating, individual Reviews, education,
 * and an expanded knowsAbout. Reviews and rating are real, supplied by the
 * client from the verified Google Business Profile (do not fabricate).
 */
export function realtorProfileSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/clarksville-realtor#profilepage`,
    url: `${SITE_URL}/clarksville-realtor`,
    name: `${AGENT.name}, Clarksville Realtor`,
    about: { "@id": placeId },
    mainEntity: {
      "@type": ["RealEstateAgent", "Person"],
      "@id": agentId,
      name: AGENT.name,
      jobTitle: "Clarksville Real Estate Specialist",
      image: `${SITE_URL}/images/luke-allen.jpg`,
      url: `${SITE_URL}/clarksville-realtor`,
      telephone: AGENT.phone,
      email: AGENT.email,
      worksFor: { "@id": brokerageId },
      memberOf: [
        { "@id": brokerageId },
        { "@type": "Organization", name: "National Association of REALTORS" },
      ],
      alumniOf: { "@type": "CollegeOrUniversity", name: "The University of Texas at Austin" },
      birthPlace: { "@type": "Place", name: "Temple, Texas" },
      areaServed: [
        { "@type": "Place", name: "Clarksville, Austin, Texas" },
        { "@type": "PostalCodeSpecification", postalCode: NEIGHBORHOOD.zip },
        { "@type": "Place", name: "Old West Austin" },
      ],
      knowsAbout: [
        "Clarksville Austin real estate",
        "Old West Austin historic homes",
        "78703 condominiums and new construction",
        "Off-market real estate",
        "Luxury real estate",
        "Austin historic landmark designation",
        "Real estate development sales",
        "Asset management",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Texas Real Estate Commission (TREC)",
        },
        identifier: AGENT.trecLicense,
      },
      sameAs: [...AGENT.sameAs, GOOGLE_PROFILE_URL],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(REVIEW_AGG.ratingValue),
        reviewCount: String(REVIEW_AGG.reviewCount),
        bestRating: "5",
        worstRating: "1",
      },
      review: REVIEWS.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        datePublished: r.date,
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
        reviewBody: r.text,
      })),
    },
    // Luke's named affiliation with the development he sells, as a related entity.
    mentions: {
      "@type": "ApartmentComplex",
      name: CLARKSVILLE_PROJECT.name,
      url: CLARKSVILLE_PROJECT.url,
      numberOfAccommodationUnits: CLARKSVILLE_PROJECT.units,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1711 Enfield Road",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: NEIGHBORHOOD.zip,
        addressCountry: "US",
      },
    },
  };
}

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  image?: string;
};

/** Article for a guide/market page, authored by the agent. */
export function articleSchema(a: ArticleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/${a.slug}#article`,
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.updated ?? a.date,
    author: { "@id": agentId },
    publisher: { "@id": brokerageId },
    mainEntityOfPage: `${SITE_URL}/${a.slug}`,
    about: { "@id": placeId },
    image: `${SITE_URL}${a.image ?? "/images/clarksville-canopy.jpg"}`,
  };
}
