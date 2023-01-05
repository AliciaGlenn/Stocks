import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Stock from "./pages/stock";
import Stocks from "./pages/dashboard";
import About from "./pages/about";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Stocks />} />
      <Route path="about" element={<About />} />
      <Route path="stock" element={<Stock />} />
    </Route>
  )
);

export default router;
