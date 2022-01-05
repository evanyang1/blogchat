import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
