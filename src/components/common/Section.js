import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Section({
  id,
  title,
  subtitle,
  className = "",
  visuallyHiddenTitle = false,
  children,
}) {
  return _jsxs("section", {
    id: id,
    className: `p-4 rounded-3 ${className}`.trim(),
    children: [
      title &&
        _jsxs("header", {
          className: "mb-3",
          children: [
            _jsx("h2", {
              className: visuallyHiddenTitle ? "visually-hidden" : "h3 m-0",
              children: title,
            }),
            subtitle && _jsx("p", { className: "text-muted m-0", children: subtitle }),
          ],
        }),
      children,
    ],
  });
}
