import { ArrowUp } from "../reusable-components/Button";
import { ReactComponent as CheckMark } from "../assets/svg/checkmark.svg";
import { ReactComponent as Dot } from "../assets/svg/dot.svg";
import { ReactComponent as ConferenceSvg } from "../assets/svg/conference.svg";
import { ReactComponent as ExhibitionSvg } from "../assets/svg/exhibition.svg";
import { ReactComponent as AdvertSvg } from "../assets/svg/advert.svg";

import Button from "../reusable-components/Button";
import "./styles/Highlights.scss";

export default function Highlights() {
  return (
    <section className="highlights">
      <h2>Event Highlights & Opportunities</h2>

      <aside className="highlights__list">
        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>Conference Fee</h3>
              <p>₦195,000 per delegate</p>
            </div>

            <p className="highlight__content-description">
              The fee ensures participants gain valuable insights, networking
              opportunities, and a complete conference experience in a
              professional and comfortable environment.
            </p>
          </div>

          <ul className="highlight__benefit">
            <li>
              <CheckMark />
              Conference Materials
            </li>
            <li>
              <CheckMark />
              Tea breaks and Lunch
            </li>
            <li>
              <CheckMark />
              Certificate of Attendance
            </li>
          </ul>

          <Button className="arrow">
            Contact Us <ArrowUp />
          </Button>

          <ConferenceSvg className="conference" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>Exhibition Opportunities</h3>
              <p>₦450,000 per booth</p>
            </div>

            <p className="highlight__content-description">
              Dedicated exhibition booths will be available for industry
              stakeholders to showcase their brand, products, and services to a
              wide audience of maritime professionals.
            </p>
          </div>

          <ul className="highlight__benefit">
            <li>
              <CheckMark />1 Table and 2 Chairs
            </li>
            <li>
              <CheckMark />2 Spotlights
            </li>
            <li>
              <CheckMark />1 Power Socket
            </li>
          </ul>

          <Button className="arrow">
            Contact Us <ArrowUp />
          </Button>

          <ExhibitionSvg className="exhibition" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>
                Advertisement in
                <br /> conference brochure
              </h3>
            </div>

            <p className="highlight__content-description">
              Promote your brand, services, or products by placing an advert in
              the official conference brochure. This brochure is distributed to
              all attendees, including key stakeholders in the maritime
              industry.
            </p>
          </div>

          <div className="highlight__benefit-container">
            <ul className="highlight__benefit">
              <li>
                <Dot />
                Back Page - <strong>₦400,000</strong>
              </li>
              <li>
                <Dot />
                Half Page - <strong>₦250,000</strong>
              </li>
              <li>
                <Dot />
                Rollup Stand - <strong>₦400,000</strong>
              </li>
            </ul>

            <ul className="highlight__benefit">
              <li>
                <Dot />
                Centre Spread - <strong>₦350,000</strong>
              </li>
              <li>
                <Dot />
                Quarter Page - <strong>₦150,000</strong>
              </li>
            </ul>
          </div>

          <Button className="arrow">
            Contact Us <ArrowUp />
          </Button>

          <AdvertSvg className="advert" />
        </div>
      </aside>
    </section>
  );
}
