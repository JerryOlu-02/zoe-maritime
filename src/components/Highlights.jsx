import { ArrowUp } from "../reusable-components/Button";
import { ReactComponent as CheckMark } from "../assets/svg/checkmark.svg";
import { ReactComponent as Dot } from "../assets/svg/dot.svg";
import { ReactComponent as ConferenceSvg } from "../assets/svg/conference.svg";
import { ReactComponent as ExhibitionSvg } from "../assets/svg/exhibition.svg";
import { ReactComponent as AdvertSvg } from "../assets/svg/advert.svg";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../reusable-components/Button";
import "./styles/Highlights.scss";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Highlights() {
  const container = useRef(null);
  const contentRef = useRef(null);

  return (
    <section ref={container} className="highlights">
      <h2>Event Highlights & Opportunities</h2>

      {/* <aside ref={contentRef} className="highlights__list">
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

          <Button
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <ConferenceSvg className="svg conference" />
        </div>
      </aside> */}

      <aside ref={contentRef} className="highlights__list two">
        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>Conference Fee 🇳🇬</h3>
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

          <Button
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <ConferenceSvg className="svg conference" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>Conference Fee 🇺🇸</h3>
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

          <Button
            link
            url={"https://mainstack.store/limweek2025/zoemaritime"}
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <ConferenceSvg className="svg conference" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>Exhibition Opportunities 🇳🇬</h3>
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

          <Button
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <ExhibitionSvg className="svg exhibition" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>Exhibition Opportunities 🇺🇸</h3>
              <p>$875 per booth</p>
            </div>

            <p className="highlight__content-description">
              Dedicated exhibition booths will be available for industry
              stakeholders to showcase their brand, products, and services to a
              wide audience of maritime professionals.
            </p>
          </div>

          <div className="highlight__benefit-container">
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
          </div>

          <Button
            link
            url={"https://mainstack.store/limweek2025/zoemaritime"}
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <AdvertSvg className="svg advert" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>
                Advertisement in
                <br /> conference
                <br /> brochure🇳🇬
              </h3>
            </div>

            <p className="highlight__content-description">
              Promote your brand, services, or products by placing an advert in
              the official conference brochure. This brochure is distributed to
              all attendees, including key stakeholders in the maritime
              industry.
            </p>
          </div>

          <ul className="highlight__benefit">
            <li>
              <Dot />
              Back Page - <strong> ₦400,000</strong>
            </li>
            <li>
              <Dot />
              Centre Spread - <strong>₦350,000</strong>
            </li>
            <li>
              <Dot />
              Half Page - <strong>₦250,000</strong>
            </li>
            <li>
              <Dot />
              Quarter Page - <strong>₦150,000</strong>
            </li>
            <li>
              <Dot />
              Rollup Stand - <strong>₦400,000</strong>
            </li>
          </ul>

          <Button
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <ConferenceSvg className="svg conference" />
        </div>

        <div className="highlight__item">
          <div className="highlight__content">
            <div>
              <h3>
                Advertisement in <br />
                conference
                <br /> brochure🇺🇸
              </h3>
              {/* <p>₦195,000 per delegate</p> */}
            </div>

            <p className="highlight__content-description">
              Promote your brand, services, or products by placing an advert in
              the official conference brochure. This brochure is distributed to
              all attendees, including key stakeholders in the maritime
              industry.
            </p>
          </div>

          <ul className="highlight__benefit">
            <li>
              <Dot />
              Back Page - <strong> $890</strong>
            </li>
            <li>
              <Dot />
              Centre Spread - <strong>$775</strong>
            </li>
            <li>
              <Dot />
              Half Page - <strong>$530</strong>
            </li>
            <li>
              <Dot />
              Quarter Page - <strong>$290</strong>
            </li>
            <li>
              <Dot />
              Rollup Stand - <strong>$110</strong>
            </li>
          </ul>

          <Button
            link
            url={"https://mainstack.store/limweek2025/zoemaritime"}
            className="arrow"
          >
            Pay Now <ArrowUp />
          </Button>

          <ConferenceSvg className="svg conference" />
        </div>
      </aside>
    </section>
  );
}
