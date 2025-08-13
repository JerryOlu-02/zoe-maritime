import "./styles/Limweek.scss";
import LimweekImg from "../assets/images/limweek.png";
import Button, { ArrowUp } from "../reusable-components/Button";
import { useEffect, useRef } from "react";
import useSectionContext from "../helpers/useSectionContext";

export default function Limweek() {
  const eventRef = useRef(null);

  const { activateEventRef } = useSectionContext();

  useEffect(() => {
    activateEventRef(eventRef);
  }, []);

  return (
    <section ref={eventRef} className="limweek">
      <aside className="limweek__image">
        <img src={LimweekImg} alt="Limweek__image" />
      </aside>

      <aside className="limweek__content">
        <h2>Lagos International Maritime Week (LIMWEEK) 2025</h2>

        <div className="limweek__description">
          <p>
            LIMWEEK 2025 will feature high-level discussions, exhibitions, and
            networking opportunities aimed at unlocking Africa’s ocean economy
            through innovation, collaboration, and sustainable maritime
            practices.
          </p>

          <Button className="arrow">
            Register For Event <ArrowUp />
          </Button>
        </div>
      </aside>
    </section>
  );
}
