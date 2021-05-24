import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <nav className="NAV">
          <h3>logo</h3>
          <ul className="Nav-link">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/Shop">
              <li>Shop</li>
            </Link>
            <Link to="/A">
              <li>suggestion</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
