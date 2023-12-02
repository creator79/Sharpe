import React from "react";
import Laptop from "../assets/react.svg";
import TextButton from "./TextButton";

const Home = () => {
  return (
    <div className="w-full bg-white px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-emerald-400">
          Sharpe AI
          </p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          Sharpe AI Assignment Task
          </h1>
          <p className="mt-2 text-black">
          MULTIPLY your DeFI YIELDS with ShARPE EARN
Harness top-tier DeFi yields with institutional-grade strategies and complete control over your digital assets.
          </p>
          <div className="self-center">
            <TextButton text="Get started" type="primary" />
          </div>
        </div>
      </div>

  

    </div>



  );
};

export default Home;