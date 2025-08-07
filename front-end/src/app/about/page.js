import AboutMission from "../components/About/AbooutMission";
import AboutFounders from "../components/About/AboutFounder";
import AboutHero from "../components/About/AboutHero";
import AboutJoinTeam from "../components/About/AboutJoinTeam";
import AboutStory from "../components/About/AboutStory";
import Certificate from "../components/Certificate";
import ClientSay from "../components/ClientSay";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import News from "../components/News";
import OurJourney from "../components/About/OurJourney";
import TrustedCompanies from "../components/TrustedCompany";

// /src/pages/about/page.js
export default function About() {
  return (
    <div>
      <Navtop />
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutFounders />
      <AboutJoinTeam />
      <OurJourney />
      <ClientSay />
      <TrustedCompanies />
      <Certificate />
      <FAQ />
      <News />
      <LetsTalk />
      <Footer />
    </div>
  );
}
