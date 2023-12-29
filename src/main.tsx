import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css";
import 'nprogress/nprogress.css';

import { Routes, Route, Link } from 'react-router-dom';
import SuspenseRouter from "./SuspenseRouter";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <SuspenseRouter window={window}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </SuspenseRouter>
);
