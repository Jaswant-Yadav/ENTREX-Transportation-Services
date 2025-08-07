import Certificate from "../components/Certificate";
import ClientSay from "../components/ClientSay";
import ContactOffer from "../components/Contact/ContactOffer";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import News from "../components/News";
import BookingHero from "../components/Services/BookingHero";
import ServicesBest from "../components/Services/ServicesBest";
import ServicesServe from "../components/Services/ServicesServe";
import ServicesWork from "../components/Services/ServicesWork";
import ServiceWhyEntrex from "../components/Services/ServiceWhyEntrex";
import TrustedCompanies from "../components/TrustedCompany";


export default function Services(){

    return(
        <div>
            <Navtop />
            <Navbar />
            <BookingHero />
            <ContactOffer />
            <ServiceWhyEntrex />
            <ServicesBest />
            <ServicesWork />
            <ServicesServe />
            <ClientSay />
            <TrustedCompanies />
            <Certificate />
            <FAQ />
            <News />
            <LetsTalk />
            <Footer />
        </div>
    )
}