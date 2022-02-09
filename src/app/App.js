import React from "react";

import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ScrollToTop from "./ScrollToTop.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
