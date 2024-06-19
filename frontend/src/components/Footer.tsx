import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <span className="text-3xl text-white font-extrabold tracking-tight mb-6 lg:mb-0">
          <Link to="/">Holidays.com</Link>
        </span>
        <span className="text-white font-bold tracking-tight flex gap-6 mb-6 lg:mb-0">
          <Link
            to="/privacy-policy"
            className="hover:text-gray-200 transition duration-300 ease-in-out cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-gray-200 transition duration-300 ease-in-out cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            to="https://www.linkedin.com/in/sushant-singh-negi-4382b4243/"
            target="_blank"
            className="hover:text-gray-200 transition duration-300 ease-in-out cursor-pointer"
          >
            About Me
          </Link>
        </span>
      </div>
      <div className="text-white font-bold tracking-tight flex justify-center text-sm mt-4 lg:mt-4">
        &copy; 2024 Sushant Singh Negi. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
