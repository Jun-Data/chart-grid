import { useState } from "react";
import Navbar from "./components/Navbar";
import ChartsPage from "./pages/ChartsPage";
import FilePage from "./pages/FilePage";
import ThreeDPage from "./pages/ThreeDPage";

function App() {
  const [currentPage, setCurrentPage] = useState("charts");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "charts":
        return <ChartsPage />;
      case "file":
        return <FilePage />;
      case "3D":
        return <ThreeDPage />;
      default:
        return <ThreeDPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
