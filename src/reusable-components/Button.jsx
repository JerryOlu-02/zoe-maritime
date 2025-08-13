import "./styles/Button.scss";
import { ReactComponent as IconUp } from "../assets/svg/arrow-up.svg";

export default function Button({ props, className, children, link, url }) {
  // This is a reusable button component
  // It can be used in different parts of the application

  const classes = `btn ${className}`;

  return link ? (
    <a href={url} target="_blank" rel="noreferrer" className={classes}>
      <p>{children}</p>
    </a>
  ) : (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

export function ArrowUp() {
  return (
    <div className="arrow-div">
      <IconUp />
    </div>
  );
}
