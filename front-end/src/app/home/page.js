import Certificate from "../components/Certificate";
import ServiceDetails from "../components/Details";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InCar from "../components/InCar";
import LetsTalk from "../components/LetsTalk";
import Navtop from "../components/Navtop";
import News from "../components/News";
import OurServices from "../components/OurServices";
import TrustedCompanies from "../components/TrustedCompany";
import WhyEntrex from "../components/WhyEntrex";


export default function Home() {
  return (
    <>
    <Navtop />
    <Hero />
    <ServiceDetails />
    <OurServices />
    <InCar />
    <WhyEntrex />
    <TrustedCompanies />
    <Certificate />
    <FAQ />
    <News />
    <LetsTalk />
    <Footer />
    </>
  );
}