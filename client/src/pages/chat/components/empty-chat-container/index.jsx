import { animationDefaultOption } from "@/lib/utils";
import React from "react";
import Lottie from "react-lottie";

const EmptyChatContainer = () => {
  return (
    <div className="w-full md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden transition-all  duration-1000">
      <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOption}
      />
      <div className="text-opactity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-300 text-center ">
        <h3 className="poppins-medium">
          Hi <span className="text-purple-500">!</span> Welcome to{" "}
          <span className="text-purple-500">
            {" "}
            <a href="https://avinashsuthar-portfolio.netlify.app/" >
              Avinash
            </a>{" "}
          </span>{" "}
          Chat App.
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
