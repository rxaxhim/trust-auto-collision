import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>

        <div className="flex items-center justify-center gap-4">
          {/* Uses Router basename, so this goes to /trust-auto-collision/ in production */}
          <Link
            to="/"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring"
          >
            Return to Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
