import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// const Page404 = lazy(() => import("pages/page404.js"));
// const Home = lazy(() => import("pages/home.js"));
// const Utils = lazy(() => import("pages/utils.js"));

import Page404 from "pages/Page404";
import Home from "pages/Home";
import Utils from "pages/Utils";

const PageRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={""}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="utils" element={<Utils />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default PageRoutes;
