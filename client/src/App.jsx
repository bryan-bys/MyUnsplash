import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nature from "./pages/Nature";
import Abstract from "./pages/Abstract";
import Art from "./pages/Art";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/art" element={<Art />} />
          <Route path="/results/:query" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
