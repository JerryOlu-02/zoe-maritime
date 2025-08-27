import "./styles/Footer.scss";
import Button, { ArrowUp } from "./Button";
import { ReactComponent as CallSvg } from "../assets/svg/call.svg";

export default function Footer() {
  return (
    <section className="footer">
      <aside className="footer__left">
        <h2>
          Our Oceans,
          <br /> Our Seas,
          <br /> Our Obligations.
        </h2>

        <div className="footer__buttons">
          <Button mail mailTo="zoemaritime@gmail.com">
            <CallSvg />
            Contact Us
          </Button>

          <Button
            link
            url={
              "https://tix.africa/lagos-international-maritime-week-limweek-2025"
            }
            className="arrow"
          >
            Register For Event <ArrowUp />
          </Button>
        </div>
      </aside>

      <aside className="footer__right">
        <p>+234 903 350 3240</p>
        <p>zoemaritime@gmail.com</p>
        <p>Location address</p>
      </aside>
    </section>
  );
}
