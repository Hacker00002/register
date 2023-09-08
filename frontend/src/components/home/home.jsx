import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col gap-3 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to={"/signup"}
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl flex items-center gap-3  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
                <i class="fa-solid fa-user-plus"></i>
              </h1>
            </div>
          </Link>
          <Link
            to={"/signin"}
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl flex  items-center gap-3 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login account
                <i className="fa-solid fa-right-to-bracket"></i>
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
