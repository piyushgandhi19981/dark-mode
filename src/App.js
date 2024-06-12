import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import "./styles.css";
import { ThemeProvider } from "./theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
