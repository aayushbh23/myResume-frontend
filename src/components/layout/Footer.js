import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import content from "@/data/content.json";
const data = content;
export default function Footer() {
  return _jsx("footer", {
    className: "py-3 border-top",
    children: _jsx("div", {
      className: "container text-center",
      children: _jsxs("small", {
        children: ["\u00A9 ", new Date().getFullYear(), " ", data.name, ". All rights reserved."],
      }),
    }),
  });
}
