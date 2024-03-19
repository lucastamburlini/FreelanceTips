import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { Suspense } from "react";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const showFooter = () => {
    return ["/"].includes(location.pathname);
  };

  return (
    <div className="dot-background">
      <NavBar />
      <Suspense fallback={"Cargando..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {showFooter() && <Footer />}
    </div>
  );
}

export default App;
