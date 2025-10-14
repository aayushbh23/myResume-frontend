import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function Layout() {
  return _jsxs(_Fragment, {
    children: [
      _jsx(Navbar, {}),
      _jsx("main", { className: "container py-4", children: _jsx(Outlet, {}) }),
      _jsx(Footer, {}),
    ],
  });
}
