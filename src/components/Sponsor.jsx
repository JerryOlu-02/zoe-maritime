import "./styles/Sponsor.scss";
import Button from "../reusable-components/Button";
import { ReactComponent as CallSvg } from "../assets/svg/call.svg";

export default function Sponsor() {
  return (
    <section className="sponsor">
      <div className="sponsor__container">
        <aside className="sponsor__content">
          <h3>
            be a part
            <br /> LIMWEEK 2025 <br />
            SPONSOR
          </h3>

          <p>
            Join industry leaders as a sponsor and position your brand at the
            forefront of maritime excellence.
          </p>
        </aside>

        <Button>
          <CallSvg />
          Contact Us
        </Button>
      </div>
    </section>
  );
}
