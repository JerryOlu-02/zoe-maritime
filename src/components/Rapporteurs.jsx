import "./styles/Rapporteurs.scss";
import RapporteurImg1 from "../assets/images/rapporteur-1.jpg";
import RapporteurImg2 from "../assets/images/rapporteur-2.jpg";

export default function Rapporteurs() {
  return (
    <section className="rapporteur">
      <aside className="rapporteur-header">
        <h2>Rapporteurs in Focus</h2>
      </aside>

      <aside className="rapporteur-item__wrapper">
        <div className="rapporteur-item">
          <img
            src={RapporteurImg1}
            alt={`rapporteur__image`}
            className="rapporteur-item__image"
          />

          <div className="rapporteur-item__desc">
            <h5>Ireti OLOYEDE</h5>

            <p>Managing Solicitor ,Doyenne Legal Practice (DLP)</p>
          </div>
        </div>

        <div className="rapporteur-item">
          <img
            src={RapporteurImg2}
            alt={`rapporteur__image`}
            className="rapporteur-item__image"
          />

          <div className="rapporteur-item__desc">
            <h5>Paschalmary CHIMEZIE</h5>

            <p>Senior Associate, Babajide Koku & Co.</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
