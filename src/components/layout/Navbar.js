import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "@/features/ui/uiSlice";
import content from "@/data/content.json";
const data = content;
export default function Navbar() {
  const dispatch = useDispatch();
  const navOpen = useSelector((s) => s.ui.navOpen);
  return _jsx("nav", {
    className: "navbar navbar-expand-lg bg-body-tertiary border-bottom",
    children: _jsxs("div", {
      className: "container",
      children: [
        _jsx(NavLink, { className: "navbar-brand fw-bold", to: "/", children: data.name }),
        _jsx("button", {
          className: "navbar-toggler",
          type: "button",
          onClick: () => dispatch(setNavOpen(!navOpen)),
          "aria-label": "Toggle navigation",
          children: _jsx("span", { className: "navbar-toggler-icon" }),
        }),
        _jsx("div", {
          className: `collapse navbar-collapse ${navOpen ? "show" : ""}`,
          children: _jsxs("ul", {
            className: "navbar-nav me-auto mb-2 mb-lg-0",
            children: [
              _jsx("li", {
                className: "nav-item",
                children: _jsx(NavLink, {
                  className: "nav-link",
                  to: "/skills",
                  children: "Skills",
                }),
              }),
              _jsx("li", {
                className: "nav-item",
                children: _jsx(NavLink, {
                  className: "nav-link",
                  to: "/projects",
                  children: "Projects",
                }),
              }),
              _jsx("li", {
                className: "nav-item",
                children: _jsx(NavLink, {
                  className: "nav-link",
                  to: "/resume",
                  children: "Resume",
                }),
              }),
              _jsx("li", {
                className: "nav-item",
                children: _jsx(NavLink, {
                  className: "nav-link",
                  to: "/contact",
                  children: "Contact",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
