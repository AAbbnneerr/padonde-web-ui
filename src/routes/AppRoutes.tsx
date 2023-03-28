import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";

import Home from "pages/Home";
import Login from "pages/Login";

const AppRoutes = () => {
  const location = useLocation();

  /* const getPermissions = (tabId) => {
    return tabs.filter((t) => t.tabId === tabId).length > 0
  } */

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
