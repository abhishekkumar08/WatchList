import { NavLink } from "react-router-dom";
import "./header.style.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">WatchList</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addMovie">Add Movie</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
