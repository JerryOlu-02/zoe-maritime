import Button, { ArrowUp } from "./Button";
import "./styles/Navbar.scss";
import { ReactComponent as LogoSvg } from "../assets/svg/logo.svg";
import { ReactComponent as LogoDarkSvg } from "../assets/svg/logo-dark.svg";

import { useState, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext.js";

export default function NavBar() {
  //State to manage Navbar Content Visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((open) => (open ? false : true));
  };

  const activeClass = isOpen ? "open" : "";

  // Sticky event listener to handle sticky navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "sticky" : "";

  // Handle Smooth Scroll Into Section
  const handleScrollToSection = function (ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const { eventRef, speakersRef, aboutRef, faqRef, benefitRef } =
    useSectionContext();

  return (
    <nav className={`navbar ${stickyClass}`}>
      <h3 className="logo">
        {isSticky || isOpen ? <LogoDarkSvg /> : <LogoSvg />}
      </h3>

      <div className={`nav__container ${activeClass}`}>
        <ul className={`nav__links ${activeClass}`}>
          <li onClick={() => handleScrollToSection(aboutRef)}>About</li>
          <li onClick={() => handleScrollToSection(eventRef)}>The Event</li>
          <li onClick={() => handleScrollToSection(benefitRef)}>Benefits</li>
          <li onClick={() => handleScrollToSection(speakersRef)}>Speakers</li>
          <li onClick={() => handleScrollToSection(faqRef)}>FAQs</li>
        </ul>

        <div className={`btn__container ${activeClass}`}>
          <Button
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className={"btn-nav"}
          >
            Register For Event
          </Button>
        </div>
      </div>

      <div
        onClick={() => handleToggle()}
        className={`nav__hamburger ${activeClass}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
