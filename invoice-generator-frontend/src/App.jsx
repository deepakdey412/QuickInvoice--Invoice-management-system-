import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from "./components/MenuBar.jsx";
import { Toaster } from "react-hot-toast";

// 📌 Import your pages (make sure paths are correct)
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainPage from "./pages/MainPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Toaster />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<MainPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
