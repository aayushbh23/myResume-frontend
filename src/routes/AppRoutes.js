import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";
export default function AppRoutes() {
  return _jsx(Routes, {
    children: _jsxs(Route, {
      element: _jsx(Layout, {}),
      children: [
        _jsx(Route, { path: "/", element: _jsx(Home, {}) }),
        _jsx(Route, { path: "/skills", element: _jsx(Skills, {}) }),
        _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }),
        _jsx(Route, { path: "/resume", element: _jsx(Resume, {}) }),
        _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }),
      ],
    }),
  });
}
