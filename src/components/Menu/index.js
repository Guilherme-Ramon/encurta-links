import "./menu.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://github.com/Guilherme-Ramon">
        <BsGithub color="#fff" size={24} />
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/guilherme-ramon-bb9b41338/"
      >
        <BsLinkedin color="#fff" size={24} />
      </a>
      <Link to="/links" className="menu-item">
        Meus Links
      </Link>
    </div>
  );
}
