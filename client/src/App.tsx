import "./App.css";
import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
