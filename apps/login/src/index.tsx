
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "@fabs-ui/ds/index.css";
import { Button } from "@fabs-ui/ds/components/atoms/button/button";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Button variant="destructive" size="lg">Click Me</Button>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
