import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen, toggleTheme } from "@/features/ui/uiSlice";
import { RootState } from "@/app/store";

export default function Navbar() {
  const dispatch = useDispatch();
  const { navOpen, theme } = useSelector((s: RootState) => s.ui);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">MyPortfolio</NavLink>

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
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/resume">Résumé</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>

          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(toggleTheme())}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
