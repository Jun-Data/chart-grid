function Navbar({ currentPage, onPageChange }) {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Test Project</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => onPageChange("charts")}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  currentPage === "charts"
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Charts
              </button>
              <button
                onClick={() => onPageChange("file")}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  currentPage === "file"
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                File
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <button
            onClick={() => onPageChange("charts")}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              currentPage === "charts"
                ? "bg-blue-50 border-blue-500 text-blue-700"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Charts
          </button>
          <button
            onClick={() => onPageChange("file")}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              currentPage === "file"
                ? "bg-blue-50 border-blue-500 text-blue-700"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            File
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
