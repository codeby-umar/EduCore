import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Lesson from "./pages/Lesson";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Notfound from "./components/layout/Notfound";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path="/lesson"
          element={
            <Layout>
              <Lesson />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default App;
