import Script from "next/script";
import { ANALYTICS } from "@/lib/site";

/**
 * Loads GA4 and the Meta Pixel after the page is interactive. Both are no-ops
 * until their IDs are set, so the site runs fine before analytics is wired.
 * GA4 ID comes from NEXT_PUBLIC_GA4_ID; the Pixel ID is the shared AMDG pixel.
 */
export function Analytics() {
  const { ga4, metaPixel } = ANALYTICS;

  return (
    <>
      {ga4 ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4}');`}
          </Script>
        </>
      ) : null}

      {metaPixel ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixel}');
fbq('track', 'PageView');`}
        </Script>
      ) : null}
    </>
  );
}
