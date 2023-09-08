import React from "react";
import Confetti from "react-confetti";

const Success = () => {
  return (
    <div>
      <Confetti width={1520} height={850} />
      <div>
        <div className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col gap-3 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center justify-center">
              <h1 className="text-8xl text-green-600 bg-white p-5 rounded-full w-full h-full">
                <i class="fa-solid fa-check"></i>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
