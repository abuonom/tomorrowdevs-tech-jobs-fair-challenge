import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Auth from "./components/auth/Auth";
import { ROUTS } from "./constants/constants";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTS.logIn} element={<Auth />} />
      <Route path={ROUTS.contacts} element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default App;
