import "./styles/Faqs.scss";
import { useState } from "react";
import { FAQS as faqs } from "../helpers/details";
import { ReactComponent as Plus } from "../assets/svg/plus.svg";
import FaqImage from "../assets/images/faq-image.png";
import { useRef, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext";

export default function Faqs() {
  const faqRef = useRef(null);

  const { activateFaqRef } = useSectionContext();

  useEffect(() => {
    activateFaqRef(faqRef);
  }, []);

  const renderFaqs = faqs.map((faq, index) => {
    const [isOpen, setIsOpen] = useState(false);

    if (index === 0 && !isOpen) setIsOpen(true);

    const handleFaQVisibility = function () {
      setIsOpen((open) => (open ? false : !open));
    };

    return (
      <div key={index} className="faq-container">
        <div className="faq-container__content">
          <h5>{faq.question}</h5>

          <p className={`faq-answer ${isOpen && "open"}`}>{faq.answer}</p>
        </div>

        <div
          onClick={() => handleFaQVisibility()}
          className={`faq-btn ${isOpen && "open"}`}
        >
          <Plus />
        </div>
      </div>
    );
  });

  return (
    <section ref={faqRef} className="faqs">
      <aside className="faq__image">
        <img src={FaqImage} alt="FAQ__Image" />
      </aside>

      <aside className="faq__content">
        <h2>
          <span>Got a Question?</span> <br />
          We've Got Your Back.
        </h2>

        <div className="faq__list">{renderFaqs}</div>
      </aside>
    </section>
  );
}
