import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const infos = JSON.parse(localStorage.getItem("infos"));

  // TODO: caso não tenha localStorage desabilitar as outras opções

  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
          <li>
            <Link to={`/home`}>Home</Link>
          </li>
          <li>
            <Link to={`/contato`}>Contatos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
