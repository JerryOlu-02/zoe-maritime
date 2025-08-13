import { useEffect, useRef } from "react";
import "./styles/About.scss";
import useSectionContext from "../helpers/useSectionContext";

export default function About() {
  const aboutRef = useRef(null);
  const { activateAboutRef } = useSectionContext();

  useEffect(() => {
    activateAboutRef(aboutRef);
  }, []);

  return (
    <section ref={aboutRef} className="about">
      <div className="about__content">
        <p>
          ZOE Maritime Resources Ltd. is a Nigerian-based consultancy that
          provides strategic services in the maritime sector. The company
          focuses on advocacy, training, event management, research, and youth
          empowerment, with the overarching goal of supporting sustainable
          growth in Africa’s blue economy.
        </p>
      </div>
    </section>
  );
}
