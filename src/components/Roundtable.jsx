import "./styles/Roundtable.scss";
import RoundTableImg from "../assets/images/roundtable-img.png";
import { ReactComponent as Visibility } from "../assets/svg/visibility.svg";
import { ReactComponent as Growth } from "../assets/svg/growth.svg";
import { ReactComponent as Network } from "../assets/svg/network.svg";
import { ReactComponent as Knowledge } from "../assets/svg/knowledge.svg";
import { useRef, useEffect } from "react";
import useSectionContext from "../helpers/useSectionContext";

export default function Roundtable() {
  const benefitRef = useRef(null);

  const { activateBenefitRef } = useSectionContext();

  useEffect(() => {
    activateBenefitRef(benefitRef);
  }, []);

  return (
    <section ref={benefitRef} className="roundtable">
      <aside className="roundtable__left">
        <h2>
          Roundtable
          <br /> Benefits at a <br />
          Glance
        </h2>

        <div className="roundtable__list">
          <div className="roundtable__item">
            <Visibility />

            <div className="roundtable__item-content">
              <p>Visibility</p>

              <p>
                Position your brand and voice in front of key maritime
                stakeholders and decision-makers.
              </p>
            </div>
          </div>

          <div className="roundtable__item">
            <Growth />

            <div className="roundtable__item-content">
              <p>Growth</p>

              <p>
                Explore new opportunities for collaboration, investment, and
                business development.
              </p>
            </div>
          </div>

          <div className="roundtable__item">
            <Network />

            <div className="roundtable__item-content">
              <p>Networking</p>

              <p>
                Connect with influential professionals across sectors in an
                informal, high-value setting.
              </p>
            </div>
          </div>

          <div className="roundtable__item">
            <Knowledge />

            <div className="roundtable__item-content">
              <p>Knowledge Exchange</p>

              <p>
                Share and gain practical insights on trends, challenges, and
                innovations in the maritime industry.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <aside className="roundtable__right">
        <img src={RoundTableImg} alt="Roundtable Image" />
      </aside>
    </section>
  );
}
