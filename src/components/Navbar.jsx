import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkClassName = ({ isActive }) =>
    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
      isActive
        ? "border-blue-500 text-gray-900"
        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Test Project</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/" className={getLinkClassName}>
                Charts
              </NavLink>
              <NavLink to="/file" className={getLinkClassName}>
                File
              </NavLink>
              <NavLink to="/3d" className={getLinkClassName}>
                3D
              </NavLink>
              <NavLink to="/test" className={getLinkClassName}>
                Publish
              </NavLink>
              <NavLink to="/test2" className={getLinkClassName}>
                Publish2
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
