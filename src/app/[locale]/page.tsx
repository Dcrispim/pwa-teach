
import HeaderMenu from "@/components/header-menu";
import FirstSection from "@/sections/first-section";
import SectionEight from "@/sections/section-eight";
import SectionFive from "@/sections/section-five";
import SectionFour from "@/sections/section-four";
import SectionNine from "@/sections/section-nine";
import SectionSeven from "@/sections/section-seven";
import SectionSix from "@/sections/section-six";
import SectionThree from "@/sections/section-three";
import SectionTwo from "@/sections/section-two";
import { setRequestLocale } from 'next-intl/server';

import SectionFooter from "@/sections/section-footer";
import { getI18n } from "@/i18n/translation";
export const metadata = {
  title: "Online Teaching Platform | Teach Students Worldwide",
  description: "Join our all-in-one platform for global education. Teach students worldwide with innovative tools and resources.",
  keywords: ["online teaching", "education platform", "global students", "e-learning"],
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    siteName: 'Teach Platform',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Teach Platform Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Online Teaching Platform | Teach Students Worldwide",
    description: "Join our all-in-one platform for global education.",
    images: ['/twitter-og-image.jpg'],
  },
};
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const i18n = await getI18n()
  setRequestLocale(locale)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Teach Platform",
    "description": i18n("_Teach_ students worldwide"),
    "image": "/logo.png",
    "brand": {
      "@type": "Brand",
      "name": "Teach"
    }
  };

  return (
    <div className="xl:container flex flex-col justify-between py-8 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeaderMenu />
      <FirstSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />

      <SectionFooter />

    </div>
  );
}