import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import content from "@/data/content.json";
const data = content;
export default function Contact() {
  return _jsxs("section", {
    children: [
      _jsx("h2", { className: "mb-4", children: "Contact" }),
      _jsx("div", {
        className: "row g-4",
        children: _jsx("div", {
          className: "col-md-6",
          children: _jsxs("div", {
            className: "list-group",
            children: [
              _jsxs("a", {
                className: "list-group-item list-group-item-action contact-card",
                href: `mailto:${data.links.email}`,
                children: [_jsx("i", { className: "bi bi-envelope me-2" }), " ", data.links.email],
              }),
              data.links.github &&
                _jsxs("a", {
                  className: "list-group-item list-group-item-action contact-card",
                  href: data.links.github,
                  target: "_blank",
                  rel: "noreferrer",
                  children: [_jsx("i", { className: "bi bi-github me-2" }), " ", data.links.github],
                }),
              data.links.website &&
                _jsxs("a", {
                  className: "list-group-item list-group-item-action contact-card",
                  href: data.links.website,
                  target: "_blank",
                  rel: "noreferrer",
                  children: [_jsx("i", { className: "bi bi-globe me-2" }), " ", data.links.website],
                }),
            ],
          }),
        }),
      }),
    ],
  });
}
