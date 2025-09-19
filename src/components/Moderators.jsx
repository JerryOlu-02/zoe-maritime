import "./styles/Moderators.scss";
import { moderators } from "../helpers/details";

export default function Moderators() {
  const moderatorItem = moderators.map((item, index) => {
    return (
      <div className="moderator-item" key={index}>
        <img
          src={item.image}
          alt={`${item.name}__image`}
          className="moderator-item__image"
        />

        <div className="moderator-item__desc">
          <h5>{item.name}</h5>

          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="moderators">
      <aside className="moderators-header">
        <h3>Meet The Moderators</h3>
      </aside>

      <aside className="moderators-item__wrapper">{moderatorItem}</aside>
    </section>
  );
}
