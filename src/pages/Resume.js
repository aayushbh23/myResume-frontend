import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import content from "@/data/content.json";
const data = content;
function DateRange({ start, end }) {
  return _jsxs("span", { className: "text-muted", children: [start, " \u2013 ", end] });
}
export default function Resume() {
  return _jsxs("div", {
    className: "d-flex flex-column gap-4",
    children: [
      _jsxs("section", {
        id: "education",
        children: [
          _jsx("h2", { className: "mb-4", children: "Education" }),
          _jsx("ul", {
            className: "list-unstyled m-0",
            children: data.education.map((e) =>
              _jsxs(
                "li",
                {
                  className: "mb-2",
                  children: [
                    _jsx("strong", { children: e.school }),
                    " \u2014 ",
                    e.degree,
                    " (",
                    e.year,
                    ")",
                  ],
                },
                e._id
              )
            ),
          }),
        ],
      }),
      _jsxs("section", {
        id: "experience",
        children: [
          _jsx("h2", { className: "mb-4", children: "Experience" }),
          _jsx("div", {
            className: "row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4",
            children: data.experience.map((job) =>
              _jsx(
                "div",
                {
                  className: "col",
                  children: _jsx("div", {
                    className: "card h-100 border-success project-card",
                    children:
                      job.companyURL &&
                      _jsxs("a", {
                        href: job.companyURL,
                        target: "_blank",
                        className: "text-decoration-none text-reset",
                        children: [
                          _jsxs("div", {
                            className: "card-body d-flex justify-content-between align-items-start",
                            children: [
                              _jsxs("div", {
                                children: [
                                  " ",
                                  _jsx("h5", { className: "card-title", children: job.role }),
                                  _jsx("p", { className: "m-0 text-muted", children: job.company }),
                                ],
                              }),
                              _jsx(DateRange, { start: job.start, end: job.end }),
                            ],
                          }),
                          _jsx("div", {
                            className: "card-footer d-flex",
                            children: _jsx("ul", {
                              className: "mt-3 mb-0",
                              children: job.highlights.map((h, i) =>
                                _jsx("li", { children: h }, i)
                              ),
                            }),
                          }),
                        ],
                      }),
                  }),
                },
                job._id
              )
            ),
          }),
        ],
      }),
    ],
  });
}
