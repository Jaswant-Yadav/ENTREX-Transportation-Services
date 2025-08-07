
import ContactHero from "../components/Contact/ContactHero";
import ContactOffer from "../components/Contact/ContactOffer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import TrustedCompanies from "../components/TrustedCompany";


export default function contact(){
    return(
        <div>
            <Navtop />
            <Navbar />
            <ContactHero />
            <ContactOffer />
            <TrustedCompanies />
            <Footer />
        </div>
    )
}