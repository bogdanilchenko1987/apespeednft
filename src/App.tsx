import { Route, Routes } from "react-router-dom";

import Privacy from "./pages/Privacy";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";

import Terms from "./pages/Terms";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </>
  );
}
