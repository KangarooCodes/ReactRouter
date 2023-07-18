import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/sushi">
        Sushi
      </NavLink>
      <NavLink exact to="/burrito">
        Burrito
      </NavLink>
      <NavLink exact to="/cocacola">
        Coca Cola
      </NavLink>
    </nav>
  );
}

export default NavBar;
