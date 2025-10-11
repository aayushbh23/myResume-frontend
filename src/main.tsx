import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/app/store";
import AppRoutes from "@/routes/AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
