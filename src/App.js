import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import SearchResults from "./screens/SearchResults";
import Result from "./screens/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/SearchResults" element={<SearchResults />}></Route>
        <Route path="/Result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
