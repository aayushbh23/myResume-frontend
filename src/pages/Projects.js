import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import content from "@/data/content.json";
const data = content;
export default function Projects() {
  return _jsxs("section", {
    children: [
      _jsx("h2", { className: "mb-4", children: "Projects" }),
      _jsx("div", {
        className: "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",
        children: data.projects.map((p) =>
          _jsx(
            "div",
            {
              className: "col",
              children: _jsx("div", {
                className: "card h-100 border-success project-card",
                children:
                  p.projectURL &&
                  _jsxs("a", {
                    href: p.projectURL,
                    target: "_blank",
                    className: "text-decoration-none text-reset",
                    children: [
                      _jsx("img", {
                        className: "card-img-top project-image",
                        src: p.imageURL ?? "/placeholder.png",
                        alt: p.name,
                      }),
                      _jsxs("div", {
                        className: "card-body",
                        children: [
                          _jsx("h5", { className: "card-title", children: p.name }),
                          _jsx("p", { className: "card-text text-muted", children: p.description }),
                        ],
                      }),
                      _jsx("div", {
                        className: "card-footer d-flex justify-content-between align-items-center",
                        children: _jsx("strong", {
                          className: "text-success",
                          children: p.tech.join(" · "),
                        }),
                      }),
                    ],
                  }),
              }),
            },
            p._id
          )
        ),
      }),
    ],
  });
}
