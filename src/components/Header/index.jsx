import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div>
      <header className="nav-bar">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/produto`}>Produtos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
