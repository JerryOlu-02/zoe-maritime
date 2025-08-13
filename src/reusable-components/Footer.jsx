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
          <Button>
            <CallSvg />
            Contact Us
          </Button>

          <Button className="arrow">
            Register For Event <ArrowUp />
          </Button>
        </div>
      </aside>

      <aside className="footer__right">
        <p>+2341234567890</p>
        <p>Email address </p>
        <p>Location address</p>
      </aside>
    </section>
  );
}
