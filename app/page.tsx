import CenteredCTAText from "./components/ui/CenteredCTAText";
import CTA from "./components/ui/CTA";
import FAQs from "./components/ui/FAQs";
import Features from "./components/ui/Features";
import FooterCTA from "./components/ui/FooterCTA";
import Hero from "./components/ui/Hero";
import LogoGrid from "./components/ui/LogoGrid";
import Stats from "./components/ui/Stats";

export default function Home() {
  return ( <>


    <Hero />
    <LogoGrid />
    <CenteredCTAText />
    <CTA />
    <Features />
    <Stats />
    <FAQs />
    <FooterCTA />
  </>);
}
