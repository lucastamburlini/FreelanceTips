import { Link } from "react-router-dom";
import GoogleButton from "../components/buttons/GoogleButton";

const Login: React.FC = () => {

  return (
    <div>
      <div
        className="flex min-h-screen flex-col justify-center items-center px-6 lg:px-8 "
        style={{ marginTop: "-70px" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-2">
          <span className="relative flex justify-center ">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
            <span className="relative z-10 bg-white px-6 font-bold ">
              Sign in to your account
            </span>
          </span>
        </div>

        <GoogleButton />

        <div>
          <p className="text-sm text-gray-600 mt-8 p-2 bg-white">
            Need assistance?{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://api.whatsapp.com/send?phone=543442644674"
              className="text-blue-700"
            >
              Contact me
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
