import { useState } from "react";
import Navbar from "./components/Navbar";
import ChartsPage from "./components/ChartsPage";
import FilePage from "./components/FilePage";

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
      default:
        return <ChartsPage />;
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
