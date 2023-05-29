import "./assets/styles/global.scss";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Tarosik from "./pages/Tarosik/Tarosik";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="gallery" element={<Gallery />} />
            <Route exact path="tarosik" element={<Tarosik/>} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
