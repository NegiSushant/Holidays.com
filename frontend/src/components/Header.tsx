import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-orange-500 py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-extrabold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </span>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-4 py-2 font-bold rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-4 py-2 font-bold rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-orange-500 px-4 py-2 font-bold rounded-md hover:bg-gray-100 hover:text-orange-600 transition duration-300 ease-in-out"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
