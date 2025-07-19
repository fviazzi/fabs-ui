
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from '@/pages/Home/Home';
import { About } from '@/pages/About/About';
import { Board } from '@/pages/Board/Board';

export const Router = () => (
  <BrowserRouter>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/board">Board</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);