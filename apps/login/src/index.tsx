
import React from "react";
import ReactDOM from "react-dom/client";
import "@fabs-ui/ds/css";

import { Router } from "./core/router/Router";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
