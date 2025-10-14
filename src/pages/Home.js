import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import content from "@/data/content.json";
const data = content;
export default function Home() {
  return _jsxs("section", {
    children: [
      _jsx("h2", { className: "mb-4" }),
      _jsxs("div", {
        className: "row align-items-center",
        children: [
          _jsx("div", {
            className: "col-auto",
            children: _jsx("img", {
              className: "rounded-circle",
              src: "/profile.jpg",
              alt: data.name,
              width: "120",
              height: "120",
            }),
          }),
          _jsxs("div", {
            className: "col",
            children: [
              _jsx("h1", { className: "fw-bold mb-1", children: data.name }),
              _jsxs("p", {
                className: "text-muted mb-2",
                children: [data.title, " \u2022 ", data.location],
              }),
              _jsx("p", { className: "lead mb-3", children: data.summary }),
              _jsxs("div", {
                className: "d-flex flex-wrap gap-2",
                children: [
                  _jsx("a", {
                    className: "btn btn-outline-secondary",
                    href: `mailto:${data.links.email}`,
                    children: "Email",
                  }),
                  _jsx("a", {
                    className: "btn btn-outline-secondary",
                    href: data.links.github,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "GitHub",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
