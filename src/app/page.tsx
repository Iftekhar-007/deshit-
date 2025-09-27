import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import LogoGrid from "./components/LogoGrid";
import EnterpriseSection from "./components/EnterpriseSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AwardsSection from "./components/AwardsSection";
import OurClientSays from "./components/OurClientSays";
import Partnerships from "./components/partnerships";
import Endorsements from "./components/Endorsements";
import Specialize from "./components/Specialize";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <LogoGrid></LogoGrid>
      <EnterpriseSection></EnterpriseSection>
      <Partnerships></Partnerships>
      <WhyChooseUs></WhyChooseUs>
      <AwardsSection></AwardsSection>
      <OurClientSays></OurClientSays>
      <Endorsements></Endorsements>
      <Specialize></Specialize>
      <Portfolio></Portfolio>
      <Blogs></Blogs>
      <ContactSection></ContactSection>
    </div>
  );
}
