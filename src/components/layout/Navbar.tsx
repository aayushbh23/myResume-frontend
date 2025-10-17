import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "@/features/ui/uiSlice";
import { RootState } from "@/app/store";

export default function Navbar() {
  const dispatch = useDispatch();
  const navOpen = useSelector<RootState, boolean>((s) => s.ui.navOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Ayush Bhandari
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => dispatch(setNavOpen(!navOpen))}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
