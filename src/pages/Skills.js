import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import content from "@/data/content.json";
import { SkillStars } from "@/components/SkillStars";
const data = content;
export default function Skills() {
  return _jsxs("section", {
    children: [
      _jsx("h2", { className: "mb-4", children: "Skills" }),
      _jsx("div", {
        className: "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",
        children: data.skills.map((s) =>
          _jsx(
            "div",
            {
              className: "col",
              children: _jsxs("div", {
                className: "card h-100 border-success project-card",
                children: [
                  _jsx("div", {
                    className: "card-body",
                    children: _jsx("h5", { className: "card-title", children: s.name }),
                  }),
                  _jsx("div", {
                    className: "card-footer d-flex",
                    children: _jsx(SkillStars, { name: s.name, rating: s.rating }, s.name),
                  }),
                ],
              }),
            },
            s.name
          )
        ),
      }),
    ],
  });
}
