import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LandingContainer = lazy(() => import("../landingContainer"));
const NotFound = lazy(() => import("../notFound"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
