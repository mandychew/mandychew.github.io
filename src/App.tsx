import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Layout from "./components/Layout";
import routes from "tempo-routes";
import Articles from "./pages/articles";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/articles" element={<Articles />} /> */}
          </Route>
        </Routes>
        {/* {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)} */}
    </Suspense>
  );
}

export default App;
