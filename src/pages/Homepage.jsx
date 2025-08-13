import About from "../components/About";
import CoreServices from "../components/CoreServices";
import Faqs from "../components/Faqs";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Limweek from "../components/Limweek";
import PastEvents from "../components/PastEvents";
import ProgramTimeline from "../components/ProgramTimeline";
import Roundtable from "../components/Roundtable";
import Speakers from "../components/Speakers";
import Sponsor from "../components/Sponsor";
import WhoAttend from "../components/WhoAttend";
import Footer from "../reusable-components/Footer";

export default function () {
  return (
    <>
      <Hero />

      <About />

      <CoreServices />

      <Limweek />

      <ProgramTimeline />

      <WhoAttend />

      <Roundtable />

      <Speakers />

      <Highlights />

      <Sponsor />

      <Faqs />

      <PastEvents />

      <Footer />
    </>
  );
}
