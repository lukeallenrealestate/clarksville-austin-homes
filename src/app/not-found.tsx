import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-paper pt-24">
      <Container className="text-center">
        <p className="font-label text-brass-deep">404</p>
        <h1 className="font-display mt-4 text-5xl text-ink">This page wandered off West Lynn.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The page you are looking for is not here. Let&rsquo;s get you back to Clarksville.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-heritage">
            Home
          </Link>
          <Link href="/clarksville-homes-for-sale" className="btn btn-outline">
            Homes for sale
          </Link>
          <Link href="/neighborhood" className="btn btn-outline">
            Neighborhood guide
          </Link>
        </div>
      </Container>
    </section>
  );
}
