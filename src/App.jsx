import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChartsPage from "./pages/ChartsPage";
import FilePage from "./pages/FilePage";
import ThreeDPage from "./pages/ThreeDPage";
import TestIndexPage from "./pages/TestIndexPage";
import TestPublishPage from "./pages/TestPublishPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<ChartsPage />} />
          <Route path="/file" element={<FilePage />} />
          <Route path="/3d" element={<ThreeDPage />} />
          <Route path="/test" element={<TestIndexPage />} />
          <Route path="/test2" element={<TestPublishPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
