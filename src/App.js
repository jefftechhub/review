import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages/components

import Home from "./Home";
import ErrorPage from './ErrorPage'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
