import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Suspense } from "react";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { useData } from "./context/userContext";

function App() {
  const location = useLocation();
  const { userSession } = useData();

  const showFooter = () => {
    return ["/"].includes(location.pathname);
  };

  const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
    element,
  }) => {
    if (userSession) {
      return <>{element}</>;
    } else {
      return <Navigate to="/login" replace />;
    }
  };

  return (
    <div className="dot-background">
      <NavBar />
      <Suspense fallback={"Cargando..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />
          <Route
            path="/contact"
            element={<ProtectedRoute element={<Contact />} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      {showFooter() && <Footer />}
    </div>
  );
}

export default App;
