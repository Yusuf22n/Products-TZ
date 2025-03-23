import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Catalog = lazy(() => import("../pages/Catalog"));
const Cart = lazy(() => import("../pages/Cart"));

function App() {
  return (
    <Router basename="/Products-TZ">
      <Suspense>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<p>Нету такой страницы</p>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
