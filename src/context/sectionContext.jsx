import { createContext, useState } from "react";

const SectionContext = createContext();

const SectionProvider = function ({ children }) {
  const [aboutRef, setAboutRef] = useState();
  const [eventRef, setEventRef] = useState();
  const [benefitRef, setBenefitRef] = useState();
  const [speakersRef, setSpeakersRef] = useState();
  const [faqRef, setFaqRef] = useState();

  const activateFaqRef = function (ref) {
    setFaqRef(ref);
  };

  const activateBenefitRef = function (ref) {
    setBenefitRef(ref);
  };

  const activateSpeakersRef = function (ref) {
    setSpeakersRef(ref);
  };

  const activateAboutRef = function (ref) {
    setAboutRef(ref);
  };
  const activateEventRef = function (ref) {
    setEventRef(ref);
  };

  const data = {
    faqRef,
    benefitRef,
    speakersRef,
    aboutRef,
    eventRef,
    activateAboutRef,
    activateFaqRef,
    activateSpeakersRef,
    activateBenefitRef,
    activateEventRef,
  };

  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { SectionProvider };

export default SectionContext;
