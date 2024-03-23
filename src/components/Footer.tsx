import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="h-16 fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex gap-10 h-16 items-center justify-between">
          <div className="flex items-center text-sm bg-white p-1">
            <p>
              Made by Lucas Tamburlini in collaboration with{" "}
              <Link
                to={"https://www.linkedin.com/company/hedysoftware/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 transition-colors duration-200 ease-in-out hover:text-green-300"
              >
                <span>Hedy Software</span>
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-4 text-blue-700">
            <ul className="flex gap-4 bg-white">
              <li>
                <Link
                  to={"https://www.linkedin.com/in/lucasgabrieltamburlini/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors duration-200 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={"https://lucastamburlini.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors duration-200 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20.942 13.02a9 9 0 1 0-9.47 7.964M3.6 9h16.8M3.6 15h9.9" />
                      <path d="M11.5 3a17 17 0 0 0 0 18m1-18c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2l-2-2m-3 0l-2 2l2 2" />
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
