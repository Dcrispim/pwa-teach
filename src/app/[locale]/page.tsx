
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

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params
  setRequestLocale(locale)
  return (
    <div className="xl:container flex flex-col justify-between py-8 overflow-hidden">
      <HeaderMenu/>
      <FirstSection/>
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