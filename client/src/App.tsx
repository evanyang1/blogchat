import "./App.css";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
