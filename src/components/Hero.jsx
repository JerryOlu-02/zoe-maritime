import Button, { ArrowUp } from "../reusable-components/Button";
import NavBar from "../reusable-components/Navbar";
import "./styles/Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <NavBar />

      <div className="hero__content">
        <div className="hero__description">
          <h1>
            Our Oceans,
            <br /> Our Seas,
            <br /> Our Obligations.
          </h1>

          <p>Maximizing Africa’s Ocean Resources</p>
        </div>

        <Button>
          Register For Event <ArrowUp />
        </Button>

        <div className="overlay"></div>
      </div>
    </section>
  );
}
