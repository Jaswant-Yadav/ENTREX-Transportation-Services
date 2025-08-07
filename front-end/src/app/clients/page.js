import Certificate from "../components/Certificate";
import ClientTrust from "../components/Clients/ClientTrust";
import ClientSay from "../components/ClientSay";
import ContactOffer from "../components/Contact/ContactOffer";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";


export default function client(){

    return(
        <div>
            <Navtop />
            <Navbar />
            <ClientTrust />
            <ContactOffer />
            <ClientSay />
            <Certificate />
            <LetsTalk />
            <Footer />
        </div>
    )
}