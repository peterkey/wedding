import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import OurStory from "./views/OurStory/OurStory";
import PhotoGallery from "./views/Gallery/GalleryV2";
import Upload from "./views/Upload/Upload";
import WeddingRSVPForm from "./views/RSVP/Rsvp";
import Contact from "./views/Contact/Contact";
import Details from "./views/Details/Details";
import Footer from "./components/Footer/Footer";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import PrivacyPolicy from "./views/Privacy/PrivacyPolicy";
import Admin from "./views/Admin/Admin";
import CookieConsent from "react-cookie-consent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Toaster position='top-center' />
          <CookieConsent
            buttonStyle={{ background: "#7f1734", color: "#e0e0e0" }}
            expires={150}
            buttonText='I Understand. No Worries!'
            overlay>
            This site uses Cookies. See our{" "}
            <a href='/Privacy&Cookies' className='text-[#7f1734] hover:text-[#ca7e93]'>
              Privacy Policy
            </a>{" "}
            to learn more!
          </CookieConsent>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/OurStory' element={<OurStory />} />
            <Route path='/Details' element={<Details />} />
            <Route path='/Gallery' element={<PhotoGallery />} />
            <Route path='/Upload' element={<Upload />} />
            <Route path='/RSVP' element={<WeddingRSVPForm />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Privacy&Cookies' element={<PrivacyPolicy />} />
          </Routes>
          <CountdownTimer />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
