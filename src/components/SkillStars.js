import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Star = ({ type }) => {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true };
  if (type === "full") {
    return _jsx("svg", {
      ...common,
      role: "img",
      className: "me-1 text-success",
      children: _jsx("path", {
        fill: "currentColor",
        d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
      }),
    });
  }
  if (type === "half") {
    return _jsxs("svg", {
      ...common,
      role: "img",
      className: "me-1 text-success",
      children: [
        _jsx("defs", {
          children: _jsxs("linearGradient", {
            id: "half",
            children: [
              _jsx("stop", { offset: "50%", stopColor: "currentColor" }),
              _jsx("stop", { offset: "50%", stopColor: "transparent" }),
            ],
          }),
        }),
        _jsx("path", {
          fill: "url(#half)",
          stroke: "currentColor",
          d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
        }),
      ],
    });
  }
  return _jsx("svg", {
    ...common,
    role: "img",
    className: "me-1 text-muted",
    children: _jsx("path", {
      fill: "none",
      stroke: "currentColor",
      d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    }),
  });
};
export const SkillStars = ({ name, rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const diff = rating - i;
    const type = diff >= 1 ? "full" : diff >= 0.5 ? "half" : "empty";
    return _jsx(Star, { type: type }, i);
  });
  return _jsx("div", {
    className: "d-flex align-items-center justify-content-between py-2",
    children: _jsx("div", {
      className: "d-flex",
      "aria-label": `${name} skill rating ${rating} out of 5`,
      title: `${rating}/5`,
      children: stars,
    }),
  });
};
